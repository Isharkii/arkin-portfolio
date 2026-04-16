import { NextResponse } from "next/server";

export interface GammaTheme {
  id: string;
  name: string;
  type: "standard" | "custom";
  colorKeywords: string[];
  toneKeywords: string[];
}

export async function GET() {
  const apiKey = process.env.GAMMA_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GAMMA_API_KEY is not configured." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch("https://public-api.gamma.app/v1.0/themes", {
      headers: { "X-API-KEY": apiKey },
      next: { revalidate: 3600 }, // cache for 1 hour — themes rarely change
    });

    const raw = await res.text();

    if (!res.ok) {
      const msg = raw.length > 300 ? raw.slice(0, 300) + "…" : raw;
      return NextResponse.json(
        { error: `Gamma themes error (${res.status}): ${msg}` },
        { status: res.status },
      );
    }

    const data = JSON.parse(raw) as { data?: GammaTheme[]; hasMore?: boolean };
    return NextResponse.json({ themes: data.data ?? [] });
  } catch (err) {
    console.error("[gamma/themes]", err);
    return NextResponse.json(
      { error: "Could not fetch themes from Gamma." },
      { status: 502 },
    );
  }
}

import Image, { type StaticImageData } from "next/image";

export type ProjectCardData = {
  id: string;
  title: string;
  eyebrow: string;
  image: StaticImageData;
  alt: string;
};

type ProjectCardProps = {
  project: ProjectCardData;
  /** Extra Tailwind classes (e.g. centering offsets from the parent) */
  className?: string;
  /** True for the hero lead card and the arc center card — renders larger */
  isCenter?: boolean;
  priority?: boolean;
};

export function ProjectCard({
  project,
  className = "",
  isCenter = false,
  priority = false,
}: ProjectCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-[20px]
        border border-black/10
        bg-white/84 backdrop-blur-xl
        shadow-[0_22px_60px_rgba(18,18,18,0.18)]
        transition-shadow duration-300
        hover:shadow-[0_36px_80px_rgba(18,18,18,0.30)]
        ${isCenter ? "w-[180px] sm:w-[200px] md:w-[220px]" : "w-[148px] sm:w-[164px] md:w-[180px]"}
        ${className}
      `}
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 220px, (max-width: 768px) 200px, 220px"
          className="object-cover"
        />

        {/* Gradient overlay for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">
            {project.eyebrow}
          </p>
          <h3 className="font-display mt-2 text-[1.6rem] leading-[0.88] tracking-[-0.04em]">
            {project.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

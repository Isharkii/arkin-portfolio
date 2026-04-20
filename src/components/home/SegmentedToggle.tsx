"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export type ToggleTab = "Work" | "Skills";

type SegmentedToggleProps = {
  activeTab: ToggleTab;
  onChange: (tab: ToggleTab) => void;
};

const TABS: ToggleTab[] = ["Work", "Skills"];

const TAB_ROUTES: Record<ToggleTab, string> = {
  Work:   "/work",
  Skills: "/skills",
};

export function SegmentedToggle({ activeTab, onChange }: SegmentedToggleProps) {
  const router = useRouter();

  function handleClick(tab: ToggleTab) {
    onChange(tab);
    router.push(TAB_ROUTES[tab]);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex cursor-pointer items-center gap-[3px] rounded-full bg-[#EDEDED] p-[5px]"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => handleClick(tab)}
            className="relative min-h-[34px] min-w-[64px] rounded-full px-4 py-[10px] text-[13px] font-medium leading-none"
          >
            {isActive && (
              <motion.span
                layoutId="segment-pill"
                className="absolute inset-0 rounded-full bg-black shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
            )}
            <span className={`relative z-10 select-none font-ui transition-colors duration-200 ${isActive ? "text-white" : "text-black/60"}`}>
              {tab}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type ProjectCardData = {
  id: string;
  title: string;
  eyebrow: string;
  metric?: string;
  tech?: string;
  image?: string | StaticImageData;
  gradient?: string;
  alt: string;
};

type ProjectCardProps = {
  project: ProjectCardData;
  className?: string;
  isCenter?: boolean;
  priority?: boolean;
};

export function ProjectCard({
  project,
  className = "",
  isCenter = false,
  priority = false,
}: ProjectCardProps) {
  const displayTitle   = project.title;
  const displayEyebrow = project.eyebrow;
  const displayMetric  = project.metric;

  return (
    <article
      className={`
        relative overflow-hidden rounded-[20px]
        border border-black/10
        bg-white/84 backdrop-blur-xl
        shadow-[0_22px_60px_rgba(18,18,18,0.18)]
        transition-shadow duration-300
        hover:shadow-[0_36px_80px_rgba(18,18,18,0.30)]
        ${isCenter
          ? "w-[clamp(9rem,14vw,15rem)]"
          : "w-[clamp(7.5rem,11.5vw,12.5rem)]"}
        ${className}
      `}
    >
      <div className="relative aspect-[4/5] w-full">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 220px, (max-width: 768px) 200px, 220px"
            className="object-cover object-top"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                project.gradient ??
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            }}
          />
        )}

        {/* Gradient overlay for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/24 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <AnimatePresence mode="wait">
            <motion.p
              key={displayEyebrow}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="font-ui text-[9px] uppercase tracking-[0.24em] text-white/70 sm:text-[10px]"
            >
              {displayEyebrow}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h3
              key={displayTitle}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, delay: 0.04 }}
              className="font-display mt-1 text-[1.2rem] leading-[0.88] tracking-[-0.04em] sm:text-[1.4rem] md:text-[1.6rem]"
            >
              {displayTitle}
            </motion.h3>
          </AnimatePresence>

          {displayMetric && (
            <AnimatePresence mode="wait">
              <motion.p
                key={displayMetric}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, delay: 0.08 }}
                className="font-ui mt-[5px] text-[8px] text-white/58 sm:text-[9px]"
              >
                {displayMetric}
              </motion.p>
            </AnimatePresence>
          )}
        </div>
      </div>
    </article>
  );
}

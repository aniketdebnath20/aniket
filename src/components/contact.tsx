import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const RevealText = ({
  children,
  className,
  progress,
}: {
  children: string;
  className?: string;
  progress: any;
}) => {
  const clipPath = useTransform(
    progress,
    [0.15, 0.85],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  return (
    <div className={`relative ${className}`}>
      <span className="text-muted-foreground/20">{children}</span>
      <motion.span
        className="absolute inset-0 text-foreground"
        style={{ clipPath }}
      >
        {children}
      </motion.span>
    </div>
  );
};

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[220vh] md:h-[300vh]">
      <motion.section
        id="contact"
        className="sticky top-0 h-screen flex items-center px-5 sm:px-10 lg:px-24 bg-background"
      >
        <div className="relative max-w-7xl mx-auto w-full">
          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:block">
            <div className="mb-12">
              <RevealText
                progress={scrollYProgress}
                className="font-display text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none"
              >
                HAVE A PROJECT?
              </RevealText>
            </div>

            <div className="flex items-center justify-between">
              <motion.a
                href="mailto:hello@johndoe.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[hsl(65,100%,50%)] text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[hsl(65,100%,45%)] transition-colors group"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <p className="text-muted-foreground text-sm max-w-[220px] text-center uppercase tracking-wide leading-relaxed">
                Whether you need intuitive UI, UX design, or robust development,
                I'm here to help.
              </p>

              <RevealText
                progress={scrollYProgress}
                className="font-display text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none"
              >
                LET&apos;S TALK
              </RevealText>
            </div>
          </div>

          {/* ================= MOBILE + TABLET ================= */}
          <div className="lg:hidden flex flex-col gap-12">
            <RevealText
              progress={scrollYProgress}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-none text-center"
            >
              HAVE A PROJECT?
            </RevealText>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="mailto:hello@johndoe.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[hsl(65,100%,50%)] text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[hsl(65,100%,45%)] transition-colors group"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <p className="text-muted-foreground text-xs max-w-[260px] text-center uppercase tracking-wide leading-relaxed">
                UI, UX, or full-stack development — I&apos;m ready to help.
              </p>
            </div>

            <RevealText
              progress={scrollYProgress}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-none text-center"
            >
              LET&apos;S TALK
            </RevealText>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

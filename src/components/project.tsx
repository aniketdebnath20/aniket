import { AnimatedSection, AnimatedText } from "./animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

/* ----------------------------- */
/* Projects Data */
/* ----------------------------- */
const projects = [
  {
    id: "01",
    type: "B2B SaaS Platform",
    title: "AI Support",
    subtitle: "Platform",
    description:
      "A B2B AI-powered SaaS platform designed to automate customer support workflows with real-time conversations, AI voice assistance, and an enterprise-grade admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tech: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Convex",
      "AWS",
      "Turborepo",
      "Vapi",
    ],
    githubUrl: "#",
    live: true,
  },
  {
    id: "02",
    type: "Realtime Application",
    title: "Video Calling",
    subtitle: "Chat App",
    description:
      "A real-time chat and video calling application with secure authentication, one-to-one messaging, video calls, and presence indicators using Stream.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tech: [
      "React",
      "MongoDB",
      "Node.js",
      "Stream",
      "TanStack Query",
      "Tailwind CSS",
      "Docker",
    ],
    githubUrl: "https://github.com/aniketdebnath20/stream",
    live: true,
  },
  {
    id: "03",
    type: "AI Application",
    title: "AI PDF Reader",
    subtitle: "Summarizer",
    description:
      "An AI-powered PDF reader that extracts, analyzes, and summarizes documents using Gemini AI and LangChain with an intuitive Q&A interface.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Gemini AI", "LangChain", "Firebase"],
    githubUrl: "https://github.com/aniketdebnath20/PDF_Reader",
    live: true,
  },
  {
    id: "04",
    type: "Web Application",
    title: "URL Shortener",
    subtitle: "with Analytics",
    description:
      "A URL shortening platform with built-in analytics to track clicks, traffic sources, and performance with real-time charts and dashboards.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    tech: ["React", "Supabase", "Recharts", "Tailwind CSS"],
    githubUrl: "https://github.com/aniketdebnath20/url_shoter",
    live: true,
  },
];

/* ----------------------------- */
/* Component */
/* ----------------------------- */
export const FeaturedProject = () => {
  const defineRef = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: defineRef,
    offset: ["start 0.9", "start 0.5"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section
      id="featured-project"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ---------------- Header ---------------- */}
        <AnimatedText className="mb-6">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Featured Work
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <div className="mb-28">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-normal md:whitespace-nowrap">
              <span className="text-foreground">
                The Projects That  _ {" "}
              </span>

              {/* DEFINE ME — isolated animation */}
              <span
                ref={defineRef}
                className="relative inline-block"
              >
                {/* Base muted text */}
                <span className="text-muted-foreground/40">
                  Define Me
                </span>

                {/* Animated fill */}
                <motion.span
                  className="absolute inset-0 text-primary overflow-hidden"
                  style={{
                    clipPath: useTransform(
                      clipProgress,
                      (v) => `inset(${v}% 0 0 0)`
                    ),
                  }}
                >
                  Define Me
                </motion.span>
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* ---------------- Projects ---------------- */}
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={0.2 + index * 0.1}>
            <motion.div
              className="relative group mb-28"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 lg:p-16 border border-border/50 rounded-[2.5rem] relative overflow-hidden">
                <div className="lg:col-span-2">
                  <span className="font-display text-8xl md:text-9xl font-black text-foreground/5">
                    {project.id}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <motion.div
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
                    {project.type}
                  </span>

                  <h3 className="font-display text-3xl lg:text-4xl font-black mb-6">
                    {project.title}
                    <span className="block text-muted-foreground/40">
                      {project.subtitle}
                    </span>
                  </h3>

                  <p className="text-muted-foreground mb-8 max-w-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold text-sm w-fit"
                  >
                    Source Code
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

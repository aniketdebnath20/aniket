import { AnimatedSection, AnimatedText } from "./animatedsection";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "B2B AI SaaS Support Platform",
    description:
      "A B2B AI-powered SaaS platform designed to automate customer support workflows. Features include real-time conversations, scalable cloud infrastructure, AI voice assistance, and a modern admin dashboard built for enterprise use.",
    tags: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Convex",
      "AWS",
      "Turborepo",
      "Vapi",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "",
  },
  {
    title: "Video Calling Realtime Chat App",
    description:
      "A real-time chat and video calling application with secure authentication, one-to-one messaging, video calls, and presence indicators. Built with Stream for messaging, optimized state management, and a responsive UI.",
    tags: [
      "React",
      "MongoDB",
      "Node.js",
      "Stream",
      "TanStack Query",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "https://github.com/aniketdebnath20/stream",
  },
  {
    title: "AI PDF Reader and Summarizer",
    description:
      "An AI-powered PDF reader that extracts, analyzes, and summarizes documents using Gemini AI and LangChain. Users can upload PDFs, ask questions, and receive concise summaries through an intuitive interface.",
    tags: ["React.js", "Tailwind CSS", "Gemini AI", "LangChain", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "https://github.com/aniketdebnath20/PDF_Reader",
  },
  {
    title: "URL Shortener with Analytics",
    description:
      "A URL shortening platform with built-in analytics to track clicks, traffic sources, and performance. Includes authentication, dashboard visualizations, and real-time data charts for link insights.",
    tags: ["React", "Supabase", "Recharts", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "https://github.com/aniketdebnath20/url_shoter",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <AnimatedText>
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Featured Work
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1} className="mt-8 mb-20">
          <h2 className="font-display text-display-lg font-bold text-foreground">
            Projects That
            <span className="text-gradient"> Define </span>
            Me
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border card-elevated"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

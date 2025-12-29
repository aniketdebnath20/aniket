import { AnimatedSection, AnimatedText } from "./animatedsection";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Studio",
    description: "AI-powered content generation platform with custom models for marketing and creative writing.",
    tags: ["React", "OpenAI", "Node.js"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-Time Analytics",
    description: "Dashboard for monitoring business metrics with live data visualization and custom reports.",
    tags: ["TypeScript", "D3.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Developer Collaboration Tool",
    description: "Code review and collaboration platform with real-time editing and version control integration.",
    tags: ["React", "GraphQL", "Docker"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
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

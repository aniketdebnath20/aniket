import { AnimatedSection, AnimatedText } from "./animatedsection";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  logo: string;
  description: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Building interactive UIs with component-based architecture", category: "Frontend" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "Full-stack React framework with SSR & SSG", category: "Frontend" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "Type-safe JavaScript for scalable applications", category: "Frontend" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", description: "Utility-first CSS for rapid UI development", category: "Frontend" },
  { name: "Framer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg", description: "Production-ready animations for React", category: "Frontend" },
  // Backend
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "Server-side JavaScript runtime environment", category: "Backend" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "Minimal web framework for Node.js APIs", category: "Backend" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Advanced open-source relational database", category: "Backend" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "NoSQL database for flexible data models", category: "Backend" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", description: "Query language for flexible API data fetching", category: "Backend" },
  // DevOps
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization for consistent deployments", category: "DevOps" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", description: "Cloud infrastructure and services", category: "DevOps" },
  { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", description: "Seamless frontend deployment platform", category: "DevOps" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Version control and collaboration", category: "DevOps" },
  { name: "K8s", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "Container orchestration at scale", category: "DevOps" },
  // Tools
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Distributed version control system", category: "Tools" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "Collaborative UI/UX design tool", category: "Tools" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", description: "Powerful code editor with extensions", category: "Tools" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", description: "API development and testing platform", category: "Tools" },
  { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", description: "JavaScript testing framework", category: "Tools" },
];

const getFloatAnimation = (index: number) => {
  const patterns = [
    { y: [0, -5, 0], x: [0, 2, 0] },
    { y: [0, -4, 0], x: [0, -3, 0] },
    { y: [0, -6, 0], x: [0, 1, 0] },
    { y: [0, -3, 0], x: [0, -2, 0] },
    { y: [0, -5, 0], x: [0, 3, 0] },
  ];
  const pattern = patterns[index % patterns.length];
  
  return {
    ...pattern,
    transition: {
      duration: 2 + (index % 4) * 0.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: index * 0.1,
    },
  };
};

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-400",
  Backend: "from-green-500 to-emerald-400",
  DevOps: "from-purple-500 to-pink-400",
  Tools: "from-orange-500 to-yellow-400",
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimatedText>
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Skills & Expertise
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1} className="mt-6 mb-12">
          <h2 className="font-display text-display-md font-bold text-foreground">
            Technologies I
            <span className="text-gradient"> Master</span>
          </h2>
        </AnimatedSection>

        <TooltipProvider delayDuration={100}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.05 + index * 0.02,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    animate={getFloatAnimation(index)}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryColors[skill.category]} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300`} />
                      
                      {/* Circle with logo */}
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 group-hover:border-primary/40 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-7 h-7 md:w-8 md:h-8 object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  className="max-w-[180px] text-center bg-card/95 backdrop-blur-sm border border-border shadow-xl"
                >
                  <p className="font-semibold text-foreground text-sm">{skill.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{skill.description}</p>
                  <span className={`inline-block mt-2 text-[9px] px-2 py-0.5 rounded-full bg-gradient-to-r ${categoryColors[skill.category]} text-white font-medium`}>
                    {skill.category}
                  </span>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

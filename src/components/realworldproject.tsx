import { AnimatedSection, AnimatedText } from "./animatedsection";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const techStack = ["Next.js", "Tailwind CSS", "MongoDB", "Excel Sheet"];

export const RealWorldProject = () => {
  return (
    <section id="real-world" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          
          {/* Left - Content */}
          <div className="lg:pr-16 xl:pr-24 order-2 lg:order-1">
            <AnimatedText>
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                / 01
              </span>
            </AnimatedText>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[0.9] mb-8">
                Computer
                <br />
                Institution
                <br />
                <span className="text-muted-foreground/40">Website</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md">
                A comprehensive educational platform designed to streamline learning experiences and institutional operations.
              </p>
            </AnimatedSection>

            {/* Tech Stack - Vertical List */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-12">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-border text-foreground/70 text-xs font-medium tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.4}>
              <motion.a
                href="https://careerpointcomputerinstitution.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                className="inline-flex items-center gap-4 group"
              >
                <span className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                </span>
                <span className="font-display text-lg font-bold text-foreground">
                  View Live Site
                </span>
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Right - Image */}
          <div className="relative order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ rotate: 0 }}
                initial={{ rotate: 2 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=1000&fit=crop"
                    alt="Computer Institution Website"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Live Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold uppercase tracking-wider border border-border">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                </div>

                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-border/30 rounded-[2rem] -z-10" />
                <div className="absolute -inset-8 border border-border/10 rounded-[2.5rem] -z-20 hidden md:block" />
              </motion.div>
            </AnimatedSection>
            
            {/* Floating accent */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

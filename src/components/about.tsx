import { AnimatedSection, AnimatedText, AnimatedLine } from "./animatedsection";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <AnimatedText>
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            About Me
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1} className="mt-8">
          <h2 className="font-display text-display-lg font-bold text-foreground text-balance">
            Eager to build
            <span className="text-gradient"> meaningful </span>
            digital experiences
          </h2>
        </AnimatedSection>

        <AnimatedLine className="my-12" delay={0.2} />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <AnimatedSection delay={0.3}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate fresher developer ready to dive into the world of web development. 
              I've been honing my skills through personal projects and am excited to apply my 
              knowledge to real-world challenges.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm constantly learning new technologies, building side projects, and staying 
              updated with the latest trends. I'm eager to collaborate, grow, and make an 
              impact in the tech industry.
            </p>
          </AnimatedSection>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "10+", label: "Personal Projects" },
            { number: "Fresh", label: "Graduate" },
            { number: "24/7", label: "Learning Mode" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <AnimatedSection key={stat.label} delay={0.2 + index * 0.1}>
              <div className="text-center md:text-left">
                <div className="font-display text-display-sm font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div> */}
      </div>
    </section>
  );
};

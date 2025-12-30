import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {

  return (
    <footer className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden border-t border-gray-200">
      {/* Soft decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-10"
        >
          {/* Logo */}
          <span className="font-display text-4xl md:text-6xl font-bold text-gray-900">
            AD<span className="text-primary">.</span>
          </span>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aniketdebnath20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/aniket-debnath"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

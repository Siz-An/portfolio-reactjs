import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import profileImage from '@/assets/sizan.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Siz-An", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sijan-mahato-a10349284/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/sizan.mahato/", label: "Facebook" },
    { icon: Mail, href: "mailto:sizanmahato@gmail.com", label: "Email" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-30 animate-morph"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse-glow"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.3}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          
          {/* Profile Image - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="hidden lg:flex lg:w-1/3 justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-primary rounded-full opacity-75 blur-xl animate-pulse-glow"
              />
              <motion.img
                src={profileImage}
                alt="Sijan Mahato - Full Stack Developer"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/50 shadow-2xl animate-float-slow"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5, type: "spring" }
                }}
                loading="eager"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-morph"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="mb-6"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm text-muted-foreground mb-6 animate-bounce-in"
              >
                👋 Hello, I'm
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
              >
                <motion.span 
                  className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift"
                  style={{ backgroundSize: '200% 200%' }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Sijan Mahato
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="overflow-hidden"
              >
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground font-light animate-typing"
                  style={{ borderRight: '2px solid hsl(var(--primary))' }}
                >
                  Full Stack Developer
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-right"
            >
              Aspiring Laravel Developer & Full Stack Intern and Flutter Developer eager to contribute to 
              innovative projects and collaborate with a dynamic team. With a solid foundation in web 
              development and a passion for creating efficient solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, type: "spring" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl animate-glow-pulse"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    View My Work
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3 text-lg transition-all duration-300 animate-fade-in-up"
                  asChild
                >
                  <a
                  href="/Backend-Sijan.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <motion.div
                    animate={{ rotate: [0, 180, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                  </motion.div>
                  Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              className="flex items-center justify-center lg:justify-start space-x-6 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.4 + index * 0.1,
                    type: "spring",
                    bounce: 0.6
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    y: -5,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-card/50 backdrop-blur-sm border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group animate-bounce-in"
                  aria-label={social.label}
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-float"
                aria-label="Scroll to about section"
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <ArrowDown className="h-6 w-6 mx-auto" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
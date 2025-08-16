import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Filter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Import project images
import ecommerceImg from '@/assets/ecommerce-project.jpg';
import portfolioImg from '@/assets/portfolio-project.jpg';
import inventoryImg from '@/assets/inventory-project.jpg';
import chatAppImg from '@/assets/chat-app-project.jpg';
import taskManagerImg from '@/assets/task-manager-project.jpg';
import schoolSystemImg from '@/assets/school-system-project.jpg';
import weatherAppImg from '@/assets/weather-app-project.jpg';
import blogPlatformImg from '@/assets/blog-platform-project.jpg';
import fitnessAppImg from '@/assets/fitness-app-project.jpg';
import restaurantImg from '@/assets/restaurant-project.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Web App",
      summary: "A full-featured Laravel + React based online store with payment integration.",
      tech: ["Laravel", "React", "MySQL", "Stripe API"],
      imageAlt: "E-Commerce dashboard preview",
      image: ecommerceImg,
      links: { live: "#", repo: "#" },
      category: "Full Stack"
    },
    {
      title: "Portfolio Website",
      summary: "Personal branding site with dark mode and custom animations.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      imageAlt: "Portfolio homepage preview",
      image: portfolioImg,
      links: { live: "#", repo: "#" },
      category: "Frontend"
    },
    {
      title: "Inventory Management System",
      summary: "A Laravel application for managing products, stock, and suppliers.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      imageAlt: "Inventory dashboard preview",
      image: inventoryImg,
      links: { live: "#", repo: "#" },
      category: "Backend"
    },
    {
      title: "Flutter Chat App",
      summary: "A real-time chat application using Flutter and Firebase.",
      tech: ["Flutter", "Firebase"],
      imageAlt: "Chat app UI preview",
      image: chatAppImg,
      links: { live: "#", repo: "#" },
      category: "Mobile"
    },
    {
      title: "Task Manager",
      summary: "Task tracking web app with drag-and-drop interface.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      imageAlt: "Task board preview",
      image: taskManagerImg,
      links: { live: "#", repo: "#" },
      category: "Frontend"
    },
    {
      title: "School Management System",
      summary: "Manages students, teachers, and schedules.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      imageAlt: "School system dashboard preview",
      image: schoolSystemImg,
      links: { live: "#", repo: "#" },
      category: "Full Stack"
    },
    {
      title: "Weather App",
      summary: "Displays weather forecasts with location search.",
      tech: ["React", "Tailwind CSS", "OpenWeather API"],
      imageAlt: "Weather forecast preview",
      image: weatherAppImg,
      links: { live: "#", repo: "#" },
      category: "Frontend"
    },
    {
      title: "Blog Platform",
      summary: "A blogging CMS built with Laravel and Tailwind.",
      tech: ["Laravel", "Tailwind CSS", "MySQL"],
      imageAlt: "Blog listing preview",
      image: blogPlatformImg,
      links: { live: "#", repo: "#" },
      category: "Full Stack"
    },
    {
      title: "Fitness Tracker App",
      summary: "Track workouts, diet, and progress in one place.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      imageAlt: "Fitness dashboard preview",
      image: fitnessAppImg,
      links: { live: "#", repo: "#" },
      category: "Frontend"
    },
    {
      title: "Restaurant Ordering System",
      summary: "Online ordering and table booking platform.",
      tech: ["Laravel", "React", "MySQL"],
      imageAlt: "Restaurant app UI preview",
      image: restaurantImg,
      links: { live: "#", repo: "#" },
      category: "Full Stack"
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Floating particles for background
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
  }));

  return (
    <section id="projects" className="py-20 bg-card/20 relative overflow-hidden">
      {/* Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/10 rounded-full blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, 75, -75, 0],
            scale: [1, 2, 0.5, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
          >
            My{" "}
            <motion.span 
              className="bg-gradient-primary bg-clip-text text-transparent relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Projects
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-8"
              >
                <Sparkles className="h-6 w-6 text-primary/60" />
              </motion.div>
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here are some of the projects I've worked on, showcasing my skills in various technologies
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12 relative"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -left-8 top-1/2 transform -translate-y-1/2"
          >
            <Filter className="h-5 w-5 text-primary/40" />
          </motion.div>
          
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 relative overflow-hidden ${
                  filter === category 
                    ? "bg-gradient-primary text-primary-foreground shadow-lg animate-glow-pulse" 
                    : "hover:border-primary/50 hover:bg-primary/10"
                }`}
              >
                {filter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-primary"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${index}`}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 group relative"
              >
                {/* Animated background glow */}
                <motion.div
                  animate={{
                    background: [
                      "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.1), transparent 50%)",
                      "radial-gradient(circle at 80% 80%, hsl(var(--secondary) / 0.1), transparent 50%)",
                      "radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.1), transparent 50%)",
                      "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1), transparent 50%)"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    loading="lazy"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating tech badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute top-4 right-4"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="bg-primary/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary border border-primary/30"
                    >
                      {project.tech[0]}
                    </motion.div>
                  </motion.div>
                </div>

                <div className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300"
                    animate={{ 
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-4 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.summary}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.1 + techIndex * 0.05,
                          type: "spring",
                          bounce: 0.4
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:border-primary/50 hover:bg-primary/10 relative overflow-hidden group/btn"
                          asChild
                        >
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                            </motion.div>
                            <span>Live</span>
                            <motion.div
                              initial={{ x: -100 }}
                              whileHover={{ x: 100 }}
                              transition={{ duration: 0.5 }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                            />
                          </a>
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:border-primary/50 hover:bg-primary/10 relative overflow-hidden"
                          asChild
                        >
                          <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Github className="h-4 w-4 mr-1" />
                            </motion.div>
                            <span>Code</span>
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3 text-lg transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                animate={{ x: [-100, 200] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12"
              />
              <span className="relative z-10">View All Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
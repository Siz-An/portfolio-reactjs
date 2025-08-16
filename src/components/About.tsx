import { motion } from 'framer-motion';
import { MapPin, Code, Users, Clock, Star, Zap, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+", color: "text-cyan-400" },
    { icon: Users, label: "Happy Clients", value: "5+", color: "text-purple-400" },
    { icon: Clock, label: "Years Experience", value: "2+", color: "text-green-400" }
  ];

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <section id="about" className="py-20 bg-card/20 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute bg-gradient-primary rounded-full opacity-5"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.5, 0.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
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
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
          >
            About{" "}
            <motion.span 
              className="bg-gradient-primary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {/* Decorative floating icons */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 text-primary/20"
            >
              <Star className="h-12 w-12" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, 10, 0],
                rotate: [0, -15, 15, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -left-8 text-secondary/20"
            >
              <Zap className="h-8 w-8" />
            </motion.div>

            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{ color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Passionate Full Stack Developer
              </motion.span>
            </motion.h3>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm an aspiring Laravel Developer & Full Stack Intern with a passion for creating 
              innovative web solutions. My journey in development has been driven by curiosity 
              and a desire to build applications that make a real difference.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              With expertise in both frontend and backend technologies, I enjoy the complete 
              process of bringing ideas to life - from initial concept and design to deployment 
              and maintenance. I'm always eager to learn new technologies and collaborate with 
              dynamic teams on exciting projects.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-2 text-muted-foreground"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="text-lg">Tokha, Kathmandu, Nepal</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.h4 
                className="text-xl font-semibold mb-4 text-foreground flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart className="mr-2 h-5 w-5 text-red-400" />
                What I Do
              </motion.h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Full Stack Web Development",
                  "Laravel Backend Development", 
                  "React Frontend Development",
                  "Flutter Mobile Development",
                  "Database Design & Management",
                  "API Development & Integration"
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      bounce: 0.4
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    bounce: 0.5
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5"
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, hsl(var(--primary)), transparent)",
                        "linear-gradient(135deg, transparent, hsl(var(--secondary)))",
                        "linear-gradient(225deg, hsl(var(--accent)), transparent)",
                        "linear-gradient(315deg, transparent, hsl(var(--primary)))"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="flex items-center space-x-4 relative z-10">
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                      }}
                    >
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-3xl font-bold text-foreground"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: [
                            "hsl(var(--foreground))", 
                            "hsl(var(--primary))", 
                            "hsl(var(--foreground))"
                          ]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.7
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <motion.div 
                        className="text-muted-foreground"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {stat.label}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-card p-8 rounded-2xl border border-border relative overflow-hidden group"
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(0deg, hsl(var(--primary)/0.2), transparent, transparent, hsl(var(--primary)/0.2))",
                    "linear-gradient(90deg, hsl(var(--primary)/0.2), transparent, transparent, hsl(var(--primary)/0.2))",
                    "linear-gradient(180deg, hsl(var(--primary)/0.2), transparent, transparent, hsl(var(--primary)/0.2))",
                    "linear-gradient(270deg, hsl(var(--primary)/0.2), transparent, transparent, hsl(var(--primary)/0.2))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.h4 
                className="text-xl font-semibold mb-4 text-foreground relative z-10"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                My Mission
              </motion.h4>
              <motion.p 
                className="text-muted-foreground leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                To create innovative, user-friendly applications that solve real-world problems 
                while continuously learning and growing as a developer. I believe in the power 
                of clean code, thoughtful design, and collaborative teamwork.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
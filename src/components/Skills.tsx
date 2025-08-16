import { motion } from 'framer-motion';
import { Sparkles, Zap, Code2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code2,
      skills: [
        { name: "PHP", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Laravel", level: 85, color: "from-red-500 to-red-600" },
        { name: "MySQL", level: 80, color: "from-orange-500 to-orange-600" },
        { name: "Firebase", level: 75, color: "from-yellow-500 to-yellow-600" }
      ]
    },
    {
      title: "Frontend Development", 
      icon: Sparkles,
      skills: [
        { name: "React", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-teal-600" },
        { name: "Bootstrap", level: 80, color: "from-purple-500 to-purple-600" },
        { name: "JavaScript", level: 82, color: "from-yellow-400 to-yellow-500" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Zap,
      skills: [
        { name: "Flutter", level: 78, color: "from-blue-400 to-blue-500" },
        { name: "Dart", level: 75, color: "from-indigo-500 to-indigo-600" }
      ]
    }
  ];

  // Generate floating particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
  }));

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -50, 0],
            scale: [1, 1.5, 0.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
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
              className="bg-gradient-primary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                backgroundPosition: { duration: 3, repeat: Infinity },
                rotate: { duration: 4, repeat: Infinity }
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Skills
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                z: 20,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div 
                className="text-center mb-6 relative z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, delay: categoryIndex * 0.5 }
                  }}
                  className="inline-block p-3 bg-primary/10 rounded-xl mb-3"
                >
                  <category.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </motion.div>

              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                      type: "spring",
                      bounce: 0.3
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <motion.span 
                        className="text-foreground font-medium"
                        animate={{ 
                          color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          delay: skillIndex * 0.5
                        }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-sm text-muted-foreground"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.3 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.8,
                          type: "spring"
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ 
                            x: [-100, 200],
                            opacity: [0, 0.8, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: skillIndex * 0.3
                          }}
                          className="absolute inset-0 bg-white/40 w-20 skew-x-12"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: skillIndex * 0.2
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.h3 
            className="text-2xl font-semibold text-center mb-8 text-foreground"
            animate={{ 
              scale: [1, 1.02, 1],
              color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Tools & Technologies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Git", "GitHub", "VS Code", "Postman", "Figma", "Composer", "npm", "Vite"
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.6
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ 
                  scale: 0.9,
                  rotate: 10
                }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default relative overflow-hidden group"
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: [-100, 200],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
                <motion.span 
                  className="text-sm font-medium text-muted-foreground relative z-10"
                  animate={{ 
                    color: ["hsl(var(--muted-foreground))", "hsl(var(--primary))", "hsl(var(--muted-foreground))"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {tool}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
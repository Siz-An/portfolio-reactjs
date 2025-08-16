import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Softix.info",
      location: "Kathmandu",
      period: "Current",
      description: "Currently working as a full stack developer specializing in Laravel development.",
      isActive: true
    },
    {
      title: "Jr. Laravel Developer", 
      company: "Green Computing Nepal",
      location: "Kathmandu",
      period: "Feb, 2025 - May, 2025",
      description: [
        "Developed a Laravel-based CRM system integrated with a React frontend.",
        "Designed and optimized MySQL databases, ensuring efficient data handling.",
        "Built RESTful APIs to enable seamless communication between frontend and backend."
      ]
    },
    {
      title: "Full Stack Intern",
      company: "Xelwel Innovation Pvt. Ltd.",
      location: "Kathmandu", 
      period: "Dec, 2024 - Feb, 2025",
      description: [
        "Built and maintained web applications using Laravel, MySQL, and React.",
        "Optimized databases and handled data migration using Navicat.",
        "Created RESTful APIs for smooth frontend-backend integration."
      ]
    },
    {
      title: "IT Incharge",
      company: "Express Supermarket",
      location: "Kathmandu",
      period: "Dec, 2022 - May, 2024", 
      description: [
        "System and Network Maintenance",
        "Managed backend systems for inventory and stock using MySQL",
        "Inventory and stock management systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My professional journey in software development
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-transparent opacity-30" />
              )}
              
              {/* Timeline dot */}
              <motion.div 
                className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 ${
                  exp.isActive ? 'bg-primary border-primary animate-pulse' : 'bg-background border-primary'
                }`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
                className="ml-12 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-foreground mb-1"
                      whileHover={{ color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    className="flex items-center gap-1 text-primary font-medium mt-2 md:mt-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </motion.div>
                </div>

                <div className="text-muted-foreground">
                  {Array.isArray(exp.description) ? (
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-2">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
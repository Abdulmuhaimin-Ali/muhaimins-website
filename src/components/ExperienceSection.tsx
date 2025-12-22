import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Inc",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    description: "Leading development of cloud-native applications, mentoring junior developers, and architecting scalable solutions serving millions of users.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    description: "Built and maintained multiple client-facing applications, implemented CI/CD pipelines, and contributed to product strategy.",
    technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
  },
  {
    company: "Digital Agency Co",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description: "Developed responsive web applications for various clients, focusing on performance optimization and accessibility.",
    technologies: ["React", "TypeScript", "SCSS", "GraphQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-underline pb-4">
          Experience
        </h2>

        <div className="mt-8 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-card border-2 border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300" />
              
              <div className="bg-card rounded-xl p-6 card-elevated hover-lift">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-body">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground font-body mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

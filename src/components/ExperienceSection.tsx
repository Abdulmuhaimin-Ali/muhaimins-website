import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "Carfax",
    role: "Backend Developer",
    period: "Sep. 2025 - Dec. 2025",
    description:
      "Developed and optimized backend services for high-traffic applications, collaborated with cross-functional teams to design scalable solutions, and ensured system reliability and performance.",
    technologies: ["C#", "Azure Devops", "Python", "SQL Server", "Vue.js"],
  },
  {
    company: "OEConnection",
    role: "Full-Stack Developer",
    period: "Jan. 2025 - May. 2025",
    description:
      "Built and maintained multiple client-facing applications, implemented CI/CD pipelines, and contributed to product strategy.",
    technologies: ["C#", "Python", "Docker", "", "MongoDB"],
  },
  {
    company: "Big Blue Bubble",
    role: "QA Tester",
    period: "Sep. 2022 - Dec. 2022",
    description:
      "Conducted comprehensive testing for mobile games, identified bugs, and collaborated with developers to enhance game quality and user experience.",
    technologies: ["Playwright", "Jest", "Selenium"],
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
                      <p className="text-primary font-medium text-sm">
                        {exp.company}
                      </p>
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

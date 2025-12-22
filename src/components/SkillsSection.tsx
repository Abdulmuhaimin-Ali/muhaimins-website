const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS / GCP", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Git", level: 95 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-underline pb-4">
          Skills
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-1">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-card rounded-xl p-6 card-elevated">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

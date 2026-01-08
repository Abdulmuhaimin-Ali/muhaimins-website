import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Code Clarity",
    description:
      "A auto-updating technical documentation tool that generates and maintains project docs using AI, ensuring they stay current with code changes.",
    image: "https://static.sheetgo.com/wp-content/uploads/2021/07/cover_4.png",
    technologies: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "React",
      "Aws",
      "VertexAI",
    ],
    github: "https://github.com/Abdulmuhaimin-Ali/code-clarity",
    live: "https://www.loom.com/share/b7c1874c0d1d47389b8f4fb35e2113ce",
  },
  {
    title: "Cook Smart AI",
    description:
      "An AI-powered recipe generator that creates personalized meal ideas based on available ingredients, dietary preferences, and nutritional goals.",
    image:
      "https://stellarix.com/wp-content/uploads/2025/08/food-as-medicine-scaled.webp",
    technologies: ["React", "OpenAI", "Python", "Prisma"],
    github: "https://github.com/Abdulmuhaimin-Ali/cook-smart",
    live: "https://example.com",
  },
  {
    title: "Fund Fraud Detection",
    description:
      "An AI-powered recipe generator that creates personalized meal ideas based on available ingredients, dietary preferences, and nutritional goals.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbEyoMMRcDFMqTRfOBwwueWuI5rx5aGye3g&s",
    technologies: ["Python", "OpenAI", "React", "Prisma"],
    github: "https://github.com/Abdulmuhaimin-Ali/fund-fraud-detection",
    live: "https://example.com",
    // deploy
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-underline pb-4">
          Projects
        </h2>

        <div className="mt-8 grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden card-elevated hover-lift group"
            >
              {/* Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

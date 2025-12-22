import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CloudSync Pro",
    description: "A real-time collaboration platform for remote teams with video conferencing, document editing, and project management features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    technologies: ["React", "WebRTC", "Node.js", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Studio",
    description: "An AI-powered content creation tool that generates marketing copy, blog posts, and social media content using GPT models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    technologies: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "FinTrack Dashboard",
    description: "A comprehensive financial dashboard for tracking investments, expenses, and generating insights with beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
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

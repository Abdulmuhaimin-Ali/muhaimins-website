import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import avatar from "@/assets/avatar.png";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="avatar-ring mb-8 animate-fade-up">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-card/20 glow">
            <img 
              src={avatar} 
              alt="Developer avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-up-delay-1">
          Alex Chen
        </h1>

        {/* Title */}
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light mb-8 animate-fade-up-delay-2">
          Full-Stack Developer & UI Designer
        </p>

        {/* Social Links */}
        <div className="flex gap-4 animate-fade-up-delay-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-card/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground/90 hover:bg-card/20 hover:scale-110 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

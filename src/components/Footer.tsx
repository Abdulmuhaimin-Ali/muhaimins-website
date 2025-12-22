import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground font-body text-sm flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Alex Chen
        </p>
        <p className="text-muted-foreground/60 font-body text-xs mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

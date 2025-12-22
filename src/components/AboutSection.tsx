const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-underline pb-4">
          About Me
        </h2>
        
        <div className="space-y-6 text-muted-foreground font-body leading-relaxed mt-8">
          <p className="text-lg">
            Hey there! I'm a passionate full-stack developer with a love for creating 
            beautiful, performant web applications. With over <span className="text-foreground font-medium">5 years of experience</span>, 
            I've worked with startups and enterprises to bring their ideas to life.
          </p>
          
          <p>
            My journey started with curiosity about how websites work, and it evolved 
            into a career building everything from e-commerce platforms to AI-powered 
            applications. I believe in writing clean, maintainable code and creating 
            experiences that users genuinely enjoy.
          </p>

          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge through blog posts and mentoring. 
            I'm always excited to take on new challenges and collaborate with like-minded individuals.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Figma"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover-lift"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

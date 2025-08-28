import FadeInSection from "./FadeInSection";

export default function Projects() {
  return (
    <section id="projects">
      <FadeInSection>
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-card">EventHub</div>
          <div className="project-card">Ecommerce</div>
        </div>
      </FadeInSection>
    </section>
  );
}

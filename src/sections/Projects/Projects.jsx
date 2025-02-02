import styles from './ProjectsStyles.module.css';
import encryption1 from '../../assets/encryption.png';
import ProjectCard from '../../common/ProjectCard';
import portfolio from '../../assets/port.jpg'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={encryption1}
          link="https://encryption-519d5.web.app/"
          h3="En-Decryptor"
          p="Hepls to Encrypt and Decrypt the Txt & Msg"
        />
        <ProjectCard
          src={portfolio}
          link="https://ragulraajan.github.io/portfolio/"
          h3="Portfolio"
          p="HTML,CSS,JS Portfolio"
        />
        
      </div>
    </section>
  );
}

export default Projects;

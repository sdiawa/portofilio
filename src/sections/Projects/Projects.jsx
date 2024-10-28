import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import cicd from '../../assets/chaine-cicd.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1> 
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/sdiawa/portofilio"
          h3="Portfolio"
          
        />
        <ProjectCard
          src={cicd}
          link="https://github.com/sdiawa/K8S_deploy_Via_ANsible_VAgrant"
          h3="Lab CI/CD"
          
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/sdiawa/Diawara-Shop"
          h3="E-commerce"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/sdiawa/kubernets"
          h3="Projet Kube"
        
        />
      </div>
    </section>
  );
}

export default Projects;

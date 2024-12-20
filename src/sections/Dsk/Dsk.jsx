import styles from './DskStyles.module.css';
import heroImg from '../../assets/IMG_3858.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv_SAKD_.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? moon : sun;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Sekou Abdoul Kader Diawara"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
        Sekou Abdoul Kader
          <br />
          Diawara
        </h1>
        <h2>Devops, Cloud & Automation</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/sdiawa" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sekou-abdoul-kader-diawara-8232a7151/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        DevOps, Cloud, and Automation Engineer, passionate about new technologies and automation topics. Skilled in a range of tools (Ansible, Jenkins, Docker, Kubernetes, Terraform, Cloud) and development, I quickly adapt to different teams (dev, ops, etc.) and various environments (production, testing, etc.). My motivation drives me to continue self-training whenever possible, allowing me to keep advancing my skills.
        </p>
        <br />
        <a href={CV} download>
          <button className="hover">Download My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
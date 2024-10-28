import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="Ansible" />
        <SkillList src={checkMarkIcon} skill="Terraform" />
        <SkillList src={checkMarkIcon} skill="Jenkins" />
        <SkillList src={checkMarkIcon} skill="ArgoCD" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Nexus" />
        <SkillList src={checkMarkIcon} skill="GitLab" />
        <SkillList src={checkMarkIcon} skill="Bitbucket" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Linux" />
        <SkillList src={checkMarkIcon} skill="Windows" />
        <SkillList src={checkMarkIcon} skill="VMware" />
        <SkillList src={checkMarkIcon} skill="Hyper-V" />
        <SkillList src={checkMarkIcon} skill="KVM" />
        <SkillList src={checkMarkIcon} skill="Proxmox" />
        <SkillList src={checkMarkIcon} skill="Vagrant" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="WebSphere" />
        <SkillList src={checkMarkIcon} skill="Tomcat" />
        <SkillList src={checkMarkIcon} skill="Wildfly" />
        <SkillList src={checkMarkIcon} skill="Nginx" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Bash" />
        <SkillList src={checkMarkIcon} skill="Shell" />
        <SkillList src={checkMarkIcon} skill="SpringBoot" />
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="PhP" />

      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ELK" />
        <SkillList src={checkMarkIcon} skill="Nagios" />
        <SkillList src={checkMarkIcon} skill="Zabbix" />
        <SkillList src={checkMarkIcon} skill="Grafana" />
        <SkillList src={checkMarkIcon} skill="DataDog" />
        <SkillList src={checkMarkIcon} skill="Dynatrace" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Oracle" />
        <SkillList src={checkMarkIcon} skill="Postgresql" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Derby" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="GCP" />
        <SkillList src={checkMarkIcon} skill="IBM CLOUD" />
      </div>
    </section>
  );
}

export default Skills;

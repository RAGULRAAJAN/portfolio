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
        <SkillList src={checkMarkIcon} skill="Penetration testing" />
        <SkillList src={checkMarkIcon} skill="Hacking" />
        <SkillList src={checkMarkIcon} skill="Bug Bounty Hunting" />
        <SkillList src={checkMarkIcon} skill="Linux Administration" />
        <SkillList src={checkMarkIcon} skill="MERN Full Stack" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Cloud Security Architect" />
        <SkillList src={checkMarkIcon} skill="Risk Assessment and Management" />
        <SkillList src={checkMarkIcon} skill="Android Bug Bounty Hunting" />
        
  
      </div>
      
    </section>
  );
}

export default Skills;

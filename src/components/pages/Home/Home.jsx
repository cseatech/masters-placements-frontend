import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { TiTick } from 'react-icons/ti';
import { FaLinkedinIn } from "react-icons/fa6";
import { getStartedCards, PracticeCards, designersCards } from '../../../constants';
import { Footer, Accordion } from '../../elements';
import { Interview, CSEALogo } from '../../../assets';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_text}>
        <h3>CSEA Placement Experiences</h3>
        <h2>One stop web portal for enhancing your placement preparation!</h2>
        <h2>Interview Experiences of ambitious students from College of Engineering Guindy, curated into a website for your own benefit.</h2>
      </div>
      <div className={styles.header_img}>
        <img src={Interview} alt='Home page Logo' />
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.about_left}>
        <motion.img animate={{ y: [0, 50, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }} src={CSEALogo} alt='Home page Logo' />
      </div>
      <div className={styles.about_right}>
        <div className={styles.about_titles}>
          <div className={styles.about_title}>
            <p>Learn more about us</p>
            <p></p>
          </div>
          <p className={styles.about_csea}>CSEA CEG</p>
        </div>
        <p className={styles.about_desc}>The Computer Science and Engineering Association (CSEA) of College of Engineering Guindy is an association with a legacy of more than 10 years, established for the primary goal of Knowledge Advancement. Being the brainchild of Department of Computer Science and Engineering (DCSE) of CEG, one of the oldest engineering colleges of the country, the association ensures that the role of technocrats and specialists in various industries is implied. It extends to develop and promote the progression of Computer Science and technologies to its students as well as the members of the global community through its rich alumni support. Comprising students and faculty, CSEA is one of the most active Engineering Associations in the city.</p>
        <ul className={styles.about_list}>
          <li><TiTick /><span>We Code</span></li>
          <li><TiTick /><span>We Create</span></li>
          <li><TiTick /><span>We Learn</span></li>
          <li><TiTick /><span>We Teach</span></li>
        </ul>
        <button>Learn More</button>
      </div>
    </div>
  );
}

const GetStarted = () => {
  return (
    <div className={styles.getStarted_container}>
      <div className={styles.getStarted_titles}>
        <div className={styles.getStarted_title}>
          <p><span></span>&nbsp;Come on!&nbsp;<span></span></p>
        </div>
        <h3>Let's get started!</h3>
      </div>
      <div className={styles.getStarted_cards}>
        {getStartedCards.map((card, index) => (
          <motion.div className={styles.getStarted_card} whileHover={{ y: -50 }} key={index}>
            <div className={styles.getStarted_img}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.getStarted_card_desc}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div lassName={styles.getStarted_card_btn}>
                <button>Explore</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Practice = () => {
  return (
    <div className={styles.practiceSection}>
      <h3>Practice Websites</h3>
      <div className={styles.practiceWrapper}>
        {PracticeCards.map((card, index) => (
          <div key={index} className={styles.practiceTile}>
            <motion.img src={card.image} alt={card.name} whileHover={{ scale: 1.2 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

const Designers = () => {
  return (
    <div className={styles.designers_container}>
      <div className={styles.designers_titles}>
        <div className={styles.designers_title}>
          <p><span></span>&nbsp;The team&nbsp;<span></span></p>
        </div>
        <h3>Designed and Developed by</h3>
      </div>
      <div className={styles.designers_content}>
        {designersCards.map((card, index) => (
          <div className={styles.designers_card} key={index}>
            <h3>{card.name}</h3>
            <h4>{card.year}</h4>
            <button><FaLinkedinIn /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
      <About />
      <GetStarted />
      <Accordion />
      <Practice />
      <Designers />
      <Footer />
    </div>
  );
}

export default Home;
import { useState, useRef, useEffect } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Navbar } from '../../elements';
import styles from './Preparation.module.css';

const Preparation = () => {
  const stages = [
    "Build Your Resume",
    "Practise coding",
    "Brush up CS subjects",
    "Learn Aptitude",
    "Prepare specifically",
    "Getting ready for interview",
  ];

  const contentTitle = [
    "Resume Building",
    "Practice Coding",
    "CS subjects",
    "Aptitude Questions",
    "Company specific preparation",
    "Interviews",
  ]
    
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const selectedEl = stageRefs.current[currentStage];
    if (selectedEl && window.innerWidth <= 768) {
      selectedEl.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
      });
    }
  }, [currentStage]);

  const handleNext = () => {
    if (currentStage < stages.length - 1) {
        setCurrentStage(currentStage + 1);
    }
  };

  const handlePrev = () => {
    if (currentStage > 0) {
        setCurrentStage(currentStage - 1);
    }
  };

  const handleStageClick = (index) => {
    setCurrentStage(index);
  };

  const stageRefs = useRef([]);

  return (
    <div className={styles.progressContainer}>
      <Navbar />
      <div className={styles.timeline}>
        <div>
          <button onClick={handlePrev} className={styles.nav_arrow}>
            <FaArrowCircleLeft className='text-4xl cursor-pointer mr-6'/>
          </button>
        </div>

        <div className={styles.stages}>
          {stages.map((stage, index) => (
            <div key={index} 
              ref={(el) => (stageRefs.current[index] = el)}
              className={`${styles.steps} ${index === currentStage ? styles.currentStep : ''}`}
              onClick={() => handleStageClick(index)}>
              <div id={styles.number}>{index + 1}</div>
              <p className={styles.stepLabel}>{stage}</p>
            </div>
          ))}
        </div>

        <div>
          <button onClick={handleNext} className={styles.nav_arrow}>
            <FaArrowCircleRight className='text-4xl cursor-pointer ml-6 mr-8'/>
          </button>
        </div>
      </div>

      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <h2 className='text-3xl py-5'>{contentTitle[currentStage]}</h2>
          </div>
            {currentStage === 0 && (
              <ul>
                <li>Make sure you can answer any questions raised from your resume.</li>
                <li>Things to include: Full name, Email ID, phone number</li>
                <li>Professional social sites link(optional) like LinkedIn, codechef..</li>
                <li>Education (reverse order)</li>
                <li>Internship (if any)</li>
                <li>Projects, Extra curricular activities, Skills (programming languages or technologies known)</li>
                <li>Hobbies</li>
                <li>Resume should be free from mistakes.</li>
                <li>Try not to exceed a page(max of 2 pages).</li>
              </ul>
            )}
            {currentStage === 1 && (
              <ul>
                <li>Focus on Data structures and Algorithms.</li>
                <li>Practice as much as possible.</li>
                <li>Prepare from GeeksforGeeks.</li>
                <li>Practice in LeetCode.</li>
              </ul>
            )}
            {currentStage === 2 && (
              <ul>
                <li>Revisit core Computer Science subjects.</li>
                <li>Study Operating Systems, DBMS, and Networks.</li>
                <li>Review important CS concepts like OOP, memory management.</li>
              </ul>
            )}
            {currentStage === 3 && (
              <ul>
                <li>Work on your logical reasoning.</li>
                <li>Prepare for aptitude tests (quantitative, logical, verbal).</li>
                <li>Use resources like IndiaBix or Testbook for practice.</li>
              </ul>
            )}
            {currentStage === 4 && (
              <ul>
                <li>Know about the company you are attending.</li>
                <li>Make sure you are aware of the role you are interviewed for.</li>
                <li>Try questions asked previously in the company. Company wise coding questions are available in GeeksForGeeks, InterviewBit, Leetcode etc.</li>
                <li>Have a look at the interview experiences of the company.</li>
              </ul>
            )}
        </div>
      </div>
    </div>
  );
};

export default Preparation;

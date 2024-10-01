import { useState } from 'react';
import styles from './Preparation.module.css';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Preparation = () => {
    const stages = [
        "Build Your Resume",
        "Practise coding",
        "Brush up CS subjects",
        "Learn Aptitude",
        "sample",
    ];

    const [currentStage, setCurrentStage] = useState(0);

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

    return (
        <div className={styles.progressContainer}>
            <div className={styles.timeline}>
                <div>
                    <button onClick={handlePrev} className={styles.nav_arrow}>
                        <FaArrowCircleLeft className='text-4xl cursor-pointer mr-6'/>
                    </button>
                </div>

                <div className={styles.stages}>
                    {stages.map((stage, index) => (
                        <div key={index} 
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
                    <h2 className='text-3xl py-5'>{stages[currentStage]}</h2>
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
                </div>
            </div>
        </div>
    );
};

export default Preparation;

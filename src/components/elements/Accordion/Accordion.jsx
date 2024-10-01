import { useState } from 'react';
import { AccordionCards } from '../../../constants';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

import styles from './Accordion.module.css';

function Accordion() {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex)
                return -1;
            else
                return nextIndex;
        })
    }

    const renderedItems = AccordionCards.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <p>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</p>

        return (
            <div key={item.id} className={styles.card}>
                <div className={styles.label} onClick={() => handleClick(index)}>
                    <p>{item.label}</p>
                    {icon}
                </div>
                {isExpanded && <div className={styles.content}>{item.content}</div>}
            </div>
        );
    })

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.acc_title}>
                    <p><span></span>&nbsp;To keep in mind&nbsp;<span></span></p>
                </div>
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className={styles.wrapper}>
                {renderedItems}
            </div>
        </div>
    );
}

export default Accordion;
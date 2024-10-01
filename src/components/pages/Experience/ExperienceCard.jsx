import styles from './ExperienceCard.module.css';

const ExperienceCard = ({data}) => {
    return (
        <div className={styles.experience_card}>

            <div id={styles.student_details}>
                <ul className="text-3xl tracking-wider uppercase">{data.name}</ul>
                <ul className="text-2xl">{data.company}</ul>
                <ul className="text-xl">{data.year}</ul>
            </div>

            <hr ></hr>

            <div id={styles.file_container}>
                <a className="border-2 border-[#0880ff] text-[#0880ff] relative px-5 py-2.5 mr-6 transition-all ease-in duration-75 bg-white hover:bg-[#0880ff] hover:text-white rounded-md group-hover:bg-opacity-0" href={data.file} target="_blank" rel="noreferrer">Read Article</a>
                <p className="text-green-700  uppercase	font-bold">{data.type}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;
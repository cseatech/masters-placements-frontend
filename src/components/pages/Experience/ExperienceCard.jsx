import styles from './ExperienceCard.module.css';
import { useState } from 'react';




const ExperienceCard = ({data}) => {
    const [pdfModalOpen, setPdfModalOpen] = useState(false);
const [pdfBase64, setPdfBase64] = useState("");
const [pdfFileName, setPdfFileName] = useState("");
const readFile = (name, file) => {
    const isMobile = window.matchMedia("(max-width:600px)").matches;
  const fileName = `Experience_${name}.pdf`;

  if (isMobile) {
    // Directly download
    const downloadLink = document.createElement("a");
    downloadLink.href = file;
    downloadLink.download = fileName;
    downloadLink.click();
  } else {
    // Show modal
    setPdfBase64(file);
    setPdfFileName(fileName);
    setPdfModalOpen(true);
  }
}
    console.log(data)
    return (
        <div className={styles.experience_card}>

            <div id={styles.student_details}>
                <ul className="text-3xl tracking-wider uppercase">{data.name}</ul>
                <ul className="text-2xl">{data.company}</ul>
                <ul className="text-xl">{data.year}</ul>
            </div>

            <hr ></hr>

            <div id={styles.file_container}>
                <div className="border-2 border-[#0880ff] text-[#0880ff] relative px-5 py-2.5 mr-6 transition-all ease-in duration-75 bg-white hover:bg-[#0880ff] hover:text-white rounded-md group-hover:bg-opacity-0" onClick={() => readFile(data.name, data.experienceFile)}>Read Article</div>
                    {pdfModalOpen && (
                        <div className={styles.pdf_modal} onClick={() => setPdfModalOpen(false)}>
                        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', width: '70%', height: '100%', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={pdfBase64}
                            width="100%"
                            height="650px"
                            title="PDF Viewer"
                        />
                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            <button
                            style={{
                                padding: "0.5rem 1rem",
                                backgroundColor: "#0880ff",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                marginRight: "1rem"
                            }}
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = pdfBase64;
                                link.download = pdfFileName;
                                link.click();
                            }}
        >
          Download
        </button>
        <button
          onClick={() => setPdfModalOpen(false)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#ccc",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

                <p className="text-green-700  uppercase	font-bold">{data.type}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;
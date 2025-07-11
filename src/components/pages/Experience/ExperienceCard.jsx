import styles from './ExperienceCard.module.css';
import { useState } from 'react';

const ExperienceCard = ({data}) => {
    const [pdfModalOpen, setPdfModalOpen] = useState(false);
    const [pdfBase64, setPdfBase64] = useState("");
    const [pdfFileName, setPdfFileName] = useState("");

    const downloadFile = () => {
      const link = document.createElement("a");
      link.href = pdfBase64;
      link.download = pdfFileName;
      link.click();
    }

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
    return (
        <div className={styles.experience_card}>
            <div id={styles.student_details}>
                <ul className="text-3xl tracking-wider uppercase">{data.name}</ul>
                <ul className="text-2xl">{data.company}</ul>
                <ul className="text-xl">{data.year}</ul>
            </div>

            <div>
              <hr style={{backgroundColor: "#895c95", height: '1.5px'}}></hr>

              <div id={styles.file_container}>
                  <div className=" text-white relative px-5 py-2.5 mr-6 transition-all ease-in duration-75 bg-[#895c95] cursor-pointer hover:bg-[#400051] hover:text-white rounded-md group-hover:bg-opacity-0" onClick={() => readFile(data.name, data.experienceFile)}>Read Article</div>
                      {pdfModalOpen && (
                          <div className={styles.pdf_bg} onClick={() => setPdfModalOpen(false)}>
                            <div className={styles.pdf_modal} onClick={(e) => e.stopPropagation()}>
                              <iframe src={pdfBase64} width="100%" height="650px" title="PDF Viewer"/>
                              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                <button className={styles.download_btn} onClick={() => downloadFile()}>Download</button>
                                <button className={styles.cancel_btn} onClick={() => setPdfModalOpen(false)}>Close</button>
                              </div>
                            </div>
                          </div>
                      )}
                  <p className="text-[#895c95] uppercase	font-extrabold">{data.type}</p>
              </div>
          </div>
        </div>
    );
}

export default ExperienceCard;
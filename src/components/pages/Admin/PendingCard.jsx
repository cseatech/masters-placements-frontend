import { useState } from 'react';
import styles from './PendingCard.module.css';

export const verifyFile = async (id) => {
  const res = await fetch(import.meta.env.VITE_APP_SERVER_URL + `/api/experiences/verify/` + id);
  const data = await res.json();
  if(data.error) 
    throw new Error(data.error);

  location.reload();
};

const PendingCard = ({ data }) => {
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [pdfBase64, setPdfBase64] = useState("");
  const [pdfFileName, setPdfFileName] = useState("");

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = pdfBase64;
    link.download = pdfFileName;
    link.click();
  };

  const deleteFile = async (id) => {
    const res = await fetch(import.meta.env.VITE_APP_SERVER_URL + `/api/experiences/delete/` + id);
    const data = await res.json();
    if(data.error) 
      throw new Error(data.error);
    
    location.reload();
  };

  const readFile = (name, file) => {
    const isMobile = window.matchMedia("(max-width:600px)").matches;
    const fileName = `Experience_${name}.pdf`;

    if (isMobile) {
      const downloadLink = document.createElement("a");
      downloadLink.href = file;
      downloadLink.download = fileName;
      downloadLink.click();
    } else {
      setPdfBase64(file);
      setPdfFileName(fileName);
      setPdfModalOpen(true);
    }
  };

  return (
    <div className={styles.experience_card}>
      <div className={styles.top}>
        <div id={styles.student_details}>
          <ul className="tracking-wider uppercase text-white font-bold">{data.name}</ul>
          <ul className="text-white text-200">{data.company} ({data.type})</ul>
          <ul className="text-white">{data.year}</ul>
        </div>
        
        <div className={styles.top_right}>
          <div onClick={() => deleteFile(data._id)}>
            <i class="fa-solid fa-trash" style={{ display:"flex", justifyContent: "center", color: '#fbc618', cursor: 'pointer' }}></i>
          </div>
          
          <a href={data.linkedinurl} target="_blank" style={{ color: "#fbc618",display:"flex", justifyContent: "center" }}>
            <i class="fab fa-linkedin"></i>
          </a>
          
          <a href={`mailto:${data.email}`} style={{ color: "#fbc618",display:"flex", justifyContent: "center" }}>
            <i class="fas fa-envelope"></i>
          </a>      
        </div>
      </div>
      <hr ></hr>

      <div id={styles.file_container}>
        <div className="border-2 border-[#fbc618] text-[#fbc618] relative px-5 py-2.5 mr-6 transition-all ease-in duration-75 bg-[#292d33] hover:bg-[#f6da7d] hover:text-black rounded-md group-hover:bg-opacity-0" onClick={() => readFile(data.name, data.experienceFile)}>Read Article</div>
          {pdfModalOpen && (
            <div className={styles.pdf_bg} onClick={() => setPdfModalOpen(false)}>
              <div className={styles.pdf_modal} onClick={(e) => e.stopPropagation()}>
                <iframe src={pdfBase64} width="100%" height="650px" title="PDF Viewer"/>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <button className={styles.cancel_btn} onClick={() => setPdfModalOpen(false)}>Close</button>
                </div>
              </div>
            </div>
          )}
        <button onClick={() => verifyFile(data._id)} className={styles.verify_btn}>Verify</button>
      </div>
    </div>
  );
};

export default PendingCard;
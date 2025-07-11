import styles from './PendingCard.module.css';
import { useState } from 'react';
export const verifyFile = async (id) => {
    const res = await fetch(import.meta.env.VITE_APP_SERVER_URL+`/api/experiences/verify/`+id);
    const data = await res.json();
    if(data.error) throw new Error(data.error);
    location.reload();
}
const PendingCard = ({data}) => {
    const [pdfModalOpen, setPdfModalOpen] = useState(false);
    const [pdfBase64, setPdfBase64] = useState("");
    const [pdfFileName, setPdfFileName] = useState("");

    const downloadFile = () => {
      const link = document.createElement("a");
      link.href = pdfBase64;
      link.download = pdfFileName;
      link.click();
    }

    const deleteFile = async (id) => {
        const res = await fetch(import.meta.env.VITE_APP_SERVER_URL+`/api/experiences/delete/`+id);
        const data = await res.json();
        if(data.error) throw new Error(data.error);
        location.reload();
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
    console.log(data)
    return (
        <div className={styles.experience_card}>
            <div className={styles.top}>
                <div id={styles.student_details}>
                    <ul className="tracking-wider uppercase">{data.name}</ul>
                    <ul className="">{data.company} ({data.type})</ul>
                    <ul className="">{data.year}</ul>
                </div>
                <div className={styles.top_right}>
                    <div onClick={() => deleteFile(data._id)}>
                        <i class="fa-solid fa-trash" style={{display:"flex", justifyContent: "center", color: 'red', cursor: 'pointer'}}></i>
                    </div>
                    <a href={data.linkedinurl} target="_blank" style={{color: "blue",display:"flex", justifyContent: "center"}}>
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href={`mailto:${data.email}`} style={{color: "yellow", WebkitTextStroke: "0.5px black",display:"flex", justifyContent: "center"}}>
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <hr ></hr>

            <div id={styles.file_container}>
                <div className="border-2 border-[#32FF6A] text-[#0880ff] relative px-5 py-2.5 mr-6 transition-all ease-in duration-75 bg-white hover:bg-[#0880ff] hover:text-white rounded-md group-hover:bg-opacity-0" onClick={() => readFile(data.name, data.experienceFile)}>Read Article</div>
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
                <button onClick={() => verifyFile(data._id)} className="border-2 bg-green-600 text-white font-bold px-5 py-2.5 rounded-md">Verify</button>
            </div>
        </div>
    );
}

export default PendingCard;
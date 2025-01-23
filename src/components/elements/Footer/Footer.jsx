import styles from './Footer.module.css';
import { footerCards } from '../../../constants';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.social_media}>
                    <p>CSEA</p>
                    <div className={styles.footer_icons}>
                        {footerCards.footerSocialMedia.map((Button, index) => (
                            <button href='' className={styles.footer_icon} key={index}>{<Button.icon />}</button>
                        ))}
                    </div>
                </div>
                <div className={styles.contact}>
                    <h2>Get in Touch</h2>
                    <div className={styles.titles}>
                        <div className={styles.email}>
                            <h3><IoIosMail />&nbsp;Email</h3>
                            <p><a href='mailto:'>chairman@abacus.org.in</a></p>
                        </div>
                        <div className={styles.phno}>
                            <h3><FaPhoneAlt />&nbsp;Phone</h3>
                            {footerCards.footerGetInTouch.map((phno, index) => (
                                <div key={index}>
                                    <p>{phno.name}</p>
                                    <p>{phno.phno}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    {footerCards.footerLinks.map((link, index) => (
                        <p key={index} onClick={() =>{ navigate(`/${link.link}`)}}><IoIosArrowForward />&nbsp;{link.name}</p>
                    ))}
                </div>
                <div className={styles.experience}>
                    <h3>Want to share <br />your experience?</h3>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={() =>{
                        navigate('/post');
                        window.scrollTo(0, 0);}}>Click here to post</motion.button>
                </div>
            </div>
            <div className={styles.copyrights}>
                <h3>©<span>CSEA</span>. All Rights Reserved.</h3>
            </div>
        </div>
    );
}

export default Footer;
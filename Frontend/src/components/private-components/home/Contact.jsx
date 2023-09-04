// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

// React-Icons.
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbPhoneFilled } from "react-icons/tb";
import { GiRotaryPhone } from "react-icons/gi";
import { RiHeadphoneFill } from "react-icons/ri";
import { FcVoicePresentation, FcShop, FcShipped } from "react-icons/fc";

const Contact = () => {
   return (
      <section className={style.contactContainer}>
         <h3>Contact-Us</h3>

         <div className={style.infoContainer}>
            <div className={style.locationItemm}>
               <FaMapMarkerAlt className={style.locationIcon} />
               <p>Bogota, Colombia</p>

               <div>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.657640012983!2d-74.15695563979085!3d4.655000068157636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c4451c1b6cb%3A0x8c9f1c22bf47f28d!2sCl.%208A%20%2392-72%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1621459544885!5m2!1ses!2sco"
                     width="80%"
                     loading="lazy"
                  ></iframe>
               </div>
               <br></br>
            </div>

            <div className={style.contactsContainer}>
               <div className={style.iconContainer}>
                  <p>Contacts</p>
               </div>

               <div className={style.iconContainer}>
                  <GiRotaryPhone className={style.icon} />
                  <p>
                     Local Phone: <span>+57 (1) 5551234</span>
                  </p>
               </div>

               <div className={style.iconContainer}>
                  <TbPhoneFilled className={style.icon} />
                  <p>
                     Workshop: <span>Ext - 7945</span>
                  </p>
               </div>

               <div className={style.iconContainer}>
                  <RiHeadphoneFill className={style.icon} />
                  <p>
                     Sales: <span>Ext - 7001</span>
                  </p>
               </div>
            </div>

            <div className={style.contactsContainer}>
               <div className={style.iconContainer}>
                  <p>Emails</p>
               </div>

               <div className={style.iconContainer}>
                  <FcVoicePresentation className={style.icon} />
                  <p>
                     Customer Service: <span>gamerstoreservice@gmail.com</span>
                  </p>
               </div>

               <div className={style.iconContainer}>
                  <FcShop className={style.icon} />
                  <p>
                     Workshop: <span>gamerstoreworkshop@gmail.com</span>
                  </p>
               </div>

               <div className={style.iconContainer}>
                  <FcShipped className={style.icon} />
                  <p>
                     Sales: <span>gamerstoresales@gmail.com</span>
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;

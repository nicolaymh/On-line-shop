// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

// React-Icons.
import {
   SiNintendo,
   SiPlaystation,
   SiXbox,
   SiSega,
   SiNvidia,
   SiMicrosoft,
   SiApple,
   SiIntel,
} from "react-icons/si";

const Footer = () => {
   return (
      <div className={style.footerContainer}>
         <div className={style.gridContainer}>
            <div className={style.item}>
               <h4>About Us</h4>
               <p>
                  We are an ecommerce dedicated to sell things about video games like consoles,
                  video games, retro things, devices and accessories. Our service is based by online
                  shopping and we send your product home.
               </p>
            </div>
            <div className={style.item}>
               <h4>Let Us Help</h4>
               <p>About Us</p>
               <p>Extra Services</p>
               <p>Contact Us</p>
               <p>Retro</p>
            </div>
            <div className={style.item}>
               <h4>Some of our brands</h4>

               <div className={style.brandsContainer}>
                  <SiNintendo className={style.icon} />
                  <SiPlaystation className={style.icon} />
                  <SiXbox className={style.icon} />
                  <SiSega className={style.icon} />
                  <SiIntel className={style.icon} />
                  <SiNvidia className={style.icon} />
                  <SiMicrosoft className={style.icon} />
                  <SiApple className={style.icon} />
               </div>
            </div>
         </div>

         <p>Copyright ©2023 All rights reserved | This Website is Developed by Nicolay Moreno</p>
      </div>
   );
};

export default Footer;

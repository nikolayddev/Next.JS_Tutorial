import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
   return (
      <div className={styles.container}>
         <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatum assumenda accusamus velit modi, provident saepe, ratione quis maxime quibusdam aliquid. Quas dolorem laborum rerum eos placeat deleniti dignissimos architecto.</p>
            <div className={styles.boxes}>
               <div className={styles.box}>
                  <h1>10 K+</h1>
                  <p>Year of experience</p>
               </div>
               <div className={styles.box}>
                  <h1>10 K+</h1>
                  <p>Year of experience</p>
               </div>
               <div className={styles.box}>
                  <h1>10 K+</h1>
                  <p>Year of experience</p>
               </div>
            </div>
         </div>
         <div className={styles.imgContainer}>
            <Image className={styles.img} src="/about.png" alt="" fill />
         </div>
      </div>
   );
}
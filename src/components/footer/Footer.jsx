import styles from "./footer.module.css";

export default function Footer() {
   return (
      <div className={styles.container}>
         <div className={styles.logo}>dDev</div>
         <div className={styles.text}>
            Donci Creative Thoughts agency © All rights reserved.
         </div>

      </div>
   );
}
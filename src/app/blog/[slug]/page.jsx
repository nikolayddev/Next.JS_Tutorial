import Image from "next/image";
import styles from "./singlePost.module.css";

export default function SinglePostPage() {
   return (
      <div className={styles.container}>
         <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/27068594/pexels-photo-27068594/free-photo-of-towers-of-castle-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt=""
               fill
               className={styles.img}
            />
         </div>
         <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
               <Image src="https://images.pexels.com/photos/27068594/pexels-photo-27068594/free-photo-of-towers-of-castle-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={50}
                  height={50}
                  className={styles.avatar}
               />
               <div className={styles.detailText}>
                  <span className={styles.detailTitle}>Author</span>
                  <span className={styles.detailValue}>Terry Jefferson</span>
               </div>
               <div className={styles.detailText}>
                  <span className={styles.detailTitle}>Published</span>
                  <span className={styles.detailValue}>01.01.2024</span>
               </div>
            </div>
            <div className={styles.content}>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. In harum ducimus laborum minus, laudantium illum quaerat voluptatibus hic perferendis modi ex fugiat dicta aliquid earum quo non soluta ab id.
            </div>
         </div>
      </div>
   );
}
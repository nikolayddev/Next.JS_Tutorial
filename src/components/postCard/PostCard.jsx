import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

export default function PostCard() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/27068594/pexels-photo-27068594/free-photo-of-towers-of-castle-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa sapiente nostrum incidunt, ullam quisquam blanditiis nesciunt quae quos pariatur, dolorum dolorem nemo sed asperiores tenetur, deleniti reprehenderit? Optio, quisquam.</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    );
}
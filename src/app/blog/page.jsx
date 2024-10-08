import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

export default async function BlogPage() {

   const posts = await getPosts();

   return (
      <div className={styles.container}>
         {posts.map((post) => (
            <div className={styles.post} key={post.id}>
               <PostCard post={post} />
            </div>
         ))}
      </div>
   );
}
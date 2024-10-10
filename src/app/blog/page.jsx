import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//Fetch data with an API

const getData = async () => {
   const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

   if (!res.ok) {
      console.log(res);
      throw new Error('Something went wrong!');
   }

   return res.json();
}

export default async function BlogPage() {

   const posts = await getData();
   // const posts = await getPosts();

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
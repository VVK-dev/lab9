import { Link } from "react-router"
import styles from "./blogposts.module.css"
import axios from "axios";
import { useEffect, useState } from "react";

function createLink(post) {

  return <Link to={"/BlogPostPage/" + post.id} className={styles.post}> {post.title} </Link>
    
}

function BlogPostsPage() {

  const [postList, setPostList] = useState([]); 

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPostList(response.data))
      .catch(error => alert(error));
  
  }, []);

  return (
    
    <div className={styles.postList}>

      <ul>

       {postList.map((post) => <li key={post.id}> {createLink(post)} </li>)}

      </ul>

    </div>

  )
}

export default BlogPostsPage
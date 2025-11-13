import styles from "./BlogPost.module.css"
import CommentsMain from "./CommentsSection/CommentsMain";
import PostContent from "./ContentSection/Content";

function BlogPost() {

  return (
    <div className={styles.blogPost}>

      <PostContent/>

      <CommentsMain/>

    </div>
  )
}

export default BlogPost
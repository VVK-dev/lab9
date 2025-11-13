import { useEffect, useState } from "react";
import styles from "./Comment.module.css";

function BlogComment({comment}) {

  const likestyle = styles.commentLike + " fa-regular fa-heart";

  return (

    <div className={styles.comment}>

      <p> <b> {comment.name} </b> </p>

      <hr className={styles.line2}/>

      <p className={styles.commentcontent}>{comment.body}</p>

      <i className= {likestyle}></i>

    </div>
  )
}

function PostComments({commentsList}){

  return (

    <>

      {commentsList.length === 0 ? (<p className="text-center m-3"> - No Comments Yet - </p>) : (
  
        <ul>

          {commentsList.map((comment) => {

            return <li key={comment.id}> <BlogComment comment={comment}/> </li>

          })}

        </ul>

      )}
    
    </>

  )

}

export default PostComments
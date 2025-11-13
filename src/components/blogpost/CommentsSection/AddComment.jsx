import { useState } from "react";
import styles from "./Comment.module.css"
import axios from "axios";
import { useParams } from "react-router";

function BlogAddComment({SetCommentList}){

  const params = useParams();

  const [newComment, SetNewComment] = useState({

    name: "",
    body: ""

  });

  const addComment = async (comment) => {

    try {

      const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, comment);

      SetCommentList((oldCommentList) => [...oldCommentList, response.data]);
    
    } catch (error) {
    
      alert(error);
    
    }

  };

  return(

    <>

      <form className= {styles.addcomment}>

        <input type="text" placeholder="Name" value={newComment.name} onChange={(e) => SetNewComment({...newComment, name: e.target.value})} className={styles.inputField} required />

        <textarea name="enterComment" id="userComment" placeholder="Write a comment..." value={newComment.body}
        onChange={(e) => {SetNewComment({...newComment, body: e.target.value})}} className={styles.inputField} required/>

        <button className={styles.commentButton} type="submit" onClick={(e) => {
          
          e.preventDefault();

          if(newComment.name.length > 0 && newComment.body.length > 0){

            addComment(newComment);

            //clean comment form

            SetNewComment({name: "", body: ""})

          } else { alert("Name and message must be >1 character long.") }

        }}> Add a comment </button>

      </form>

    </>
  )
  
}

export default BlogAddComment
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Content.module.css";

function BlogContent({title, author, content}) {

  return (
    
    <div className={styles.blogcontent}>

      <h3 className={styles.heading}> <b>{title}</b> </h3>

      <p className={styles.meta} > <b> {author} </b> </p>

      <p className={styles.content} >{content}</p>

    </div>
  )
}

function PostContent(){

  const params = useParams();

  //check for home page

  if(!("post_id" in params)){

    params.post_id = 1;

  }

  const [loading, setLoading] = useState(true);

  const [postContent, setPostContent] = useState({

    title: "Loading..." ,
    author: "",
    content: ""

  });

  //get post content

  useEffect(() => {

    async function getPost() {     
        
      try {

        //content

        const contentresponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);

        //author

        const authorresponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${contentresponse.data.userId}`);

        //set post content

        setPostContent({

          title: contentresponse.data.title,
          author: authorresponse.data.name,
          content: contentresponse.data.body

        });

      } catch (error) {
        
        alert(error);

      } finally {

        setLoading(false);

      }

    }

    getPost();
    
  }, [params.post_id] );

  return ( 
    <BlogContent title={postContent.title} author={postContent.author} content={postContent.content}/>
  )

}

export default PostContent
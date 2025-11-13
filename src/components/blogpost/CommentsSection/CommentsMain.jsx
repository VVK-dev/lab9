import { useEffect, useState } from "react";
import styles from "./Comment.module.css"
import axios from "axios";
import { useParams } from "react-router";
import BlogAddComment from "./AddComment";
import PostComments from "./CommentsList";

function CommentsMain() {
    
    const params = useParams();

    const [loading, setLoading] = useState(true);

    const [commentList, SetCommentList] = useState([]);
    
    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`)
        .then((response) => SetCommentList(response.data))
        .catch((error) => alert(error))
        .finally(() => setLoading(false));

    } ,[params.post_id]);


    return(

        <>
            <hr className={styles.line1} />
    
            <h3 className= {styles.commentsHeading}> <b> Comments </b> </h3>
            
            { loading ? (
                
                <p> Loading... </p>

                ) : (

                <> 
                    <BlogAddComment SetCommentList={SetCommentList}/>
                    <PostComments commentsList={commentList}/>
                        
                </>

                )

            }
        
        </>

    )

}

export default CommentsMain
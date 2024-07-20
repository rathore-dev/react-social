import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from '../../dummyData'
import { useState } from "react";


 export default function Post({post}) {
    const [like , setLike] = useState(post.like)
    const [isLiked , setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like+1 :like+1)
        setIsLiked(!isLiked)
    }
    
   return (
     <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={post.pp} alt="" />
                    <span className="postUserName">{post.name}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.disc} </span>
                <img className="postImg" src={post.photo} alt="" onClick={likeHandler} />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/person/facebook-like.svg" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="/assets/person/heart.jpg"  alt="" />
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight ">{post.comment } comments</div>
            </div>
        </div>


     </div>
   )
 }
 
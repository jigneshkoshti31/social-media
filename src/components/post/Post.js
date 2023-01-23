import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post({post}) {
  console.log(post)
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/my.jpg" alt="" />
                    <span className="postUsername">Jignesh</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="assets/like.png" alt="" />
                <img className="likeIcon" src="assets/heart.png" alt="" />
                <span className="postLikeCounter">{post.like} people like it </span>
              </div>
              <div className="postBottomRight">
                <span className="postcommentText">{post.comment} Comment</span>
              </div>
            </div>
        </div>
    </div>
  )
}

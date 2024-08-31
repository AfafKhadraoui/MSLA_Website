import "./Comments.css";
import comment_img1 from "../components/Assets/images/comment1.jpeg";
import comment_img2 from "../components/Assets/images/comment2.jpeg";
function Comment() {
  return (
    <div className="Comment_container">
      <span>Testimonials</span>
      <div className="comments">
        <div className="comment comment1">
          <div>
            <p className="name">Belli Jon</p>
            <p className="comment_paragraph">
              I love browsing this website! The selection is amazing and the
              quality of the clothes is excellent. I've already ordered several
              items and I'm very happy with my purchases.
            </p>
          </div>
          <img src={comment_img1} alt="" className="comment_img" />
        </div>
        <div className="comment comment2">
          <div>
            <p className="name">Mariline Mili</p>
            <p className="comment_paragraph">
              The customer service at this online shop is top-notch. They were
              very helpful in answering my questions and assisting me with my
              order. I'll definitely be shopping here again!
            </p>
          </div>
          <img src={comment_img2} alt="" className="comment_img" />
        </div>
      </div>
    </div>
  );
}
export default Comment;

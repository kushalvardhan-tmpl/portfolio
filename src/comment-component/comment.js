import React, { useState } from "react";
import "./comment.css";

const Comment = ({ blogId }) => {
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [commentStatus, setCommentStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://portfolio-website-lkvm.onrender.com/api/blogs/comment/${blogId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );

      if (response.ok) {
        console.log("Comment submitted successfully");
        setCommentData({
          name: "",
          email: "",
          website: "",
          message: "",
        });
        setCommentStatus("Comment sent successfully");
      } else {
        console.error("Failed to submit comment");
        setCommentStatus("Failed to send comment");
      }
    } catch (error) {
      console.error("Error:", error);
      setCommentStatus("Error: " + error.message);
    }
  };

  return (
    <div className="Commentpage">
      <div className="comments">
        <h3>Leave a Comment</h3>
        <div className="commentForm">
          <form onSubmit={handleSubmit}>
            <div className="details">
              <div id="Name">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={commentData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="pMail">
                <label>Email</label>
                <input
                  type="email"
                  id="personalMail"
                  name="email"
                  value={commentData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div id="personalUrl">
              <label>Website</label>
              <input
                type="url"
                id="weblink"
                name="website"
                value={commentData.website}
                onChange={handleChange}
                pattern="https?://.+"
              />
            </div>
            <div id="textmsg">
              <label>Message</label>
              <textarea
                id="textcomment"
                name="message"
                rows="10"
                value={commentData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Commentbutton">
              <button type="submit">
                <b>Leave a Comment</b>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="status">
        {commentStatus && <p className="comment-status">{commentStatus}</p>}
      </div>
    </div>
  );
};

export default Comment;

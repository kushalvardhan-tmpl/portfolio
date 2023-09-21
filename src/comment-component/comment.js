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

    if (!validateForm()) {
      return;
    }

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
        setCommentStatus("Comment sent successfully");
        setCommentData({
          name: "",
          email: "",
          website: "",
          message: "",
        });

        setTimeout(() => {
          setCommentStatus("");
        }, 3000);
      } else {
        console.error("Failed to submit comment");
        setCommentStatus("Failed to send comment");

        setTimeout(() => {
          setCommentStatus("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setCommentStatus("Error: " + error.message);
    }
  };
  const validateForm = () => {
    const { name, email, website, message } = commentData;

    if (!name || !email || !website || !message) {
      alert("All fields are required");
      return false;
    }
    const namePattern = /^[a-zA-Z ]*$/;
    if (!namePattern.test(name)) {
      alert("Only Letters can be used as a Name");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return false;
    }

    return true;
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
            <div id="text-msg">
              <label>Message</label>
              <textarea
                id="text-msg-area"
                name="message"
                rows="15"
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

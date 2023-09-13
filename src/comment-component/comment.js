import "./comment.css";
export const Comment = () => {
  return (
    <div className="Commentpage">
      <div className="comments">
        <h3>Leave a Comment</h3>
        <div className="commentForm">
          <form>
            <div className="details">
              <div id="Name">
                <label>Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div id="pMail">
                <label>Email</label>
                <input type="email" id="personalMail" name="email" required />
              </div>
            </div>
            <div id="personalUrl">
              <label>Website</label>
              <input
                type="url"
                id="weblink"
                name="website"
                pattern="https?://.+"
              />
            </div>
            <div id="textmsg">
              <label>Message</label>
              <textarea id="textcomment" name="message" rows="10" required />
            </div>
            <div className="Commentbutton">
              <button>
                <b>Leave a Comment</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

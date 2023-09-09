import "../stylecomponents/comment.css";
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
                <input type="text" id="name" name="name" />
              </div>
              <div id="pMail">
                <label> Email</label>
                <input type="email" id="personalMail" name="email" />
              </div>
            </div>
            <div id="personalUrl">
              <label> Website</label>
              <input type="url" id="weblink" name="website" />
            </div>
            <div id="textmsg">
              <label> Message</label>
              <input type="text" id="textcomment" name="message" />
            </div>
          </form>
        </div>
        <div className="Commentbutton">
          <button>
            <b>Leave a Comment</b>
          </button>
        </div>
      </div>
    </div>
  );
};

import "../css/reviewmodal.css";
// eslint-disable-next-line react/prop-types
export default function Review({ closeModal, saveReview, addReview }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          opacity: "0.5",
          backgroundColor: "grey",
        }}
      ></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="close-btn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="modal-header">
            <h3>Add your review</h3>
          </div>
          <div className="modal-body">
            <label htmlFor="">Name</label>
            <input type="text" name="revName" id="" onChange={(e) => addReview(e)}/>
            <label htmlFor="">Rating</label>
            <select name="rating" id="" onChange={(e) => addReview(e)}>
              <option value="" disabled selected>
                Select Rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label htmlFor="">Comment</label>
            <input type="text" name="comment" id="" onChange={(e) => addReview(e)}/>
          </div>
          <div className="modal-footer">
            <button onClick={() => closeModal(false)} className="cancel-btn">
              Cancel
            </button>
            <button onClick={() => saveReview()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

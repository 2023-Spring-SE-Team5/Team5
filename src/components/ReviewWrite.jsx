import "./ReviewWrite.css";

function ReviewWrite({setRWriteReviewOpen, setRDataOpen, RName}) {
  return (
    <div className="ReviewWrite">
      <p>음식은 어떠셨어요?<br/>{RName}<br/>점수를 입력해주세요!</p>
      <input placeholder="1-5"></input>점
      <br/>
      <p>리뷰를 입력해주세요!</p>
      <input placeholder="리뷰"></input>
      <br/>
      <button onClick={() => {setRWriteReviewOpen(false);setRDataOpen(true);}}>리뷰 작성하기</button>
    </div>
  );
}

export default ReviewWrite;
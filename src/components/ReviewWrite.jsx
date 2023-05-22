import { useState } from "react";

function ReviewWrite({ setRWriteReviewOpen, setRDataOpen, RName }) {
  const [score, setScore] = useState('');
  const [review, setReview] = useState('');
  return (
    <div className="ReviewWrite h-screen bg-[#e1e1e1]/[0.3] text-center flex items-center justify-center h-screen">
      <div className="rounded-xl">
        <p className="font-bold text-xl">
          {RName} 음식은 어떠셨어요?
          <br />
          <br />
          <br />
          점수를 입력해주세요!
        </p>
        <input placeholder="1-5" className="mt-[10px]" value={score} onChange={e => setScore(e.target.value)}></input>점
        <br />
        <p className="font-bold text-xl mt-[30px]">리뷰를 입력해주세요!</p>
        <input placeholder="리뷰" className="mt-[10px]" value={review} onChange={e => setReview(e.target.value)}></input>
        <br />
        <button
          className="text-xl rounded-xl mt-[30px] bg-[#afafaf] p-[10px]"
          onClick={() => {
            const f = localStorage.getItem(RName) ? JSON.parse(localStorage.getItem(RName)) : []
            f.push({
              user: "user",
              score: score,
              review: review,
              date: Date.now()
            })
            localStorage.setItem(RName, JSON.stringify(f));
            setRWriteReviewOpen(false);
            setRDataOpen(true);
          }}
        >
          리뷰 작성하기
        </button>
      </div>
    </div>
  );
}

export default ReviewWrite;

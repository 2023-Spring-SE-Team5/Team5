function ReviewWrite({ setRWriteReviewOpen, setRDataOpen, RName }) {
  console.log(RName);
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
        <input placeholder="1-5" className="mt-[10px]"></input>점
        <br />
        <p className="font-bold text-xl mt-[30px]">리뷰를 입력해주세요!</p>
        <input placeholder="리뷰" className="mt-[10px]"></input>
        <br />
        <button
          className="text-xl rounded-xl mt-[30px] bg-[#afafaf] p-[10px]"
          onClick={() => {
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

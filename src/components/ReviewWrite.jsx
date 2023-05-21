import "./ReviewWrite.css";

function ReviewWrite({setRWriteReviewOpen, setRDataOpen, RName}) {
  console.log(RName)
  return (
    <div className="ReviewWrite h-screen bg-[#e1e1e1]/[0.3]" style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <div className="rounded-xl">
      <p className="font-bold text-xl">{RName} 음식은 어떠셨어요?<br/><br/><br/>점수를 입력해주세요!</p>
      <input placeholder="1-5" style={{marginTop: '10px'}}></input>점
      <br/>
      <p className="font-bold text-xl" style={{marginTop: '30px'}}>리뷰를 입력해주세요!</p>
      <input placeholder="리뷰" style={{marginTop: '10px'}}></input>
      <br/>
      <button className="text-xl rounded-xl" style={{marginTop: '30px', background: '#afafaf',padding: '10px'}} onClick={() => {setRWriteReviewOpen(false);setRDataOpen(true);}}>리뷰 작성하기</button>
      </div>
    </div>
  );
}

export default ReviewWrite;
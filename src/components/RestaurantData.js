import React from "react";

const RestaurantData = ({
  setRListOpen,
  setRDataOpen,
  name,
  nums,
  score,
  setRWriteReviewOpen,
}) => {
  console.log(setRWriteReviewOpen);
  function onBackClick() {
    setRListOpen(true);
    setRDataOpen(false);
  }

  return (
    <div className="flex flex-col border-[1px] border-solid border-green-500">
      <button
        className="font-bold rounded-full border-solid border-2 border-orange-300 mt-4"
        onClick={onBackClick}
      >
        Back
      </button>
      <button className="font-bold rounded-full border-solid border-2 border-orange-300 mt-4 mb-6">
        My Page
      </button>
      <div className="flex p-[10px] justify-between">
        <div className="w-full border-solid border-2 border-slate-300 rounded-lg">
          <h2 className="text-center">{name}</h2>
          <h4 className="text-center">
            리뷰 {nums}개, 평점 : {score}
          </h4>
        </div>
      </div>
      <div className="flex p-[10px]">
        <MenuData />
        <ReviewData
          setRDataOpen={setRDataOpen}
          setRWriteReviewOpen={setRWriteReviewOpen}
        />
      </div>
    </div>
  );
};

const MenuData = () => {
  return (
    <div className="w-[48%] p-[10px] border-[1px] border-solid border-green-500">
      <MenuElement menu="토핑킹&수퍼슈프림 L" price="35,400원" />
      <MenuElement menu="립스테이크&쉬림프 L" price="36,900원" />
      <MenuElement menu="(신제품) 토핑킹 리턴즈" price="35,900원" />
      <MenuElement menu="디트로이트 더블 페페로니" price="32,900원" />
      <MenuElement menu="디트로이트 미티 디럭스" price="35,900원" />
      <MenuElement menu="(오) LA BBQ 불고기 L" price="29,900원" />
    </div>
  );
};

const MenuElement = ({ menu, price }) => {
  return (
    <div className="border-[1px] border-solid border-green-500">
      <p>{menu}</p>
      <p>{price}</p>
    </div>
  );
};

const ReviewData = ({ setRDataOpen, setRWriteReviewOpen }) => {
  return (
    <div className="w-[48%] p-[10px] border-[1px] border-solid border-green-500 ml-[10px]">
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <ReviewElement
        user="ABC"
        date="2023.05.11"
        review="맛있어요"
        score="4.0"
      />
      <button
        onClick={() => {
          setRDataOpen(false);
          setRWriteReviewOpen(true);
        }}
      >
        리뷰 남기기
      </button>
    </div>
  );
};

const ReviewElement = ({ user, date, review, score }) => {
  return (
    <div className="border-[1px] border-solid border-green-500">
      <p>
        {user} / {date} / {score}
      </p>
      <p>{review}</p>
    </div>
  );
};

export default RestaurantData;

import React from "react";

const RestaurantData = ({
  setRListOpen,
  setRDataOpen,
  name,
  nums,
  score,
  setRWriteReviewOpen,
}) => {
  console.log(setRWriteReviewOpen)
  function onBackClick() {
    setRListOpen(true);
    setRDataOpen(false);
  }

  return (
    <div className="border-[1px] border-solid border-green-500">
      <div className="flex p-[10px] justify-between">
        <button onClick={onBackClick}>Back</button>
        <div>
          <h2 className="text-center">{name}</h2>
          <h4 className="text-center">
            리뷰 {nums}개, 평점 : {score}
          </h4>
        </div>
        <button>My Page</button>
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
      <MenuElement menu="메뉴" price="10000" />
      <MenuElement menu="메뉴2" price="10000" />
      <MenuElement menu="메뉴3" price="10000" />
      <MenuElement menu="메뉴4" price="10000" />
      <MenuElement menu="메뉴5" price="10000" />
      <MenuElement menu="메뉴6" price="10000" />
      <MenuElement menu="메뉴7" price="10000" />
      <MenuElement menu="메뉴8" price="10000" />
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

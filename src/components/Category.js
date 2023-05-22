import React from "react";
import Map from "./Kakao";

const Category = ({
  setCategoryOpen,
  setRListOpen,
  setMenu,
  handleKFoodButton,
  handleJFoodButton,
  handlefastFoodButton,
  handleschoolFoodButton,
  handlewFoodButton,
  handlecFoodButton,
}) => {
  function onCategoryChoose(menu) {
    setCategoryOpen(false);
    setRListOpen(true);
    setMenu(menu);
  }

  return (
    <div className="border-[1px] border-solid border-green-500 w-[80%] p-[10px] mt-[80px] mx-0">
      <h4 className="w-full font-bold text-center mb-2 select-none">
        메뉴를 선택하세요
      </h4>
      <CategoryElement
        gotid="한식"
        imgsrc="/images/한식.jpg"
        choose={(gotid) => {
          if (gotid === "한식") handleKFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="양식"
        imgsrc="/images/양식.jpg"
        choose={(gotid) => {
          if (gotid === "양식") handlewFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="일식"
        imgsrc="/images/일식.jpg"
        choose={(gotid) => {
          if (gotid === "일식") handleJFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="중식"
        imgsrc="/images/중식.jpg"
        choose={(gotid) => {
          if (gotid === "중식") handlecFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="분식"
        imgsrc="/images/치킨.jpg"
        choose={(gotid) => {
          if (gotid === "분식") handleschoolFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="패스트푸드"
        imgsrc="/images/패스트푸드.jpg"
        choose={(gotid) => {
          if (gotid === "패스트푸드") handlefastFoodButton();
          onCategoryChoose(gotid);
        }}
      />
    </div>
  );
};

const CategoryElement = ({ gotid, imgsrc, choose }) => {
  return (
    <div
      id={gotid}
      onClick={() => choose(gotid)}
      className="hover:bg-[#e1e1e1] duration-150 flex flex-col p-2 border-[1px] border-solid border-orange-500 p-[0px] flex mb-6 rounded-lg cursor-pointer"
    >
      <img
        className="rounded-full"
        width="144px"
        height="96px"
        src={imgsrc}
        alt=""
      />
      <p className="text-center mt-4">{gotid}</p>
    </div>
  );
};

export default Category;

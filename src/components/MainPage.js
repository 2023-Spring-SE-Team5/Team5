import Category from "./Category";
import RestaurantList from "./RestaurantList";
import RestaurantData from "./RestaurantData";
import ReviewWrite from "./ReviewWrite";
import { useState } from "react";

const MainPage = () => {
  const [CategoryOpen, setCategoryOpen] = useState(true);
  const [RListOpen, setRListOpen] = useState(false);
  const [RDataOpen, setRDataOpen] = useState(false);
  const [WriteReviewOpen, setRWriteReviewOpen] = useState(false);
  const [Menu, setMenu] = useState("");
  const [RName, setRName] = useState("");
  const [RNums, setRNums] = useState("");
  const [RScore, setRScore] = useState("");

  console.log(setRWriteReviewOpen);
  console.log('asd');

  return (
    <div>
      {CategoryOpen && (
        <Category
          setCategoryOpen={setCategoryOpen}
          setRListOpen={setRListOpen}
          setMenu={setMenu}
        />
      )}
      {RListOpen && (
        <RestaurantList
          setCategoryOpen={setCategoryOpen}
          setRListOpen={setRListOpen}
          setRDataOpen={setRDataOpen}
          menu={Menu}
          setMenu={setMenu}
          setName={setRName}
          setNums={setRNums}
          setScore={setRScore}
        />
      )}
      {RDataOpen && (
        <RestaurantData
          setRListOpen={setRListOpen}
          setRDataOpen={setRDataOpen}
          name={RName}
          nums={RNums}
          score={RScore}
          setRWriteReviewOpen={setRWriteReviewOpen}
        />
      )}
      {WriteReviewOpen && (
        <ReviewWrite
          setRWriteReviewOpen={setRWriteReviewOpen}
          setRDataOpen={setRDataOpen}
          RName={RName}
        />
      )}
    </div>
  );
};

export default MainPage;

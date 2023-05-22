import React from "react";
import { locations } from "../data/locations";
// import Map from "./Kakao.jsx";

const RestaurantList = ({
  setCategoryOpen,
  setRListOpen,
  setRDataOpen,
  menu,
  setMenu,
  setName,
  setNums,
  setScore,
}) => {
  const filteredLocations = locations.filter((location) => {
    switch (menu) {
      case "한식":
        return location.category === "kfood";
      case "일식":
        return location.category === "jfood";
      case "중식":
        return location.category === "cfood";
      case "양식":
        return location.category === "wfood";
      case "분식":
        return location.category === "schoolfood";
      case "패스트푸드":
        return location.category === "fastfood";
      default:
        return location;
    }
  });

  function onBackClick() {
    window.jfoodMarkers.forEach((item) => {
      item.marker.setMap(null); // Set marker map to null
      item.infowindow.close(); // Close infowindow
    });
    window.fastfoodMarkers.forEach((item) => {
      item.marker.setMap(null); // Set marker map to null
      item.infowindow.close(); // Close infowindow
    });
    window.cfoodMarkers.forEach((item) => {
      item.marker.setMap(null); // Set marker map to null
      item.infowindow.close(); // Close infowindow
    });
    window.wfoodMarkers.forEach((item) => {
      item.marker.setMap(null); // Set marker map to null
      item.infowindow.close(); // Close infowindow
    });
    window.kfoodMarkers.forEach((item) => {
      item.marker.setMap(null); // Set marker map to null
      item.infowindow.close(); // Close infowindow
    });
    window.schoolfoodMarkers.forEach((item) => {
      item.marker.setMap(null); // Set marker map to null
      item.infowindow.close(); // Close infowindow
    });
    setCategoryOpen(true);
    setRListOpen(false);
    setMenu("");
  }

  function onRestaurantChoose(name, nums, score) {
    setRListOpen(false);
    setRDataOpen(true);
    setName(name);
    setNums(nums);
    setScore(score);
  }

  return (
    <div className="flex flex-col border-[1px] border-solid border-green-500 p-[10px] w-[150%] mt-[80px]">
      <h5 className="text-lg font-bold text-center">menu</h5>
      <h5 className="text-base text-center mb-4">{menu}</h5>
      <select
        name="order"
        className="mb-4 border-2 border-solid border-green-500 rounded-lg"
      >
        <option value="RECO">추천순</option>
        <option value="DIST">거리순</option>
      </select>
      {filteredLocations.map((location) => (
        <RestaurantElement
          name={location.name}
          dist="0.9km"
          choose={onRestaurantChoose}
        />
      ))}
      <button
        className="font-bold rounded-full border-solid border-2 border-orange-300 mt-6"
        onClick={onBackClick}
      >
        Back
      </button>
    </div>
  );
};

const RestaurantElement = ({ name, dist, choose }) => {
  return (
    <div
      onClick={() => choose(name, 11, 4.2)}
      className="border-[1px] border-solid border-green-500 mb-4 cursor-pointer"
    >
      <p className="text-center">{name}</p>
      <p className="mt-4 text-center font-bold">{dist}</p>
    </div>
  );
};

export default RestaurantList;

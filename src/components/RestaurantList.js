import React from "react";

const RestaurantList = ({setCategoryOpen, setRListOpen, setRDataOpen, menu, setMenu, setName, setNums, setScore}) => {

    function onBackClick(){
        setCategoryOpen(true);
        setRListOpen(false);
        setMenu('');
    }

    function onRestaurantChoose(name, nums, score){
        setRListOpen(false);
        setRDataOpen(true);
        setName(name);
        setNums(nums);
        setScore(score);

    }
    
    return(
        <div style={{border: '1px solid green', padding: '10px', width: "15%"}}>
            <h5>menu</h5>
            <h5>{menu}</h5>
            <button onClick={onBackClick}>Back</button>
            <select name="order">
                <option value="RECO">추천순</option>
                <option value="DIST">거리순</option>
            </select>
            <RestaurantElement name='본찌' dist="0.9km" choose={onRestaurantChoose} reviewnums='11' score='4.2'/>
            <RestaurantElement name='일미' dist="0.9km" choose={onRestaurantChoose} reviewnums='166' score='4.7'/>
            <RestaurantElement name='옛이야기' dist="0.9km" choose={onRestaurantChoose} reviewnums='22' score='4.0'/>
            <RestaurantElement name='알촌' dist="0.9km" choose={onRestaurantChoose} reviewnums='32' score='4.4'/>
            <RestaurantElement name='우리집밥' dist="0.9km" choose={onRestaurantChoose} reviewnums='10' score='4.0'/>
            <RestaurantElement name='포크포크' dist="0.9km" choose={onRestaurantChoose} reviewnums='4' score='4.3'/>
            <RestaurantElement name='왕돈까스' dist="0.9km" choose={onRestaurantChoose} reviewnums='5' score='4.6'/>
            <RestaurantElement name='오아저씨' dist="0.9km" choose={onRestaurantChoose} reviewnums='9' score='4.1'/>
            <RestaurantElement name='바른김밥' dist="0.9km" choose={onRestaurantChoose} reviewnums='111' score='4.0'/>
        </div>
    );
}


const RestaurantElement = ({name, dist, choose, reviewnums, score})=> {
    return(
        <div onClick={()=>choose(name, reviewnums, score)} style={{border: '1px solid green'}}>
            <p>{name}</p>
            <p>{dist}</p>
        </div>
    );
}

export default RestaurantList;

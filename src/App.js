import './App.css';
import React from "react";


function Map({ numberArray }) {
  let arrayList = [];

  numberArray.forEach((element, index) => {
    arrayList.push(element * 2);
  });

  // console.log("numberArray: ", numberArray);
  //console.log("arrayList: ", arrayList);

  return arrayList;
}


const App = () => {
  const array = [1, 2, 3, 4, 5];

  //  <Map numberArray={array} /> // It would be better to use this when it is relevant for UI purposes.
  const mappedArray = Map({ numberArray: array })
  console.log("mappedArray:", mappedArray);

}

export default App;

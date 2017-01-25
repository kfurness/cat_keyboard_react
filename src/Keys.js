import React from 'react';

import css from "./styles/Keys.css";


let arr = [];
const makeImgArr = () =>  {
  for( let i = 0; i <= 9; i++) {
    let img = "cat" + i;
    console.log(img);
    // let element =  `<img src={${img}} alt="${img}"/>`
    // arr.push(element);
    arr.push(img);
  }
}

makeImgArr();


class Keys extends React.Component {
  Details = [
    {
      image: require("./images/cat.jpg")
    },
    {
      image: require("./images/cat1.jpg")
    },
    {
      image: require("./images/cat2.jpg")
    },
    {
      image: require("./images/cat3.jpg")
    },
    {
      image: require("./images/cat4.jpg")
    },
    {
      image: require("./images/cat5.jpg")
    },
    {
      image: require("./images/cat6.jpg")
    },
    {
      image: require("./images/cat7.jpg")
    },
    {
      image: require("./images/cat8.jpg")
    }
  ]

  render () {


    return (
      <div className="keys">
        <p>Test</p>
        {this.Details.map((c, i) => {
         return  <img className="key" src={c.image} alt={c} key={i}/>
        }) }
      </div>
    )
  }
}


export default Keys;

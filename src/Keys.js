import React from 'react';

import css from "./styles/Keys.css";



class Keys extends React.Component {
  Details = [
    {
      image: require("./images/cat.jpg"),
      letter: "A",
      key: "65"
    },
    {
      image: require("./images/cat1.jpg"),
      letter: "S",
      key: "83"
    },
    {
      image: require("./images/cat2.jpg"),
      letter: "D",
      key: "68"
    },
    {
      image: require("./images/cat3.jpg"),
      letter: "F",
      key: "70"
    },
    {
      image: require("./images/cat4.jpg"),
      letter: "G",
      key: "71"
    },
    {
      image: require("./images/cat5.jpg"),
      letter: "H",
      key: "72"
    },
    {
      image: require("./images/cat6.jpg"),
      letter: "J",
      key: "74"
    },
    {
      image: require("./images/cat7.jpg"),
      letter: "K",
      key: "75"
    },
    {
      image: require("./images/cat8.jpg"),
      letter: "L",
      key: "76"
    }
  ]

  render () {


    return (
      <div className="keys">
        {this.Details.map((c, i) => {
         return  (
           <div className="keyDiv" data-key={c.key}>
             <img className="keyImg"  src={c.image} alt={c} key={i}/>
             <h1 className="keyLetter">{c.letter}</h1>
           </div>
           )
        }) }
      </div>
    )
  }
}


export default Keys;

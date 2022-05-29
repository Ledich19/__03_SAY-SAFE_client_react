import React from 'react';
import Button from '../Button';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link,   useParams
} from "react-router-dom"


const Person = ({ person , togleFavirite}) => {


  useEffect(() => {
    let divs = document.querySelectorAll(".peoples__item"), timer, pause = 1;
    function resizeDivs() {
      const width = divs[0].offsetWidth * 1;
      [].forEach.call(divs, function (el) {
        el.style.height = width + "px";
      });
    }
    window.addEventListener("resize", function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(resizeDivs, pause);
    });
    resizeDivs();
  })

  

  return (
    <div className="peoples__item item-person">
      <div className="item-person__photo">
        <img src={person.photo} alt="face" />
      </div>
      <div className="item-person__name">{person.name}{person.lastname}{person.patronymic}</div>
      <div className="item-person__statistic">statistic<span>{person.raiting}</span></div>
      <div className="item-person__buttons">
      <Link to={`/persons/${person.id}`} className="item-person__start">
        start talk
      </Link>
        
        <Button onClick={togleFavirite} className="item-person__add" text={person.follow ? "unfollow" : "follow"} />
      </div>
    </div>
  )

}

export default Person
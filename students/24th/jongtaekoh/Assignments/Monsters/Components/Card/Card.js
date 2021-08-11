import React, { Component } from "react";
import "./Card.scss";

/***********************************************************
  Card 컴포넌트 구조
    <img src=이미지주소 alt="">
	  <h2>Name</h2>
	  <p>Email</p>

  Card 컴포넌트에서 props로 받아야하는 데이터는 id, name, email 입니다.
  props에서 해당하는 키값들을 추출하여 위와 같은 구조로 만들어주세요!

  이미지주소: `https://robohash.org/${숫자}?set=set2&size=180x180`
  카드마다 다른 이미지를 보여주기 위해
  위 주소의 숫자 부분을 props로 내려받은 id로 대체하셔야 합니다.

  Name 과 Email 도 마찬가지입니다.
***********************************************************/

class Card extends Component {
  render() {
    return (
      <div className="card-container"></div>
    );
  }
}

export default Card;

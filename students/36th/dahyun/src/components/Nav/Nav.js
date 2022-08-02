import React from 'react';
import './Nav.css';

export const Nav = () => {
  return (
    <header class="header-logo">
      <nav class="nav-logo">
        <div class="logo">
          <a href="#!">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <h1 class="logo-title">
            <a href="#!">Instagram</a>
          </h1>
        </div>
        <div class="search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="searchBar" type="text" placeholder="검색" />
        </div>
        <div class="navbar">
          <a href="#!">
            <img src="images/explore.png" alt="탐색" />
          </a>
          <a href="#!">
            <img src="images/heart.png" alt="좋아하는 페이지" />
          </a>
          <a href="#!">
            <img src="images/profile.png" alt="유저 프로필" />
          </a>
        </div>
      </nav>
    </header>
  );
};

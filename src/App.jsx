import React from "react";
import { Wrapper } from "./style";
import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Body1 from "./Body1";
import Body2 from "./Body2";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik";
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Wrapper.TopLine>
          <p>Get your dream house in a week.</p>
          <img src="/public/IMAGE.svg" alt="" />
        </Wrapper.TopLine>

        <Wrapper.Nav>
          <img src="public/mainLogo.svg" alt="" />
          <ul>
            <li>Home</li>
            <li>
              Properties <img src="public/arrowDown.png" alt="" />
            </li>
            <li>About</li>
            <li>Contact</li>
            <li>
              Search <img src="public/search.png" alt="" />
            </li>
            <li>
              <Wrapper.button1>
                <img src="public/shopbag.svg" alt="" />
                Cart
              </Wrapper.button1>
            </li>
            <li>
              <Wrapper.button2>Find a prperty</Wrapper.button2>
            </li>
          </ul>
        </Wrapper.Nav>

        <Wrapper.Mainnav>
          <Wrapper.div1>
            <Wrapper.div1.img1 src="public/headerRight.svg" alt="" />
            <span>Find your dream place</span>
            <Wrapper.div1.h1>
              Find house for your family in minutes
            </Wrapper.div1.h1>
            <p>
              Aenean sodales mauris quis tellus facilisis, vel mattis magna.
              Interdum curabitur eget aliquam elit in mauris purus.
            </p>
            <div>
              <input placeholder="Search" />
              <Wrapper.button2>Find property</Wrapper.button2>
            </div>
            <Wrapper.div1.img2 src="public/HeaderLeft.svg" alt="" />
          </Wrapper.div1>

          <Wrapper.div2>
            <img src="public/headerMain.png" alt="" />
          </Wrapper.div2>
        </Wrapper.Mainnav>
      </Wrapper>
      <Body1 />
      <Body2 />
    </div>
  );
}

export default App;

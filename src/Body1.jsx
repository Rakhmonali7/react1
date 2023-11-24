import React from "react";
import { Container } from "./bstyle";
import HowCard from "./HowCard";
import "./App.css";
import icon from "/house.png";
import icon2 from "/receipt.png";
import icon3 from "/key.png";
import { Wrapper } from "./style";
function Body1() {
  return (
    <div>
      <Container>
        <Container.Undernav>
          <div>
            <p>As seen on the world's best magazines and media</p>
          </div>
          <div>
            <img src="public/logoipsum.svg" alt="" />
            <img src="public/ipsum2.svg" alt="" />
            <img src="public/ipsum3.svg" alt="" />
            <img src="public/ipsum4.svg" alt="" />
            <img src="public/ipsum5.svg" alt="" />
          </div>
        </Container.Undernav>
        <Container.How>
          <div>
            <h1>How it works</h1>
            <p>
              Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id
              efficitur pellentesque. Maecenas varius felis felis.
            </p>
          </div>
          <div>
            <HowCard
              icon={icon}
              title="Find property"
              txt="Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non."
            />
            <HowCard
              icon={icon2}
              title="Make a deal"
              txt="Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi."
            />
            <HowCard
              icon={icon3}
              title="Get your keys"
              txt="Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat."
            />
          </div>
        </Container.How>
        <Container.Thebest>
          <Container.Thebest.Left>
            <span>Comfort first</span>
            <h2>The best houses for family comfort</h2>
            <p>
              Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin
              sollicitudin, lorem non posuere blandit.
            </p>
            <div>
              <Wrapper.button1>Explore properties</Wrapper.button1> Contact
              agent
            </div>
          </Container.Thebest.Left>
          <Container.Thebest.Right>
            <img src="public/img2.png" alt="" />
          </Container.Thebest.Right>
        </Container.Thebest>

        <Container.Thebest>
          <Container.Thebest.Right>
            <img src="public/img3.png" alt="" />
          </Container.Thebest.Right>

          <Container.Thebest.Left>
            <span>Comfort first</span>
            <h2>Fast forward process</h2>
            <p>
              Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit
              amet mi arcu praesent nec felis nisl.
            </p>

            <div>
              <Wrapper.button1>Explore properties</Wrapper.button1> Contact
              agent
            </div>
          </Container.Thebest.Left>
        </Container.Thebest>
      </Container>
    </div>
  );
}
export default Body1;

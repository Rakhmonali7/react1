import styled from "styled-components";

const Wrapper = styled.div``;

Wrapper.TopLine = styled.div`
  width: 100%;
  height: 2.5rem;
  background: #939878;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  p {
    color: #fff;
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
  }
  img {
    position: absolute;
    right: 2.5rem;
  }
`;
Wrapper.Nav = styled.nav`
  width: 100%;
  height: 4.625rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 48.6875rem;
    width: 100%;
  }
  ul li {
    list-style-type: none;
  }
`;
Wrapper.button1 = styled.button`
  border-radius: 0.375rem;
  border: 1px solid #e7e8e3;
  width: 6.25rem;
  height: 2.625rem;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.56rem 1.31rem;
`;
Wrapper.button2 = styled.button`
  width: 9.9375rem;
  height: 2.625rem;
  border-radius: 0.375rem;
  border: 1px solid #cf6f49;
  color: #fff;
  background: #cf6f49;
`;
Wrapper.Mainnav = styled.div`
  width: 100%;
  height: calc(100% - 7.15rem);
  display: flex;
`;
Wrapper.div1 = styled.div`
  flex: 1;
  padding: 9.97rem 5rem;
  position: relative;
  background: #f3f3f3;
  p {
    color: #65665c;
    width: 29.2375rem;
    border: 1px solid;
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
  }
  span {
    color: #2a2c1f;
    padding: 0.25rem 0.75rem;
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
    width: 10.6875rem;
    height: 1.8125rem;
    border-radius: 2rem;
    background: #e7e8e3;
  }
  input {
    width: 19.375rem;
    height: 3rem;
  }
`;
Wrapper.div1.img1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;
Wrapper.div1.img2 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
Wrapper.div1.h1 = styled.h1`
  max-width: 32.25rem;
  width: 100%;
  color: #2a2c1f;
  font-family: Roboto;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4.2rem;
`;
Wrapper.div2 = styled.div`
  flex: 1;
`;
export { Wrapper };

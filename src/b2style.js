import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: fit-content;
  background: #f5f5f2;
  padding: 8rem 5rem;
`;
Box.Section1 = styled.div`
  h1 {
    max-width: 42.1875rem;
    width: 100%;
    color: #2a2c1f;
    text-align: center;
    font-size: 3rem;
    line-height: 3.6rem;
    margin: 0 auto 5rem auto;
  }
  div:last-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
Box.Section1.Pi = styled.p`
  width: 6.75rem;
  height: 2.5125rem;
  border-radius: 2rem;
  background: #e7e8e3;
  padding: 0.35rem, 0.85rem;
  margin: 0 auto;
  text-align: center;
  line-height: 2.5125rem;
`;
Box.Card = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    width: 25.3125rem;
    height: 16.75rem;
  }
  div:last-child {
    display: flex;
    width: 25.333rem;
    height: 12rem;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: flex-start;
    background: #fff;
    border-radius: 0 0 20px 20px;
    margin-bottom: 2rem;
  }
`;
Box.Divv = styled.div`
  display: flex;
  gap: 3rem;
`;
export { Box };

import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  padding: 4rem 5rem;
  height: content-fit;
`;
Container.Undernav = styled.div`
  width: 100%;
  height: content-fit;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:first-child p {
    max-width: 15.1875rem;
    width: 100%;
    color: #2a2c1f;
    font-family: Rubik;
    font-size: 0.98rem;
  }
  div:last-child {
    display: flex;
    gap: 2rem;
  }
  margin-bottom: 7.81rem;
`;

Container.How = styled.div`
  h1 {
    max-width: 20.3125rem;
    margin: 0 auto 2rem auto;
    text-align: center;
    color: #2a2c1f;
    font-size: 3rem;
  }
  p {
    max-width: 47.125rem;
    width: 100%;
    color: #65665c;
    margin: 0 auto 2rem auto;
    text-align: center;

    font-size: 1.125rem;
    font-style: normal;

    line-height: 1.6875rem;
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
  }
`;
Container.Card = styled.div`
  max-width: 25.3125rem;
  width: 100%;
  height: 18.1875rem;
  border-radius: 1rem;
  border: 1px solid #e7e8e3;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 2rem;
  h4 {
    color: #2a2c1f;
    font-size: 1.3rem;
  }
  p {
    max-width: 21.125rem;
    width: 100%;
    color: #65665c;
    font-size: 1rem;
    text-align: center;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
Container.Thebest = styled.div`
  margin: 8rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;
Container.Thebest.Left = styled.div`
  padding: 8rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    border-radius: 2rem;
    background: #e7e8e3;
    color: #2a2c1f;
    width: 6.6875rem;
    height: 1.8125rem;
    padding: 0.25rem 0.75rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
  h2 {
    max-width: 28.3125rem;
    width: 100%;
    color: #2a2c1f;
    font-size: 3rem;
    line-height: 3.6rem;
  }
  p {
    max-width: 32.5rem;
    width: 100%;
    color: #65665c;
    font-size: 1.125rem;
    line-height: 1.6875rem;
  }
  div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  section {
    display: flex;
  }
`;
Container.Thebest.Right = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export { Container };

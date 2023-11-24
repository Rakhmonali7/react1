import { Container } from "./bstyle";

function HowCard(props) {
  return (
    <div>
      <Container.Card>
        <img src={props.icon} />
        <h4>{props.title}</h4>
        <p>{props.txt}</p>
      </Container.Card>
    </div>
  );
}

export default HowCard;

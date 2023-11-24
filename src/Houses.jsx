import { Box } from "./b2style";

function Houses(props) {
  return (
    <div>
      <Box.Card>
        <div>
          <img src={props.icon} />
        </div>
        <div>
          <h3>{props.header}</h3>
          <p>{props.price}</p>
          <p>{props.location}</p>
        </div>
      </Box.Card>
    </div>
  );
}

export default Houses;

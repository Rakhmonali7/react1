import React from "react";
import { Box } from "./b2style";
import Houses from "./Houses";
import Button from "./Button";
import icon from "/im.png";
import icon1 from "/im1.png";
import icon2 from "/im2.png";
import icon3 from "/im3.png";
import icon4 from "/im4.png";
import icon5 from "/im5.png";
import Button from "./Button";
function Body2() {
  return (
    <div>
      <Box>
        <Box.Section1>
          <div>
            <Box.Section1.Pi>Properties</Box.Section1.Pi>
            <h1>Houses in your favorite area</h1>
          </div>
          <div>
            <Houses
              icon={icon}
              header="Cozy studio in Los Angeles"
              price="$ 1,200.00 USD"
              location="🧭 2263 Southlea, Los Angeles"
            />
            <Houses
              icon={icon1}
              header="Tiny home in San Diego"
              price="$ 740,000.00 USD"
              location="🧭 2569 El Segundo, San Diego"
            />
            <Houses
              icon={icon2}
              header="Crown house in New York"
              price="$ 980,000.00 USD"
              location="🧭 4489 Smity Fielda, New York"
            />
            <Houses
              icon={icon3}
              header="Family house in Los Angeles"
              price="$ 4,200.00 USD"
              location="🧭 2263 Southlea, Los Angeles"
            />
            <Houses
              icon={icon4}
              header="Studio in Las Vegas"
              price="$ 820,000.00 USD"
              location="🧭 2569 Halls Corner, Las Vegas"
            />
            <Houses
              icon={icon5}
              header="San Diego story"
              price="$ 3,700.00 USD"
              location="🧭 2569 El Segundo, San Diego"
            />
          </div>
        </Box.Section1>
        <Button />
      </Box>
    </div>
  );
}

export default Body2;

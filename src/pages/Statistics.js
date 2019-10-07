import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.svg";
import Logo from "../assets/logoAkson.svg";

export default class Statistics extends Component {
  render() {
    return (
      <div style={style.bgStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <img src={Logo} alt="logoAkson" style={style.logoStyle}></img>
                
                <div className="row">
                  <div
                    className="col-md-12 text-center bg-warning"
                    style={style.whiteContainerStyle}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis dignissimos reiciendis voluptates quas ad velit,
                    nemo blanditiis similique ea sit id ab, a mollitia excepturi
                    temporibus sequi adipisci vel hic. Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Quasi nisi est, aperiam
                    expedita facilis explicabo eveniet ad. Aliquid eum ad
                    numquam, ducimus fugiat vel modi quae, explicabo cum dolorem
                    ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum enim aut odio, quis excepturi ipsa consectetur autem
                    assumenda. Earum omnis consequatur laboriosam voluptas
                    tenetur. Ut temporibus esse similique maiores blanditiis!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum excepturi aspernatur tempora mollitia fuga, ratione
                    dolores adipisci! Asperiores aliquid laboriosam laborum
                    assumenda sed. Est, officiis! Accusamus odit rem nemo dolor.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis dolores magnam maiores suscipit eum ab
                    consequuntur ipsa, sed laborum incidunt voluptates quos
                    ratione eius voluptatem impedit hic sapiente quam quasi!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  bgStyle: {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Background})`,
    height: "100vh"
  },

  logoStyle: {
    right: "0",
    position: "absolute"
  },

  whiteContainerStyle: {
    boxShadow: "10px 10px 5px grey",
    maxWidth: "75%",
    // align: "center",
    margin:"auto",
  }
};

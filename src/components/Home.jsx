import { Link } from "react-router-dom";
import logo2 from "./resources/logo2.png";
import styled from "styled-components";
import fondo from "./resources/fondo.png";
import "./Home.css";

/* /images/Logo.jpg";
 */
function Home() {
  return (
    <section className="first-page">
      <Container>
        <nav className="navbar mx-auto">
        <img
              src={logo2}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          <h1 className="navbar-brand">
            Vegan Bunker 
          </h1>
        </nav>
        <Bgimage>
        <section className="home-buttons-container">
              <Link to="/waitress">
                <button className="btn btn-info">Meserx</button>
              </Link>
              <Link to="/kitchen">
                <button className="btn btn-info">Cocinerx</button>
                </Link>
        </section>
        </Bgimage>
      </Container>
    </section>
  );
}

export default Home;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Bgimage = styled.main`
  background-image: url(${fondo});
  height: 89vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

/* const HomeButtons = styled.main`
  border: solid 1rem black;
`; */

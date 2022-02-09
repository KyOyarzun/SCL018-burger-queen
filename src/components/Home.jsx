import { Link } from "react-router-dom";
import bunkerLogo from "./images/bunkerLogo.jpg";
import styled from "styled-components";
/* /images/Logo.jpg";
 */
function Home () {
    return (
      <section>
                <Container>
          <nav className="navbar navbar-light bg-light mx-auto">
          <h1 className="navbar-brand">
          <img src={bunkerLogo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Vegan Bunker</h1>
        </nav>
        <section>
          <Link to="/waitress"><button>Meserx</button></Link>
          <Link to="/kitchen"><button>Cocinerx</button></Link>
        </section>
        </Container>
      </section>
    )
  }

export default Home;

const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`;
import { Link } from "react-router-dom";

function Home () {
    return (
      <section>
        <nav class="navbar">
          <h1>Vegan Bunker</h1>
        </nav>
        <div>
          <Link to="/waitress"><button>Meserx</button></Link>
          <button>Cocinerx</button>
        </div>
      </section>
    )
  }

export default Home;
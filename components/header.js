import { useRouter } from 'next/router';

const HeaderComponent = () => {
  const router = useRouter();

  // TODO: active navigation

  return (
    <>
      <header className="main-header sticky-header">
        <div className="container-fluid clearfix">
          <div className="logo">
            <figure>
              <a href="index.html">
                <img src="images/logo.png" alt="logo personal-hr" />
              </a>
            </figure>
          </div>
          <nav className="main-menu">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse clearfix">
              <ul className="navigation clearfix">
                <li className="current">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about">Over personal HR</a>
                </li>
                <li className="dropdown">
                  <a href="#">Diensen & kosten</a>
                  <ul>
                    <li>
                      <a href="diensten-en-kosten/werkgevers">Werkgevers / ondernemers</a>
                    </li>
                    <li>
                      <a href="diensten-en-kosten/werknemers">Werknemers / particulieren</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;

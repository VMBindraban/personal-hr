import { useRouter } from 'next/router';

const HeaderComponent = () => {
  const router = useRouter();

  // TODO: active navigation

  return (
    <>
      <header className="main-header sticky-header">
        <div className="container-fluid clearfix">
          <div className="logo">
            <a href="/">
              <img src="/img/logo_full_small.png" alt="logo personal-hr" />
            </a>
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
                  <a href="/over-phr">Over personal HR</a>
                </li>
                <li className="dropdown">
                  <a href="#">Diensen & kosten</a>
                  <ul>
                    <li>
                      <a href="/diensten/werkgever">Werkgevers / ondernemers</a>
                    </li>
                    <li>
                      <a href="/diensten/werknemer">Werknemers / particulieren</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
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

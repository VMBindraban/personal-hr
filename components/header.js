import { useRouter } from 'next/router';

const HeaderComponent = () => {
  const router = useRouter();

  const toggleMenu = () => {
    const nav = document.querySelector('.navbar-collapse');

    if (nav) {
      nav.classList.toggle("collapse");
    }
  }

  return (
    <>
      <header className="main-header sticky-header">
        <div className="container-fluid clearfix">
          <div className="logo">
            <a href="/">
              <img src="/img/logo_full_small@2.png" alt="logo personal-hr" height="60" />
            </a>
          </div>
          <nav className="main-menu">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                onClick={toggleMenu}
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse clearfix">
              <ul className="navigation clearfix">
                <li className={router.route === '/' ? 'active' : ''}>
                  <a href="/">Home</a>
                </li>
                <li className={router.route === '/over-phr' ? 'active' : ''}>
                  <a href="/over-phr">Over personal HR</a>
                </li>
                <li
                  className={
                    ['/diensten/werkgever', '/diensten/werknemer'].includes(router.route)
                      ? 'dropdown active'
                      : 'dropdown'
                  }
                >
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
                <li className={router.route === '/contact' ? 'active' : ''}>
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

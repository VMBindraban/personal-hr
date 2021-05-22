const WelcomeComponent = ({ attributes }) => {
  return (
    <>
      <section className="wellcome-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Welcome to digency</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="item-holder text-center">
                <div className="icon-box">
                  <i className="flaticon-vector"></i>
                </div>
                <div className="text">
                  <a href="#">
                    <h5>Clean Design</h5>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtempor incid.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="item-holder text-center">
                <div className="icon-box">
                  <i className="flaticon-computer"></i>
                </div>
                <div className="text">
                  <a href="#">
                    <h5>Web Development</h5>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtempor incid.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="item-holder text-center">
                <div className="icon-box">
                  <i className="flaticon-bar-chart"></i>
                </div>
                <div className="text">
                  <a href="#">
                    <h5>Market Analysis</h5>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtempor incid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeComponent;

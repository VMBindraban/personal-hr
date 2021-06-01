const WelcomeComponent = ({ attributes }, hideIcons = false) => {
  return (
    <>
      <section className="wellcome-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>{attributes?.main_title || ''}</h2>
            <p>{attributes?.main_text || ''}</p>
          </div>
          {hideIcons && (
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="item-holder text-center">
                  <div className="icon-box">
                    <i className={`flaticon-${attributes?.section1_icon}`}></i>
                  </div>
                  <div className="text">
                    <h5>{attributes?.section1_title || ''}</h5>
                    <p>{attributes?.section1_text || ''}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="item-holder text-center">
                  <div className="icon-box">
                    <i className={`flaticon-${attributes?.section2_icon}`}></i>
                  </div>
                  <div className="text">
                    <h5>{attributes?.section2_title || ''}</h5>
                    <p>{attributes?.section2_text || ''}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="item-holder text-center">
                  <div className="icon-box">
                    <i className={`flaticon-${attributes?.section3_icon}`}></i>
                  </div>
                  <div className="text">
                    <h5>{attributes?.section3_title || ''}</h5>
                    <p>{attributes?.section3_text || ''}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WelcomeComponent;

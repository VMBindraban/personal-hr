const contentImage = ({ attributes }) => {
  return (
    <section className="choose-us">
      <div className="container">
        <div className="section-title text-center">
          <h2>{attributes?.main_title || ''}</h2>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12">
          {attributes.main_text && (
            <div className="text">
              <p>{attributes.main_text}</p>
            </div>
          )}
          {attributes.main_text2 && (
            <div className="content-text">
              <p>{attributes.main_text2}</p>
            </div>
          )}
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 text-center">
          <img src={attributes.image} className="img" alt="Melissa Franken" />
        </div>
      </div>
    </section>
  );
};

export default contentImage;

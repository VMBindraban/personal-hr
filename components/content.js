const Content = ({ attributes }) => {
  return (
    <section className="choose-us">
      <div className="container">
        <div className="section-title text-center">
          <h2>{attributes?.main_title || ''}</h2>
        </div>
        <div className="col-lg-12">
          {attributes.main_text && (
            <div className="text">
              <p dangerouslySetInnerHTML={{ __html: attributes.main_text }} />
            </div>
          )}
          {attributes.main_text2 && (
            <div className="content-text">
              <p dangerouslySetInnerHTML={{ __html: attributes.main_text2 }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;

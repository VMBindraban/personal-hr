const Banner = ({ attributes }) => {
  return (
    <section
      className="page-title"
      style={{ background: `url('${attributes.banner_image || ''}')` }}
    >
      <div className="container text-center">
        <div className="title">
          <h4>{attributes.banner_title || ''}</h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;

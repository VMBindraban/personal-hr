const CTA = ({ attributes }) => {
  return (
    <section className="cta-section" style={{ background: `url('/${attributes.cta_image}')` }}>
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: attributes.cta_title }} />
        <div className="link-btn">
          <a
            href="mailto:melissa.franken@personalhr.nl?subject=Riscoscan%20aanvragen"
            className="btn-style-one"
          >
            {attributes.cta_text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

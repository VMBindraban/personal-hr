const Contact = ({ attributes }) => {
  return (
    <section className="contact-section style-two">
      <div className="container">
        <div className="section-title text-left">
          <h2>{attributes.contact_title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="left-side">
              <form
                id="contact_form"
                name="contact-formulier"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact-formulier" />
                <div className="hidden">
                  <input name="bot-field" />
                </div>
                <div className="form-group">
                  <label htmlFor="form_name">Je naam</label>
                  <input
                    type="text"
                    name="name"
                    id="form_name"
                    className="form-control"
                    required
                    placeholder="Voer je naam in"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form_email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="form_email"
                    className="form-control"
                    placeholder="Voer je email in"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form_phone">Telefoon nummer</label>
                  <input
                    type="tel"
                    name="phone"
                    id="form_phone"
                    className="form-control"
                    required
                    placeholder="Voer je telefoon nummer in"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form_question">Vraag</label>
                  <textarea
                    name="question"
                    id="form_question"
                    className="form-control textarea"
                    placeholder="Vul hier vraag in"
                  ></textarea>
                </div>
                <div className="form-group form-bottom">
                  <button className="btn-style-one" type="submit">
                    Versturen
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="right-side">
              <div className="text">
                <p>{attributes.contact_text}</p>
              </div>
              <ul className="contact-info">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {attributes.contact_address}
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  {attributes.contact_phonenumber}
                </li>
                <li>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  {attributes.contact_email}
                </li>
                <li>KVK: {attributes.contact_kvk}</li>
                <li>BTW: {attributes.contact_taxnumber}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

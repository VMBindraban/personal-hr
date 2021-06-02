const ContactEmployer = ({ attributes }) => {
  return (
    <section className="contact-section style-two no-cta">
      <div className="container">
        <div className="section-title text-center">
          <h2>{attributes.contact_title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12 col-lg-offset-3">
            <form
              id="contact_form"
              name="werknemer-formulier"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="werknemer-formulier" />
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
                  required=""
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
                <label htmlFor="form_employer">Huidige werkgever</label>
                <input
                  type="number"
                  name="current-employer"
                  id="form_employer"
                  className="form-control"
                  required
                  placeholder="Voer je huidige werkgever in"
                />
              </div>
              <div className="form-group">
                <label htmlFor="form_services">Diensten</label>
                <select name="services" className="form-control" required id="form_services">
                  <option>Foo</option>
                  <option>Bar</option>
                  <option>Overige</option>
                </select>
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
      </div>
    </section>
  );
};

export default ContactEmployer;

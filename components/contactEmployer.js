const ContactEmployer = ({ attributes }) => {
  return (
    <section className="contact-section style-two">
      <div className="container">
        <div className="section-title text-center">
          <h2>{attributes.contant_title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12 col-lg-offset-3">
            <form
              id="contact_form"
              name="werkgever-formulier"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="werkgever-formulier" />
              <div class="hidden">
                <input name="bot-field" />
              </div>
              <div className="form-group">
                <label for="name">Je naam</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  placeholder="Voer je naam in"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Voer je email in"
                  required=""
                />
              </div>
              <div className="form-group">
                <label for="phone">Telefoon nummer</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  required
                  placeholder="Voer je telefoon nummer in"
                />
              </div>
              <div className="form-group">
                <label for="employees">Aantal werknemers</label>
                <input
                  type="number"
                  name="employees"
                  className="form-control"
                  required
                  placeholder="Voer het aantal werknemers in"
                />
              </div>
              <div className="form-group">
                <label for="services">Diensten</label>
                <select name="services" multiple className="form-control" required="">
                  <option>Foo</option>
                  <option>Bar</option>
                  <option>Overige</option>
                </select>
              </div>
              <div className="form-group">
                <label for="extra-info">Aanvullende informatie</label>
                <textarea
                  name="extra-info"
                  className="form-control textarea required"
                  placeholder="Vul hier aanvullende informatie in"
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

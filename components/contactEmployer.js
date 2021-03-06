const ContactEmployer = ({ attributes }) => {
  return (
    <section className="contact-section style-two">
      <div className="container">
        <div className="section-title text-center">
          <h2>{attributes.contact_title}</h2>
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
                <label htmlFor="form_employees">Aantal werknemers</label>
                <input
                  type="number"
                  name="amount-employees"
                  id="form_employees"
                  className="form-control"
                  required
                  placeholder="Voer het aantal werknemers in"
                />
              </div>
              <div className="form-group">
                <label htmlFor="form_services">Diensten</label>
                <select name="services" className="form-control" required id="form_services">
                  <option>Controleren en maken van arbeidscontracten</option>
                  <option>Opzetten en evalueren van regelingen en personeelsverzekeringen</option>
                  <option>Begeleiden van verzuim bij medewerkers</option>
                  <option>Werkplek onderzoeken</option>
                  <option>Personeelsadministratie</option>
                  <option>Loopbaanbegeleiding</option>
                  <option>Recruitment</option>
                  <option>Risicoscan</option>
                  <option>Overige</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="form_info">Aanvullende informatie</label>
                <textarea
                  name="extra-info"
                  id="form_info"
                  className="form-control textarea"
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

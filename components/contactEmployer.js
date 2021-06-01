const ContactEmployer = ({ attributes }) => {
  return (
    <section class="contact-section style-two">
      <div class="container">
        <div class="section-title text-center">
          <h2>{attributes.contant_title}</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xs-12 col-lg-offset-3">
            <form id="contact_form" name="contact_form" method="post" netlify>
              <div class="form-group">
                <label for="name">Je naam</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  required
                  placeholder="Voer je naam in"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Voer je email in"
                  required=""
                />
              </div>
              <div class="form-group">
                <label for="phone">Telefoon nummer</label>
                <input
                  type="tel"
                  name="phone"
                  class="form-control"
                  required
                  placeholder="Voer je telefoon nummer in"
                />
              </div>
              <div class="form-group">
                <label for="employees">Aantal werknemers</label>
                <input
                  type="number"
                  name="employees"
                  class="form-control"
                  required
                  placeholder="Voer het aantal werknemers in"
                />
              </div>
              <div class="form-group">
                <label for="services">Diensten</label>
                <select name="services" multiple class="form-control" required="">
                  <option>Foo</option>
                  <option>Bar</option>
                  <option>Overige</option>
                </select>
              </div>
              <div class="form-group">
                <label for="extra-info">Aanvullende informatie</label>
                <textarea
                  name="extra-info"
                  class="form-control textarea required"
                  placeholder="Vul hier aanvullende informatie in"
                ></textarea>
              </div>
              <div class="form-group form-bottom">
                <button class="btn-style-one" type="submit">
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

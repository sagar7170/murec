import React from "react";


function Partners() {
  return (
    <section className="partners">
      <h2 className="partners-title">FROM OUR PARTNERS</h2>

      <div className="partners-wrapper">

        <div className="partner-card">
          <div className="partner-image">
            <img
              src="/images/team_2.webp"
              alt="Bobby Mukherji"
            />
          </div>

          <div className="partner-info">
            <h3>Bobby Mukherji</h3>
            <p>
              “We are engaged to conceptualize the interiors for
              Murec’s clubhouse and tower lobbies, with a focus
              on refined luxury and strong spatial identity.”
            </p>

            <div className="partner-logo bobby-logo">
              <img
                src="/images/bobyloog.png"
                alt="Bobby Mukherji Architects"
              />
            </div>
          </div>
        </div>

        <div className="partner-card">
          <div className="partner-image">
            <img
              src="/images/team_3.webp"
              alt="Goonmeet Ji"
            />
          </div>

          <div className="partner-info">
            <h3>Goonmeet Ji</h3>

            <p>
              “We are engaged to sculpt the architectural vision
              for Murec as a contemporary residential landmark
              —an address conceived for refined urban living,
              where design elegance is thoughtfully interwoven
              with functional planning to shape a premium
              high-rise environment of enduring character and
              aspiration.”
            </p>

            <div className="partner-logo">
              <img
                src="/images/bobyloog2.png"
                alt="Design Forum International"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Partners;
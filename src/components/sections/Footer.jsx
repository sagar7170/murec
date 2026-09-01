import React from "react";


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* Heading */}
        <h2 className="footer-title">THE MUREC TEAM</h2>

        {/* Contact Information */}
        <div className="footer-contacts">

          {/* Address */}
          <div className="footer-contact address">
            <div className="contact-icon">
              <img src="/images/google-maps.png" alt="" />
            </div>

            <div>
              <h3>CORPORATE ADDRESS:</h3>
              <p>
                Madhusudan, 2nd Floor, Riana Towers, 51-52,<br />
                Noida Sector 136, Uttar Pradesh - 201301
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="footer-contact">
            <div className="contact-icon">
              <img src="/images/email.png" alt="" />
            </div>

            <div>
              <h3>EMAIL</h3>
              <p>info@murec.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="footer-contact">
            <div className="contact-icon">
               <img src="/images/call.png" alt="" />
            </div>

            <div>
              <h3>PHONE NUMBER</h3>
              <p>+91 97177 73229</p>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          This website is purely conceptual and not a legal document. All layouts,
          specifications, amenities, and visuals are subject to change as may be
          decided by MUREC or the competent authority. No information herein shall
          be construed as an offer, solicitation, or invitation to purchase.
          Interested parties are requested to verify all details, including
          approvals, specifications, and prices, directly with MUREC before making
          any commitments.
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">

        <div className="footer-powered">
          Powered by Propatcity
        </div>

        <div className="footer-copyright">
          Copyright © 2026 | Privacy Policy
        </div>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><img src="/images/facebook.png" alt="" /></a>
          <a href="#" aria-label="YouTube"><img src="/images/youtube.png" alt="" /></a>
          <a href="#" aria-label="Instagram"><img src="/images/instagram.png" alt="" /></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
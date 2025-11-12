import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container className="border-top pt-3">
      <footer className="d-flex justify-content-between">
        <div className="d-flex">
          <Link to="/">
            <Image
              src="/apsignals.png"
              width="40px"
              height="20px"
              alt="aps logo"
              className="pe-2"
            />
          </Link>
          <p className="text-body-secondary fs-6">
            © {new Date().getFullYear()} APSignals, LTD
          </p>
        </div>
        <ul className="list-unstyled d-flex gap-3">
          <li><Link to="https://github.com/APSignals" className="text-body-secondary"><i class="bi bi-github"></i></Link></li>
          <li><Link to="https://www.linkedin.com/company/apsignals/" className="text-body-secondary"><i class="bi bi-linkedin"></i></Link></li>
          <li><Link to="https://www.instagram.com/ap_signals?igsh=ZDk2Z2MzNzE5NzVi" className="text-body-secondary"><i class="bi bi-instagram"></i></Link></li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;

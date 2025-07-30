import React from "react";

const Contact = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-3 fw-bold">Get in Touch</h2>
        <p className="mb-4 text-muted">We'd love to hear from you!</p>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <p><strong>Email:</strong> <a href="mailto:yoga@example.com" className="text-decoration-none text-primary">yoga@example.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919999999999" className="text-decoration-none text-primary">+91 99999 99999</a></p>
            <p><strong>Address:</strong> 123 Yoga Street, Wellness City, India</p>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-underline text-dark">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-decoration-underline text-dark">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-decoration-underline text-dark">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

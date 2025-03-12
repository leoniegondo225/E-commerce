"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaCommentDots, FaPhoneAlt, FaStore } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Votre message a été envoyé avec succès !");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <><Navbar></Navbar>
    <div className="bgcontact">
    <div className="container py-5 mb-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-lg p-4">
            <div className="text-center mb-4">
              <FaStore className="text-warning mb-3" size={50} />
              <h2 className="fw-bold">Nous Contacter</h2>
              <p className="text-muted">Une question ? Besoin d'aide ? Contactez-nous !</p>
            </div>

            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaUser className="text-success" /></span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaEnvelope className="text-success" /></span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaPhoneAlt className="text-success" /></span>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange} />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaCommentDots className="text-success" /></span>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : <> <FaPaperPlane  /> Envoyer </>}
                </button>
              </div>

              {successMessage && (
                <div className="alert alert-success text-center mt-4">
                  {successMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
   <Footer></Footer></>
  );
};

export default Contact;
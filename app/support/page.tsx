import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FaEnvelope, FaPhoneAlt, FaHeadset } from "react-icons/fa";

const SupportPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="bgsupport">
    <div className="container py-5">
      <h1 className="text-center text-warning mb-5">Support Client</h1>

      {/* Section Contact */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card bg-dark text-light h-100">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <FaHeadset className="me-2 text-warning" /> Assistance par téléphone
              </h5>
              <p className="card-text mt-3">Notre équipe est disponible du lundi au vendredi, de 9h00 à 18h00 :</p>
              <p className="fw-bold text-warning">+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light h-100">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <FaEnvelope className="me-2 text-warning" /> Assistance par e-mail
              </h5>
              <p className="card-text mt-3">Envoyez-nous un e-mail, nous répondrons dés qur possible :</p>
              <p className="fw-bold text-warning">support@notre-site.com</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light h-100">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <FaPhoneAlt className="me-2 text-warning" /> Numéro d&#39;urgence
              </h5>
              <p className="card-text mt-3">Contactez-nous immédiatement en cas d&#39;urgence :</p>
              <p className="fw-bold text-warning">+33 1 98 76 54 32</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="mt-5 p-4 bg-dark text-light rounded shadow">
        <h2 className="text-warning mb-4">Formulaire de Contact</h2>
        <p>Remplissez ce formulaire et nous reviendrons vers vous dès que possible.</p>

        <form>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input type="text" className="form-control" id="nom" placeholder="Votre nom" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="Votre e-mail" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={4} placeholder="Votre message" required></textarea>
          </div>

          <button type="submit" className="btn btn-warning w-100">Envoyer</button>
        </form>
      </div>
    </div>
    </div>
   <Footer></Footer></>
  );
};

export default SupportPage;
"use client"
import { FaQuestionCircle, FaCreditCard, FaTruck, FaPencilAlt, FaDollarSign, FaClock, FaUndo } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const FAQPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
     <Navbar></Navbar>
     <div className="bgfaq">
     <div className="container my-5 p-4 bg-light rounded shadow">
      <h1 className="text-center mb-4 text-primary">FAQ - Foire aux Questions</h1>
      <div className="accordion accordion-flush" id="faqAccordion">
        {/* Question 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <FaQuestionCircle className="me-2 text-primary" /> Comment commander un produit ?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Vous pouvez commander en ajoutant le produit à votre panier et en procédant au paiement. Suivez les étapes simples à l&#39;écran pour finaliser votre commande en toute sécurité.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <FaCreditCard className="me-2 text-primary" /> Quels sont les moyens de paiement acceptés ?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Nous acceptons plusieurs modes de paiement : carte bancaire, PayPal, mobile et en espèces lors de la livraison. Vous pouvez choisir celui qui vous convient le mieux lors de la commande.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <FaTruck className="me-2 text-primary" /> Comment suivre ma commande ?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Après l&#39;expédition de votre commande, vous recevrez un e-mail contenant un numéro de suivi. Vous pourrez l&#39;utiliser pour suivre l&#39;état de la livraison de votre colis.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <FaPencilAlt className="me-2 text-primary" /> Puis-je modifier ou annuler ma commande ?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Une fois la commande passée, vous pouvez la modifier ou l&#39;annuler dans un délai de 30 minutes. Contactez notre service client pour toute modification urgente.
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <FaDollarSign className="me-2 text-primary" /> Offrez-vous des réductions ?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Oui, nous proposons régulièrement des promotions et des réductions sur une sélection de produits. Inscrivez-vous à notre newsletter pour être informé des dernières offres.
            </div>
          </div>
        </div>

        {/* Question 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <FaClock className="me-2 text-primary" /> Quel est le délai de livraison ?
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Le délai de livraison varie en fonction de votre emplacement et du mode de livraison choisi. En moyenne, la livraison prend entre 3 à 5 jours ouvrables.
            </div>
          </div>
        </div>

        {/* Question 7 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              <FaUndo className="me-2 text-primary" /> Comment effectuer un retour ou obtenir un remboursement ?
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Vous pouvez retourner un produit dans les 14 jours suivant sa réception. Contactez notre service client pour obtenir l&#39;étiquette de retour et suivre la procédure. Le remboursement est effectué sous 7 jours après réception du produit retourné.
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
   <Footer></Footer></>
  );
};

export default FAQPage;
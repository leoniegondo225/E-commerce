import { FaShippingFast, FaRegCalendarCheck, FaMoneyBillAlt, FaShieldAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const TermsPage = () => {
  return (
    <><Navbar></Navbar>
    <div className="bgterms">
    <div className="container bg-light text-dark p-5 rounded shadow mb-5 pt-4">
      <h1 className="text-center text-primary mb-4">Conditions Générales de Vente</h1>

      <section className="mb-5">
        <p className="lead">
          En utilisant notre site, vous acceptez les présentes conditions générales de vente. Veuillez les lire attentivement avant de procéder à vos achats. Si vous avez des questions, n&#39;hésitez pas à nous contacter.
        </p>
      </section>

      <section className="mb-5">
        <div className="d-flex align-items-center mb-3">
          <FaShippingFast className="text-success me-3" size={32} />
          <h2>Livraison</h2>
        </div>
        <p>
          Nos produits sont livrés dans un délai de 5 jours ouvrables. La livraison se fait à l&#39;adresse indiquée lors de votre commande. Des frais de livraison peuvent s&#39;appliquer selon votre région.
        </p>
      </section>

      <section className="mb-5">
        <div className="d-flex align-items-center mb-3">
          <FaRegCalendarCheck className="text-warning me-3" size={32} />
          <h2>Retours et Remboursements</h2>
        </div>
        <p>
          Si vous n&#39;êtes pas satisfait de votre commande, vous pouvez demander un retour dans les 14 jours suivant la réception de votre produit. Les articles doivent être retournés dans leur état original. Nous procéderons à un remboursement une fois l&#39;article retourné et inspecté.
        </p>
      </section>

      <section className="mb-5">
        <div className="d-flex align-items-center mb-3">
          <FaMoneyBillAlt className="text-info me-3" size={32} />
          <h2>Paiement</h2>
        </div>
        <p>
          Nous acceptons plusieurs méthodes de paiement, y compris les cartes de crédit, PayPal, et les paiements mobiles. Les paiements doivent être effectués en totalité avant l&#39;expédition des produits.
        </p>
      </section>

      <section className="mb-5">
        <div className="d-flex align-items-center mb-3">
          <FaShieldAlt className="text-danger me-3" size={32} />
          <h2>Protection des Données</h2>
        </div>
        <p>
          Nous nous engageons à protéger vos informations personnelles. Toutes les données collectées sont utilisées uniquement pour traiter vos commandes et améliorer notre service.
        </p>
      </section>

      <section>
        <p className="lead">
          En utilisant notre site, vous acceptez pleinement les présentes conditions générales de vente. Si vous avez des questions ou des préoccupations, contactez notre service client.
        </p>
      </section>
    </div>
    </div>
    <Footer></Footer></>
  );
};

export default TermsPage;
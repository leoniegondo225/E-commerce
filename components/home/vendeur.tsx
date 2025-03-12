import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";

const SectionVendeur = () => {
  return (
    <section
      className="seller-section py-5 text-white text-center"
      style={{
        backgroundImage: "url('/img/')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="bgvend rounded-5">
        <Row className="align-items-center">
          {/* Texte et informations */}
          <Col md={6} className="text">
            <h2 className="fw-bold py-3">Êtes-vous un vendeur ?</h2>
            <p className="lead">
              Optez pour une nouvelle approche ! Gagnez en visibilité et obtenez un tableau de bord 
              pour vous faciliter la vente de vos articles via notre plateforme.
            </p>
            <Card className="shadow-sm p-4 my-4 border-0 bg-secondary text-white"> 
              <h4 className="mb-3">Pourquoi vendre avec nous ?</h4>
              <ul className="list-unstyled">
                <li>📈 Augmentez votre visibilité en ligne</li>
                <li>💼 Tableau de bord pour gérer vos produits</li>
                <li>⚡ Publiez et suivez vos ventes en toute simplicité</li>
                <li>🔒 Paiements sécurisés</li>
              </ul>
            </Card>
            <Button variant="warning" href="/client/users/vendeur" className="fw-bold">
              Devenir Vendeur
            </Button>
          </Col>

          {/* Image du vendeur */}
          <Col md={6} className="text-center">
            <Image
              src="/img/v1.avif"
              alt="Vendeur heureux"
              width={500}
              height={500}
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionVendeur;

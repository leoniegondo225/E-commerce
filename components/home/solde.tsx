import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";

const salesProducts = [
  { id: 1, name: "Ordinateur Portable", price: 899, oldPrice: 1199, image: "/img/laptop-sale.jpg" },
  { id: 2, name: "Smartphone Pro", price: 599, oldPrice: 799, image: "/img/phone-sale.jpg" },
  { id: 3, name: "Écouteurs Sans Fil", price: 99, oldPrice: 149, image: "/img/earbuds-sale.jpg" },
  { id: 4, name: "Montre Connectée", price: 149, oldPrice: 199, image: "/img/watch-sale.jpg" },
];

// Date limite des soldes
const saleEndTime = new Date();
saleEndTime.setDate(saleEndTime.getDate() + 3);

const Soldes = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showAlert, setShowAlert] = useState(false);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = saleEndTime.getTime() - now.getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Vérifie si le temps est écoulé et affiche une alerte
      if (!newTimeLeft) {
        setShowAlert(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="sales-section position-relative py-5 text-white"
      style={{
        backgroundImage: "url('/img/Solde.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="fw-bold text-dark"
            >
              🔥 Profitez des Soldes Exceptionnelles !
            </motion.h2>
            <p className="lead text-dark">
              Il y a souvent des soldes sur notre site. Ne ratez pas ces offres limitées !
            </p>
          </Col>
        </Row>

        {timeLeft ? (
          <Row className="text-center mb-4">
            <Col>
              <h4 className="fw-bold text-dark">⏳ Temps restant :</h4>
              <h3 className="bg-dark text-warning p-2 rounded">
                {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </h3>
            </Col>
          </Row>
        ) : (
          <Row className="text-center mb-4">
            <Col>
              <h4 className="text-danger fw-bold">❌ Les soldes sont terminées !</h4>
            </Col>
          </Row>
        )}

        {showAlert && (
          <Alert variant="danger" className="text-center">
            ❌ Les soldes sont terminées ! Revenez bientôt pour de nouvelles offres.
          </Alert>
        )}

        <Row>
          {salesProducts.map((product) => (
            <Col md={3} sm={6} key={product.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: product.id * 0.2 }}
              >
                <Card className="text-center shadow-lg border-0">
                  <Image src={product.image} alt={product.name} width={300} height={200} className="card-img-top" />
                  <Card.Body>
                    <Card.Title className="fw-bold">{product.name}</Card.Title>
                    <p className="text-danger fw-bold">
                      {product.price}Fcfa <span className="text-muted text-decoration-line-through">{product.oldPrice}Fcfa</span>
                    </p>
                    <Button variant="warning">Acheter Maintenant</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <Button variant="secondary" size="lg" className="fw-bold">
              Voir Toutes les Offres
            </Button>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .sales-section {
          position: relative;
          overflow: hidden;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .sales-section > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </section>
  );
};

export default Soldes;

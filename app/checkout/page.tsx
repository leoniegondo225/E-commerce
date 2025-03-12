"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ProductType } from "@/type";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "paypal",
    promoCode: "",
  });

  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        console.log(parsedCart)
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Erreur de parsing du panier :", error);
        setCartItems([]);
      }
    }
  }, []);

  const calculateTotal = () => {
    let total = 0
    if (cartItems.length > 0) {
      cartItems.forEach((index: ProductType) => {
        total +=Number(index?.prix)
      })
    }
    return total;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Commande validée avec succès !");
    localStorage.removeItem("cart");
  };

  return (
    <>
     <Navbar panier={cartItems} />
      <div className="bgcheckout">
        <Container className="my-5">
          <Row>
            <Col md={6} className="mb-4">
              <h2 className="mb-4">Détails de la Commande</h2>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <Card key={item.id} className="mb-3">
                    <Card.Body>
                      <Card.Title>{item.nomProduit}</Card.Title>
                      <Card.Text>Quantité : {item?.quantite}</Card.Text>
                      <Card.Text>
                        Prix : {item.prix ? `${item?.prix} Fcfa` : "Prix indisponible"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p className="text-muted">Votre panier est vide.</p>
              )}
              <h4>Total : {calculateTotal()} Fcfa</h4>
            </Col>

            <Col md={6}>
              <h2 className="mb-4">Informations de Livraison</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Numéro de téléphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Moyen de paiement</Form.Label>
                  <Form.Select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  >
                    <option value="paypal">PayPal</option>
                    <option value="mobile">Mobile</option>
                    <option value="visa">Carte VISA</option>
                    <option value="mastercard">Carte MasterCard</option>
                    <option value="cash">Espèces</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Code promo</Form.Label>
                  <Form.Control
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                  />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 text-light">
                  Valider la Commande
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;

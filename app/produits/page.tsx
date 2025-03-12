"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { ProductType } from "@/type";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [load, setLoad] = useState(true);
  const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});
  const [categories] = useState<string[]>(["all", "Téléphones", "Ordinateurs", "Accessoires", "Électroménagers"]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getProduit = async () => {
    try {
      const req = await fetch("/api/getproduit", { method: "get", headers: { "Content-type": "application/json" } });
      const res = await req.json();
      setProducts(res);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduit();
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product: ProductType) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  function toggleLike(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <><Navbar /><Container fluid className="mt-4">
      <Row>
        <Col md={3} className="bg-white p-4 shadow-sm rounded border">
          <h4 className="mb-3 text-dark fw-bold">Filtrer par Catégorie</h4>
          <Form.Select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} className="form-control border-0 shadow-sm">
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Form.Select>
        </Col>

        <Col md={9}>
          {!load ? (
            <>
              <h2 className="text-center mb-4 text-dark fw-bold">DECOUVREZ NOTRE LARGE CHOIX DE PRODUITS </h2>
              <Row>
                {products.filter(product => selectedCategory === "all" || product.category === selectedCategory).map((product) => (
                  <Col key={product.id} md={6} lg={4} xl={3} className="mb-4">
                    <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
                      <Image src={product.photo || "/img/camlog.png"} alt={product.nomProduit!} width={300} height={250} className="card-img-top object-fit-cover" />
                      <Card.Body>
                        <Card.Title className="text-primary fw-bold text-truncate" title={product.nomProduit}>{product.nomProduit}</Card.Title>
                        <Card.Text className="text-muted small">{product.descriptionProduit}</Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <FaStar className="text-warning" />
                            <FaStar className="text-warning" />
                            <FaStar className="text-warning" />
                            <FaRegStarHalfStroke className="text-warning" />
                          </div>
                          <FaHeart
                            className={`heart-icon ${likedProducts[String(product.id)] ? "liked" : ""}`}
                            onClick={() => toggleLike(String(product.id))}
                            style={{ cursor: "pointer", color: likedProducts[String(product.id)] ? "red" : "gray" }} />
                        </div>
                        <h5 className="text-success fw-bold mt-2">{product.prix} Fcfa</h5>
                        <Button variant="warning" className="w-100 rounded-pill fw-bold" onClick={() => addToCart(product)}>
                          Ajouter au panier
                        </Button>
                        <Button variant="outline-primary" className="w-100 mt-2 rounded-pill" onClick={() => setSelectedProduct(product)}>
                          Voir Détails
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <>Chargement des produits...</>
          )}
        </Col>
      </Row>

      {selectedProduct && (
        <Modal show={true} onHide={() => setSelectedProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.nomProduit}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center mb-3">
              <Image src={selectedProduct.photo!} alt={selectedProduct.nomProduit!} width={300} height={200} className="rounded" />
            </div>
            <h5>Description</h5>
            <p>{selectedProduct.descriptionProduit}</p>
            <h6>Prix: {selectedProduct.prix} Fcfa</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
              Fermer
            </Button>
            <Button variant="primary" onClick={() => addToCart(selectedProduct!)}>
              Ajouter au Panier
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
    <Footer/>
    </>
  );
};

export default ProductList;

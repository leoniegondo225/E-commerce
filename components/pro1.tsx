import React, { useState } from "react";
import ProductModal from "./promodal";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

const products: Product[] = [
  { id: 1, name: "Produit 1", description: "Description 1", price: 100, quantity: 10 },
  { id: 2, name: "Produit 2", description: "Description 2", price: 200, quantity: 5 },
  // Ajoute plus de produits ici
];

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    // Logique pour ajouter le produit au panier
    console.log(`Ajouté au panier: ${product.name}, quantité: ${quantity}`);
  };
  console.log("Liste des IDs des produits :", products.map(p => p.id));
  return (
    <div>
      <h1>Liste des produits</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} onClick={() => openModal(product)} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}Fcfa</p>
            <button>Détails</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ProductsPage;

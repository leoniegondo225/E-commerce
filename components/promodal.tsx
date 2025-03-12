import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type Props = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
};

const ProductModal: React.FC<Props> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose(); // Ferme le modal après ajout au panier
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Prix: ${product.price}</p>
        <p>Quantité disponible: {product.quantity}</p>

        <input
          type="number"
          value={quantity}
          min="1"
          max={product.quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={handleAddToCart}>Ajouter au panier</button>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default ProductModal;

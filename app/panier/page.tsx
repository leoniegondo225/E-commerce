"use client"
import { useState, useEffect } from "react";
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ProductType } from "@/type";



const CartPage = () => {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [showModal, setShowModal] = useState(false);  // State to control modal visibility
  const router = useRouter();

  const UserLogin = () => {
    const storeUser = JSON.parse(localStorage.getItem("users")!);
    console.log(storeUser);
    return storeUser; // We return the user to check login status
  };

  useEffect(() => {
    try {
      const storedUser = UserLogin();
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
        console.log(JSON.parse(storedCart));
      }
      if (!storedUser) {  // If no user is logged in
        setShowModal(true);  // Show the modal to ask for registration/login
      }
    } catch (error) {
      console.error("Erreur de parsing du panier :", error);
      setCartItems([]); // Réinitialiser en cas d&#39erreur
    }
  }, [cartItems]);

  useEffect(() => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantite!, 0);
    setCartCount(totalItems);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const incrementQuantity = (id: number) => {
    const item = cartItems.find(item => Number(item.id) === id)
    item!.quantite! += 1
    setCartItems([...cartItems])
  };

  const decrementQuantity = (id: number) => {
    const item = cartItems.find(item => Number(item.id) === id)
    if (item!.quantite! > 1) {
      item!.quantite! -= 1
      setCartItems([...cartItems])
    } 
  };

  const removeItem = (id: number) => {

    for (let index = 0; index < cartItems.length; index++) {
      if (Number(cartItems[index].id) === id) {
        cartItems.splice(index, 1);
        break;
      }
    }
    setCartItems([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((total, item) => total + item.prix! * item.quantite!, 0).toFixed(2)
      : "0.00";
  };

  const handleCheckout = () => {
    const user = UserLogin();
    if (!user) {
      // If no user is logged in, show the modal
      setShowModal(true);
    } else {
      // Proceed to checkout page if the user is logged in
      router.push("/checkout");
    }
  };

  return (
    <>
      <Navbar panier={cartItems} />
      <div className="container py-5">
        <h1 className="text-center mb-5 display-6 fw-bold text-warning shadow-sm p-2 rounded-3 bg-dark text-light">
          <FaShoppingCart className="me-2" /> Votre Panier
          {cartCount > 0 && <span className="badge bg-danger ms-2">{cartCount}</span>}
        </h1>
        <div className="row">
          <div className="col-md-8">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="card mb-4 shadow-lg border-0 rounded-4 p-3 bg-white bg-opacity-75 backdrop-blur">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3 d-flex justify-content-center">
                      <Image
                        src={item?.photo ? item.photo : "/img/camlog.png"}
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-circle border border-warning p-1 shadow-sm"
                      />
                    </div>
                    <div className="col-md-9 d-flex flex-column p-3">
                      <h5 className="fw-bold mb-2 text-primary text-uppercase">{item?.nomProduit}</h5>
                      <p className="text-muted mb-2">Prix: Fcfa {Number(item?.prix).toFixed(2) || "N/A"}</p>
                      <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-outline-primary btn-sm" onClick={() => decrementQuantity(Number(item?.id!))}>
                          <FaMinus />
                        </button>
                        <span className="fw-bold px-3 py-1 bg-light border rounded text-dark shadow-sm">{item?.quantite}</span>
                        <button className="btn btn-outline-primary btn-sm" onClick={() => incrementQuantity(Number(item?.id!))}>
                          <FaPlus />
                        </button>
                        <button className="btn btn-outline-danger btn-sm ms-auto" onClick={() => removeItem(Number(item?.id!))}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted text-center">Votre panier est vide.</p>
            )}
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-lg border-0 rounded-4 bg-light bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-center text-dark">Résumé de la commande</h4>
              <hr />
              <p className="d-flex justify-content-between fs-5">
                <span>Sous-total:</span>
                <span className="fw-bold text-success">Fcfa {getTotalPrice()}</span>
              </p>
              <button
                className="btn btn-warning text-dark fw-bold btn-lg w-100 mt-3 rounded-pill shadow-sm hover-effect"
                onClick={handleCheckout}
              >
                Passer à la caisse
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal for user login/signup */}
      <div className={`modal fade ${showModal ? "show" : ""}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Inscription / Connexion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)} />
            </div>
            <div className="modal-body">
              <p>Veuillez vous inscrire ou vous connecter pour passer une commande.</p>
              <button className="btn btn-primary w-100" onClick={() => router.push("/signup")}>S&#39inscrire</button>
              <button className="btn btn-secondary w-100 mt-2" onClick={() => router.push("/login")}>Se connecter</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

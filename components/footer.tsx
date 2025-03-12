"use client"

import Link from "next/link";
import { FaEnvelope, FaFacebook, FaFingerprint, FaGem, FaGithub, FaHome, FaInstagramSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {

   return(
    <footer className= "text-center text-lg-start bg-dark text-light">
  
  <section className= "d-flex justify-content-center justify-content-lg-between p-4 border-bottom  ">
    <div className= "me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>



    <div>
      <Link href="" className= "me-4 text-primary ">
      <FaFacebook className="fs-3"/>
      </Link>
      <Link href="" className= "me-4 text-light">
      <FaSquareXTwitter className="fs-3" />
      </Link>
      <Link href="" className= "me-4 text-reset">
      <FcGoogle className="fs-3"/>
      </Link>
      <Link href="" className= "me-4 text-danger">
      <FaInstagramSquare className="fs-3" />
      </Link>
      <Link href="" className= "me-4 text-primary">
      <FaLinkedin className="fs-3"/>
      </Link>
      <Link href="" className= "me-4 text-dark ">
      <FaGithub className="fs-3" />
      </Link>
    </div>

  </section>
  


  <section className= "">
    <div className= "container text-center text-md-start mt-5">
      <div className= "row mt-3">
        
        <div className= "col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className= "text-uppercase fw-bold mb-4 text-warning">
          <FaGem className="me-2"/>AchiOni
          </h6>
          <p>
          Votre boutique en ligne pour les produits électroniques de qualité. Trouvez tout ce dont vous avez besoin au meilleur prix !
          
          </p>
        </div>
        

        
        <div className= "col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className= "text-uppercase fw-bold mb-4 text-warning">
          Produits
          </h6>
          <p>
            <Link href="#!" className= "text-reset  text-decoration-none">Ordinateurs</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Téléphones</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Accessoires</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Composants</Link>
          </p>
        </div>
        

        
        <div className= "col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className= "text-uppercase fw-bold mb-4 text-warning">
          Liens utiles
          </h6>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Tarifs</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Paramètres</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Commandes</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Aide</Link>
          </p>
        </div>
        

        
        <div className= "col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className= "text-uppercase fw-bold mb-4 text-warning">Contact</h6>
          <p><FaHome className="me-3 text-warning" /> Abidjan, Cocody, Côte d&#39Ivoire</p>
          <p>
          <FaEnvelope className="me-3 text-warning" />
            achioni@gmail.com
          </p>
          <p><FaPhone className="me-3 text-warning" /> + 225 057 548 888</p>
          <p><FaFingerprint className="me-3 text-warning" /> + 225 075 546 554</p>
        </div>
        
      </div>

    </div>
  </section>
   


  <div className= "text-center p-4 bg-dark text-light">
    © 2021 Copyright:
    <Link className= "text-reset fw-bold" href="#">Boutique Electonique</Link>
  </div>

</footer>
   )

}

export default Footer

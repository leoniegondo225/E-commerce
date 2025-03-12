"use client"
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <div className="" id='carousel-container'>
      <Carousel data-bs-theme="dark" >
      <Carousel.Item>
       <div className=" img1 ">
        <h2 className='text-center orange display-3 fw-bold py-3'>L'electronique Achioni</h2>
        <p className='text-center text-light py-3 h5'>Bienvenue sur notre boutique en ligne, où technologie et qualité se rencontrent pour vous <br /> offrir le meilleur de l’électronique ! Parcourez nos produits et commencez dès maintenant à trouver <br /> ce qui vous correspond</p>
        <div className='text-center pt-3'>
        <Link href="/accueil" className="btn btn-warning btn-lg ">Commencer</Link>
        </div>
       </div>
       <Carousel.Caption>
          
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" img2 ">
          <h2 className='text-center display-3 fw-bold text-light py-3'>L'electronique Achioni</h2>
          <p className='text-center text-light pt-2 h5'>Explorez notre sélection d'articles électroniques de qualité supérieure et profitez des <br /> dernières innovations à portée de main</p>
          <div className='text-center pt-3'>
        <Link href="/accueil" className="btn btn-warning btn-lg ">Commencer</Link>
        </div>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" img3 ">
          <h2 className='text-center display-3 fw-bold text-warning py-3'>L'electronique Achioni</h2>
          <p className='text-center text-light pt-2 h5'>Explorez notre sélection d'articles électroniques de qualité supérieure et profitez des <br /> dernières innovations à portée de main</p>
          <div className='text-center pt-3'>
        <Link href="/accueil" className="btn btn-warning btn-lg ">Commencer</Link>
        </div>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;
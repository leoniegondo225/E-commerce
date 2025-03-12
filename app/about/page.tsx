"use client";

import { FaStore, FaUsers, FaPlay, FaHistory, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const partnerLogos = [
  "/partners/banpresto.png",
  "/partners/goodsmile.png",
  "/partners/shueisha.png",
  "/partners/bandai.png",
];

const teamMembers = [
  { name: "Alex", role: "Fondateur & Chasseur de Goodies", image: "/team/alex.jpg" },
  { name: "Sophie", role: "Experte Mangas & Service Client", image: "/team/sophie.jpg" },
  { name: "Kevin", role: "Photographe & Geek de l’équipe", image: "/team/kevin.jpg" },
];

const historyEvents = [
  { year: "2018", title: "Naissance de TechVerse", desc: "D’abord une passion entre amis, puis une aventure e-commerce dédiée aux produits high-tech." },
  { year: "2020", title: "Premier partenariat officiel avec des marques reconnues", desc: "Nous élargissons notre catalogue avec des ordinateurs, smartphones et accessoires sous licene.." },
  { year: "2023", title: "Lancement de notre nouvelle plateforme TechVerse", desc: "Une boutique repensée pour vous offrir les meilleures innovations technologiques, au meilleur prix." },
];

const AboutPage = () => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const scroll = () => {
        logosRef.current!.scrollLeft += 1;
        if (logosRef.current!.scrollLeft >= logosRef.current!.scrollWidth / 2) {
          logosRef.current!.scrollLeft = 0;
        }
      };
      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-light text-dark min-vh-100">
        {/* Bannière */}
        <div className="position-relative bg-dark overflow-hidden" style={{ height: "400px" }}>
          <Image
            src="/banner/about-banner.jpg"
            alt="Bannière MangaVerse"
            layout="fill"
            objectFit="cover"
            className="opacity-75 position-absolute top-0 start-0 w-100 h-100" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center bg-gradient">
            <h1 className="display-4 fw-bold mb-3">À propos de MangaVerse</h1>
            <p className="lead mb-3">L’univers manga à portée de clic</p>
            <Link href="/accueil" className="btn btn-danger btn-lg fw-bold">
              Découvrir la Boutique
            </Link>
          </div>
        </div>

        <div className="container py-5">
          {/* Notre Histoire */}
          <section className="bg-white p-5 rounded shadow mb-5">
            <div className="d-flex align-items-center mb-4">
              <FaHistory className="text-danger me-3" size={28} />
              <h2 className="h3 fw-bold">Notre Histoire</h2>
            </div>

            <div className="border-start border-4 border-danger ps-4">
              {historyEvents.map((event, index) => (
                <div key={index} className="mb-4 position-relative">
                  <div className="position-absolute top-0 start-0 translate-middle bg-danger rounded-circle" style={{ width: "16px", height: "16px" }}></div>
                  <p className="fw-semibold mb-1">{event.year} – {event.title}</p>
                  <p className="text-muted">{event.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Vidéo */}
          <section className="bg-light rounded shadow mb-5 overflow-hidden">
            <video className="w-100" height="400" controls>
              <source src="/videos/mangaverse-presentation.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </section>

          {/* Notre Équipe */}
          <section className="bg-white p-5 rounded shadow mb-5">
            <div className="d-flex align-items-center mb-4">
              <FaUsers className="text-primary me-3" size={28} />
              <h2 className="h3 fw-bold">Notre Équipe</h2>
            </div>
            <div className="row text-center">
              {teamMembers.map((member) => (
                <div key={member.name} className="col-md-4 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-circle mx-auto mt-3 border border-danger" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{member.name}</h5>
                      <p className="card-text text-muted">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partenaires */}
          <section className="bg-white p-5 rounded shadow">
            <div className="d-flex align-items-center mb-4">
              <FaHandshake className="text-success me-3" size={28} />
              <h2 className="h3 fw-bold">Nos Partenaires</h2>
            </div>
            <div
              className="d-flex overflow-auto py-3 gap-4 border rounded p-3"
              style={{ whiteSpace: "nowrap" }}
              ref={logosRef}
            >
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div key={index} className="d-flex justify-content-center align-items-center border rounded p-2 bg-white shadow-sm" style={{ minWidth: "150px" }}>
                  <Image src={logo} alt={`Partner ${index}`} width={96} height={96} style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div><Footer></Footer></>
  );
};

export default AboutPage;

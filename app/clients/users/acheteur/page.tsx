"use client"

import GoogleLogin from "@/components/googleLogin";
import Link from "next/link";
import { useRef, useState } from "react"
import { Toast } from "primereact/toast";


function Inscription() {
    const toast = useRef<Toast>(null);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sexe, setSexe] = useState("");
    const [pays, setPays] = useState("");
    const [ville, setVille] = useState("");
    const [adresse, setAdresse] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
const [load, setLoad]= useState(false)
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage("")
        setLoad(true)
        try {
            const data = {
                nom,
                prenom,
                sexe,
                pays,
                ville,
                adresse,
                email,
                password,
                tel,
                typeCompte: "clients",
            };
            const req = await fetch("/api/sign-up", {
                headers: { "content-type": "applicaation/json" },
                method: "Post",
                body: JSON.stringify(data)
            })
            const res = await req.json()
            if (res.data) {
                setLoad(false)
                console.log(res.data)
                toast.current?.show({
                    severity: "success",
                    summary: "Inscription réussie",
                    detail: "Votre compte a été créé avec succès.",
                    life: 5000,
                })
                localStorage.setItem("users", JSON.stringify(res.data))
                return res.data
            }
            
        } catch (error) {
            console.log(error)
            toast.current?.show({
                severity: "error",
                summary: "Erreur",
                detail: "oups une erreur ",
                life: 3000,
            });
            setLoad(false)
        }
    }

    return (
            <div className=" bg1">
                 <Toast ref={toast} />
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 hero rounded-4 p-4 my-4">
                        <div className="row my-2 align-items-center">
                        <div className="col-lg-7 ">
                            <div>
                                <h1 className="text-light">Bienvenu dans le monde de la technologie</h1>
                                <p className="pt-3 text-light">Rejoignez-nous dès aujourd&#39;hui et découvrez une sélection unique d&#39;appareils électroniques dernier cri. Profitez de nos offres exclusives et faites partie d&#39;une communauté de passionnés toujours à la recherche des meilleures innovations technologiques.</p>
                            <button className="btn btn-success">Inscrivez-vous</button>
                            </div>
                        </div>

                        <div className="col-lg-5 text-center shadow card">
                            <h2 className="fw-bold">Inscription</h2>
                            <form onSubmit={(e) => submitForm(e)}>
                                
                                <div className="row items-center mb-2 pt-3">
                                    <div className="form-floating mb-2 col-lg-6">
                                        <label htmlFor="nom">nom</label>
                                        <input type="text" name="nom" id="nom" className="form-control" placeholder="Nom" required onChange={(e) => setNom(e.target.value)} />

                                    </div>
                                    <div className="form-floating mb-2 col-lg-6">

                                        <input type="text" name="prenom" className="form-control" id="prenom" placeholder="Prenom" required onChange={(e) => setPrenom(e.target.value)} />
                                        <label htmlFor="prenom">Prénom</label>
                                    </div>
                                </div>
                                <div className="row items-center mb-2">
                                    <div className="form-floating mb-2 col-lg-6">

                                        <input type="text" name="ville" className="form-control" id="ville" placeholder="ville" required onChange={(e) => setVille(e.target.value)} />
                                        <label htmlFor="ville">Ville</label>

                                    </div>
                                    <div className="form-floating mb-2 col-lg-6">

                                        <input type="text" name="pays" className="form-control" id="pays" placeholder="pays" required onChange={(e) => setPays(e.target.value)} />
                                        <label htmlFor="pays">Pays</label>
                                    </div>
                                </div>
                                <div className=" mb-2 col-lg-12">

                                    <select className="form-select " aria-label="Sexe" required onChange={(e) => setSexe(e.target.value)}>
                                        <option >Sexe</option>
                                        <option value="Femme">Femme</option>
                                        <option value="Homme">Homme</option>
                                    </select>

                                </div>
                                <div className="form-floating mb-2 col-lg-12">

                                    <input type="text" name="adresse" className="form-control" id="adresse" placeholder="adresse" required onChange={(e) => setAdresse(e.target.value)} />
                                    <label htmlFor="adresse">Adresse</label>
                                </div>
                                <div className="form-floating mb-2 col-lg-12">

                                    <input type="text" name="Tel" className="form-control" id="tel" placeholder="tel" required onChange={(e) => setTel(e.target.value)} />
                                    <label htmlFor="tel">Téléphone</label>
                                </div>
                                <div className="form-floating mb-2 col-lg-12">

                                    <input type="email" name="email" className="form-control" id="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="form-floating mb-3 col-lg-12">

                                    <input type="password" className="form-control" name="mot de passe" id="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="password">Mot de passe</label>
                                </div>
                                
                                {
                    !load ? (
                        <div className="mb-3">
                                    <button className="btn btn-primary w-100 text-center col-lg-12" type="submit" >
                                        S&#39;inscrire
                                    </button>
                                </div>
                    ) : (
                        <div className="col-lg-12 mb-3">
                            <p className="fw-bold text-center p-2 btn btn-outline-primary form-control h5">
                                <i className=" fas fa-spinner fa-spin me-2 "></i>
                                Veillez patienter quelque instants !</p>
                        </div>
                    )
                }
                                <div className="row">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-secondary">Déjà un compte?</p>
                                        <Link href="/clients/login" className="fw-bold">Se connecter</Link>
                                    </div>
                                </div>
                            
                                    <GoogleLogin/>
                                    
            
                            </form>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Inscription
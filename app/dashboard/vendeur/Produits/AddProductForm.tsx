"use client"
import React, { useEffect, useState } from "react"
import { Card, Text } from "@mantine/core"

import { IconPhoto, IconBrandTelegram } from "@tabler/icons-react";
import "../NavbarSimpleColored.module.css"
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { OutputCollectionState, OutputCollectionStatus } from "@uploadcare/react-uploader";
import { Inputs } from "@/type";




function AddProductForm() {

    const [codeProduit, setCodeProduit] = useState("")
    const [nomProduit, setNomProduit] = useState("")
    const [descriptionProduit, setDescriptionProduit] = useState("")
    const [prix, setPrix] = useState("")
    const [namestore, setNameStore] = useState("")
    const [devise, setDevise] = useState("")
    const [qte, setQte] = useState("")
    const [date, setDate] = useState("")
    const [, setLieu] = useState("")
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")

    const [user, setUsers] = useState<Inputs>()

    const[files,setFiles]= useState<string>("")

    const recupimage=(e:OutputCollectionState<OutputCollectionStatus, "maybe-has-group">)=>{
        if (Array.isArray(e.allEntries) && e.allEntries.length > 0) {
            const firstEntry = e.allEntries[0];
            if (firstEntry?.cdnUrl) {
                setFiles(firstEntry.cdnUrl);
            }
        } else {
            console.warn("Aucune image sélectionnée ou e.allEntries est vide.");
        }
    }


    const add = () => {
        if (user) {
            console.log("user connecté")
        } else {
            console.log("Veillez vous connecter d&#39;abord")
            return
        }
    }

    useEffect(() => {
        const i = localStorage.getItem("users")
        setUsers(JSON.parse(i!) || null)
    }, [])

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        setMessage("")
        try {
            if (files && files!==undefined && files!== "") {
                const data = { nomProduit, codeProduit, descriptionProduit, prix,namestore, devise, qte, date , photo:files}
            const req = await fetch("/api/product-routes/add-product", {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify(data)
            })

            const res = await req.json()
            console.log(res)
            setLoad(false)
            if (res && res.data) {
                localStorage.setItem("product",JSON.stringify(res.data))
                setMessage("Artcile Ajouté aevc succés")
                console.log(res)
            } else {
                setMessage("Données non trouvée")
            }
            }else {
                setMessage("photo du produit requise")
            }
        } catch (error) {
            console.log(error)
            setMessage("Données non trouvée")
        }
    }

    return (
        <div className="container-fluid">
            <form className="py-4" onSubmit={(e) => submitForm(e)}>
                <div className="row mt-4 justify-content-between">
                    <div className="col-lg-7">
                        <Card shadow="sm" padding="lg" radius="md" withBorder >
                            <h4 className="ms-2">Informations basic </h4>
                            <Card.Section className="p-4">
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="produit" className="form-label">Nom du produit</label>
                                    <input type="text" className="form-control p-2" id="produit" placeholder="Entrer le nom du produit" onChange={(e) => setNomProduit(e.target.value)} />
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="code" className="form-label">Code du produit</label>
                                    <input type="text" className="form-control p-2" id="code" placeholder="Entrer code du produit" onChange={(e) => setCodeProduit(e.target.value)} />
                                </div>
                                <div className="col-lg-12 ">
                                    <label htmlFor="description" className="form-label">Description produit</label>
                                    <textarea className="form-control" id="description" rows={3} onChange={(e) => setDescriptionProduit(e.target.value)}></textarea>
                                </div>
                            </Card.Section>
                        </Card>
                    </div>
                    <div className="col-lg-5">
                        <Card shadow="sm" padding="lg" radius="md" withBorder className="card h-100 d-flex justify-content-center align-items-center p-3" >
                            <Card.Section className="card-body d-flex justify-content-center align-items-center flex-column">
                            <IconPhoto size={50} />
                            <FileUploaderRegular onChange={(e)=>recupimage(e)} pubkey="b20e70555b92917523f6" />
                                <Text size="sm" c="dimmed" className="mb-3" inline mt={7}>
                                    Ajoutez autant de fichiers que vous le souhaitez, chaque fichier ne doit pas dépasser 5 Mo.
                                </Text>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <h4>Information sur prix du produit</h4>
                            <Card.Section className="p-4">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="prix" className="form-label">Prix unitaire</label>
                                        <input type="number" min={0} className="form-control p-2" id="prix" placeholder="Entrer le prix du produit" onChange={(e) => Number(setPrix(e.target.value))} />
                                    </div>
                                    <div className="col-lg-6 mt-2  ">
                                        <select className="form-select p-2 mt-4" aria-label="Default select example" onChange={(e) => setDevise(e.target.value)}>
                                            <option >Sélectionne le devise</option>
                                            <option value="FCFA">FCFA</option>
                                            <option value="$">$</option>
                                            <option value="€">€</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <label htmlFor="qte" className="form-label" >Quantité du produit</label>
                                        <input type="number" min={0} className="form-control p-2" id="qte" placeholder="Entrer la quantité du produit" onChange={(e) => Number(setQte(e.target.value))} />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                    <label htmlFor="namestore" className="form-label" >Nom de votre boutique</label>
                                    <input type="string"  className="form-control p-2" id="namestore" placeholder="Entrer le nom de votre boutique" onChange={(e) => String(setNameStore(e.target.value))} />
                                    </div>
                                </div>
                            </Card.Section>
                        </Card>
                    </div>

                    <div className="col-lg-6">
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <h4>Information complémentaire</h4>
                            <Card.Section className="p-4">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 mb-3  ">
                                        <select className="form-select p-2 mt-4" aria-label="Default select example" >
                                            <option >Sélectionne une categorie</option>
                                            <option value="Télephone">Télephone</option>
                                            <option value="Ordinateur">Ordinateur</option>
                                            <option value="Accessoire">Accessoire</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <label htmlFor="lieu" className="form-label">Lieu de production</label>
                                        <input type="text" className="form-control p-2" id="lieu" placeholder="Lieu de production" onChange={(e) => setLieu(e.target.value)} />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <label htmlFor="date" className="form-label">Date de publication</label>
                                        <input type="date" className="form-control p-2" id="date" onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                </div>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
                <div className="row text-center mt-5 ">
                    {
                        !load ? (
                            <button type="submit" className="btn btn-info w-25 text-light mx-auto fw-bold" onClick={() => add()} >Ajouter un produit <IconBrandTelegram size={28} /></button>
                        ) : (
                            <button type="submit" className="btn btn-info w-25 text-light mx-auto fw-bold" ><i className="fa fa-spin fa-spinner me-2"></i>Traitement encours ...</button>
                        )
                    }
                </div>
                <div className="mt-2">
                    {message && <p className="btn btn-succes text-white fw-bold">{message}</p>}
                </div>
            </form >
        </div >
    )
}

export default AddProductForm
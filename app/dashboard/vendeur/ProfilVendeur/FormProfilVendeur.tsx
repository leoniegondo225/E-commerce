"use client"
import React from "react"
import { useRef } from "react";
import { Button, Group, Card } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconPhoto, IconUpload } from "@tabler/icons-react";

function FormProfilVendeur() {
    const openRef = useRef<() => void>(null);
    return (
        <div className="container-fluid">
            <form>
                <div className="row">
                    <div className="col-lg-7">
                        <Card shadow="sm" padding="lg" radius="md" withBorder >
                            <h3>Biographie</h3>
                            <Card.Section className="p-4">
                                <div className="col-lg-12 mb-3">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input type="text" className="form-control p-2" id="nom" placeholder="Entrer votre nom" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label htmlFor="prenom" className="form-label">Prenom</label>
                                    <input type="text" className="form-control p-2" id="prenom" placeholder="Entrer votre prenom" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control p-2" id="email" placeholder="Entrer votre email" />
                                </div>

                                <div className="row">
                                    <div className="col-lg-3 mb-3">
                                        <select className="form-select p-2 mt-4" aria-label="Default select example" >
                                            <option >Indificatif</option>
                                            <option value="+33">🇫🇷 +33 (France)</option>
                                            <option value="+1">🇺🇸 +1 (USA)</option>
                                            <option value="+44">🇬🇧 +44 (Royaume-Uni)</option>
                                            <option value="+225">🇨🇮 +225 (Côte d&#39;Ivoire)</option>
                                            <option value="+237">🇨🇲 +237 (Cameroun)</option>
                                            <option value="+221">🇸🇳 +221 (Sénégal)</option>
                                            <option value="+212">🇲🇦 +212 (Maroc)</option>
                                            <option value="+216">🇹🇳 +216 (Tunisie)</option>
                                            <option value="+213">🇩🇿 +213 (Algérie)</option>
                                            <option value="+229">🇧🇯 +229 (Bénin)</option>
                                            <option value="+49">🇩🇪 +49 (Allemagne)</option>
                                            <option value="+39">🇮🇹 +39 (Italie)</option>
                                            <option value="+34">🇪🇸 +34 (Espagne)</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-9 mt-4">
                                        <input type="tel" className="form-control p-2" id="tel" placeholder="Entrer votre numero" />
                                    </div>
                                </div>
                            </Card.Section>
                        </Card>
                    </div>
                    <div className="col-lg-5">
                        <Card shadow="sm" padding="lg" radius="md" withBorder className="h-75 d-flex flex-column justify-content-center">
                            <h4>Image</h4>
                            <Card.Section className="p-4">
                                <Dropzone openRef={openRef} onDrop={() => { }} radius="md"
                                    maxSize={30 * 1024 ** 2}
                                    className="dropzone-dashed" >
                                    <Group justify="center" mt="md" className="d-flex flex-column">
                                        <IconPhoto size={60} />
                                        <Button variant="light" onClick={() => openRef.current?.()}>Imprter une image<IconUpload size={20} className="ms-2" /></Button>
                                    </Group>
                                </Dropzone>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-7">
                        <Card shadow="sm" padding="lg" radius="md" withBorder className=" d-flex flex-column justify-content-center">
                            <h3>Information sur votre adresse</h3>
                            <Card.Section className="p-4">
                                <div className="col-lg-12 mb-3">
                                    <select className="form-select p-2" aria-label="Default select example" >
                                        <option >Pays</option>
                                        <option value="1">pays 1</option>
                                        <option value="2">pays 2</option>
                                    </select>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label htmlFor="adresse" className="form-label">Adresse</label>
                                    <input type="text" className="form-control p-2" id="adresse" placeholder="Entrer votre adresse" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label htmlFor="ville" className="form-label">Ville</label>
                                    <input type="text" className="form-control p-2" id="ville" placeholder="Entrer votre ville" />
                                </div>
                            </Card.Section>
                        </Card>
                    </div>
                    <div className="col-lg-5">
                        <Card shadow="sm" padding="lg" radius="md" withBorder className=" d-flex flex-column justify-content-center">
                            <Card.Section className="p-4">
                                <div className="col-lg-12 ">
                                    <label htmlFor="description" className="form-label">Ajouter une description de vous</label>
                                    <textarea className="form-control" id="description" rows={2}></textarea>
                                </div>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
                <div className="row text-center mt-5 mx-auto">
                    <button type="submit" className="btn btn-danger w-25 ">Modifier mon profil</button>
                </div>
            </form>
        </div>
    )
}

export default FormProfilVendeur
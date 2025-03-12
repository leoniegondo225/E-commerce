"use client"
import React, { useState, useEffect } from "react";
import { Card, Table, Title, Text, Badge, Button, Loader, Grid } from "@mantine/core";

// Interface pour une commande
interface Commande {
  id: number;
  client: string;
  produit: string;
  montant: number;
  statut: "En attente" | "Validée" | "Expédiée";
  date: string;
}

const Commandes = () => {
  const [commandes, setCommandes] = useState<Commande[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulation de récupération des commandes (API)
  useEffect(() => {
    setTimeout(() => {
      setCommandes([
        { id: 1, client: "Jean Dupont", produit: "Ordinateur", montant: 1200, statut: "En attente", date: "26/02/2025" },
        { id: 2, client: "Alice Martin", produit: "Smartphone", montant: 850, statut: "Validée", date: "25/02/2025" }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container-fluid">
      <Grid>
        {/* Section Stats */}
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card shadow="sm" p="lg" radius="md">
            <Title order={4}>Total Commandes</Title>
            <Text size="xl">{commandes.length}</Text>
          </Card>
        </Grid.Col>

        {/* Section Commandes */}
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Card shadow="sm" p="lg" radius="md">
            <Title order={4} mb="md">Liste des commandes</Title>

            {loading ? (
              <Loader color="blue" />
            ) : (
              <Table striped highlightOnHover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Produit</th>
                    <th>Montant (Fcfa)</th>
                    <th>Statut</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {commandes.map(cmd => (
                    <tr key={cmd.id}>
                      <td>{cmd.id}</td>
                      <td>{cmd.client}</td>
                      <td>{cmd.produit}</td>
                      <td>{cmd.montant}</td>
                      <td>
                        <Badge color={cmd.statut === "En attente" ? "yellow" : cmd.statut === "Validée" ? "green" : "blue"}>
                          {cmd.statut}
                        </Badge>
                      </td>
                      <td>{cmd.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Commandes;

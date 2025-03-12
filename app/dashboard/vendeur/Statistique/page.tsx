"use client";

import { Grid, Card, Title, Text } from "@mantine/core";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 📊 Données simulées (à remplacer par API)
const salesData = [
  { mois: "Jan", ventes: 5000 },
  { mois: "Fév", ventes: 8000 },
  { mois: "Mar", ventes: 12000 },
  { mois: "Avr", ventes: 9500 },
  { mois: "Mai", ventes: 15000 },
  { mois: "Juin", ventes: 20000 },
  { mois: "Juil", ventes: 25000 },
  { mois: "Aout", ventes: 18000 },
  { mois: "Sep", ventes: 22000 },
  { mois: "Oct", ventes: 25000 },
  { mois: "Nov", ventes: 28000 },
  { mois: "Déc", ventes: 30000 },
];

const clientsData = [
  { mois: "Jan", clients: 100 },
  { mois: "Fév", clients: 250 },
  { mois: "Mar", clients: 300 },
  { mois: "Avr", clients: 450 },
  { mois: "Mai", clients: 600 },
  { mois: "Juin", clients: 700 },
  { mois: "Juil", clients: 800 },
  { mois: "Aout", clients: 950 },
  { mois: "Sep", clients: 1200 },
  { mois: "Oct", clients: 1500 },
  { mois: "Nov", clients: 1800 },
  { mois: "Déc", clients: 2000 },
];

const categoryData = [
  { name: "Électronique", value: 400 },
  { name: "ordinateurs", value: 300 },
  { name: "telephones", value: 200 },
  { name: "accessoires", value: 100 },
];

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];

export default function DashboardAnalytics() {
  const [totalVentes, setTotalVentes] = useState(0);
  const [totalClients, setTotalClients] = useState(0);
  const [totalCommandes, setTotalCommandes] = useState(0);

  useEffect(() => {
    setTotalVentes(salesData.reduce((acc, item) => acc + item.ventes, 0));
    setTotalClients(clientsData.reduce((acc, item) => acc + item.clients, 0));
    setTotalCommandes(150); // Exemple statique, à remplacer par API
  }, []);

  return (
    <div className="container mt-4">
      <Title order={2} className="text-center mb-4"> Tableau de Bord - Analyses</Title>

      {/*  SECTION STATS */}
      <Grid>
  <Grid.Col span={{ base: 12, md: 4 }}>
    <Card shadow="sm" padding="lg">
      <Title order={4}>Total Ventes</Title>
      <Text size="xl" sx={{ color: "blue" }}>{totalVentes} Fcfa</Text>
    </Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, md: 4 }}>
    <Card shadow="sm" padding="lg">
      <Title order={4}>Total Clients</Title>
      <Text size="xl" sx={{ color: "green" }}>{totalClients}</Text>
    </Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, md: 4 }}>
    <Card shadow="sm" padding="lg">
      <Title order={4}>Total Commandes</Title>
      <Text size="xl" sx={{ color: "orange" }}>{totalCommandes}</Text>
    </Card>
  </Grid.Col>
</Grid>

      {/* 📌 SECTION GRAPHIQUES */}
      <Grid mt="xl">
        {/* 🔹 CHIFFRE D'AFFAIRES */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="md" padding="lg">
            <Title order={4}>Chiffre d'Affaires Mensuel</Title>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ventes" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* 🔹 CLIENTS */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="md" padding="lg">
            <Title order={4}>Nombre de Clients</Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={clientsData}>
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="clients" stroke="#2196F3" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* 🔹 RÉPARTITION DES VENTES */}
        <Grid.Col span={12}>
          <Card shadow="md" padding="lg">
            <Title order={4}>Répartition des Ventes par Catégorie</Title>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

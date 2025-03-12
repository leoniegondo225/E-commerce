"use client";

import { useState } from "react";
import {
  Tabs,
  Card,
  Title,
  TextInput,
  Button,
  Container,
  Switch,
  Select,
  PasswordInput,
  Table,
  ActionIcon,
} from "@mantine/core";
import { IconUser, IconLock, IconBell, IconSettings } from "@tabler/icons-react";

export default function ParametresPage() {
  const [darkMode, setDarkMode] = useState(false);
  const sessions = [
    { id: 1, device: "Chrome - Windows", ip: "192.168.1.1", date: "25/02/2025" },
    { id: 2, device: "Safari - iPhone", ip: "203.0.113.42", date: "24/02/2025" },
  ];

  return (
    <Container size="lg" className="mt-4">
      <Title order={2} ta="center" mb="lg">
        ⚙️ Paramètres
      </Title>

      <Tabs defaultValue="profil">
        {/* Onglets */}
        <Tabs.List grow>
          <Tabs.Tab value="profil">
            <IconUser size={18} style={{ marginRight: 8 }} />
            Profil
          </Tabs.Tab>
          <Tabs.Tab value="securite">
            <IconLock size={18} style={{ marginRight: 8 }} />
            Sécurité
          </Tabs.Tab>
          <Tabs.Tab value="notifications">
            <IconBell size={18} style={{ marginRight: 8 }} />
            Notifications
          </Tabs.Tab>
          <Tabs.Tab value="theme">
            <IconSettings size={18} style={{ marginRight: 8 }} />
            Thème & Accessibilité
          </Tabs.Tab>
        </Tabs.List>

        {/* Section Profil */}
        <Tabs.Panel value="profil" mt="md">
          <Card shadow="sm" padding="lg">
            <Title order={4}>Modifier le Profil</Title>
            <TextInput label="Nom" placeholder="Votre nom" mt="md" />
            <TextInput label="Email" placeholder="exemple@email.com" mt="md" />
            <Button color="blue" mt="md">
              Enregistrer
            </Button>
          </Card>
        </Tabs.Panel>

        {/* Section Sécurité */}
        <Tabs.Panel value="securite" mt="md">
          <Card shadow="sm" padding="lg">
            <Title order={4}>Changer le Mot de Passe</Title>
            <PasswordInput label="Ancien mot de passe" mt="md" />
            <PasswordInput label="Nouveau mot de passe" mt="md" />
            <Button color="red" mt="md">
              Mettre à jour
            </Button>
          </Card>

          <Card shadow="sm" padding="lg" mt="md">
            <Title order={4}>Sessions Actives</Title>
            <Table striped highlightOnHover mt="md">
              <thead>
                <tr>
                  <th>Appareil</th>
                  <th>Adresse IP</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => (
                  <tr key={session.id}>
                    <td>{session.device}</td>
                    <td>{session.ip}</td>
                    <td>{session.date}</td>
                    <td>
                      <ActionIcon color="red" variant="outline">
                        ❌
                      </ActionIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Tabs.Panel>

        {/* Section Notifications */}
        <Tabs.Panel value="notifications" mt="md">
          <Card shadow="sm" padding="lg">
            <Title order={4}>Préférences de Notifications</Title>
            <Switch label="Recevoir des notifications par email" mt="md" />
            <Switch label="Recevoir des alertes SMS" mt="md" />
            <Switch label="Activer les notifications push" mt="md" />
            <Button color="blue" mt="md">
              Enregistrer
            </Button>
          </Card>
        </Tabs.Panel>

        {/* Section Thème & Accessibilité */}
        <Tabs.Panel value="theme" mt="md">
          <Card shadow="sm" padding="lg">
            <Title order={4}>Personnalisation du Thème</Title>
            <Select
              label="Choisir un thème"
              placeholder="Sélectionner"
              data={[
                { value: "clair", label: "Mode Clair" },
                { value: "sombre", label: "Mode Sombre" },
              ]}
              mt="md"
              onChange={(value) => setDarkMode(value === "sombre")}
            />
            <Switch label="Activer le mode contrasté" mt="md" />
            <Switch label="Activer les raccourcis clavier" mt="md" />
            <Button color="blue" mt="md">
              Enregistrer
            </Button>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

"use client"; // Nécessaire pour Next.js App Router

import { useEffect, useState } from 'react';
import {
  IconHome,
  IconReceipt2,
  IconLogout,
  IconSwitchHorizontal,
  IconShoppingCart,
  IconBox,
  IconUsers,
  IconMessageCircle,
  IconChartBar,
  IconSettings,
  IconUserCircle,
  IconCreditCard
} from '@tabler/icons-react';
import { Group } from '@mantine/core';
import { PiPlantFill } from "react-icons/pi";

// Importation des composants


import classes from './NavbarSimpleColored.module.css';

import ProfilVendeur from './ProfilVendeur/page';
import Home from './Home/page';
import Commandes from './Commande/page';
import Paiements from './Paiements/page';
import Parametre from './Paramettre/page';
import Messages from './Message/page';
import Clients from './Client/page';
import Statistques from './Statistique/page';
import Produits from './Produits/page';
import { SiLapce } from 'react-icons/si';

// Tableau des liens avec des références aux composants
const data = [
  { component: Home, label: 'Tableau de bord', icon: IconHome },
  { component: ProfilVendeur, label: 'Profil Utilisateur', icon: IconUserCircle },
  { component: Produits, label: 'Gestion des Produits', icon: IconBox },
  { component: Commandes, label: 'Commandes', icon: IconShoppingCart },
  { component: Statistques, label: 'Statistiques  ', icon: IconChartBar },
  { component: Clients, label: 'Gestion des Clients', icon: IconUsers },
  { component: Messages, label: ' Messages & Notifications', icon: IconMessageCircle },
  { component: Parametre, label: ' Paramètres', icon: IconSettings },
  { component: Paiements, label: 'Paiements', icon: IconCreditCard }
];

function NavbarSimpleColored() {
  const [active, setActive] = useState('Tableau de bord');
  const [activeComponent, setActiveComponent] = useState(<Home />); // ✅ Stocke directement un élément JSX


  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href="#"
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        setActiveComponent(<item.component />); // ✅ Stocke l'élément JSX
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div className={classes.container}>
      {/* ✅ Barre de navigation */}
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <h4>
              <sub>Achi<span className="text-warning">Oni</span></sub>
              <SiLapce className='me-2' />
            </h4>
          </Group>
          {links}
        </div>

        {/* ✅ Liens en bas */}
        <div className={classes.footer}>
          <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>Changer de compte</span>
          </a>

          <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Déconnexion</span>
          </a>
        </div>
      </nav>

      {/* ✅ Section du contenu */}
      <section className={classes.content}>
        {activeComponent}
      </section>
    </div>
  );
}

export default NavbarSimpleColored;
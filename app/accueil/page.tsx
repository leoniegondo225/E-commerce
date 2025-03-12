"use client"

import React, { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { HeroSection } from '@/components/home/heroSection';
import Delivre from '@/components/home/delivre';
import ProductList from '@/components/home/produit';

import SellerSection from '@/components/home/vendeur';
import Soldes from '@/components/home/solde';
import { ProductType } from '@/type';


function page() {

  const [panier, setPanier] = useState<ProductType[]>([])

  return (
    <div>
      <Navbar panier={panier}></Navbar>

      <HeroSection />
      <Delivre />
      <Soldes/>
      
      <ProductList setPanier={setPanier} />
      
      <SellerSection/>
      


      



      <Footer></Footer>
    </div>
  )
}

export default page

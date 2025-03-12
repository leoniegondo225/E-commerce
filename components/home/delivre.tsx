import React from 'react'
import { BiSolidDiscount, BiSupport } from 'react-icons/bi'
import { RiRefund2Line } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

function Delivre() {
  return (
    <>
    <div className ="rts-services-section section-gap py-5">
        <div className ="container">
          <div className ="row">
            <div className ="col-xl-3 col-md-6">
              <div className ="service-item">
                <div className ="service-icon"><TbTruckDelivery className='text-success' size={50} />
                </div>
                <div className ="contents">
                  <h3 className ="service-title ">Livraison 24h/24 </h3>
                  <p>Livraison rapide et sécurisée directement chez vous.</p>
                </div>
              </div>
            </div>
            <div className ="col-xl-3 col-md-6">
              <div className ="service-item">
                <div className ="service-icon"><BiSupport className='text-info' size={50}  />
                </div>
                <div className ="contents">
                  <h3 className ="service-title">Service clients </h3>
                  <p>Un service client à votre écoute pour vous accompagner.</p>
                </div>
              </div>
            </div>
            <div className ="col-xl-3 col-md-6">
              <div className ="service-item">
                <div className ="service-icon"><RiRefund2Line className='text-warning' size={50}  />
                </div>
                <div className ="contents">
                  <h3 className ="service-title">Rembousement</h3>
                  <p>Remboursement garanti si l’article est retourné en bon état.</p>
                </div>
              </div>
            </div>
            <div className ="col-xl-3 col-md-6">
              <div className ="service-item">
                <div className ="service-icon"><BiSolidDiscount className='text-danger' size={50}  /></div>
                <div className ="contents">
                  <h3 className ="service-title">promotion</h3>
                  <p>Profitez de réductions grâce à nos offres et promotions régulières.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        
      </div>
      </>
  )
}

export default Delivre

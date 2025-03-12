// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

export const HeroSection = () => {

    const pub = [
        {
            id: 1,
            titre: "Pub 1",
            prix: 1000,
            image: "/img/baniere.png"
        },
        {
            id: 1,
            titre: "Pub 2",
            prix: 1000,
            image: "/img/5.jpg"
        },
        {
            id: 1,
            titre: "Pub 3",
            prix: 1000,
            image: "/img/hero3.jpg"
        },
        {
            id: 1,
            titre: "Pub 4",
            prix: 1000,
            image: "/img/hero1.avif"
        },
        {
            id: 1,
            titre: "Pub 5",
            prix: 1000,
            image: "/img/casque.webp"  
        }
    ]


    return (
        <div className="w-100">
            {pub && pub.length > 0 && (
                 <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                 navigation
                 pagination={{ clickable: true }}
                 spaceBetween={20}
                 slidesPerView= {1}
                 effect="fade"
                 speed= {1000}
                 autoplay= { {delay: 1000 }}
                 loop={true}
                 /* breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Téléphones
                    640: { slidesPerView: 2, spaceBetween: 15 }, // Tablettes
                    1024: { slidesPerView: 3, spaceBetween: 20 }, // Ordinateurs
                    1440: { slidesPerView: 4, spaceBetween: 25 }, // Écrans larges
                }} */
                 
                 >

                    {pub && pub.length > 0 && pub.map(item => (
                        <SwiperSlide key={item.id+Math.random()} 
                            style={{
                                background: `url(${item.image})`, 
                            height: "90vh",
                            width:"100%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition:"center"
                            }}>

                        </SwiperSlide>
                    ))}
             </Swiper>
            )}
        </div>
       
    )
}
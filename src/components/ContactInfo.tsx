/* =========================================
   ContactInfo.tsx
   ========================================= */
   import React from "react";
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import {
     faEnvelope,
     faPhone,
     faMapMarkerAlt,
   } from "@fortawesome/free-solid-svg-icons";
   import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
   
   // On importe le composant Ticker qu'on vient de créer
   import Ticker from "@/components/Ticker"; // ajustez le chemin selon votre arborescence
   
   const ContactInfo: React.FC = () => {
     // Vos images
     const images = [
       "/images/boutique.webp",
       "/images/IMG_3832.webp",
       "/images/IMG_3867.webp",
       "/images/IMG_3868.webp",
       "/images/IMG_3870.webp",
       "/images/IMG_3873.webp",
       "/images/IMG_3874.webp",
     ];
   
     return (
       <div className="bg-white py-10 sm:py-20 sm:px-32 px-6">
         {/* --- Section contact (inchangée) --- */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Section gauche */}
           <div>
             <h2 className="text-sm font-semibold mb-4">Conseils</h2>
             <h3 className="text-3xl font-bold mb-4">Contactez-nous</h3>
             <p className="text-sm mb-6">
               Nous sommes là pour vous aider à garder vos plantes en pleine santé
               avec des conseils personnalisés.
             </p>
           </div>
   
           {/* Section droite */}
           <ul className="space-y-6">
             <li className="flex items-start">
               <FontAwesomeIcon icon={faEnvelope} className="text-lg mt-1 mr-3" />
               <div>
                 <p className="text-base font-bold">Email</p>
                 <a
                   href="mailto:autempsdelarose@outlook.com"
                   className="hover:underline"
                 >
                   autempsdelarose@outlook.com
                 </a>
               </div>
             </li>
             <li className="flex items-start">
               <FontAwesomeIcon icon={faPhone} className="text-lg mt-1 mr-3" />
               <div>
                 <p className="text-base font-bold">Téléphone</p>
                 <a href="tel:+33231770131" className="hover:underline">
                   +33 02 31 77 01 31
                 </a>
               </div>
             </li>
             <li className="flex items-start">
               <FontAwesomeIcon
                 icon={faMapMarkerAlt}
                 className="text-lg mt-1 mr-3"
               />
               <div>
                 <p className="text-base font-bold">Boutique</p>
                 <a
                   href="https://www.google.com/maps?q=13+Rue+Pasteur+11,+14310+Villers-Bocage"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:underline"
                 >
                   13 Rue Pasteur 11, 14310 Villers-Bocage
                 </a>
               </div>
             </li>
           </ul>
         </div>
   
         {/* Réseaux Sociaux */}
         <div className="flex justify-center space-x-8 mt-10">
           <a
             href="https://www.instagram.com/autempsdelarose"
             className="text-black hover:text-gold transition duration-300"
             aria-label="Instagram"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FontAwesomeIcon icon={faInstagram} className="text-5xl" />
           </a>
           <a
             href="https://www.facebook.com/share/13zbdRhMeS"
             className="text-black hover:text-gold transition duration-300"
             aria-label="Facebook"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FontAwesomeIcon icon={faFacebook} className="text-5xl" />
           </a>
         </div>
   
         {/* --- Ticker défilant --- */}
         <div className="mt-14">
           {/*
             On utilise Ticker avec la liste d'images,
             la hauteur et la vitesse qu'on veut.
           */}
           <Ticker images={images} height={300} speed={0.5} />
         </div>
       </div>
     );
   };
   
   export default ContactInfo;
   
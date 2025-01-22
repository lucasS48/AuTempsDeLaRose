import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/subscribe", {
        email_address: email,
        status: "subscribed",
      });

      if (response.status === 200) {
        setMessage("Merci pour votre inscription !");
        setEmail("");
      } else {
        setMessage("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur lors de l'inscription :", error.message);
        setMessage(error.response?.data?.message || "Une erreur est survenue.");
      } else {
        console.error("Erreur inconnue :", error);
        setMessage("Une erreur inattendue est survenue.");
      }
    }
  };

  return (
    <div className="
    bg-beige
    py-10
    sm:py-16
    px-6       /* Base : petits écrans (mobile) */
    sm:px-12    /* >= 640px */
    md:px-16   /* >= 768px */
    lg:px-20   /* >= 1024px */
    xl:px-40   /* >= 1280px */
    shadow-md
  ">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Ne manquez plus aucune nouveauté !
      </h2>
      <p className="text-sm mb-6 text-center">
        Inscrivez-vous à notre newsletter pour être informé(e) en avant-première
        de toutes nos nouvelles collections, de nos ateliers créatifs et de nos
        offres spéciales pour les fêtes. Restez connecté(e) à notre univers et
        ne ratez plus rien !
      </p>
      {message && <p className="text-base mt-4 mb-4 text-center">{message}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-3 rounded bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded bg-grey text-white font-bold hover:bg-gray-700 transition duration-300"
        >
          Je m’inscris
        </button>
      </form>

      <p className="text-xs mt-4 text-center">
        En vous inscrivant, vous recevrez régulièrement nos meilleures offres
        et serez toujours au courant de nos prochains ateliers et événements.
        Vous pouvez vous désabonner à tout moment grâce au lien de
        désinscription présent dans nos e-mails.
      </p>
    </div>
  );
};

export default Newsletter;

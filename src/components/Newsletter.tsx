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
        status: "subscribed", // Ajout direct à l'audience
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
    <div className="bg-beige py-10 sm:py-16 px-4 shadow-md">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Prenez soin de vos plantes
      </h2>
      <p className="text-sm mb-6 text-center">
        Découvrez nos conseils pour maintenir vos plantes en pleine santé et
        épanouies toute l&apos;année.
      </p>
      {message && <p className="text-base mt-4 mb-4 text-center">{message}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Entrer votre adresse email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-3 rounded bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded bg-grey text-white font-bold hover:bg-gray-700 transition duration-300"
        >
          S&apos;inscrire
        </button>
      </form>

      <p className="text-xs mt-4 text-center">
        En vous inscrivant, vous acceptez de recevoir des e-mails réguliers de
        notre part. Vous pouvez vous désabonner à tout moment en suivant le lien
        présent dans nos e-mails.
      </p>
    </div>
  );
};

export default Newsletter;

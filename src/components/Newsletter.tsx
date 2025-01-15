import React from "react";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre inscription !");
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Entrer votre adresse email"
          required
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
        By clicking Sign Up you&apos;re confirming that you agree with our{" "}
        <a href="#" className="underline text-gold">
          Terms and Conditions.
        </a>
      </p>
    </div>
  );
};

export default Newsletter;

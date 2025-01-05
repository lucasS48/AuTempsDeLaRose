import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-black pb-2 text-gold">
              Contact
            </h3>
            <div>
              <p className="text-sm mb-2">
                13 Rue Pasteur 11, 14310 Villers-Bocage
              </p>
              <p className="text-sm mb-2">
                Téléphone :{" "}
                <a
                  href="tel:+33231770131"
                  className="hover:underline text-gold"
                >
                  02 31 77 01 31
                </a>
              </p>
              <p className="text-sm">
                Email :{" "}
                <a
                  href="mailto:contact@boutiquedefleurs.com"
                  className="hover:underline text-gold"
                >
                  autempsdelarose@outlook.com
                </a>
              </p>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-black pb-2 text-gold">
              Suivez-nous
            </h3>
            <div className="flex space-x-6 text-3xl">
              <a
                href="https://www.instagram.com/autempsdelarose?igsh=MTBwaXJqYm94anR1dw=="
                className="text-black hover:text-gold transition duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/share/13zbdRhMeS/?mibextid=wwXIfr"
                className="text-black hover:text-gold transition duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-black pb-2 text-gold">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Inscrivez-vous pour recevoir nos dernières actualités et offres
              par email.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="p-3 rounded bg-gray-100 border border-black text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="p-3 rounded bg-black text-white font-bold hover:bg-gray-800 transition duration-300"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-black pt-4 text-center text-sm text-balck">
          &copy; {new Date().getFullYear()} Boutique de Fleurs. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

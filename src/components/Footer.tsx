import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <h3 className="section-title text-gold">Contact</h3>
            <p className="text-sm mb-6">
              Besoin d'aide ou d'un conseil ? Passez nous voir à la boutique ou
              contactez-nous par téléphone ou email. Nous serons ravis de vous
              aider !
            </p>
            <address className="not-italic">
              <p className="text-sm mb-4">
                <span className="font-semibold">Adresse :</span>{" "}
                <a
                  href="https://www.google.com/maps?q=13+Rue+Pasteur+11,+14310+Villers-Bocage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gold"
                >
                  13 Rue Pasteur 11, 14310 Villers-Bocage
                </a>
              </p>
              <p className="text-sm mb-4">
                <span className="font-semibold">Téléphone :</span>{" "}
                <a
                  href="tel:+33231770131"
                  className="hover:underline text-gold"
                >
                  02 31 77 01 31
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email :</span>{" "}
                <a
                  href="mailto:contact@boutiquedefleurs.com"
                  className="hover:underline text-gold"
                >
                  autempsdelarose@outlook.com
                </a>
              </p>
            </address>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="section-title text-gold">Suivez-nous</h3>
            <p className="text-sm mb-6">
              Rejoignez-nous sur nos réseaux sociaux pour découvrir nos
              nouveautés, offres spéciales et inspirations florales !
            </p>
            <div className="flex justify-center space-x-8 mt-6">
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
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="section-title text-gold">Newsletter</h3>
            <h4 className="text-sm mb-4 font-bold">
              3 bonnes raisons de s'abonner :
            </h4>
            <ul className="list-disc pl-6 text-sm mb-6 space-y-2">
              <li>Recevez toutes nos offres et nos bons plans.</li>
              <li>Bénéficiez de conseils et astuces réguliers.</li>
              <li>Restez informé(e) des ateliers organisés en boutique.</li>
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Merci pour votre inscription !");
              }}
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                placeholder="Votre email"
                required
                className="p-3 rounded bg-gray-100 text-black border border-black focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="p-3 rounded bg-gold text-black font-bold hover:bg-yellow-500 transition duration-300"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Au temps de la Rose. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

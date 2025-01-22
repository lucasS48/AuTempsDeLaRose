import Link from 'next/link';
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      

      <ContactInfo />

      {/* Footer Bottom */}
      <div className="mt-4 border-t border-gray-300 pt-4 pb-4 text-center text-sm">
      <div>
          <Link
            href="/mentions" // URL à adapter
            className="text-blue-600 hover:underline"
          >
            Mentions légales & Politique de confidentialité
          </Link>
        </div>
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Au temps de la Rose. Tous droits
          réservés.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;

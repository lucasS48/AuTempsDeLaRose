import Newsletter from "./Newsletter";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Newsletter */}
      <Newsletter />

      <ContactInfo />

      {/* Footer Bottom */}
      <div className="mt-4 border-t border-gray-300 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Au temps de la Rose. Tous droits
        réservés.
      </div>
    </footer>
  );
};

export default Footer;

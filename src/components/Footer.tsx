const Footer = () => {
    return (
      <footer className="bg-black-soft text-white py-6">
        <div className="container mx-auto px-4 text-center">
          {/* Nom et slogan de la boutique */}
          <h2 className="text-lg font-bold">Au Temps de la Rose</h2>
          <p className="text-sm mt-1">
            La beauté des fleurs et plantes, au service de vos émotions.
          </p>
  
          {/* Lien vers les réseaux sociaux et localisation */}
          <div className="flex justify-center mt-4 space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.987h-2.54v-2.891h2.54v-2.2c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.239.194 2.239.194v2.47h-1.261c-1.243 0-1.631.771-1.631 1.563v1.864h2.773l-.443 2.891h-2.33V21.88C18.343 21.128 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.345 3.608 1.32.975.975 1.257 2.242 1.319 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.319-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.257-2.242-1.319-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.687 0 8.265.015 7.001.072 5.737.13 4.482.39 3.408 1.464c-1.075 1.075-1.334 2.33-1.392 3.594C2.015 6.264 2 6.687 2 10s.015 3.736.072 4.999c.058 1.265.317 2.519 1.392 3.594 1.074 1.075 2.33 1.334 3.594 1.392 1.265.058 1.687.072 4.999.072s3.736-.015 4.999-.072c1.265-.058 2.519-.317 3.594-1.392 1.075-1.074 1.334-2.33 1.392-3.594.058-1.263.072-1.685.072-4.999s-.015-3.736-.072-4.999c-.058-1.265-.317-2.519-1.392-3.594C16.518.39 15.263.131 14 .072 12.736.015 12.314 0 9 0zm0 5.838a6.161 6.161 0 1 0 0 12.322A6.161 6.161 0 0 0 9 5.838zm0 10.162a3.995 3.995 0 1 1 0-7.99 3.995 3.995 0 0 1 0 7.99zm7.293-10.545a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
              </svg>
            </a>
            <a
              href="https://www.google.com/maps/place/La+Boutique+Au+Temps+de+la+Rose/@49.0804959,-0.660764,17z/data=!3m2!4b1!5s0x480a4b02632e05a7:0x34837ce9b2c105b5!4m6!3m5!1s0x480a4b027cc03f87:0x1f5d1551ee592b9f!8m2!3d49.0804924!4d-0.6581891!16s%2Fg%2F1v29bdfl?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <span className="sr-only">Localisation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 10.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 7.75 12 7.75 14.25 8.76 14.25 10 13.24 12.25 12 12.25z" />
              </svg>
            </a>
          </div>
  
          {/* Mentions légales */}
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} Au Temps de la Rose - autempsdelarose@emailpro.fr
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
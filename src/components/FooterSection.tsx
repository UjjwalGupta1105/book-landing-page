import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 bg-white text-black rounded-3xl py-7">
          <h2 className="text-3xl font-bold mb-2">Learn, laugh. and lead your way to wealth</h2>
          <p className="text-lg mb-4">grab the comic now!</p>
          <div className="flex justify-center">
            <button className="bg-red-500 text-white w-40 p-2 rounded-xl  hover:bg-red-600 transition duration-300">
              Read Now
            </button>
          </div>
        </div>
        <div className="text-center mb-6 bg-white text-black rounded-3xl py-7">
          <h2 className="text-3xl font-bold mb-2">Be the part of financial revolution</h2>
          <p className="text-lg mb-4">Subscribe to get latest updates,exclusive content, and more !</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 w-80 rounded-md text-gray-900 border-2 border-black"
            />
            <button className="bg-red-500 text-white w-40 p-2 ml-0.5 rounded-xl hover:bg-red-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-6 text-[#ef4444]">
          <a href="#" className=" hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="#" className="hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a href="#" className="hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        <p className="text-center text-sm opacity-75">
          © {new Date().getFullYear()} Money Mania: Rise of Inflare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import reviewImage1 from '../assets/c3.jpg'; 
import reviewImage2 from '../assets/c1.jpg';
import reviewImage3 from '../assets/c2.jpg';
import '../styles/ReviewSection.css';
import { motion } from 'framer-motion';

const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 text-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        {/* Custom SVG graphics or superhero-themed images for background */}
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <circle cx="400" cy="300" r="500" fill="rgba(255, 255, 0, 0.1)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 animate-fadeIn">
          What Readers Are Saying
        </h2>

        {/* Review Cards */}
        <motion.div 
          initial={{ x: 100, scale: 0.5 }} 
          whileInView={{ x: 0, scale: 1 }} 
          transition={{ duration: 1 }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Review 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <div className="flex items-center mb-4">
              <img
                src={reviewImage1}
                alt="Reviewer"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-sm text-[#2a4dc1]">Verified Reader</p>
              </div>
            </div>
            <p className="text-lg mb-4">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-2 text-[#2a4dc1]" />
              This book is an action-packed adventure! The characters are well-developed, and I couldn’t put it down.
            </p>
            <div className="flex space-x-1 text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <div className="flex items-center mb-4">
              <img
                src={reviewImage2}
                alt="Reviewer"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">Jane Smith</h4>
                <p className="text-sm text-[#2a4dc1]">Verified Reader</p>
              </div>
            </div>
            <p className="text-lg mb-4">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-2 text-[#2a4dc1]" />
              An absolute page-turner! The plot twists kept me hooked, and the superpowers were so creative.
            </p>
            <div className="flex space-x-1 text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <div className="flex items-center mb-4">
              <img
                src={reviewImage3}
                alt="Reviewer"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">Michael Lee</h4>
                <p className="text-sm text-[#2a4dc1]">Verified Reader</p>
              </div>
            </div>
            <p className="text-lg mb-4">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-2 text-[#2a4dc1]" />
              One of the best superhero stories I’ve read! Can’t wait for the sequel.
            </p>
            <div className="flex space-x-1 text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;

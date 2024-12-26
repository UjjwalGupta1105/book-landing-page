// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSkullCrossbones, faFire, faBolt } from '@fortawesome/free-solid-svg-icons';
import c2 from '../assets/cast4.jpg';
import c3 from '../assets/cast2.jpg';
import c4 from '../assets/cast1.png';
import c5 from '../assets/cast3.jpg';
import { motion } from 'framer-motion';

interface Character {
  name: string;
  role: string;
  icon: any;
  description: string;
  imageUrl: string;
}

const CharacterCards: React.FC = () => {
  const characters: Character[] = [
    {
      name: 'Momenta',
      role: 'Money',
      icon: faFire,
      description: 'A fiery superhero with the ability to control and manipulate flames at will.',
      imageUrl: c4,
    },
    {
      name: 'Inflare',
      role: 'Inflation',
      icon: faSkullCrossbones,
      description: 'A cunning villain who deals in the black market of crypto weapons and dark tech.',
      imageUrl: c2,
    },
    {
      name: 'Weal',
      role: 'Wealth',
      icon: faBolt,
      description: 'A hero with the ability to absorb and redirect energy into powerful blasts.',
      imageUrl: c3,
    },
    {
      name: 'Rescus',
      role: 'Recession',
      icon: faShieldAlt,
      description: 'A tactical mastermind with an impenetrable shield and dangerous battle skills.',
      imageUrl: c5,
    },
  ];

  return (
    <motion.div
      // initial={{ y: 10, scale: 0.5 }}
      // whileInView={{ y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-screen"
    >
      <h2 className="text-4xl font-bold text-black text-center mb-12 mt-30" id="characters">Meet the Cast</h2>
      <div className="flex flex-wrap h-400 mx-auto justify-center characters w-screen">
        {characters.map((character, index) => (
          <div
            key={index}
            className=" mx-2 my-2 relative group bg-gray-800 w-[355px] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={character.imageUrl}
              alt={character.name}
              className="absolute top-0 left-0 inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 content-center object-cover object-fill"
            />
            <div className="cards relative z-10 p-6 h-[575px] flex flex-col justify-end items-center text-center to-transparent">
              {/* <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FontAwesomeIcon icon={character.icon} size="3x" className="text-indigo-500" />
              </div> */}
              {/* <h3 className="text-2xl font-semibold text-white mb-2">{character.name}</h3>
              <p className="text-indigo-400 text-lg mb-2">{character.role}</p>
              <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {character.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CharacterCards;

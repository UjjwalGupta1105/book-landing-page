
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUserSecret, faBolt, faFireAlt, faShieldAlt, faSkull } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../assets/WhatsApp.jpg'; 
import villainImage from '../assets/villains.jpg'; 
const HeroVillainSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-500">Heroes & Villains</h2>
          <p className="text-lg mt-4">
            Meet the champions of justice and the masters of chaos in <span className="font-bold">Money Mania</span>.
          </p>
        </div>

        {/* Heroes and Villains Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hero Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-green-400">The Heroes</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faUserShield} className="text-4xl text-blue-500" />
                <div>
                  <h4 className="text-xl font-bold">Captain Valor</h4>
                  <p className="text-gray-300">
                    A symbol of hope, Captain Valor uses his unmatched strength and leadership to protect the city from danger.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faBolt} className="text-4xl text-yellow-500" />
                <div>
                  <h4 className="text-xl font-bold">Electra</h4>
                  <p className="text-gray-300">
                    With the ability to control lightning, Electra strikes her enemies with the speed and power of a storm.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-green-500" />
                <div>
                  <h4 className="text-xl font-bold">Guardian</h4>
                  <p className="text-gray-300">
                    Armed with an unbreakable shield, Guardian defends the innocent and fights to uphold justice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Villain Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-red-400">The Villains</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faUserSecret} className="text-4xl text-purple-500" />
                <div>
                  <h4 className="text-xl font-bold">Shadow King</h4>
                  <p className="text-gray-300">
                    Manipulating the shadows, Shadow King remains unseen until it’s too late, sowing chaos with every step.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faFireAlt} className="text-4xl text-orange-500" />
                <div>
                  <h4 className="text-xl font-bold">Inferno</h4>
                  <p className="text-gray-300">
                    Burning with rage, Inferno can unleash destructive flames to consume everything in his path.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faSkull} className="text-4xl text-red-600" />
                <div>
                  <h4 className="text-xl font-bold">Deathmonger</h4>
                  <p className="text-gray-300">
                    A ruthless villain, Deathmonger thrives on destruction and will stop at nothing to see the city fall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero and Villain Images */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Hero Image */}
          <div className="relative flex justify-center items-center">
            <img
              src={heroImage} 
              alt="Hero"
              className=" h-[600px] rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            />
            {/* Floating Effects */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-blue-400 rounded-full opacity-75 animate-pulse"></div>
            <div className="absolute bottom-8 right-12 w-12 h-12 bg-yellow-400 rounded-full opacity-75 animate-pulse"></div>
          </div>

          {/* Villain Image */}
          <div className="relative flex justify-center items-center">
            <img
              src={villainImage}
              alt="Villain"
              className="h-[600px]  rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            />
            {/* Floating Effects */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-purple-500 rounded-full opacity-75 animate-pulse"></div>
            <div className="absolute bottom-8 right-12 w-12 h-12 bg-red-500 rounded-full opacity-75 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVillainSection;

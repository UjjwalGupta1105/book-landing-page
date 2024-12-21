import BookImg from "../assets/WhatsApp.jpg"

const DownloadBook = () => {
    return (
        <div className="Dwn-Section relative  bg-white text-white min-h-screen h-200 mb-30" id="about">
          {/* Curved Background */}
          <div className="relative">
            <div className="bg-black">
                
              <div className="max-w-6xl mx-auto px-4 py-14 text-center">
                {/* Header Section */}
                <h1 className="text-4xl font-bold">From Piggy Banks to Portfolios</h1>
                <p className="text-lg mt-4 text-grey">
                  The first step in your revolution to financial greatness:
                  <br /> A comic book on money and finance
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 mt-6 rounded">
                  Read now
                </button>
              </div>
            </div>
    
            {/* Accurate Curve using SVG */}
            <div className="absolute inset-x-0 inset-y-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 320"><path fill="black" fill-opacity="1" d="M0,96L80,80C160,64,320,32,480,64C640,96,800,192,960,229.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>    
            </div>

            {/* Book Image */}
            <div className="bookImg flex justify-center absolute right-60 top-140">
            <img
              src={BookImg}
              alt="Money Mania"
              className="rounded shadow-lg h-90 w-80"
            />
          </div>
            
            {/* Form Section */}
        <div className="form absolute left-40 top-30 m-40 pb-20 z-100 mb-30">
          <div className="p-6 max-w-md w-full">
            <h2 className="text-4xl mb-4 text-black text-center">Read free sample now!</h2>
            <form className="flex flex-col gap-4 text-black">
              <input
                type="email"
                placeholder="E-mail"
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="number"
                placeholder="Phone"
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-40 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-5 rounded-lg m-auto"
              >
                DOWNLOAD
              </button>
            </form>
          </div>
            </div>
            
          </div>

        </div>
      );
};

export default DownloadBook;

import { Player } from "@lottiefiles/react-lottie-player";
import service from "../assets/lottie/service.json"
import review from "../assets/lottie/review.json"

const HowItWorks = () => {
    return (
        <div>
             <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
        <p className="text-lg text-gray-700 mb-10">
          Follow these simple steps to explore services, write reviews, and contribute to the community.
        </p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/private_files/lf30_obidsi0t.json"
              className="w-28 h-28 mx-auto"
            />
            <h3 className="text-2xl font-semibold mt-4">1. Discover</h3>
            <p className="text-gray-600 mt-2">Browse various services and find the ones that suit your needs.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <Player
              autoplay
              loop
              src={review}
              className="w-28 h-28 mx-auto"
            />
            <h3 className="text-2xl font-semibold mt-4">2. Review</h3>
            <p className="text-gray-600 mt-2">Write and share your experience with different services.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <Player
              autoplay
              loop
              src={service}
              className="w-32 h-32 mx-auto"
            />
            <h3 className="text-2xl font-semibold mt-4">3. Engage</h3>
            <p className="text-gray-600 mt-2">Connect with the community by responding to reviews.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <button className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default HowItWorks;
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import service from "../assets/lottie/service.json";
import review from "../assets/lottie/review.json";

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Follow these simple steps to explore services, write reviews, and contribute to the community.
        </p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="p-8 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-75 rounded-2xl shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Player autoplay loop src="https://assets9.lottiefiles.com/private_files/lf30_obidsi0t.json" className="w-32 h-32 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
              1. Discover
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Browse various services and find the ones that suit your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-75 rounded-2xl shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Player autoplay loop src={review} className="w-32 h-32 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
              2. Review
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Write and share your experience with different services.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-75 rounded-2xl shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Player autoplay loop src={service} className="w-32 h-32 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
              3. Engage
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Connect with the community by responding to reviews.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-14">
          <Link
            to="/auth/register"
            className="relative inline-block text-lg font-semibold text-white px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            Get Started Now
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

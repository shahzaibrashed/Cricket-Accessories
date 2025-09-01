import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VideoSection = () => {
    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            See Our Equipment in Action
                        </h2>
                        <p className="text-xl text-gray-200 mb-8">
                            Watch professional cricketers demonstrate the quality and
                            performance of our equipment.
                        </p>
                        <Link
                            to="/gallery"
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center shadow-lg"
                        >
                            View Gallery <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    {/* Video Showcase Card */}
                    <div className="relative z-10">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center shadow-2xl">
                            <video
                                className="w-full rounded-lg shadow-lg"
                                src="/assets/winning.mp4" 
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                           <h3 className="text-xl font-semibold mt-4">
  All-Time Iconic Cricket Moment
</h3>
<p className="text-gray-300">
  Relive one of the greatest scenes in cricket history that still inspires millions.
</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;

import Link from "next/link";
import { Bot, AlertTriangle, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#1a6f8a] text-white flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center relative">
        {/* Floating Robot Illustration */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 opacity-20">
          <Bot size={200} className="text-[#2187ab] animate-float-slow" />
        </div>

        {/* Error Code with Animation */}
        <div className="text-[120px] md:text-[180px] font-bold mb-4 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            4
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2187ab] to-cyan-400 animate-pulse">
            0
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            4
          </span>
        </div>

        {/* Main Message */}
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-400/50 mb-6">
            <AlertTriangle className="mr-2 w-5 h-5" />
            <span className="font-medium">Page Not Found</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Lost in <span className="text-[#2187ab]">Space</span>?
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
            The page you're looking for seems to have drifted off into the
            digital cosmos. Don't worry, our robotics team is on it! In the
            meantime, let's get you back home.
          </p>

          {/* Home Button */}
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2187ab] to-cyan-500 hover:from-[#2187ab]/90 hover:to-cyan-500/90 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20"
          >
            <span>Beam Me Home</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          {/* Techy Footer */}
          <div className="mt-12 text-sm text-gray-400 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span>Error Code: 404_NOT_FOUND</span>
            <span className="hidden sm:block">•</span>
            <span>UTTHAN_ROBOTICS</span>
            <span className="hidden sm:block">•</span>
            <span>SYSTEM_ALERT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

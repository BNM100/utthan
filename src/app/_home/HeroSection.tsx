"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Cpu, Code, Bot } from "lucide-react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "Robotics Innovation",
    "AI Solutions",
    "IoT Integration",
    "Automation Excellence",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  const features = [
    { icon: Bot, label: "Robotics", delay: 0.1 },
    { icon: Cpu, label: "AI/ML", delay: 0.2 },
    { icon: Code, label: "IoT", delay: 0.3 },
    { icon: Zap, label: "Automation", delay: 0.4 },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: i % 2 === 0 ? "#3b82f6" : "#1e293b",
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            {/* Floating Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-sm font-medium mb-6 animate-pulse">
              <Zap className="w-4 h-4 mr-2" />
              Leading Innovation in Robotics
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
              Welcome to{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Utthan
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 animate-pulse" />
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-normal text-gray-300">
                Robotics
              </span>
            </h1>

            {/* Rotating Text */}
            <div className="h-8 mb-6">
              <div className="text-xl text-blue-300 font-medium overflow-hidden">
                {rotatingTexts.map((text, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentText
                        ? "transform translate-y-0 opacity-100"
                        : "transform -translate-y-full opacity-0 absolute"
                    }`}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              Empowering minds with hands-on training in robotics, automation,
              IoT, and artificial intelligence. We bring future technology to
              today's learners through practical workshops and innovative
              events.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map(({ icon: Icon, label, delay }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 ${
                    isLoaded ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${delay}s` }}
                >
                  <Icon className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center">
                  Explore Our Events
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity" />
              </button>

              <button className="px-8 py-4 text-white font-medium rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Animated Illustration */}
          <div
            className={`relative transform transition-all duration-1000 delay-500 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            {/* Central Circle */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 animate-pulse" />

              {/* Floating Elements */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center"
                  style={{
                    top: `${50 + 35 * Math.sin((i * Math.PI) / 4)}%`,
                    left: `${50 + 35 * Math.cos((i * Math.PI) / 4)}%`,
                    transform: "translate(-50%, -50%)",
                    animation: `float-${i} 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {i % 4 === 0 && <Bot className="w-6 h-6 text-white" />}
                  {i % 4 === 1 && <Cpu className="w-6 h-6 text-white" />}
                  {i % 4 === 2 && <Code className="w-6 h-6 text-white" />}
                  {i % 4 === 3 && <Zap className="w-6 h-6 text-white" />}
                </div>
              ))}

              {/* Center Logo/Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-2xl">
                  <Bot className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce-subtle">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white">Live Workshop</span>
              </div>
            </div>

            <div
              className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce-subtle"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-white">AI Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-8px);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-6px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-10px);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-4px);
          }
        }
        @keyframes float-4 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-7px);
          }
        }
        @keyframes float-5 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-9px);
          }
        }
        @keyframes float-6 {
          0%,
          1% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-5px);
          }
        }
        @keyframes float-7 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(-8px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

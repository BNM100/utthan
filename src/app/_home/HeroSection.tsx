"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Cpu, Code, Bot, ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    { text: "Robotics Innovation", color: "text-blue-300" },
    { text: "IoT Integration", color: "text-cyan-300" },
    { text: "Automation Excellence", color: "text-blue-200" },
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
    { icon: Code, label: "IoT", delay: 0.3 },
    { icon: Zap, label: "Automation", delay: 0.4 },
    { icon: Cpu, label: "AI", delay: 0.5 },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#1a6f8a] to-[#2187ab] text-white">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/svg/circuit-pattern.svg')] bg-cover bg-center"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content - Animated Visual */}
          <div className="relative h-[500px]">
            {/* Holographic Card Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Holographic glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 shadow-[0_0_60px_15px_rgba(34,211,238,0.2)] animate-pulse-slow"></div>
                
                {/* Main card */}
                <div className="absolute inset-0.5 bg-gradient-to-br from-[#2187ab] to-[#1a6f8a] rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden">
                  {/* Robot arm illustration */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                      src="/assets/images/utthan-logo-arm-transparent.png"
                      alt="Robot Arm"
                      width={400}
                      height={400}
                      className="object-contain animate-float-slow"
                    />
                  </div>
                  
                  {/* Floating tech elements */}
                  <div className="absolute top-8 left-8 text-blue-300 animate-float">
                    <Cpu size={32} />
                  </div>
                  <div className="absolute bottom-8 right-8 text-cyan-300 animate-float-reverse">
                    <Code size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-sm font-medium">Pioneering Tech Education</span>
              <ChevronsRight className="ml-2 w-4 h-4" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Build The Future</span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                With Cutting-Edge
              </span>
              <br />
              <span className="text-white">Technology Skills</span>
            </h1>

            {/* Rotating Text */}
            <div className="h-12 mb-6">
              <div className="text-2xl font-medium overflow-hidden">
                {rotatingTexts.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentText
                        ? "transform translate-y-0 opacity-100"
                        : "transform -translate-y-full opacity-0 absolute"
                    } ${item.color}`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 max-w-lg">
              Utthan Labs provides immersive, hands-on training in robotics, IoT, and automation to empower the next generation of tech innovators and problem solvers.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {features.map(({ icon: Icon, label, delay }) => (
                <div
                  key={label}
                  className={`flex items-center space-x-2 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-300/30 transition-all duration-300 hover:scale-[1.02] ${
                    isLoaded ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${delay}s` }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20">
                    <Icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/30">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </button>

              <button className="px-8 py-4 font-medium rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                <span>Watch Demo</span>
                <div className="ml-2 w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.8L14.8 10l-8.5 7.2V2.8z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
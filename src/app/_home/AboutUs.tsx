"use client";
import React, { useState, useEffect } from "react";
import {
  Users,
  BookOpen,
  Award,
  Calendar,
  Target,
  Zap,
  Code,
  Bot,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const CrouselImageList = [
  "/assets/images/crousel/1.jpg",
  "/assets/images/crousel/2.jpg",
  "/assets/images/crousel/3.jpg",
  "/assets/images/crousel/4.jpg",
  "/assets/images/crousel/5.jpg",
  "/assets/images/crousel/6.jpg",
  "/assets/images/crousel/7.jpg",
  "/assets/images/crousel/8.jpg",
  "/assets/images/crousel/9.jpg",
  "/assets/images/crousel/10.jpg",
  "/assets/images/crousel/11.jpg",
  "/assets/images/crousel/12.jpg",
  "/assets/images/crousel/13.jpg",
];

export default function AboutUs() {
  const [counters, setCounters] = useState({
    students: 0,
    sessions: 0,
    projects: 0,
    awards: 0,
  });

  const finalValues = {
    students: 1250,
    sessions: 180,
    projects: 75,
    awards: 15,
  };

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    const incrementValues = {
      students: finalValues.students / steps,
      sessions: finalValues.sessions / steps,
      projects: finalValues.projects / steps,
      awards: finalValues.awards / steps,
    };

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters: typeof counters = { ...prev };
        let allComplete = true;

        (Object.keys(prev) as Array<keyof typeof prev>).forEach((key) => {
          const current = prev[key];
          const increment = incrementValues[key];
          const target = finalValues[key];

          if (current < target) {
            newCounters[key] = Math.min(current + increment, target);
            allComplete = false;
          } else {
            newCounters[key] = target;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      label: "Students Enrolled",
      value: Math.floor(counters.students),
      suffix: "+",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: BookOpen,
      label: "Sessions Conducted",
      value: Math.floor(counters.sessions),
      suffix: "+",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Code,
      label: "Projects Completed",
      value: Math.floor(counters.projects),
      suffix: "+",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      label: "Awards Won",
      value: Math.floor(counters.awards),
      suffix: "+",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering the next generation with cutting-edge robotics and AI education",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Leading with the latest technologies and methodologies in tech education",
    },
    {
      icon: Bot,
      title: "Hands-On Learning",
      description:
        "Practical workshops and real-world projects for comprehensive skill development",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Utthan Robotics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are passionate educators and innovators dedicated to bridging the
            gap between theoretical knowledge and practical application in
            robotics, AI, and automation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.bgColor} mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        {/* Crousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "center",
              // loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-sm mx-auto md:max-w-none md:mx-0 lg:max-w-6xl"
          >
            <CarouselContent>
              {CrouselImageList.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={CrouselImageList[index]}
                          alt={`Crousel Image ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transforming Education Through Technology
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to democratize access to advanced technology
              education, Utthan Robotics has become a leading platform for
              students, professionals, and enthusiasts to explore the exciting
              world of robotics and artificial intelligence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our comprehensive curriculum combines theoretical foundations with
              hands-on experience, ensuring our students are well-prepared for
              the challenges of tomorrow's tech landscape.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 bg-blue-300 rounded-full"></div>
                <div className="absolute top-16 right-8 w-12 h-12 bg-indigo-300 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-purple-300 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-cyan-300 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Impact
                </h4>
                <p className="text-gray-600 mb-6">
                  From beginners to advanced practitioners, we've helped
                  thousands of learners discover their potential in robotics and
                  AI.
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      95%
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "./_home/HeroSection";
import AboutUs from "./_home/AboutUs";
import MoU from "./_home/MoU";
import Awards from "./_home/Awards";
import MainEvent from "./_home/MainEvent";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <MainEvent />
      <AboutUs />
      <MoU />
      {/* <Awards /> */}
    </main>
  );
}

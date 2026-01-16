"use client";

import { motion } from "framer-motion";
import { Info, Zap } from "lucide-react";

export function Comparison() {
    const otaFeatures = [
        "Only lets you search one item at a time",
        "Manually plan the itinerary and check logistics",
        "Only shows prices from their own listings",
        "You check availability for each item yourself",
        "You manage multiple tabs for flights, hotels, and tours",
        "You calculate all of the costs manually",
        "Limited help if your plans change frequently"
    ];

    const custourFeatures = [
        "Builds your full trip in one go—from flights to activities",
        "AI arranges everything into a logical, smooth schedule",
        "Compares prices across multiple sources to get best deals",
        "Automatically checks availability for all items together",
        "Helps you book everything from one place",
        "Gives you a full trip budget with itemized breakdown",
        "Notifies you of changes and updates your itinerary"
    ];

    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 flex flex-col md:flex-row items-center justify-center gap-4">
                        <span className="opacity-80">ONLINE TRAVEL AGENCY</span>
                        <span className="text-6xl text-gray-300 font-light italic relative">
                            VS
                            <div className="absolute inset-x-0 h-[100px] w-[1px] bg-gray-200 rotate-12 left-1/2 -top-4 -z-10"></div>
                        </span>
                        <div className="relative">
                            <img src="/logo-original.png" alt="Custour" className="h-20 md:h-32 w-auto object-contain" />
                        </div>
                    </h2>
                    <p className="mt-4 text-gray-500">Why Custour is Better Than Your Usual Travel Platform</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
                    {/* Divider Line in desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2"></div>

                    {/* OTA Side */}
                    <div className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-700 mb-8 text-center">Online Travel Agency</h3>
                        <ul className="space-y-6">
                            {otaFeatures.map((feat, i) => (
                                <li key={i} className="flex gap-4 items-start text-gray-600">
                                    <Info className="h-5 w-5 shrink-0 text-gray-400 mt-0.5" />
                                    <span className="text-sm">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Custour Side */}
                    <div className="bg-blue-50/30 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="mb-8 flex justify-center">
                            <img src="/logo-original.png" alt="Custour" className="h-8 md:h-10 w-auto object-contain" />
                        </div>
                        <ul className="space-y-6 relative z-10">
                            {custourFeatures.map((feat, i) => (
                                <li key={i} className="flex gap-4 items-start text-gray-900">
                                    <Zap className="h-5 w-5 shrink-0 text-black fill-black mt-0.5" />
                                    <span className="text-sm font-medium">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section >
    );
}

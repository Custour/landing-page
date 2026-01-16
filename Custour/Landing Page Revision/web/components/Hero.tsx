"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Plane, Hotel, CheckSquare, Wallet } from "lucide-react";
import Image from "next/image"; // Note: For avatars, we'll use placeholder divs for now if no images

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm"
            >
                <Sparkles className="h-3 w-3 text-gray-400" />
                AI Travel Concierge
            </motion.div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl font-sans"
            >
                Stop <span className="font-bold text-red-500">stressing</span> about <br />
                <span className="relative inline-block">
                    your dream trip.
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-2xl text-center text-gray-500 md:text-lg"
            >
                Discover the world without the weight of planning. Your personal AI concierge handles everything. From dreaming up your perfect trip to booking the details, so you can just pack and go.
            </motion.p>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col items-center gap-4"
            >
                <Button className="h-12 bg-[#1a1a1a] px-8 text-base text-white hover:bg-black rounded-full shadow-lg hover:shadow-xl transition-all">
                    Join our waitlist
                </Button>

                {/* Social Proof */}
                <div className="flex items-center gap-[-8px]">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gray-200" />
                        ))}
                    </div>
                    <span className="ml-2 text-xs text-gray-500 font-medium">Join over 100+ travelers</span>
                </div>
            </motion.div>

            {/* Visual Workspace Area */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative mt-16 w-full max-w-4xl"
            >
                {/* The White Card "Trip to Bali" */}
                <div className="relative mx-auto h-[300px] w-full max-w-[600px] rounded-xl border border-gray-100 bg-white shadow-2xl flex items-center justify-center p-8 z-20">
                    {/* Inner Content Placeholder */}
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-sm">
                            <MapPin className="h-4 w-4" />
                            Trip to Bali
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-sm">
                            <div className="h-2 w-16 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                    {/* Background pattern or subtle UI elements can be added here */}
                </div>
            </motion.div>

            {/* Black Dashboard / Features Bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative z-10 -mt-16 w-full max-w-5xl rounded-3xl bg-[#1a1a1a] p-8 text-white shadow-2xl pt-24"
            >
                <div className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                        <Sparkles className="h-3 w-3" />
                        Everything You Need For Your Journey in One Platform
                    </div>

                    <div className="mt-12 grid grid-cols-2 w-full gap-8 md:grid-cols-4">
                        {[
                            { icon: Plane, label: "Flights" },
                            { icon: Hotel, label: "Hotels" },
                            { icon: CheckSquare, label: "Activities" }, // Using CheckSquare as an approximation for generic Activities/List
                            { icon: Wallet, label: "Budgeting" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 group cursor-pointer">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:bg-white/10 group-hover:scale-110">
                                    <item.icon className="h-5 w-5 text-gray-300" />
                                </div>
                                <span className="text-sm font-medium text-gray-300">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Logos Strip */}
            <div className="mt-20 flex w-full max-w-5xl flex-col items-center gap-6">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Find Best Options from 10+ Providers</p>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0">
                    {/* Placeholder Text Logos for now as we don't have the assets */}
                    <span className="text-lg font-bold text-gray-400">Trip.com</span>
                    <span className="text-lg font-bold text-gray-400">viator</span>
                    <span className="text-lg font-bold text-gray-400">Expedia</span>
                    <span className="text-lg font-bold text-gray-400">agoda</span>
                    <span className="text-lg font-bold text-gray-400">Klook</span>
                </div>
            </div>

        </section>
    );
}

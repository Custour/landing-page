"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FeatureCard = ({ title, description, children, delay }: { title: string; description: string; children: React.ReactNode; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 hover:shadow-xl transition-all h-full"
    >
        <div className="mb-6 h-64 w-full overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
            {children}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
    </motion.div>
);

export function Features() {
    return (
        <section className="py-24 px-4 bg-gray-50/50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm mb-6">
                        <Sparkles className="h-3 w-3 text-orange-400" />
                        The Custour Experience
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Your All-In-One Travel <br />
                        Concierge using <span className="relative">
                            AI
                            <svg className="absolute top-1/2 left-0 w-full h-full -rotate-2 scale-110 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 50 L 100 50" stroke="#ef4444" strokeWidth="8" opacity="0.8" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-gray-500">Imagine a trip where every detail is taken care of, just for you. Custour isn't just a booking tool; it's your dedicated travel partner that manages every step of your journey.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <FeatureCard title="Find Your Perfect Match" description="We help you discover hidden gems and local favorites that match your unique style." delay={0.1}>
                        <img
                            src="/Feature_1_visual.png"
                            alt="Find Your Perfect Match Visual"
                            className="h-full w-full object-cover"
                        />
                    </FeatureCard>

                    <FeatureCard title="Effortless Itineraries" description="No more running in circles. We arrange your schedule logically, calculating travel times and matching plans with opening hours so you make the most of your day." delay={0.2}>
                        <img
                            src="/feature_2_visual.png"
                            alt="Effortless Itineraries Visual"
                            className="h-full w-full object-cover"
                        />
                    </FeatureCard>

                    <FeatureCard title="Smart Budgeting" description="Keep your finances in check with real-time price tracking for every part of your trip, so that your dream getaway never breaks the bank." delay={0.3}>
                        <img
                            src="/feature_3_visual.png"
                            alt="Smart Budgeting Visual"
                            className="h-full w-full object-cover"
                        />
                    </FeatureCard>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mt-8">
                    <FeatureCard title="All-in-one Booking" description="Secure your entire journey from one single platform, comparing options from multiple providers. No more opening dozens of tabs to find the best deals." delay={0.4}>
                        <img
                            src="/feature_4_visual.png"
                            alt="All-in-one Booking Visual"
                            className="h-full w-full object-cover"
                        />
                    </FeatureCard>

                    <FeatureCard title="Real-time Adjustments" description="Plans change. We handle the pivots, re-bookings, and even confirm special requests directly with hosts, keeping your trip smooth no matter what happens." delay={0.5}>
                        <img
                            src="/feature_5_visual.png"
                            alt="Real-time Adjustments Visual"
                            className="h-full w-full object-cover"
                        />
                    </FeatureCard>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 md:text-3xl max-w-3xl mx-auto leading-tight">
                        Experience the freedom of truly carefree travel. Let Custour handle the logistics, while you make the memories.
                    </h3>
                </div>
            </div>
        </section>
    );
}

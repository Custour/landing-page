"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ManagementFeature() {
    return (
        <section className="pb-24 px-4 bg-gray-50/50">
            <div className="container mx-auto max-w-6xl">
                <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">

                    {/* Left/Main Visual - The Schedule Mockup */}
                    <div className="flex-1 w-full">
                        <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-6 overflow-hidden min-h-[300px] flex flex-col items-center">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                                <div className="bg-[#1a1a1a] text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                    <Plus className="h-3 w-3" />
                                    Add Activity
                                </div>
                            </div>

                            {/* Mockup Content */}
                            <div className="mt-8 w-full space-y-3 opacity-90">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 items-center">
                                    <div className="h-12 w-16 bg-gray-200 rounded-lg shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="h-2 w-24 bg-gray-800 rounded mb-1"></div>
                                        <div className="h-2 w-16 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <div className="h-6 w-16 bg-black text-white text-[10px] flex items-center justify-center rounded">delete</div>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 items-center">
                                    <div className="h-12 w-16 bg-blue-100 rounded-lg shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="h-2 w-20 bg-gray-800 rounded mb-1"></div>
                                        <div className="h-2 w-12 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <div className="h-6 w-16 bg-[#1a1a1a] text-white text-[10px] flex items-center justify-center rounded">Book Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Description & Booking Links */}
                    <div className="flex-1 w-full space-y-8">
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <div className="grid grid-cols-2 gap-4 mb-4 opacity-70 grayscale">
                                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                            <div className="flex justify-center">
                                <Button className="rounded-full px-6 bg-[#333] hover:bg-black">Book Now</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Travel Management Made Simple</h3>
                            <p className="text-gray-500">Update plans, track bookings, and coordinate with your group, all in one place</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

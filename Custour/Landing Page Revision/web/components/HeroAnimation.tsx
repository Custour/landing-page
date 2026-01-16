"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plane, Hotel, Camera } from "lucide-react";

export function HeroAnimation() {
    const [step, setStep] = useState<"chat_start" | "agent_reply" | "user_reply_all" | "show_results">("chat_start");

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const sequence = async () => {
            // Step 1: Start (User says help me plan)
            await new Promise((r) => setTimeout(r, 1000));
            setStep("chat_start");

            // Step 2: Agent replies
            await new Promise((r) => setTimeout(r, 2000));
            setStep("agent_reply");

            // Step 3: User says everything
            await new Promise((r) => setTimeout(r, 2000));
            setStep("user_reply_all");

            // Step 4: Show results
            await new Promise((r) => setTimeout(r, 1500));
            setStep("show_results");

            // Loop
            await new Promise((r) => setTimeout(r, 6000));
            setStep("chat_start");
            // Recursively call sequence if we wanted a true complex loop, but state change triggers re-render.
            // Easiest simplistic loop:
            // We will rely on a simple interval or just resetting.
        };

        // Simple Interval Loop Logic
        const runSequence = () => {
            setStep("chat_start");

            setTimeout(() => setStep("agent_reply"), 2500);
            setTimeout(() => setStep("user_reply_all"), 5500);
            setTimeout(() => setStep("show_results"), 7500);
        };

        runSequence();
        const intervalId = setInterval(runSequence, 14000); // 14s loop cycle

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative h-[400px] w-full max-w-[500px] rounded-2xl border border-gray-100 bg-white shadow-2xl overflow-hidden flex flex-col">
            {/* Header-like bar */}
            <div className="w-full h-12 border-b border-gray-50 bg-white flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-auto text-xs text-gray-400 font-medium">Custour AI Agent</div>
            </div>

            {/* Content Area */}
            <div className="flex-1 w-full relative p-6 bg-gray-50/50">
                <AnimatePresence mode="wait">
                    {step !== "show_results" ? (
                        <motion.div
                            key="chat-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-4 h-full"
                        >
                            {/* Message 1: User */}
                            <motion.div
                                initial={{ opacity: 0, y: 10, x: -10 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                className="flex items-end gap-3 self-start max-w-[85%]"
                            >
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm flex-shrink-0 bg-white">
                                    <Image src="/hero/traveler_avatar.png" alt="User" width={32} height={32} />
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm text-sm text-gray-700">
                                    Help me plan a trip to Bangkok
                                </div>
                            </motion.div>

                            {/* Message 2: Agent */}
                            {(step === "agent_reply" || step === "user_reply_all") && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: 10 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    className="flex items-end gap-3 self-end max-w-[85%] flex-row-reverse"
                                >
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm flex-shrink-0 bg-black p-1">
                                        <Image src="/hero/agent_avatar.png" alt="Agent" width={32} height={32} />
                                    </div>
                                    <div className="bg-black text-white p-3 rounded-2xl rounded-br-sm shadow-md text-sm">
                                        Sure! Do you need flights, hotels, activities, or restaurants?
                                    </div>
                                </motion.div>
                            )}

                            {/* Message 3: User Reply */}
                            {step === "user_reply_all" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: -10 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    className="flex items-end gap-3 self-start max-w-[85%]"
                                >
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm flex-shrink-0 bg-white">
                                        <Image src="/hero/traveler_avatar.png" alt="User" width={32} height={32} />
                                    </div>
                                    <div className="bg-white p-3 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm text-sm text-gray-700">
                                        Help me with everything!
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="results-view"
                            className="w-full h-full grid grid-cols-1 gap-3 relative"
                        >
                            {/* Result Item 1: Flight */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3"
                            >
                                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                                    <Image src="/hero/flight_card.png" alt="Flight" fill className="object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-gray-900">Direct Flight</span>
                                        <span className="text-xs text-green-600 font-medium">$450</span>
                                    </div>
                                    <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
                                        <Plane className="w-3 h-3" /> LAX - BKK • 14h 20m
                                    </div>
                                </div>
                            </motion.div>

                            {/* Result Item 2: Hotel */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 ml-4" // offset
                            >
                                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                                    <Image src="/hero/hotel_card.png" alt="Hotel" fill className="object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-gray-900">Luxury Resort</span>
                                        <span className="text-xs text-green-600 font-medium">$120</span>
                                    </div>
                                    <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
                                        <Hotel className="w-3 h-3" /> 5 Stars • Breakfast Incl.
                                    </div>
                                </div>
                            </motion.div>

                            {/* Result Item 3: Activity */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3"
                            >
                                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                                    <Image src="/hero/activity_card.png" alt="Activity" fill className="object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-gray-900">Grand Palace</span>
                                        <span className="text-xs text-green-600 font-medium">$30</span>
                                    </div>
                                    <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
                                        <Camera className="w-3 h-3" /> Guided Tour • 3h
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

"use client";

import { Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#111111] text-white py-20 px-4 rounded-t-[40px] mt-12 mb-4 mx-2">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Brand */}
                <div>
                    <div>
                        <div className="flex items-center gap-2 text-xl font-bold mb-4">
                            <div className="relative h-10 w-32">
                                <img src="/logo-original.png" alt="Custour" className="h-full w-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">AI concierge to handle all your travelling needs</p>
                    <a href="mailto:hello@custour.ai" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                        <Mail className="h-4 w-4" />
                        hello@custour.ai
                    </a>
                </div>

                {/* Social */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-sm">Social Profiles</h4>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/custour.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 w-8 bg-[#333] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#444] transition-colors"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 text-white"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            <div className="container mx-auto max-w-6xl mt-20 pt-8 border-t border-white/10 text-xs text-gray-500 flex justify-between">
                <span>© 2025 Custour.ai</span>
            </div>
        </footer>
    );
}

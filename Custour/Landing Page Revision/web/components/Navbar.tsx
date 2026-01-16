"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react"; // Using MapPin as a placeholder logo icon if needed, or text

export function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="flex items-center justify-between rounded-full bg-[#2A2A2A] px-2 py-2 pl-6 shadow-lg sm:min-w-[500px] w-full max-w-2xl backdrop-blur-sm border border-white/10">
                <Link
                    href="/"
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                    Home
                </Link>

                <div className="flex items-center gap-2 font-semibold text-white">
                    <div className="relative h-8 w-[100px]">
                        <img src="/logo-original.png" alt="Custour" className="h-full w-full object-contain invert brightness-0 filter" />
                    </div>
                </div>

                <Button variant="white" size="sm" className="font-medium text-xs h-8 px-4 rounded-full">
                    Join Waitlist
                </Button>
            </nav>
        </div>
    );
}

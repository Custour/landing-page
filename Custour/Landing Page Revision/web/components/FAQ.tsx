"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus, Key } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const items = [
    {
        question: "What is Custour.ai?",
        answer: "Custour.ai is an AI travel agent that helps you plan, curate, and manage your entire trip—from choosing flights and accommodations to building a complete itinerary and helping you book. It works like a real travel consultant, but faster and always available."
    },
    {
        question: "Can I make changes to the itinerary?",
        answer: "Absolutely. You can add, remove, or rearrange items in your itinerary anytime. The AI will adapt and re-optimize the schedule for you. It's like having a flexible travel planner in your pocket."
    },
    {
        question: "How is different from other travel websites?",
        answer: "Unlike Google or booking platforms like Traveloka or Booking.com, Custour doesn’t just show you options—it understands your preferences and builds a fully personalized trip. Instead of bouncing between tabs, forms, and spreadsheets, you chat once and get everything curated, planned, and managed for you."
    },
    {
        question: "How much does it cost to use Custour.ai?",
        answer: "Right now, Custour.ai is completely free during our early access phase. In the future, we may offer premium features or a flat trip-planning fee—but you'll always get to review the full plan before paying anything."
    },
    {
        question: "How does Custour.ai plan my trip?",
        answer: "Just tell the AI where you want to go, your preferences (budget, type of stay, activities, etc.), and it will automatically curate a list of matching flights, hotels, and activities. Then it builds a smart itinerary that minimizes travel time and fits everything together logically."
    },
    {
        question: "How do I make bookings?",
        answer: "Once your itinerary is ready, Custour will provide direct links to book each item with trusted providers. You can head on to the respective providers and pay securely through their websites. We're also working on adding one-click booking in the future."
    }
];

const AccordionItem = React.forwardRef<React.ElementRef<typeof Accordion.Item>, React.ComponentPropsWithoutRef<typeof Accordion.Item>>(({ children, className, ...props }, ref) => (
    <Accordion.Item ref={ref} className={cn("overflow-hidden rounded-2xl bg-gray-50 border border-transparent data-[state=open]:border-gray-200 transition-colors", className)} {...props}>
        {children}
    </Accordion.Item>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof Accordion.Trigger>, React.ComponentPropsWithoutRef<typeof Accordion.Trigger>>(({ children, className, ...props }, ref) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-6 px-6 text-base font-bold transition-all hover:bg-gray-100/50 [&[data-state=open]>div>svg.plus]:hidden [&[data-state=open]>div>svg.minus]:block [&[data-state=closed]>div>svg.minus]:hidden [&[data-state=closed]>div>svg.plus]:block", className)} {...props}>
            <span className="text-left">{children}</span>
            <div className="shrink-0 text-white bg-[#333] h-8 w-8 rounded-full flex items-center justify-center">
                <Plus className="h-4 w-4 plus" />
                <Minus className="h-4 w-4 minus hidden" />
            </div>
        </Accordion.Trigger>
    </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<React.ElementRef<typeof Accordion.Content>, React.ComponentPropsWithoutRef<typeof Accordion.Content>>(({ children, className, ...props }, ref) => (
    <Accordion.Content ref={ref} className={cn("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", className)} {...props}>
        <div className="pb-6 px-6 pt-0 text-gray-500 leading-relaxed">{children}</div>
    </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export function FAQ() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm mb-6">
                        <span className="font-serif italic font-bold">?</span> FAQ's
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Frequently Asked <span className="underline decoration-wavy decoration-gray-300 underline-offset-8">Questions</span>
                    </h2>
                </div>

                <Accordion.Root type="multiple" defaultValue={["item-1"]} className="grid gap-4 md:grid-cols-2 items-start">
                    {items.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
}

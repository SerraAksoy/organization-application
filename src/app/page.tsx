"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ApplicationForm from "@/components/ApplicationForm";

const features = [
    {
        title: "Learning Opportunities",
        description:
            "Join curated sessions, workshops, and collaborative activities designed to support your personal and professional growth.",
    },
    {
        title: "Global Network",
        description:
            "Connect with ambitious students, organizers, and participants from different backgrounds in an international environment.",
    },
    {
        title: "Hands-on Experience",
        description:
            "Take part in real organizational activities and gain practical experience through active contribution.",
    },
];

const steps = [
    {
        number: "01",
        title: "Apply Online",
        text: "Complete the application form and submit your information online.",
    },
    {
        number: "02",
        title: "Review Process",
        text: "Applications are carefully reviewed by the organizing team.",
    },
    {
        number: "03",
        title: "Final Confirmation",
        text: "Selected applicants will be contacted with the next steps.",
    },
];

const faqs = [
    {
        question: "Who can apply?",
        answer:
            "The program is open to university students and recent graduates from diverse academic backgrounds.",
    },
    {
        question: "Is there an application fee?",
        answer: "No. The application process is completely free.",
    },
    {
        question: "Will the event be online or in person?",
        answer:
            "The final format will be announced later. A hybrid structure is currently planned for this demo version.",
    },
    {
        question: "When will results be announced?",
        answer:
            "Applicants will be informed after the evaluation process is completed.",
    },
];

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#program" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Apply", href: "#application" },
];

const partners = [
    "AeroLab",
    "NovaTech",
    "SkyBridge",
    "FutureWorks",
    "OrbitalX",
];

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (

        <main className="min-h-screen bg-[#f8fafc] text-slate-900 scroll-smooth">
            <section id="home" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.10),transparent_25%),linear-gradient(to_bottom,#f8fafc,#eef2ff,#f8fafc)]" />
                <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <nav
                        className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md">
                        <div
                            className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                                    <span className="text-lg font-bold text-indigo-600">A</span>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                                        International Program
                                    </p>
                                    <h2 className="text-base font-semibold text-slate-900">
                                        Application Platform
                                    </h2>
                                </div>
                            </div>

                            <div className="hidden items-center gap-8 md:flex">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="relative text-sm font-medium text-slate-600 transition hover:text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            <div className="hidden md:block">
                                <a href="#application">
                                    <Button className="rounded-full bg-slate-900 px-6 text-white hover:bg-slate-800">
                                        Apply Now
                                    </Button>
                                </a>
                            </div>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen((prev) => !prev)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"
                            >
                                {mobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                            </button>
                        </div>

                        {mobileMenuOpen && (
                            <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur md:hidden">
                                <div className="flex flex-col gap-4">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="relative text-sm font-medium text-slate-600 transition hover:text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
                                        >
                                            {item.label}
                                        </a>
                                    ))}

                                    <a
                                        href="#application"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        )}
                    </nav>

                    <div className="grid items-center gap-14 pt-32 pb-16 lg:grid-cols-2 lg:pt-40 lg:pb-24">
                        <div>
                            <Badge
                                className="rounded-full border-0 bg-indigo-100 px-4 py-1 text-indigo-700 hover:bg-indigo-100">
                                Applications Open
                            </Badge>

                            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                                Join a global program built for future innovators.
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                                This international program brings together motivated students and
                                young talents through learning-focused sessions, collaborative
                                experiences, and meaningful community engagement.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
                                <div>📍 Europe / Hybrid</div>
                                <div>📅 Summer 2026</div>
                                <div>🎓 Students & Recent Graduates</div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a href="#application">
                                    <Button
                                        className="rounded-full bg-indigo-600 px-8 py-6 text-white hover:bg-indigo-700">
                                        Start Application
                                    </Button>
                                </a>

                                <a href="#program">
                                    <Button
                                        variant="outline"
                                        className="rounded-full border-slate-300 bg-white px-8 py-6 text-slate-900 hover:bg-slate-50"
                                    >
                                        Explore Program
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-8">
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">200+</p>
                                    <p className="mt-1 text-sm text-slate-500">Participants</p>
                                </div>

                                <div>
                                    <p className="text-3xl font-bold text-slate-900">10+</p>
                                    <p className="mt-1 text-sm text-slate-500">Activities</p>
                                </div>

                                <div>
                                    <p className="text-3xl font-bold text-slate-900">20+</p>
                                    <p className="mt-1 text-sm text-slate-500">Team Members</p>
                                </div>
                            </div>

                            <div className="mt-12 grid gap-4 md:grid-cols-3">
                                <div
                                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Format
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                                        Hybrid Event
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Designed for both online and in-person participation.
                                    </p>
                                </div>

                                <div
                                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Theme
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                                        Innovation & Community
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Built around collaboration, growth, and active contribution.
                                    </p>
                                </div>

                                <div
                                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Application
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                                        Open Now
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Submit your application and join the next generation of
                                        innovators.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-pink-200/70 blur-3xl"/>
                            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-200/70 blur-3xl"/>

                            <Card
                                className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-xl backdrop-blur">
                                <CardContent className="p-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="sm:col-span-2">
                                            <img
                                                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80"                                                alt="Event showcase"
                                                className="h-72 w-full rounded-[1.5rem] object-cover"
                                            />
                                        </div>

                                        <div className="rounded-[1.5rem] bg-slate-50 p-5 ring-1 ring-slate-200">
                                            <p className="text-sm text-slate-500">Community</p>
                                            <h3 className="mt-2 text-xl font-semibold">
                                                Build connections
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                Become part of a vibrant environment shaped by teamwork,
                                                communication, and shared ambition.
                                            </p>
                                        </div>

                                        <div className="rounded-[1.5rem] bg-slate-50 p-5 ring-1 ring-slate-200">
                                            <p className="text-sm text-slate-500">Experience</p>
                                            <h3 className="mt-2 text-xl font-semibold">
                                                Contribute actively
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                Go beyond attendance and gain value by actively taking
                                                part in the program journey.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <div
                                            className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
                                            International Community
                                        </div>
                                        <div
                                            className="rounded-full bg-pink-50 px-4 py-2 text-xs font-medium text-pink-700 ring-1 ring-pink-100">
                                            Summer 2026
                                        </div>
                                        <div
                                            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                                            Open Application
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="program"
                className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16"
            >
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
                        About the Program
                    </p>
                    <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                        What can you expect from this experience?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        A modern, international initiative designed to encourage learning,
                        collaboration, communication, and meaningful participation.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            className="rounded-[1.75rem] border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <CardContent className="p-7">
                                <div
                                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-lg font-bold text-indigo-600">
                                    ✦
                                </div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section
                id="process"
                className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-16"
            >
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <Card className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
                        <CardContent className="p-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
                                Application Process
                            </p>
                            <h2 className="mt-4 text-3xl font-bold">
                                How does the application work?
                            </h2>

                            <div className="mt-8 space-y-6">
                                {steps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="relative flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 pl-7"
                                    >
                                        <div className="absolute left-[2.05rem] top-16 h-[calc(100%-3.5rem)] w-px bg-slate-200" />
                                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-md">
                                            {step.number}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">{step.title}</h3>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6">
                        <img
                            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80"                            alt="Team collaboration"
                            className="h-56 w-full rounded-[2rem] object-cover shadow-sm ring-1 ring-slate-200"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"                            alt="Community engagement"
                            className="h-56 w-full rounded-[2rem] object-cover shadow-sm ring-1 ring-slate-200"
                        />
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
                <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-sm">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        Partners & Supporting Organizations
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
                        {partners.map((partner) => (
                            <div
                                key={partner}
                                className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-600 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="faq"
                className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16"
            >
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
                        FAQ
                    </p>
                    <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        A few common questions about the program and application process.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={faq.question} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm leading-7 text-slate-600">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section
                id="application"
                className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16"
            >
                <div className="bg-white p-6 md:p-8">
                    <ApplicationForm/>
                </div>
            </section>

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
                    <p>© 2026 International Program. Demo landing page.</p>
                    <div className="flex gap-4">
                        <a href="#program" className="hover:text-slate-900">
                            About
                        </a>
                        <a href="#faq" className="hover:text-slate-900">
                            FAQ
                        </a>
                        <a href="#application" className="hover:text-slate-900">
                            Apply
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
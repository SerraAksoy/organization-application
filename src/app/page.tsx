"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
            "Join curated sessions, workshops, and collaborative activities designed to support your personal and professional growth.(To be changed.)",
    },
    {
        title: "Global Network",
        description:
            "Connect with ambitious students, organizers, and participants from different backgrounds in an international environment.(To be changed.)",
    },
    {
        title: "Hands-on Experience",
        description:
            "Take part in real organizational activities and gain practical experience through active contribution.(To be changed.)",
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
            "The program is open to any EUROAVIA members from diverse academic backgrounds.",
    },
    {
        question: "Is there an application fee?",
        answer: "Yes. 100 Euros will be paid to the organizing team after the application confirmation. This is required to cover the expanses of the program.",
    },
    {
        question: "How can I get to Eskişehir?",
        answer:
            "You can get to Eskişehir from either İstanbul or Ankara via Bus/Train. Otherwise you can get a ticket from Brussels to our university campus directly. \n",
    },
    {
        question: " I have more questions about transportation.",
        answer:
            "You can contact us anytime on Instagram. Our organizing team will also reach out after your application is confirmed to assist you with tickets.\n",
    },
];

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#program" },
    { label: "Process", href: "#process" },
    { label: "Schedule", href: "#schedule" },
    { label: "FAQ", href: "#faq" },
    { label: "Apply", href: "#application" },
    { label: "Location", href: "#location" },
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
        <main className="min-h-screen scroll-smooth bg-white text-slate-900">
            <section id="home" className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,174,239,0.24),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(0,58,143,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(0,174,239,0.10),transparent_35%),linear-gradient(to_bottom,#ffffff,#f5fbff,#ffffff)]"/>
                <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <nav
                        className="fixed top-0 left-0 z-50 w-full border-b border-[#D7E8F7] bg-white/80 backdrop-blur-md">
                        <div
                            className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[#D7E8F7]">
                                    <img
                                        src="/aerolink.png"
                                        alt="Organization Logo"
                                        className="h-10 w-auto rounded-2xl"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#00AEEF]">
                                        International Program
                                    </p>
                                    <h2 className="text-base font-semibold text-[#003A8F]">
                                        AEROLINK26
                                    </h2>
                                </div>
                            </div>

                            <div className="hidden items-center gap-8 md:flex">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="relative text-sm font-medium text-slate-600 transition hover:text-[#003A8F] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#00AEEF] after:transition-all hover:after:w-full"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            <div className="hidden md:block">
                                <a href="#application">
                                    <Button className="rounded-full bg-[#003A8F] px-6 text-white hover:bg-[#002d6e]">
                                        Apply Now
                                    </Button>
                                </a>
                            </div>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen((prev) => !prev)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D7E8F7] bg-white text-[#003A8F] md:hidden"
                            >
                                {mobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                            </button>
                        </div>

                        {mobileMenuOpen && (
                            <div className="border-t border-[#D7E8F7] bg-white/95 px-6 py-4 backdrop-blur md:hidden">
                                <div className="flex flex-col gap-4">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="relative text-sm font-medium text-slate-600 transition hover:text-[#003A8F] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#00AEEF] after:transition-all hover:after:w-full"
                                        >
                                            {item.label}
                                        </a>
                                    ))}

                                    <a
                                        href="#application"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="inline-flex items-center justify-center rounded-full bg-[#003A8F] px-6 py-3 text-sm font-medium text-white"
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
                                className="rounded-full border-0 bg-[#EAF7FF] px-4 py-1 text-[#003A8F] hover:bg-[#EAF7FF]">
                                Applications Open
                            </Badge>

                            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#003A8F] md:text-6xl">
                                Ready for take off: ESKİŞEHİR
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                                <span className="font-semibold text-[#003A8F]"> Welcome to Eskişehir! </span> A city
                                full of life, where colorful streets, riverside views and a vibrant
                                student culture create an inspiring atmosphere for connection and discovery. EUROAVIA
                                Eskişehir
                                looks forward to welcoming you to AEROLink26. Join us for a week where ideas take
                                flight, connections
                                grow stronger, and Turkish hospitality makes every moment memorable.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
                                <div>📍 Eskişehir / TÜRKİYE</div>
                                <div>📅 2026 October</div>
                                <div>🎓 EUROAVIA members</div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a href="#application">
                                    <Button
                                        className="rounded-full bg-[#003A8F] px-8 py-6 text-white hover:bg-[#002d6e]">
                                        Start Application
                                    </Button>
                                </a>

                                <a href="#program">
                                    <Button
                                        variant="outline"
                                        className="rounded-full border-[#D7E8F7] bg-white px-8 py-6 text-[#003A8F] hover:bg-[#F5FBFF]"
                                    >
                                        Explore Program
                                    </Button>
                                </a>
                                <a href="https://eskisehir.ktb.gov.tr/EN-222723/promotional-films-of-eskisehir.html">
                                    <Button
                                        variant="outline"
                                        className="rounded-full border-[#D7E8F7] bg-white px-5 py-6 text-[#003A8F] hover:bg-[#F5FBFF]"
                                    >
                                        About Eskişehir
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-8">
                                <div>
                                    <p className="text-3xl font-bold text-[#003A8F]">20+</p>
                                    <p className="mt-1 text-sm text-slate-500">Participants</p>
                                </div>

                                <div>
                                    <p className="text-3xl font-bold text-[#003A8F]">15+</p>
                                    <p className="mt-1 text-sm text-slate-500">Team Members</p>
                                </div>

                                <div>
                                    <p className="text-3xl font-bold text-[#003A8F]">10+</p>
                                    <p className="mt-1 text-sm text-slate-500">Activities</p>
                                </div>
                            </div>

                            <div className="mt-10 grid gap-2 md:grid-cols-3">
                                <div
                                    className="rounded-2xl border border-[#D7E8F7] bg-white/90 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF]">
                                        Registration
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-[#003A8F]">
                                        Participation FEE
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        €100 participation fee (4 nights of accommodation, 3 meal days, Spirits Nights,
                                        Welcome & Farewell Dinner)
                                    </p>
                                </div>

                                <div
                                    className="rounded-2xl border border-[#D7E8F7] bg-white/90 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF]">
                                        Program
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-[#003A8F]">
                                        Program Events
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        EXPO, University Tour, HÜRKUŞ Museum Visit, Seminars
                                    </p>
                                </div>

                                <div
                                    className="rounded-2xl border border-[#D7E8F7] bg-white/90 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF]">
                                        Social Program
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-[#003A8F]">
                                        Free Time Activities
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Odunpazarı Houses, Sazova Park Tour, Papercraft Challenge, Additional surprise
                                        activities</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#00AEEF]/20 blur-3xl"/>
                            <div
                                className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#003A8F]/15 blur-3xl"/>

                            <Card
                                className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-xl backdrop-blur">
                                <CardContent className="p-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="sm:col-span-2">
                                            <img
                                                src="/eskisehir.png"
                                                alt="Event showcase"
                                                className="h-72 w-full rounded-[1.5rem] object-cover"
                                            />
                                        </div>


                                        <div className="rounded-[1.5rem] bg-slate-50 p-5 ring-1 ring-[#D7E8F7]">
                                            <p className="text-sm text-slate-500">Networking</p>
                                            <h3 className="mt-2 text-xl font-semibold text-[#003A8F]">
                                                Build Meaningful Connections
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                Connect with aviation students and professionals from across Europe and
                                                beyond.
                                                Expand your network, share ideas, and create lasting international
                                                friendships.
                                            </p>
                                        </div>

                                        <div className="rounded-[1.5rem] bg-slate-50 p-5 ring-1 ring-[#D7E8F7]">
                                            <p className="text-sm text-slate-500">Experience</p>
                                            <h3 className="mt-2 text-xl font-semibold text-[#003A8F]">
                                                Discover Eskişehir
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                Immerse yourself in the local culture, explore the city's vibrant social
                                                life,
                                                and experience the unique atmosphere that makes Eskişehir truly
                                                unforgettable.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <div
                                            className="rounded-full bg-[#EAF7FF] px-3 py-2 text-xs font-medium text-[#003A8F] ring-1 ring-[#D7E8F7]">
                                            #International Event
                                        </div>
                                        <div
                                            className="rounded-full bg-[#EAF7FF] px-4 py-2 text-xs font-medium text-[#00AEEF] ring-1 ring-[#D7E8F7]">
                                            #PASEskisehir
                                        </div>
                                        <div
                                            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                                            #October 2026
                                        </div>
                                        <div
                                            className="rounded-full bg-[#EAF7FF] px-4 py-2 text-xs font-medium text-[#00AEEF] ring-1 ring-[#D7E8F7]">
                                            #EUROAVIA
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
                className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
            >
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00AEEF]">
                        About the Program
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-[#003A8F] md:text-4xl">
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
                            className="rounded-[1.75rem] border-[#D7E8F7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <CardContent className="p-7">
                                <div
                                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-lg font-bold text-[#003A8F]">
                                    ✦
                                </div>
                                <h3 className="text-xl font-semibold text-[#003A8F]">
                                    {feature.title}
                                </h3>
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
                    <Card className="rounded-[2rem] border-[#D7E8F7] bg-white shadow-[0_10px_30px_rgba(0,58,143,0.06)]">
                        <CardContent className="p-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00AEEF]">
                                Application Process
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-[#003A8F]">
                                How does the application work?
                            </h2>

                            <div className="mt-8 space-y-6">
                                {steps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="relative flex gap-4 rounded-2xl border border-[#D7E8F7] bg-slate-50 p-5 pl-7"
                                    >
                                        <div
                                            className="absolute left-[2.05rem] top-16 h-[calc(100%-3.5rem)] w-px bg-[#D7E8F7]"/>
                                        <div
                                            className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#003A8F] text-sm font-bold text-white shadow-md">
                                            {step.number}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-[#003A8F]">
                                                {step.title}
                                            </h3>
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
                            src="/aerolink2.png"
                            alt="Team collaboration"
                            className="h-56 w-full rounded-[2rem] object-cover shadow-sm ring-1 ring-[#D7E8F7]"
                        />
                        <img
                            src="/aerolink4.png"
                            alt="Community engagement"
                            className="h-56 w-full rounded-[2rem] object-cover shadow-sm ring-1 ring-[#D7E8F7]"
                        />
                    </div>
                </div>
            </section>

            <section className="relative mt-8 overflow-hidden bg-[linear-gradient(135deg,#003A8F,#005FC5)] py-16">
                <img
                    src="/aerolink1.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
                />

                <div
                    className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#00AEEF]/20 blur-3xl"/>
                <div
                    className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"/>

                <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <div className="rounded-[2rem] border border-white/15 bg-white/10 px-6 py-8 backdrop-blur-sm">
                        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                            Partners & Supporting Organizations
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
                            {partners.map((partner) => (
                                <div
                                    key={partner}
                                    className="flex h-20 items-center justify-center rounded-2xl border border-white/20 bg-white/90 text-sm font-semibold text-[#003A8F] transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                                >
                                    {partner}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="schedule"
                className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
            >
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00AEEF]">
                        Schedule
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#003A8F] md:text-5xl">
                        Event Schedule
                    </h2>

                    <p className="mt-6 text-lg text-slate-500">
                        The detailed program will be announced soon.
                    </p>

                    <div
                        className="mt-8 inline-flex items-center rounded-full border border-[#D7E8F7] bg-[#F5FBFF] px-6 py-3 text-sm font-medium text-[#003A8F] shadow-[0_0_25px_rgba(0,174,239,0.15)]">
                        To be announced
                    </div>
                </div>
            </section>

            <section
                id="faq"
                className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
            >
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00AEEF]">
                        FAQ
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-[#003A8F] md:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        A few common questions about the program and application process.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D7E8F7] bg-white p-4 shadow-sm">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={faq.question} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold text-[#003A8F]">
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
                className="relative overflow-hidden bg-[linear-gradient(135deg,#003A8F,#005FC5)] py-24"
            >
                <img
                    src="/aerolink2.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
                />

                <div
                    className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#00AEEF]/20 blur-3xl"/>
                <div
                    className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"/>

                <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#BFEFFF]">
                            Application
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Start your application
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-white/80">
                            Join the program through a modern application experience designed to be
                            clear, fast, and accessible.
                        </p>
                    </div>

                    <div className="rounded-[1rem] border border-white/20 bg-white p-6 shadow-xl md:p-8">
                        <ApplicationForm/>
                    </div>
                </div>
            </section>

            <section
                id="location"
                className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16"
            >
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00AEEF]">
                        Location
                    </p>
                    <h2 className="mt-4 text-4xl font-bold text-[#003A8F] md:text-5xl">
                        Event Location
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                        The event will take place at Eskişehir Technical University, one of
                        the key academic centers supporting innovation and
                        engineering-focused student initiatives.
                    </p>
                </div>

                <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div
                        className="pointer-events-none absolute -top-8 right-10 h-32 w-32 rounded-full bg-[#00AEEF]/10 blur-3xl"/>
                    <div className="rounded-[2rem] border border-[#D7E8F7] bg-white p-8 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00AEEF]">
                            Venue
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-[#003A8F]">
                            Eskişehir Technical University
                        </h3>

                        <p className="mt-4 text-base leading-8 text-slate-600">
                            İki Eylül Campus, Tepebaşı, Eskişehir, Türkiye
                        </p>

                        <div className="mt-8 space-y-4">
                            <div
                                className="rounded-2xl border border-[#D7E8F7] bg-[#F5FBFF] p-4 text-sm text-slate-600">
                                Easily accessible campus location for participants and guests.
                            </div>

                            <div
                                className="rounded-2xl border border-[#D7E8F7] bg-[#F5FBFF] p-4 text-sm text-slate-600">
                                A central academic setting aligned with the spirit of the event.
                            </div>

                            <div
                                className="rounded-2xl border border-[#D7E8F7] bg-[#F5FBFF] p-4 text-sm text-slate-600">
                                Full venue details and event logistics can be updated here later.
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] border border-[#D7E8F7] bg-white p-3 shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.604144315134!2d30.51573017617323!3d39.81587047154257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc3fd40252ae29%3A0xe0e962bdaa9dafce!2zRXNracWfZWhpciBUZWtuaWsgw5xudi4gxLBraSBFeWzDvGwgS2FtcMO8c8O8LCBUZXBlYmHFn8SxL0Vza2nFn2VoaXI!5e0!3m2!1str!2str!4v1776614690779!5m2!1str!2str"
                            className="h-[420px] w-full rounded-[1.5rem]"
                            style={{border: 0}}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <footer className="border-t border-[#D7E8F7] bg-white">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-600 md:grid-cols-3">
                    <div>
                        <h3 className="mb-2 font-semibold text-[#003A8F]">Organization</h3>
                        <p> EUROAVIA PAS Eskişehir</p>
                        <p>Aerolink26</p>
                        <p>International Program</p>
                    </div>

                    <div>
                        <h3 className="mb-2 font-semibold text-[#003A8F]">Contact</h3>
                        <p>Email: suhangoktug@gmail.com
                        </p>
                        <p>Phone: +49 163 3699046 </p>

                        <p>Email: belinaybinat@gmail.com
                        </p>
                        <p>Phone: +90 553 960 12 31</p>
                    </div>
                    <div>
                        <h3 className="mb-3 font-semibold text-[#003A8F]">Social</h3>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/euroaviaeskisehir/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E8F7] bg-[#F5FBFF] text-[#003A8F] transition hover:-translate-y-1 hover:border-[#00AEEF] hover:bg-[#EAF7FF] hover:text-[#00AEEF]"
                            >
                                <FaInstagram size={18}/>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/euroavia-eskişehir/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E8F7] bg-[#F5FBFF] text-[#003A8F] transition hover:-translate-y-1 hover:border-[#00AEEF] hover:bg-[#EAF7FF] hover:text-[#00AEEF]"
                            >
                                <FaLinkedinIn size={18}/>
                            </a>
                        </div>
                    </div>


                </div>
            </footer>
        </main>
    );
}
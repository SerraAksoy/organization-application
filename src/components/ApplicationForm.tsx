"use client";

import { useState } from "react";

type FormData = {
    fullName: string;
    email: string;
    university: string;
    country: string;
    fieldOfStudy: string;
    participationType: string;
    motivation: string;
    website: string; // honeypot
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
    fullName: "",
    email: "",
    university: "",
    country: "",
    fieldOfStudy: "",
    participationType: "",
    motivation: "",
    website: "",
};

export default function ApplicationForm() {
    const [formData, setFormData] = useState<FormData>(initialForm);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

        setMessage("");
    }

    function validateForm() {
        const newErrors: Errors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.country.trim()) {
            newErrors.country = "Country is required.";
        }

        if (!formData.participationType.trim()) {
            newErrors.participationType = "Please choose a participation type.";
        }

        if (!formData.motivation.trim()) {
            newErrors.motivation = "Motivation is required.";
        } else if (formData.motivation.trim().length < 20) {
            newErrors.motivation = "Please write at least 20 characters.";
        }

        return newErrors;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);
        setMessage("");
        setSuccess(false);

        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);

        try {
            const res = await fetch("/api/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.error || "Submission failed.");
                setSuccess(false);
            } else {
                setMessage("Application submitted successfully.");
                setSuccess(true);
                setFormData(initialForm);
                setErrors({});
            }
        } catch {
            setMessage("Something went wrong. Please try again.");
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name *
                    </label>
                    <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                    />
                    {errors.fullName && (
                        <p className="mt-2 text-sm text-rose-600">{errors.fullName}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address *
                    </label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-rose-600">{errors.email}</p>
                    )}
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        University / Organization
                    </label>
                    <input
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your university or organization"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Country *
                    </label>
                    <input
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your country"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                    />
                    {errors.country && (
                        <p className="mt-2 text-sm text-rose-600">{errors.country}</p>
                    )}
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Field of Study
                    </label>
                    <input
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g. Aerospace Engineering"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Participation Type *
                    </label>
                    <select
                        name="participationType"
                        value={formData.participationType}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                    >
                        <option value="">Choose an option</option>
                        <option value="Student">Student</option>
                        <option value="Recent Graduate">Recent Graduate</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Participant">Participant</option>
                    </select>
                    {errors.participationType && (
                        <p className="mt-2 text-sm text-rose-600">{errors.participationType}</p>
                    )}
                </div>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Motivation *
                </label>
                <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us briefly why you would like to join this program"
                    rows={6}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                />
                {errors.motivation && (
                    <p className="mt-2 text-sm text-rose-600">{errors.motivation}</p>
                )}
            </div>

            {/* Honeypot spam field */}
            <div className="hidden">
                <label>Website</label>
                <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                />
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                <p className="text-sm text-slate-600">
                    Your application will be submitted directly through this website.
                </p>
            </div>

            {message && (
                <div
                    className={`rounded-2xl p-4 text-sm ${
                        success
                            ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border border-rose-200 bg-rose-50 text-rose-700"
                    }`}
                >
                    {message}
                </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Submitting...
            </span>
                    ) : (
                        "Submit Application"
                    )}
                </button>

                <p className="text-sm text-slate-500">
                    Required fields are marked with *.
                </p>
            </div>
        </form>
    );
}
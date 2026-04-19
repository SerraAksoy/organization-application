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
    website: string;
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
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
                <InputField
                    label="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    error={errors.fullName}
                />

                <InputField
                    label="Email Address *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    error={errors.email}
                    type="email"
                />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <InputField
                    label="University / Organization"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="Your university or organization"
                />

                <InputField
                    label="Country *"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    error={errors.country}
                />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <InputField
                    label="Field of Study"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    placeholder="e.g. Aerospace Engineering"
                />

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Participation Type *
                    </label>
                    <select
                        name="participationType"
                        value={formData.participationType}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#D7E8F7] bg-[#F5FBFF] px-4 py-3 text-sm outline-none transition focus:border-[#00AEEF] focus:bg-white"
                    >
                        <option value="">Choose an option</option>
                        <option value="Student">Student</option>
                        <option value="Recent Graduate">Recent Graduate</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Participant">Participant</option>
                    </select>
                    {errors.participationType && (
                        <p className="mt-2 text-sm text-rose-600">
                            {errors.participationType}
                        </p>
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
                    rows={6}
                    placeholder="Tell us briefly why you would like to join this program"
                    className="w-full rounded-2xl border border-[#D7E8F7] bg-[#F5FBFF] px-4 py-3 text-sm outline-none transition focus:border-[#00AEEF] focus:bg-white"
                />
                {errors.motivation && (
                    <p className="mt-2 text-sm text-rose-600">
                        {errors.motivation}
                    </p>
                )}
            </div>

            {/* Info box */}
            <div className="rounded-2xl border border-[#D7E8F7] bg-[#EAF7FF] p-4">
                <p className="text-sm text-[#003A8F]">
                    Your application will be submitted directly through this website.
                </p>
            </div>

            {message && (
                <div
                    className={`rounded-2xl p-4 text-sm ${
                        success
                            ? "border border-[#00AEEF]/30 bg-[#EAF7FF] text-[#003A8F]"
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
                    className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#003A8F] px-6 py-3 font-medium text-white transition hover:bg-[#002d6e] disabled:opacity-70"
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

/* reusable input */
function InputField({
                        label,
                        name,
                        value,
                        onChange,
                        placeholder,
                        error,
                        type = "text",
                    }: any) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-[#D7E8F7] bg-[#F5FBFF] px-4 py-3 text-sm outline-none transition focus:border-[#00AEEF] focus:bg-white"
            />
            {error && <p className="mt-2 text-sm text-rose-600">{error}</p>}
        </div>
    );
}
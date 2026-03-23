import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const recentRequests = new Map<string, number>();

export async function POST(req: Request) {
    try {
        const forwardedFor = req.headers.get("x-forwarded-for");
        const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
        const now = Date.now();

        const lastRequestTime = recentRequests.get(ip);
        if (lastRequestTime && now - lastRequestTime < 10_000) {
            return NextResponse.json(
                { error: "Too many requests. Please wait a few seconds." },
                { status: 429 }
            );
        }

        recentRequests.set(ip, now);

        const body = await req.json();

        const {
            fullName,
            email,
            university,
            country,
            fieldOfStudy,
            participationType,
            motivation,
            website,
        } = body;

        if (website) {
            return NextResponse.json({ error: "Spam detected." }, { status: 400 });
        }

        if (
            !fullName?.trim() ||
            !email?.trim() ||
            !country?.trim() ||
            !participationType?.trim() ||
            !motivation?.trim()
        ) {
            return NextResponse.json(
                { error: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(normalizedEmail)) {
            return NextResponse.json(
                { error: "Invalid email format." },
                { status: 400 }
            );
        }

        if (motivation.trim().length < 20) {
            return NextResponse.json(
                { error: "Motivation must be at least 20 characters long." },
                { status: 400 }
            );
        }

        const { error } = await supabaseAdmin.from("applications").insert([
            {
                full_name: fullName.trim(),
                email: normalizedEmail,
                university: university?.trim() || null,
                country: country.trim(),
                field_of_study: fieldOfStudy?.trim() || null,
                participation_type: participationType.trim(),
                motivation: motivation.trim(),
            },
        ]);

        if (error) {
            console.error("Supabase insert error:", error);

            if (error.code === "23505") {
                return NextResponse.json(
                    { error: "An application with this email already exists." },
                    { status: 409 }
                );
            }

            return NextResponse.json(
                { error: "Failed to save application." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully.",
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}
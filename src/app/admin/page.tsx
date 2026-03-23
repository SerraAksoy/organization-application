import { supabaseAdmin } from "@/lib/supabase";

type Application = {
    id: number;
    created_at: string;
    full_name: string | null;
    email: string | null;
    university: string | null;
    country: string | null;
    field_of_study: string | null;
    participation_type: string | null;
    motivation: string | null;
};

function escapeCsv(value: string | null | undefined) {
    const safe = value ?? "";
    return `"${safe.replace(/"/g, '""')}"`;
}

export default async function AdminPage() {
    const { data, error } = await supabaseAdmin
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });

    const applications: Application[] = data ?? [];

    const csvHeader = [
        "ID",
        "Created At",
        "Full Name",
        "Email",
        "University",
        "Country",
        "Field of Study",
        "Participation Type",
        "Motivation",
    ];

    const csvRows = applications.map((app) => [
        app.id,
        app.created_at,
        escapeCsv(app.full_name),
        escapeCsv(app.email),
        escapeCsv(app.university),
        escapeCsv(app.country),
        escapeCsv(app.field_of_study),
        escapeCsv(app.participation_type),
        escapeCsv(app.motivation),
    ]);

    const csvContent = [
        csvHeader.join(","),
        ...csvRows.map((row) => row.join(",")),
    ].join("\n");

    const csvDataUrl = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10 md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
                            Admin Panel
                        </p>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                            Applications Dashboard
                        </h1>
                        <p className="mt-3 text-slate-600">
                            Review submitted applications collected through the website.
                        </p>
                    </div>

                    <a
                        href={csvDataUrl}
                        download="applications.csv"
                        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
                    >
                        Download CSV
                    </a>
                </div>

                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Total Applications</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
                            {applications.length}
                        </h2>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Latest Submission</p>
                        <h2 className="mt-2 text-base font-semibold text-slate-900">
                            {applications[0]?.full_name || "No submissions yet"}
                        </h2>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Status</p>
                        <h2 className="mt-2 text-base font-semibold text-emerald-600">
                            {error ? "Error loading data" : "Connected to Supabase"}
                        </h2>
                    </div>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                    {error ? (
                        <div className="p-6 text-red-600">Failed to load applications.</div>
                    ) : applications.length === 0 ? (
                        <div className="p-6 text-slate-600">No applications yet.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left">
                                <thead className="border-b border-slate-200 bg-slate-50">
                                <tr>
                                    <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                                        Name
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                                        Email
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                                        University
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                                        Country
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                                        Field
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                                        Participation
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                                        Submitted
                                    </th>
                                </tr>
                                </thead>

                                <tbody>
                                {applications.map((app) => (
                                    <tr
                                        key={app.id}
                                        className="border-b border-slate-100 align-top last:border-b-0"
                                    >
                                        <td className="px-5 py-4 text-sm font-medium text-slate-900">
                                            {app.full_name || "-"}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-600">
                                            {app.email || "-"}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-600">
                                            {app.university || "-"}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-600">
                                            {app.country || "-"}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-600">
                                            {app.field_of_study || "-"}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-600">
                                            {app.participation_type || "-"}
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-600">
                                            {new Date(app.created_at).toLocaleString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Motivation Preview
                    </h2>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {applications.slice(0, 4).map((app) => (
                            <div
                                key={`motivation-${app.id}`}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <p className="text-sm font-semibold text-slate-900">
                                    {app.full_name || "Unnamed Applicant"}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {app.motivation || "No motivation provided."}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
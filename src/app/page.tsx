export default function Home() {
    return (
        <main className="bg-gray-900 text-white">

            {/* HERO */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Organizasyon Adı
                </h1>

                <p className="mt-4 text-gray-300 max-w-xl">
                    Bu organizasyon, katılımcılara eşsiz bir deneyim sunar.
                    Öğrenme, network ve eğlence bir arada!
                </p>

                <a
                    href="#basvuru"
                    className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold"
                >
                    Başvur
                </a>
            </section>

            {/* PROGRAM */}
            <section className="py-20 px-6 bg-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-10">Program Hakkında</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gray-900 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Eğitim</h3>
                        <p className="text-gray-400">
                            Alanında uzman kişilerden eğitimler alacaksın.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Network</h3>
                        <p className="text-gray-400">
                            Yeni insanlarla tanışıp çevreni genişleteceksin.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Deneyim</h3>
                        <p className="text-gray-400">
                            Gerçek projelerde yer alarak deneyim kazanacaksın.
                        </p>
                    </div>
                </div>
            </section>
            {/* GALERİ */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Etkinlikten Görseller</h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <img
                        src="https://source.unsplash.com/400x300/?event"
                        className="rounded-xl"
                    />
                    <img
                        src="https://source.unsplash.com/400x300/?conference"
                        className="rounded-xl"
                    />
                    <img
                        src="https://source.unsplash.com/400x300/?teamwork"
                        className="rounded-xl"
                    />
                </div>
            </section>
            {/* BAŞVURU */}
            <section id="basvuru" className="py-20 px-6 bg-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-10">Başvuru Formu</h2>

                <div className="max-w-3xl mx-auto">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd2CG_svscUSClteKfK2SjipNLsl9dLV7sBlDW0Pb_Rpulm9A/viewform?embedded=true"
                        width="100%"
                        height="900"
                        className="rounded-xl"
                    ></iframe>
                </div>
            </section>

        </main>
    );
}
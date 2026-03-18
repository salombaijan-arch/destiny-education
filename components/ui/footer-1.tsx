export default function FooterExample() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#0C1F0D] to-[#152717] text-white">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Brand */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="text-2xl font-semibold tracking-tight mb-3">Destiny Education</span>
                    <p className="max-w-md text-sm leading-relaxed text-white/70">
                        Bu yerda o&apos;rganishning yoshi yo&apos;q. Hamjamiyatimizdagi har bir kishi uchun sifatli ta&apos;lim.
                    </p>
                </div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white/70">
                    {/* Address */}
                    <div>
                        <p className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Manzil</p>
                        <p className="leading-relaxed">
                            Karmana tumani<br />
                            "Xalqlar do&apos;stligi" ko&apos;chasi<br />
                            37-uy
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <p className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Telefon</p>
                        <a href="tel:+998932083000" className="block hover:text-white transition-colors">+998 93 208 30 00</a>
                        <a href="tel:+998500035022" className="block hover:text-white transition-colors">+998 50 003 50 22</a>
                    </div>

                    {/* Telegram */}
                    <div>
                        <p className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Telegram</p>
                        <a
                            href="https://t.me/DESTINY_EDUCATION1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            @DESTINY_EDUCATION1
                        </a>
                    </div>

                    {/* Instagram */}
                    <div>
                        <p className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Instagram</p>
                        <a
                            href="https://instagram.com/DESTINY_EDUCATION1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            @DESTINY_EDUCATION1
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-white/50">
                    Destiny Education ©2025. Barcha huquqlar himoyalangan.
                </div>
            </div>
        </footer>
    );
}

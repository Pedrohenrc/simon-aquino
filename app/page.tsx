export default function Home() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100">
            <nav className="flex items-center justify-between px-8 py-6 border-b border-neutral-800">
                <span className="text-xl font-bold tracking-tight">Simon Aquino</span>
                <ul className="flex gap-6 text-sm text-neutral-400">
                    <li>Início</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </nav>

            {/* SECTION_START */}
            <section className="max-w-6xl mx-auto px-8 py-28">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Sobre Simon Aquino
            </span>
                        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
                            Desenvolvedor focado em <span className="text-emerald-400">interfaces modernas</span>
                        </h2>
                        <p className="mt-6 text-neutral-400 leading-relaxed">
                            Com anos de experiência em desenvolvimento web, Simon cria
                            soluções digitais robustas, acessíveis e elegantes — combinando
                            boas práticas, design centrado no usuário e tecnologias de ponta.
                        </p>

                        <button className="mt-8 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition font-semibold text-neutral-950">
                            Ver portfólio
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "React", desc: "Componentização e estado" },
                            { name: "Next.js", desc: "SSR, rotas e performance" },
                            { name: "Tailwind", desc: "Design system ágil" },
                            { name: "TypeScript", desc: "Tipagem segura" },
                        ].map((s) => (
                            <div
                                key={s.name}
                                className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/40 transition"
                            >
                                <h3 className="text-lg font-bold">{s.name}</h3>
                                <p className="mt-1 text-sm text-neutral-400">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* SECTION_END */}

            <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
                © {new Date().getFullYear()} Simon Aquino
            </footer>
        </main>
    );
}

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
            <section className="max-w-5xl mx-auto px-8 py-24 text-center">
                <h1 className="text-4xl font-bold">Simon Aquino</h1>
                <p className="mt-4 text-neutral-400">Em breve, novidades por aqui.</p>
            </section>
            {/* SECTION_END */}

            <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
                © {new Date().getFullYear()} Simon Aquino
            </footer>
        </main>
    );
}

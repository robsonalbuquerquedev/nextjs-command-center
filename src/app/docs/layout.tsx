import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-blue-700">📘 Docs Center</h1>
                <p className="text-sm text-gray-600">Navegue entre os tópicos técnicos abaixo.</p>
                <nav className="mt-4 flex gap-4">
                    <Link href="/docs" className="text-blue-600 hover:underline">Página Inicial</Link>
                    <Link href="/" className="text-blue-600 hover:underline">Voltar ao Início</Link>
                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
}

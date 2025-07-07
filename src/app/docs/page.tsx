import Link from "next/link";

const topics = ["nextjs", "react", "axios", "router"];

export default function DocsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">📚 Documentação Principal</h1>
            <p className="mb-2">Clique em um dos tópicos abaixo para ver uma rota dinâmica em ação:</p>

            <ul className="list-disc ml-6 space-y-2">
                {topics.map((topic) => (
                    <li key={topic}>
                        <Link href={`/docs/${topic}`} className="text-blue-600 underline hover:text-blue-800">
                            {topic}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

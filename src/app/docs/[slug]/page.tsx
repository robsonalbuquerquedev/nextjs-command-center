// app/docs/[slug]/page.tsx
import CodeBlock from "@/components/CodeBlock";

interface DocsTopicPageProps {
    params: {
        slug: string;
    };
}

// Lista de comandos para instalação do ambiente Next.js
const installCommands = `
npx create-next-app@latest .
npm install react-icons 
npm install react-hot-toast 
npm install axios 
npm install date-fns
npm install monitor
npm install prismjs
npm install --save-dev @types/prismjs
npm install framer-motion
npm install chart.js
npm install react-chartjs-2
`.trim();

// Tópicos estáticos com título e descrição básica
const topicContent: Record<string, { title: string; content: string }> = {
    react: {
        title: "React",
        content:
            "React é uma biblioteca JavaScript para construir interfaces de usuário reativas e componíveis.",
    },
    nextjs: {
        title: "Next.js",
        content:
            "Next.js é um framework React completo para criação de aplicações web modernas com SSR, API, e muito mais.",
    },
    axios: {
        title: "Axios",
        content:
            "Axios é uma biblioteca para fazer requisições HTTP com suporte a interceptadores, promessas e tratamento de erros.",
    },
    router: {
        title: "Next Router",
        content:
            "O roteador do Next.js permite navegação programada, rotas dinâmicas, rotas aninhadas e muito mais.",
    },
};

export default function DocsTopicPage({ params }: DocsTopicPageProps) {
    const { slug } = params;

    const topic = topicContent[slug];

    if (!topic) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold text-red-600">🚫 Tópico não encontrado</h1>
                <p className="mt-2">
                    O tópico <code>{slug}</code> não está cadastrado. Verifique a URL.
                </p>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">📄 Página dinâmica: {topic.title}</h1>
            <p className="mt-2">{topic.content}</p>

            {/* Conteúdo adicional só para Next.js */}
            {slug === "nextjs" && (
                <>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">📦 Instalação básica</h2>
                        <CodeBlock language="bash" code={installCommands} />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">💡 O que cada linha faz:</h2>
                        <ul className="list-disc ml-6 space-y-2 text-sm">
                            <li>
                                <strong>npx create-next-app@latest .</strong> — Cria um projeto Next.js na pasta atual.
                            </li>
                            <li>
                                <strong>npm install react-icons</strong> — Adiciona ícones populares como FontAwesome, Feather, etc.
                            </li>
                            <li>
                                <strong>npm install react-hot-toast</strong> — Biblioteca leve e elegante para mostrar notificações.
                            </li>
                            <li>
                                <strong>npm install axios</strong> — Cliente HTTP poderoso e intuitivo para requisições a APIs.
                            </li>
                            <li>
                                <strong>npm install date-fns</strong> — Ferramentas modernas para manipular e formatar datas.
                            </li>
                            <li>
                                <strong>npm install monitor</strong> — Biblioteca (ou ferramenta) usada para monitoramento e acompanhamento de dados em tempo real.
                            </li>
                            <li>
                                <strong>npm install prismjs</strong> — Instala o PrismJS, uma biblioteca para aplicar destaque de sintaxe em blocos de código.
                            </li>
                            <li>
                                <strong>npm install --save-dev @types/prismjs</strong> — Adiciona as tipagens do PrismJS para uso com TypeScript, garantindo autocomplete e segurança de tipos.
                            </li>
                            <li>
                                <strong>npm install framer-motion</strong> — Biblioteca poderosa para criar animações e transições suaves em seus componentes React.
                            </li>
                            <li>
                                <strong>npm install chart.js</strong> — Biblioteca completa e responsiva para criar gráficos dinâmicos como pizza, linha, barras e muito mais.
                            </li>
                            <li>
                                <strong>npm install react-chartjs-2</strong> — Componentes React prontos para usar com Chart.js, facilitando a criação dos gráficos em seus componentes.
                            </li>
                        </ul>
                    </div>
                </>
            )}

            <p className="text-sm text-gray-500 mt-6">
                Rota acessada: <code>/docs/{slug}</code>
            </p>
        </div>
    );
}

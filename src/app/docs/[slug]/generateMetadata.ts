// app/docs/[slug]/generateMetadata.ts
import { Metadata } from "next";
import { topicContent } from "../docs-data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const topic = topicContent[params.slug];
    return {
        title: topic ? `Documentação: ${topic.title}` : "Tópico não encontrado",
        description: topic
            ? `Saiba mais sobre ${topic.title}, conceito essencial no ecossistema React.`
            : "Esta página de documentação não existe.",
    };
}

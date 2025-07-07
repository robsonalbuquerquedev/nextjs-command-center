"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { FaCopy, FaCheck } from "react-icons/fa";

interface CodeBlockProps {
    language: string;
    code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (error) {
            console.error("Erro ao copiar código:", error);
        }
    };

    return (
        <div className="relative bg-[#2d2d2d] text-white rounded-lg overflow-hidden mb-4">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-xs text-white bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded flex items-center gap-1"
            >
                {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                {copied ? "Copiado!" : "Copiar"}
            </button>

            <pre className={`language-${language} p-4 overflow-x-auto text-sm`}>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}

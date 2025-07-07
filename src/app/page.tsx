"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { format } from "date-fns";

export default function Home() {
  const [name] = useState("Robson");
  const [joke, setJoke] = useState("");
  const router = useRouter();

  // Função para buscar uma piada (exemplo com axios)
  const fetchJoke = async () => {
    try {
      const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(`${res.data.setup} 🤔 ${res.data.punchline}`);
      toast("Nova piada carregada!");
    } catch {
      toast.error("Erro ao buscar piada 😢");
    }
  };

  // Exemplo de navegação programada
  const goToDocs = () => {
    router.push("/docs");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800 p-4">
      <Toaster />

      {/* Header */}
      <header className="flex items-center gap-2 text-2xl font-bold text-blue-600">
        <FaReact size={32} />
        <span>Next.js Command Center</span>
      </header>

      {/* Main */}
      <main className="flex flex-col gap-6 mt-10">
        <section>
          <h2 className="text-xl font-semibold">Olá, {name} 👋</h2>
          <p>Este painel mostra recursos essenciais que você pode usar em projetos reais.</p>
        </section>

        <section className="space-y-2">
          <button
            onClick={fetchJoke}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Buscar uma piada (Axios)
          </button>
          {joke && (
            <div className="bg-white shadow rounded p-4 border border-gray-200">
              <p className="italic">{joke}</p>
            </div>
          )}
        </section>

        <section>
          <button
            onClick={goToDocs}
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
          >
            Ir para /docs (useRouter)
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center mt-10">
        &copy; {format(new Date(), "yyyy")} - Criado por Robson Albuquerque 🧠
      </footer>
    </div>
  );
}

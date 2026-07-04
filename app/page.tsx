import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center py-24">
        <h1 className="font-heading text-4xl sm:text-5xl font-medium text-foreground max-w-2xl leading-tight">
          Building the future of <span className="text-accent">AI systems</span>
        </h1>
        <p className="text-muted text-base max-w-xl">
          I build practical AI systems that quietly take over the busywork — from
          automated job search to small business operations — with the long-term
          goal of a fully autonomous personal AI.
        </p>
        <a
          href="/ventures"
          className="mt-4 bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition"
        >
          View ventures
        </a>
      </section>

      <section className="px-6 py-16 border-t border-foreground/10">
        <h2 className="font-heading text-2xl text-foreground text-center mb-10">
          Current ventures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <VentureCard name="Job Radar" desc="Automated job discovery, scored against my resume in real time." />
          <VentureCard name="AI Research Assistant" desc="A multi-document RAG pipeline behind a full FastAPI backend." />
          <VentureCard name="ShopTracker" desc="A small business PWA, built for and used by my family's shop." />
        </div>
      </section>
    </main>
  );
}

function VentureCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="border border-foreground/10 rounded-lg p-5 hover:border-accent/40 transition">
      <h3 className="font-heading text-foreground text-lg mb-2">{name}</h3>
      <p className="text-muted text-sm">{desc}</p>
    </div>
  );
}
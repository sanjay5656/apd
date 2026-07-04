export default function Founder() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl text-foreground mb-2">Sanjay S</h1>
      <p className="text-accent text-sm font-medium mb-8">
        AI/ML Engineer · Python Backend Developer
      </p>

      <p className="text-foreground text-base leading-relaxed mb-10">
        I'm a recent B.Tech graduate in Artificial Intelligence &amp; Machine
        Learning from Saveetha Engineering College (CGPA 8.04), based in
        Electronic City, Bengaluru. I build complete, working systems — RAG
        pipelines, FastAPI backends, automated pipelines — not just notebooks.
        Immediate joiner, actively interviewing.
      </p>

      <section className="mb-10">
        <h2 className="font-heading text-lg text-foreground mb-4">Target roles</h2>
        <div className="flex flex-wrap gap-2">
          {["Python Backend Developer", "Junior AI/ML Engineer", "GenAI / RAG Engineer"].map((r) => (
            <span key={r} className="text-xs bg-foreground/5 text-foreground px-3 py-1.5 rounded">
              {r}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-heading text-lg text-foreground mb-4">Education &amp; certifications</h2>
        <ul className="text-muted text-sm space-y-2">
          <li>B.Tech, AI &amp; Machine Learning — Saveetha Engineering College (CGPA 8.04)</li>
          <li>Diploma in Electronics</li>
          <li>NVIDIA — Computer Vision</li>
          <li>IBM — Data Science Professional Certificate</li>
          <li>Java Home Cloud — Generative AI</li>
        </ul>
      </section>

      <section className="flex gap-4">
        <a
          href="/resume.pdf"
          className="bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition"
        >
          Download resume
        </a>
        <a
          href="/contact"
          className="border border-foreground/20 text-foreground text-sm font-medium px-5 py-2.5 rounded-md hover:border-accent/40 transition"
        >
          Contact me
        </a>
      </section>
    </main>
  );
}
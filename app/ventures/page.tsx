const ventures = [
  {
    name: "Job Radar",
    desc: "An automated job-discovery pipeline running on GitHub Actions. It scores fresh postings against my resume using the Gemini API and emails a ranked digest — no manual searching.",
    stack: ["Python", "GitHub Actions", "Gemini API"],
  },
  {
    name: "AI Research Assistant",
    desc: "A multi-document RAG pipeline behind a FastAPI backend — 10 endpoints, PostgreSQL, 19 unit tests, full CI/CD.",
    stack: ["FastAPI", "LangChain", "FAISS", "PostgreSQL"],
  },
  {
    name: "PCB Defect Detection",
    desc: "A computer-vision system classifying defective circuit boards, taken from 19% to 88.8% accuracy with MobileNetV2 transfer learning, deployed on Hugging Face Spaces.",
    stack: ["TensorFlow", "MobileNetV2", "Hugging Face"],
  },
  {
    name: "ShopTracker",
    desc: "A FastAPI + SQLite progressive web app built for my family's shop in Electronic City, deployed on Railway.",
    stack: ["FastAPI", "SQLite", "PWA", "Railway"],
  },
  {
    name: "VaakAI",
    desc: "A multilingual offline text-to-speech app covering five Indian languages, built during my internship at a healthtech startup.",
    stack: ["Coqui XTTS v2", "FastAPI", "PyTorch"],
  },
  {
    name: "NeuroScreen",
    desc: "A vision-based tool detecting early behavioral signals linked to ASD/ADHD, using MediaPipe and EfficientNetB0.",
    stack: ["MediaPipe", "EfficientNetB0", "Grad-CAM"],
  },
];

export default function Ventures() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="font-heading text-4xl text-foreground mb-3">Ventures</h1>
      <p className="text-muted mb-12">
        Real, working systems — not tutorials.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ventures.map((v) => (
          <div
            key={v.name}
            className="border border-foreground/10 rounded-lg p-5 hover:border-accent/40 transition"
          >
            <h2 className="font-heading text-foreground text-lg mb-2">{v.name}</h2>
            <p className="text-muted text-sm mb-4">{v.desc}</p>
            <div className="flex flex-wrap gap-2">
              {v.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs bg-foreground/5 text-foreground px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
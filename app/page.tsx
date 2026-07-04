import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <h1 className="font-heading text-4xl font-medium text-foreground text-center">
        Building the future of <span className="text-accent">AI systems</span>
      </h1>
      <p className="text-muted text-sm">
        A studio for ventures, products, and ideas
      </p>
    </main>
  );
}
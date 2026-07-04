export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-2xl mx-auto">
      <h1 className="font-heading text-4xl text-foreground mb-3">Contact</h1>
      <p className="text-muted mb-10">
        Actively interviewing, immediate joiner. Email is fastest.
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:sanjaysanjay23ai@gmail.com"
          className="border border-foreground/10 rounded-lg p-5 hover:border-accent/40 transition block"
        >
          <p className="text-xs text-muted mb-1">Email</p>
          <p className="text-foreground font-medium">sanjaysanjay23ai@gmail.com</p>
        </a>

        <a
          href="https://github.com/sanjay5656"
          target="_blank"
          rel="noreferrer"
          className="border border-foreground/10 rounded-lg p-5 hover:border-accent/40 transition block"
        >
          <p className="text-xs text-muted mb-1">GitHub</p>
          <p className="text-foreground font-medium">github.com/sanjay5656</p>
        </a>
      </div>
    </main>
  );
}
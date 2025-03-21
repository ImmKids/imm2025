export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 font-jaro text-imm-green text-shadow-glow">
            Interactive Media Management
            <br />
            <span className="text-3xl font-normal text-imm-header">Graduate Show 2025</span>
          </h1>
          <p className="text-xl mb-8 font-jaro text-imm-header">
            Sheridan College
          </p>
          <div className="space-y-4">
            <p className="text-lg font-jaro">
              Join us in celebrating the creative achievements of our graduating class.
            </p>
            <p className="text-lg font-jaro text-imm-green">
              Coming Soon
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

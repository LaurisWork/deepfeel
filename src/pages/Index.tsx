import deepFeelLogo from "@/assets/deep-feel-logo.png";
import VotingPanel from "@/components/VotingPanel";
import StatistikReveal from "@/components/StatistikReveal";
import ScrollVideo from "@/components/ScrollVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="border-b border-foreground px-4 md:px-8 py-4 flex items-center justify-between">
        <img src={deepFeelLogo} alt="Deep Feel Logo" className="h-16 md:h-20" />
        <div className="hidden md:flex gap-3 font-display text-lg">
          <a href="#workshop" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Workshop</a>
          <a href="#fragen" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Fragen</a>
          <a href="#fakten" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Fakten</a>
          <a href="#voting" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Abstimmung</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground">
        <div className="p-8 md:p-16 flex flex-col justify-end bg-accent-blue min-h-[400px] md:min-h-[550px]">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.92] mb-8">
            Was macht KI<br />mit unseren<br />Gefühlen?
          </h1>
          <p className="font-body text-lg md:text-2xl max-w-md leading-relaxed">
            Jugendliche wachsen heute mit Social Media, Chatbots und künstlicher Intelligenz auf.
          </p>
        </div>
        <div className="relative overflow-hidden min-h-[300px] md:min-h-[550px] border-l border-foreground">
          <ScrollVideo src="/videos/klavier.mp4" />
        </div>
      </header>

      {/* TAGLINE */}
      <div className="border-b border-foreground px-4 md:px-8 py-4 md:py-6 flex items-center justify-between font-display text-xl md:text-2xl lg:text-3xl tracking-tight">
        <span>Gefühle</span><span>·</span><span>Technologie</span><span>·</span>
        <span>Verbindung</span><span>·</span><span>Jugend</span>
      </div>

      {/* MISSION STATEMENT */}
      <div id="workshop" className="border-b border-foreground px-4 md:px-8 py-10 md:py-14 scroll-mt-24">
        <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] max-w-6xl">
          Wie verändern digitale Technologien unsere Gefühle und Beziehungen?
        </p>
        <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] max-w-6xl mt-6">
          „Deep Feel" schafft Raum, um sich mit dieser Frage auseinanderzusetzen.
        </p>
      </div>


      {/* QUESTIONS */}
      <section id="fragen" className="border-t border-foreground">
        {/* Pills */}
        <div className="border-t border-foreground px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {[
              "Wie fühlt sich Einsamkeit an?",
              "Kann Technologie Nähe schaffen?",
              "Was macht uns wirklich verbunden?",
              "Ist KI ein Freund?",
              "Wann fühlst du dich gesehen?",
              "Was fehlt im digitalen Raum?",
              "Hilft Social Media gegen Einsamkeit?",
              "Was bedeutet echte Begegnung?",
            ].map((q) => (
              <span key={q} className="question-pill text-xl md:text-2xl lg:text-3xl px-7 py-4 font-display">{q}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-t border-foreground">
        <div className="grid-panel md:col-span-2 flex flex-col justify-center min-h-[250px]">
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-lg">
            Im Rahmen des Workshops „Deep Feel" haben sich junge Menschen mit der Frage
            auseinandergesetzt, wie digitale Technologien unsere Gefühle und Beziehungen
            verändern. Diese Seite zeigt ihre Perspektiven, Fragen und Erkenntnisse.
          </p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-teal min-h-[250px]">
          <img src={deepFeelLogo} alt="Deep Feel" className="w-64 md:w-80" />
        </div>
        <div className="grid-panel flex items-center justify-center min-h-[250px]">
          <p className="font-display text-4xl md:text-5xl text-center leading-snug">
            Fühlen.<br />Fragen.<br />Verstehen.
          </p>
        </div>
      </section>

      {/* ===== FAKTEN ===== */}
      <section id="fakten" className="border-b border-foreground">
        {/* Fact 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground">
          <div className="grid-panel flex flex-col justify-center min-h-[300px]">
            <p className="font-display text-5xl md:text-7xl leading-[0.92] mb-4">
              Jede 6. Person fühlt sich einsam.
            </p>
          </div>
          <div className="grid-panel flex items-center min-h-[300px]">
            <p className="font-body text-xl md:text-2xl leading-relaxed">
              Und junge Menschen sind besonders betroffen. Einsamkeit betrifft nicht nur ältere 
              Generationen – sie ist mitten unter uns.
            </p>
          </div>
        </div>

        {/* Fact 2 — number with accent highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-foreground">
          <div className="grid-panel flex items-center justify-center min-h-[280px]">
            <p className="font-display text-7xl md:text-9xl">
              <span className="text-accent-pink">18–29</span>
            </p>
          </div>
          <div className="grid-panel md:col-span-2 flex flex-col justify-center min-h-[280px]">
            <p className="font-display text-3xl md:text-4xl leading-snug mb-4">
              18–29-Jährige sind am häufigsten einsam.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-xl">
              Fast jede vierte Person in diesem Alter fühlt sich oft einsam. 
              Die Generation, die am meisten vernetzt ist, fühlt sich am einsamsten.
            </p>
          </div>
        </div>

        {/* Fact 3 */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-foreground">
          <div className="grid-panel md:col-span-1 flex items-center justify-center min-h-[250px] border-b md:border-b-0 border-foreground">
            <p className="font-display text-6xl md:text-7xl text-accent-teal">1:4</p>
          </div>
          <div className="grid-panel md:col-span-3 flex flex-col justify-center min-h-[250px]">
            <p className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">
              Junge Frauen sind stärker betroffen als Männer.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl">
              Mehr als jede vierte junge Frau fühlt sich oft einsam. 
              Geschlecht spielt eine Rolle – auch bei der Frage, wer über Einsamkeit sprechen darf.
            </p>
          </div>
        </div>

        {/* Fact 4 — subtle orange underline */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground">
          <div className="grid-panel flex flex-col justify-center min-h-[300px]">
            <p className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
              Einsamkeit ist nicht nur ein Gefühl –{" "}
              <span className="underline decoration-accent-orange decoration-4 underline-offset-4">
                sie macht krank.
              </span>
            </p>
          </div>
          <div className="grid-panel flex items-center min-h-[300px]">
            <p className="font-body text-lg md:text-xl leading-relaxed">
              Einsamkeit hängt unter anderem mit Depressionen, Angststörungen und 
              Schlafproblemen zusammen. Sie ist ein Gesundheitsrisiko, das oft unterschätzt wird.
            </p>
          </div>
        </div>

        {/* Fact 5 — full width, light accent background */}
        <div className="grid-panel min-h-[280px] flex flex-col justify-center bg-accent-yellow/10">
          <p className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.92] max-w-4xl mb-6">
            Einsamkeit beeinflusst auch unsere Gesellschaft.
          </p>
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl">
            Sie kann Vertrauen schwächen und sich negativ auf Demokratie auswirken. 
            Wer sich nicht zugehörig fühlt, zieht sich zurück – auch politisch.
          </p>
        </div>
      </section>

      {/* EXHIBITION VIDEO — Anime */}
      <section className="border-b border-foreground relative aspect-video bg-foreground">
        <ScrollVideo src="/videos/anime.mp4" />
      </section>

      {/* QUOTE BREAKOUT */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="breakout max-w-5xl mx-auto">
          <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-center">
            „Einsamkeit ist nicht das Gegenteil von Alleinsein – 
            es ist das Gefühl, nicht gesehen zu werden."
          </blockquote>
          <p className="font-body text-base text-foreground text-center mt-8">
            — Workshop-Teilnehmer*in, 17 Jahre
          </p>
        </div>
      </section>


      {/* WORKSHOP */}
      <section className="border-t border-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid-panel md:col-span-2 md:row-span-2 p-0 relative overflow-hidden min-h-[400px]">
            <ScrollVideo src="/videos/rewas-freundschaft.mp4" />
          </div>
          <div className="grid-panel flex items-center">
            <p className="font-body text-base md:text-lg leading-relaxed">
              Was hilft dir wenn du dich einsam fühlst? Die Teilnehmer*innen
              sammelten persönliche Erfahrungen und diskutierten in Kleingruppen.
            </p>
          </div>
          <div className="grid-panel flex items-center">
            <p className="font-display text-2xl md:text-3xl leading-snug">
              „Ich chatte mit 100 Leuten, aber fühle mich trotzdem{" "}
              <span className="text-accent-teal">allein</span>."
            </p>
          </div>
        </div>
      </section>


      {/* QUOTE BREAKOUT 2 */}
      <section className="py-12 md:py-20 px-4 md:px-8 border-t border-foreground">
        <div className="breakout-right max-w-4xl ml-auto mr-8">
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.95] text-right">
            „Wir haben gelernt, dass Zuhören manchmal wichtiger ist als Antworten."
          </blockquote>
          <p className="font-body text-base text-foreground text-right mt-6">
            — Workshop-Teilnehmer*in, 15 Jahre
          </p>
        </div>
      </section>

      {/* VOTING */}
      <section id="voting" className="border-t border-foreground">
        <div className="grid-panel pb-4">
          <h2 className="font-display text-4xl md:text-5xl">
            Deine Stimme zählt
          </h2>
          <p className="font-body text-lg text-foreground mt-2">
            Wähle eine Antwort – und sieh, wie andere abgestimmt haben.
          </p>
        </div>
        <div className="border-t border-foreground">
          <VotingPanel />
        </div>
      </section>

      {/* STATISTIK */}
      <StatistikReveal />




      {/* FOOTER — inverted */}
      <footer className="bg-foreground text-background px-4 md:px-8 py-12 md:py-16 border-t border-foreground">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={deepFeelLogo} alt="Deep Feel" className="h-24 mb-4 invert" />
            <p className="font-body text-base opacity-70">
              Ein Workshop-Projekt über Gefühle,<br />Technologie und menschliche Verbindung.
            </p>
          </div>
          <div>
            <p className="font-display text-base mb-3">Projekt</p>
            <p className="font-body text-base opacity-70 leading-relaxed">
              Deep Feel ist ein einmaliges Workshop-Projekt, das junge Menschen einlädt,
              über die Auswirkungen digitaler Technologien auf ihre Gefühle nachzudenken.
            </p>
          </div>
          <div>
            <p className="font-display text-base mb-3">Kontakt</p>
            <p className="font-body text-base opacity-70 leading-relaxed">
              Bei Fragen zum Projekt oder den Ergebnissen freuen wir uns über eine Nachricht.
            </p>
            <a href="mailto:hi.ideenkiosk@gmail.com" className="font-body text-base mt-2 inline-block underline underline-offset-4 hover:opacity-70">
              hi.ideenkiosk@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body opacity-50">© 2026 Deep Feel. Alle Rechte vorbehalten.</p>
          <p className="font-body opacity-50">Eine digitale Ausstellung</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

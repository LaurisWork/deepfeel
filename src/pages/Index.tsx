import deepFeelLogo from "@/assets/deep-feel-logo.png";
import workshopHero from "@/assets/workshop-hero.jpg";
import VotingPanel from "@/components/VotingPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="border-b border-foreground px-4 md:px-8 py-4 flex items-center justify-between">
        <img src={deepFeelLogo} alt="Deep Feel Logo" className="h-16 md:h-20" />
        <div className="hidden md:flex gap-3 font-display text-lg">
          <a href="#fakten" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Fakten</a>
          <a href="#workshop" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Workshop</a>
          <a href="#fragen" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Fragen</a>
          <a href="#video" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Video</a>
          <a href="#voting" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Abstimmung</a>
        </div>
      </nav>

      {/* HERO - Split Layout */}
      <header className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground">
        <div className="p-8 md:p-16 flex flex-col justify-end bg-accent-blue min-h-[400px] md:min-h-[550px]">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.92] mb-8">
            Was macht KI<br />mit unseren<br />Gefühlen?
          </h1>
          <p className="font-body text-base md:text-lg max-w-sm leading-relaxed">
            Jugendliche wachsen heute mit Social Media, Chatbots und künstlicher Intelligenz auf.
          </p>
        </div>
        <div className="relative overflow-hidden min-h-[300px] md:min-h-[550px] border-l border-foreground">
          <img
            src={workshopHero}
            alt="Workshop-Teilnehmer*innen bei Deep Feel"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </header>

      {/* TAGLINE BAR */}
      <div className="border-b border-foreground px-4 md:px-8 py-4 flex items-center gap-3 font-body text-base">
        <span>Gefühle</span>
        <span>·</span>
        <span>Technologie</span>
        <span>·</span>
        <span>Verbindung</span>
        <span>·</span>
        <span>Jugend</span>
      </div>

      {/* INTRO + LOGO GRID */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-b border-foreground">
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

      {/* ===== FAKTEN SECTION — each fact visually different ===== */}
      <section id="fakten" className="border-b border-foreground">
        {/* Fact 1 — full-width large statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground">
          <div className="grid-panel flex flex-col justify-center min-h-[300px] md:min-h-[350px]">
            <p className="font-display text-5xl md:text-7xl leading-[0.92] mb-4">
              Jede 6. Person fühlt sich einsam.
            </p>
          </div>
          <div className="grid-panel flex items-center grid-panel--accent-pink min-h-[300px]">
            <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground">
              Und junge Menschen sind besonders betroffen. Einsamkeit betrifft nicht nur ältere 
              Generationen – sie ist mitten unter uns.
            </p>
          </div>
        </div>

        {/* Fact 2 — number highlight with narrow text column */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-foreground">
          <div className="grid-panel grid-panel--accent-yellow flex items-center justify-center min-h-[280px]">
            <p className="font-display text-7xl md:text-9xl text-foreground">18–29</p>
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

        {/* Fact 3 — asymmetric layout, teal accent */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-foreground">
          <div className="grid-panel md:col-span-1 grid-panel--accent-teal flex items-center justify-center min-h-[250px]">
            <p className="font-display text-6xl md:text-7xl text-foreground">1:4</p>
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

        {/* Fact 4 — dark text on orange, quote-like */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground">
          <div className="grid-panel grid-panel--accent-orange flex flex-col justify-center min-h-[300px]">
            <p className="font-display text-4xl md:text-5xl leading-[0.95] text-foreground mb-6">
              Einsamkeit ist nicht nur ein Gefühl – sie macht krank.
            </p>
          </div>
          <div className="grid-panel flex items-center min-h-[300px]">
            <p className="font-body text-lg md:text-xl leading-relaxed">
              Einsamkeit hängt unter anderem mit Depressionen, Angststörungen und 
              Schlafproblemen zusammen. Sie ist ein Gesundheitsrisiko, das oft unterschätzt wird.
            </p>
          </div>
        </div>

        {/* Fact 5 — full-width statement, blue background */}
        <div className="grid-panel grid-panel--accent-blue min-h-[300px] flex flex-col justify-center">
          <p className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.92] text-foreground max-w-4xl mb-6">
            Einsamkeit beeinflusst auch unsere Gesellschaft.
          </p>
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground max-w-2xl">
            Sie kann Vertrauen schwächen und sich negativ auf Demokratie auswirken. 
            Wer sich nicht zugehörig fühlt, zieht sich zurück – auch politisch.
          </p>
        </div>
      </section>

      {/* QUOTE BREAKOUT */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="breakout max-w-5xl mx-auto">
          <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-center">
            „Einsamkeit ist nicht das Gegenteil von Alleinsein – 
            es ist das Gefühl, nicht gesehen zu werden."
          </blockquote>
          <p className="font-body text-base text-muted-foreground text-center mt-8">
            — Workshop-Teilnehmer*in, 17 Jahre
          </p>
        </div>
      </section>

      {/* QUESTIONS SECTION */}
      <section id="fragen" className="border-t border-foreground">
        <div className="grid-panel pb-4">
          <h2 className="font-display text-4xl md:text-5xl">Unsere Fragen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          <div className="grid-panel flex items-center justify-center grid-panel--accent-pink min-h-[280px]">
            <p className="font-display text-2xl md:text-3xl text-center leading-snug px-4 text-foreground">
              „Fühlt sich Online-Kontakt genauso an wie echte Begegnung?"
            </p>
          </div>
          <div className="grid-panel flex items-center justify-center min-h-[280px]">
            <p className="font-display text-2xl md:text-3xl text-center leading-snug px-4">
              „Können KI oder digitale Räume Nähe ersetzen?"
            </p>
          </div>
          <div className="grid-panel flex items-center justify-center grid-panel--accent-blue min-h-[280px]">
            <p className="font-display text-2xl md:text-3xl text-center leading-snug px-4 text-foreground">
              „Warum fühlen sich manche Menschen trotz vieler Kontakte einsam?"
            </p>
          </div>
        </div>
        {/* Question Pills */}
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
              <span key={q} className="question-pill text-base md:text-lg">{q}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP PANELS */}
      <section id="workshop" className="border-t border-foreground">
        <div className="grid-panel pb-4">
          <h2 className="font-display text-4xl md:text-5xl">Aus dem Workshop</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          <div className="grid-panel md:col-span-2 md:row-span-2 p-0 relative overflow-hidden min-h-[400px]">
            <img
              src={workshopHero}
              alt="Workshop-Szene"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="grid-panel flex items-center">
            <p className="font-body text-base md:text-lg leading-relaxed">
              In der ersten Session ging es um die Frage: Was bedeutet emotionale Nähe
              in einer digitalisierten Welt? Die Teilnehmer*innen sammelten persönliche
              Erfahrungen und diskutierten in Kleingruppen.
            </p>
          </div>
          <div className="grid-panel grid-panel--accent-teal flex items-center">
            <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
              „Ich chatte mit 100 Leuten, aber fühle mich trotzdem allein."
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO — central, prominent */}
      <section id="video" className="border-t border-foreground">
        <div className="grid-panel pb-4">
          <h2 className="font-display text-4xl md:text-5xl">Workshop-Video</h2>
        </div>
        <div className="border-t border-foreground">
          <div className="max-w-5xl mx-auto px-4 md:px-0 py-8 md:py-12">
            <video
              controls
              className="w-full border border-foreground"
              poster={workshopHero}
            >
              <source src="/videos/freundschaft.mp4" type="video/mp4" />
              Dein Browser unterstützt kein Video.
            </video>
            <p className="font-body text-base text-muted-foreground mt-4">
              „Freundschaft" — Ein Film aus dem Workshop Deep Feel
            </p>
          </div>
        </div>
      </section>

      {/* SECOND QUOTE BREAKOUT */}
      <section className="py-12 md:py-20 px-4 md:px-8 border-t border-foreground">
        <div className="breakout-right max-w-4xl ml-auto mr-8">
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.95] text-right">
            „Wir haben gelernt, dass Zuhören manchmal wichtiger ist als Antworten."
          </blockquote>
          <p className="font-body text-base text-muted-foreground text-right mt-6">
            — Workshop-Teilnehmer*in, 15 Jahre
          </p>
        </div>
      </section>

      {/* Quote + Fact side by side */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground">
        <div className="grid-panel grid-panel--accent-pink flex items-center justify-center min-h-[350px]">
          <blockquote className="font-display text-3xl md:text-4xl text-center leading-snug max-w-md text-foreground">
            „Gefühle sind nicht digital – aber der Raum, in dem wir sie teilen, ist es."
          </blockquote>
        </div>
        <div className="grid-panel grid-panel--accent-yellow flex flex-col justify-center min-h-[350px]">
          <p className="font-display text-4xl md:text-5xl leading-[0.95] text-foreground mb-4">
            Zuhören ist der erste Schritt.
          </p>
          <p className="font-body text-lg text-foreground leading-relaxed">
            Einsamkeit beginnt oft dort, wo das Gespräch aufhört. 
            Im Workshop haben wir gelernt, wieder hinzuhören.
          </p>
        </div>
      </section>

      {/* VOTING PANEL — multiple questions */}
      <section id="voting" className="border-t border-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid-panel md:col-span-1 grid-panel--accent-yellow flex items-center justify-center min-h-[300px]">
            <p className="font-display text-4xl md:text-5xl leading-snug text-center text-foreground">
              Deine<br />Stimme<br />zählt.
            </p>
          </div>
          <div className="grid-panel md:col-span-2">
            <VotingPanel />
          </div>
        </div>
      </section>

      {/* SESSIONS */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-t border-foreground">
        <div className="grid-panel flex items-center justify-center min-h-[200px]">
          <p className="font-display text-2xl md:text-3xl text-center">Session 1<br /><span className="font-body text-base text-muted-foreground">Gefühle erkennen</span></p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-blue min-h-[200px]">
          <p className="font-display text-2xl md:text-3xl text-center text-foreground">Session 2<br /><span className="font-body text-base text-foreground/70">Digitale Räume</span></p>
        </div>
        <div className="grid-panel flex items-center justify-center min-h-[200px]">
          <p className="font-display text-2xl md:text-3xl text-center">Session 3<br /><span className="font-body text-base text-muted-foreground">KI & Empathie</span></p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-teal min-h-[200px]">
          <p className="font-display text-2xl md:text-3xl text-center text-foreground">Session 4<br /><span className="font-body text-base text-foreground/70">Gemeinsam fühlen</span></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-foreground px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={deepFeelLogo} alt="Deep Feel" className="h-24 mb-4" />
            <p className="font-body text-base text-muted-foreground">
              Ein Workshop-Projekt über Gefühle,<br />Technologie und menschliche Verbindung.
            </p>
          </div>
          <div>
            <p className="font-display text-base mb-3">Projekt</p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Deep Feel ist ein einmaliges Workshop-Projekt, das junge Menschen einlädt,
              über die Auswirkungen digitaler Technologien auf ihre Gefühle nachzudenken.
            </p>
          </div>
          <div>
            <p className="font-display text-base mb-3">Kontakt</p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Bei Fragen zum Projekt oder den Ergebnissen freuen wir uns über eine Nachricht.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-muted-foreground">© 2026 Deep Feel. Alle Rechte vorbehalten.</p>
          <p className="font-body text-muted-foreground">Eine digitale Ausstellung</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

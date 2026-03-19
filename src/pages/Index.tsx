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
          <a href="#workshop" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Workshop</a>
          <a href="#fragen" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Fragen</a>
          <a href="#ergebnisse" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Ergebnisse</a>
          <a href="#voting" className="border border-foreground rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors">Abstimmung</a>
        </div>
      </nav>

      {/* HERO - Split Layout */}
      <header className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground">
        <div className="p-8 md:p-16 flex flex-col justify-end bg-accent-blue">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.92] mb-8">
            Was macht KI<br />mit unseren<br />Gefühlen?
          </h1>
          <p className="font-body text-base md:text-lg max-w-sm leading-relaxed">
            Jugendliche wachsen heute mit Social Media, Chatbots und künstlicher Intelligenz auf.
          </p>
        </div>
        <div className="relative overflow-hidden min-h-[300px] md:min-h-[500px] border-l border-foreground">
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
        <div className="grid-panel md:col-span-2 flex flex-col justify-center">
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-lg">
            Im Rahmen des Workshops „Deep Feel" haben sich junge Menschen mit der Frage
            auseinandergesetzt, wie digitale Technologien unsere Gefühle und Beziehungen
            verändern. Diese Seite zeigt ihre Perspektiven, Fragen und Erkenntnisse.
          </p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-teal">
          <img src={deepFeelLogo} alt="Deep Feel" className="w-64 md:w-80" />
        </div>
        <div className="grid-panel flex items-center justify-center">
          <p className="font-display text-4xl md:text-5xl text-center leading-snug">
            Fühlen.<br />Fragen.<br />Verstehen.
          </p>
        </div>
      </section>

      {/* QUESTIONS SECTION */}
      <section id="fragen" className="grid grid-cols-1 md:grid-cols-3 border-b border-foreground">
        <div className="grid-panel md:col-span-3 pb-4">
          <h2 className="font-display text-4xl md:text-5xl">Unsere Fragen</h2>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-pink min-h-[250px]">
          <p className="font-display text-2xl md:text-3xl text-center leading-snug px-4 text-foreground">
            „Fühlt sich Online-Kontakt genauso an wie echte Begegnung?"
          </p>
        </div>
        <div className="grid-panel flex items-center justify-center min-h-[250px]">
          <p className="font-display text-2xl md:text-3xl text-center leading-snug px-4">
            „Können KI oder digitale Räume Nähe ersetzen?"
          </p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-blue min-h-[250px]">
          <p className="font-display text-2xl md:text-3xl text-center leading-snug px-4 text-foreground">
            „Warum fühlen sich manche Menschen trotz vieler Kontakte einsam?"
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

      {/* FACTS GRID */}
      <section id="ergebnisse" className="grid grid-cols-2 md:grid-cols-4 border-t border-foreground">
        <div className="grid-panel md:col-span-4 pb-4">
          <h2 className="font-display text-4xl md:text-5xl">Fakten über Einsamkeit</h2>
        </div>
        <div className="grid-panel grid-panel--accent-yellow">
          <p className="font-display text-5xl md:text-6xl mb-3 text-foreground">36%</p>
          <p className="font-body text-base text-foreground">der 16- bis 30-Jährigen in Deutschland fühlen sich häufig einsam.</p>
        </div>
        <div className="grid-panel">
          <p className="font-display text-5xl md:text-6xl mb-3">70%</p>
          <p className="font-body text-base">der Jugendlichen nutzen soziale Medien täglich – trotzdem steigt die Einsamkeit.</p>
        </div>
        <div className="grid-panel grid-panel--accent-orange">
          <p className="font-display text-5xl md:text-6xl mb-3 text-foreground">5h</p>
          <p className="font-body text-base text-foreground">verbringen junge Menschen durchschnittlich pro Tag am Smartphone.</p>
        </div>
        <div className="grid-panel">
          <p className="font-display text-5xl md:text-6xl mb-3">1 von 4</p>
          <p className="font-body text-base">jungen Menschen hat niemanden, mit dem sie über persönliche Probleme sprechen können.</p>
        </div>
      </section>

      {/* WORKSHOP PANELS */}
      <section id="workshop" className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
        <div className="grid-panel md:col-span-3 pb-4">
          <h2 className="font-display text-4xl md:text-5xl">Aus dem Workshop</h2>
        </div>
        <div className="grid-panel md:col-span-2 md:row-span-2 p-0 relative overflow-hidden min-h-[350px]">
          <img
            src={workshopHero}
            alt="Workshop-Szene"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
        <div className="grid-panel flex items-center">
          <p className="font-body text-base leading-relaxed">
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
      </section>

      {/* QUESTION PILLS */}
      <section className="border-t border-foreground px-4 md:px-8 py-12 md:py-16">
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
      </section>

      {/* VIDEO + QUOTE ROW */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground">
        <div className="grid-panel min-h-[350px] flex items-center justify-center bg-muted">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="28" viewBox="0 0 20 24" fill="none" className="ml-1">
                <path d="M2 2L18 12L2 22V2Z" fill="currentColor" />
              </svg>
            </div>
            <p className="font-body text-base">360° Workshop-Dokumentation</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Video kommt bald</p>
          </div>
        </div>
        <div className="grid-panel grid-panel--accent-pink flex items-center justify-center min-h-[350px]">
          <blockquote className="font-display text-3xl md:text-4xl text-center leading-snug max-w-md text-foreground">
            „Gefühle sind nicht digital – aber der Raum, in dem wir sie teilen, ist es."
          </blockquote>
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

      {/* VOTING PANEL */}
      <section id="voting" className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
        <div className="grid-panel md:col-span-1 grid-panel--accent-yellow flex items-center justify-center">
          <p className="font-display text-4xl md:text-5xl leading-snug text-center text-foreground">
            Deine<br />Stimme<br />zählt.
          </p>
        </div>
        <div className="grid-panel md:col-span-2">
          <VotingPanel />
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
          <p className="font-body text-sm text-muted-foreground">© 2026 Deep Feel. Alle Rechte vorbehalten.</p>
          <p className="font-body text-sm text-muted-foreground">Eine digitale Ausstellung</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

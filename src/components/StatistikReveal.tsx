import { useState } from "react";

const StatistikReveal = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="border-t border-foreground bg-accent-yellow">
      <div className="grid-panel border-0">
        <p className="font-body uppercase tracking-widest text-sm mb-2">Zwischenstand</p>
        <h2 className="font-display text-4xl md:text-5xl mb-10">
          So haben andere abgestimmt
        </h2>

        {!revealed ? (
          <div className="flex flex-col items-start gap-6">
            <p className="font-body text-lg md:text-xl max-w-2xl">
              Damit du dich beim Abstimmen nicht beeinflussen lässt, bleibt der Zwischenstand zunächst verborgen.
            </p>
            <button
              onClick={() => setRevealed(true)}
              className="border border-foreground rounded-full px-6 py-3 font-display text-lg bg-foreground text-background hover:bg-background hover:text-foreground transition-colors cursor-pointer"
            >
              Zwischenstand aufdecken
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              <div className="border border-foreground p-6 bg-foreground text-background">
                <p className="font-display text-5xl md:text-6xl leading-none">182</p>
                <p className="font-body text-base mt-3">abgegebene Stimmen insgesamt</p>
              </div>
              <div className="p-6 bg-background">
                <p className="font-display text-5xl md:text-6xl leading-none">37%</p>
                <p className="font-body text-base mt-3">fühlen sich <strong>manchmal</strong> einsam</p>
              </div>
              <div className="p-6 bg-background">
                <p className="font-display text-5xl md:text-6xl leading-none">43%</p>
                <p className="font-body text-base mt-3">fühlen sich online <strong>eher nicht</strong> verbunden</p>
              </div>
              <div className="p-6 bg-background">
                <p className="font-display text-5xl md:text-6xl leading-none">70%</p>
                <p className="font-body text-base mt-3">glauben, KI kann <strong>keine echte Nähe</strong> erzeugen</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default StatistikReveal;

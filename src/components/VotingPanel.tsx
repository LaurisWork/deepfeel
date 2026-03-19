import { useState } from "react";

interface VotingQuestion {
  question: string;
  options: string[];
  initialVotes: number[];
}

const questions: VotingQuestion[] = [
  {
    question: "Wie oft fühlst du dich einsam?",
    options: ["Nie", "Selten", "Manchmal", "Oft", "Sehr oft"],
    initialVotes: [3, 7, 15, 10, 5],
  },
  {
    question: "Fühlst du dich online genauso verbunden wie offline?",
    options: ["Ja, absolut", "Teilweise", "Eher nicht", "Gar nicht"],
    initialVotes: [4, 12, 18, 8],
  },
  {
    question: "Hast du jemanden, mit dem du über alles reden kannst?",
    options: ["Ja, mehrere", "Ja, eine Person", "Nicht wirklich", "Nein"],
    initialVotes: [10, 14, 11, 5],
  },
  {
    question: "Kann KI ein Gefühl von Nähe erzeugen?",
    options: ["Ja", "Vielleicht", "Eher nicht", "Nein"],
    initialVotes: [3, 9, 16, 12],
  },
];

const SingleVote = ({ q, index }: { q: VotingQuestion; index: number }) => {
  const [votes, setVotes] = useState<number[]>(q.initialVotes);
  const [selected, setSelected] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const inverted = index % 2 === 0;

  const totalVotes = votes.reduce((a, b) => a + b, 0);

  const handleVote = (i: number) => {
    if (hasVoted) return;
    setSelected(i);
    const newVotes = [...votes];
    newVotes[i] += 1;
    setVotes(newVotes);
    setHasVoted(true);
  };

  const containerClass = inverted
    ? "bg-foreground text-background"
    : "bg-background text-foreground";

  const pillClass = inverted
    ? "border-background text-background hover:bg-background hover:text-foreground"
    : "border-foreground text-foreground hover:bg-foreground hover:text-background";

  const barBgClass = inverted ? "bg-background/20" : "bg-foreground/10";
  const barFillClass = inverted ? "bg-accent-pink" : "bg-accent-pink";
  const barDefaultClass = inverted ? "bg-background/30" : "bg-foreground/15";
  const mutedTextClass = inverted ? "text-background/60" : "text-muted-foreground";

  return (
    <div className={`border border-foreground p-6 md:p-8 ${containerClass}`}>
      <h3 className="font-display text-2xl md:text-3xl mb-8">
        „{q.question}"
      </h3>

      {!hasVoted ? (
        <div className="flex flex-wrap gap-3">
          {q.options.map((option, i) => (
            <button
              key={option}
              onClick={() => handleVote(i)}
              className={`border rounded-full px-6 py-3 font-display text-lg transition-all duration-200 cursor-pointer ${pillClass}`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {q.options.map((option, i) => {
            const pct = totalVotes > 0 ? (votes[i] / totalVotes) * 100 : 0;
            return (
              <div key={option}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className={`font-display text-lg ${selected === i ? "underline" : ""}`}>
                    {option}
                  </span>
                  <span className={`font-body ${mutedTextClass}`}>
                    {Math.round(pct)}%
                  </span>
                </div>
                <div className={`w-full h-10 ${barBgClass} overflow-hidden`} style={{ borderRadius: "10px" }}>
                  <div
                    className={`h-full ${selected === i ? barFillClass : barDefaultClass} transition-all duration-1000 ease-out`}
                    style={{ width: `${pct}%`, borderRadius: "10px" }}
                  />
                </div>
              </div>
            );
          })}
          <div className="flex items-center justify-between pt-2">
            <p className={`font-body ${mutedTextClass}`}>
              {totalVotes} Stimmen · Danke für deine Teilnahme!
            </p>
            <button
              onClick={() => { setHasVoted(false); setSelected(null); }}
              className={`border rounded-full px-4 py-1.5 font-display text-sm transition-all duration-200 cursor-pointer ${pillClass}`}
            >
              Erneut abstimmen
            </button>
          </div>
      )}
    </div>
  );
};

const VotingPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {questions.map((q, i) => (
        <SingleVote key={i} q={q} index={i} />
      ))}
    </div>
  );
};

export default VotingPanel;

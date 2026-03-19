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

const accentColors = [
  "bg-accent-pink",
  "bg-accent-teal",
  "bg-accent-blue",
  "bg-accent-orange",
  "bg-accent-yellow",
];

const SingleVote = ({ q, index }: { q: VotingQuestion; index: number }) => {
  const [votes, setVotes] = useState<number[]>(q.initialVotes);
  const [selected, setSelected] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = votes.reduce((a, b) => a + b, 0);

  const handleVote = (i: number) => {
    if (hasVoted) return;
    setSelected(i);
    const newVotes = [...votes];
    newVotes[i] += 1;
    setVotes(newVotes);
    setHasVoted(true);
  };

  return (
    <div className="border border-foreground p-6 md:p-8">
      <h3 className="font-display text-2xl md:text-3xl mb-8">
        „{q.question}"
      </h3>

      {!hasVoted ? (
        /* VOTING MODE — large clickable pills */
        <div className="flex flex-wrap gap-3">
          {q.options.map((option, i) => (
            <button
              key={option}
              onClick={() => handleVote(i)}
              className="border border-foreground rounded-full px-6 py-3 font-display text-lg 
                hover:bg-foreground hover:text-background transition-all duration-200 cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        /* RESULTS MODE — animated bars */
        <div className="space-y-4">
          {q.options.map((option, i) => {
            const pct = totalVotes > 0 ? (votes[i] / totalVotes) * 100 : 0;
            const colorClass = accentColors[(index + i) % accentColors.length];
            return (
              <div key={option}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className={`font-display text-lg ${selected === i ? "underline" : ""}`}>
                    {option}
                  </span>
                  <span className="font-body text-muted-foreground">
                    {Math.round(pct)}%
                  </span>
                </div>
                <div className="w-full h-10 bg-muted overflow-hidden border border-foreground/20">
                  <div
                    className={`h-full ${selected === i ? colorClass : "bg-foreground/15"} transition-all duration-1000 ease-out`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
          <p className="text-muted-foreground font-body pt-2">
            {totalVotes} Stimmen · Danke für deine Teilnahme!
          </p>
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

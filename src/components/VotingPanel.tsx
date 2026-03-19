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

const SingleVote = ({ q }: { q: VotingQuestion }) => {
  const [votes, setVotes] = useState<number[]>(q.initialVotes);
  const [selected, setSelected] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = votes.reduce((a, b) => a + b, 0);
  const maxVotes = Math.max(...votes);

  const handleVote = (index: number) => {
    if (hasVoted) return;
    setSelected(index);
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    setHasVoted(true);
  };

  return (
    <div>
      <h3 className="font-display text-2xl md:text-3xl mb-6">
        „{q.question}"
      </h3>
      <div className="space-y-3">
        {q.options.map((option, i) => {
          const pct = totalVotes > 0 ? (votes[i] / totalVotes) * 100 : 0;
          return (
            <button
              key={option}
              onClick={() => handleVote(i)}
              className={`w-full text-left transition-all duration-500 ${
                hasVoted ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-body ${selected === i ? "font-semibold" : ""}`}>
                  {option}
                </span>
                {hasVoted && (
                  <span className="font-body text-muted-foreground">
                    {Math.round(pct)}%
                  </span>
                )}
              </div>
              <div className="w-full h-8 bg-muted rounded-sm overflow-hidden border border-foreground/20">
                <div
                  className={`h-full rounded-sm transition-all duration-700 ease-out ${
                    selected === i
                      ? "bg-accent-pink"
                      : votes[i] === maxVotes && hasVoted
                      ? "bg-accent-teal"
                      : "bg-foreground/20"
                  }`}
                  style={{ width: hasVoted ? `${pct}%` : "0%" }}
                />
              </div>
            </button>
          );
        })}
      </div>
      {hasVoted && (
        <p className="mt-4 text-muted-foreground font-body">
          {totalVotes} Stimmen insgesamt
        </p>
      )}
      {!hasVoted && (
        <p className="mt-4 text-muted-foreground font-body">
          Wähle eine Antwort aus
        </p>
      )}
    </div>
  );
};

const VotingPanel = () => {
  return (
    <div className="space-y-16">
      {questions.map((q, i) => (
        <SingleVote key={i} q={q} />
      ))}
    </div>
  );
};

export default VotingPanel;

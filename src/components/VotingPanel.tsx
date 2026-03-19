import { useState } from "react";

const options = ["Nie", "Selten", "Manchmal", "Oft", "Sehr oft"];

const VotingPanel = () => {
  const [votes, setVotes] = useState<number[]>([3, 7, 15, 10, 5]);
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
      <h3 className="font-display text-xl md:text-2xl mb-6">
        „Wie oft fühlst du dich einsam?"
      </h3>
      <div className="space-y-3">
        {options.map((option, i) => {
          const pct = totalVotes > 0 ? (votes[i] / totalVotes) * 100 : 0;
          return (
            <button
              key={option}
              onClick={() => handleVote(i)}
              className={`w-full text-left transition-all duration-500 group ${
                hasVoted ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-body text-sm ${selected === i ? "font-semibold" : ""}`}>
                  {option}
                </span>
                {hasVoted && (
                  <span className="font-body text-xs text-muted-foreground">
                    {Math.round(pct)}%
                  </span>
                )}
              </div>
              <div className="w-full h-6 bg-muted rounded-sm overflow-hidden">
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
        <p className="mt-4 text-xs text-muted-foreground font-body">
          {totalVotes} Stimmen insgesamt
        </p>
      )}
      {!hasVoted && (
        <p className="mt-4 text-xs text-muted-foreground font-body">
          Wähle eine Antwort aus
        </p>
      )}
    </div>
  );
};

export default VotingPanel;

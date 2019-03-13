import { useState } from "react";
const usePlayerState = () => {
	const [isP1Next, setIsP1Next] = useState(true);
	const [round, setRound] = useState(0);
	// remember to [...score, score1:3] to update the score.
	const [scores, setScores] = useState({ score1: 0, score2: 0 });
	const [winner, setWinner] = useState(null);
	return {
		isP1Next,
		round,
		setRound,
		scores,
		setScores,
		setIsP1Next,
		winner,
		setWinner
	};
};

export default usePlayerState;

import React from "react";

const GameInfo = ({ isP1Next, currentRound, totalRound }) => {
	let round = Math.floor(currentRound / 2 + 1);
	if (round > 3) {
		round = 3;
	}
	return (
		<>
			<div className="font-1 ma1 white b ">
				Round {`${round} `}/{" " + totalRound}
			</div>
		</>
	);
};

export default GameInfo;

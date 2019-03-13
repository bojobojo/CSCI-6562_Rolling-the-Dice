import React, { useEffect } from "react";
import usePlayerState from "./usePlayerState";
import GameInfo from "./GameInfo";
import PlayerBoard from "./PlayerBoard";
import Dice from "./Dice";
import posed, { PoseGroup } from "react-pose";

const Modal = posed.div({
	enter: {
		y: 0,
		opacity: 1,
		delay: 8000,
		transition: {
			y: { type: "spring", stiffness: 6000, damping: 15 },
			default: { duration: 200 }
		}
	},
	exit: {
		y: 50,
		opacity: 0,
		transition: { duration: 150 }
	}
});

const Shade = posed.div({
	enter: { opacity: 1 },
	exit: { opacity: 0 }
});

const Game = () => {
	const totalRound = 3;
	const {
		round,
		scores,
		winner,
		isP1Next,
		setScores,
		setRound,
		setIsP1Next,
		setWinner
	} = usePlayerState();
	useEffect(() => {
		if (round === 6) {
			const { score1, score2 } = scores;
			if (score1 > score2) {
				setWinner("P1");
			} else if (score1 < score2) {
				setWinner("P2");
			} else {
				setWinner("tie");
			}
		}
	});

	const init = () => {
		setIsP1Next(true);
		setRound(0);
		setWinner(null);
		setScores({ score1: 0, score2: 0 });
	};

	return (
		<>
			{round === 6 && (
				<div className="center">
					<PoseGroup>
						<Shade key="shade" className="shade" />
					</PoseGroup>
				</div>
			)}

			<div
				className="flex flex-column relative justify-center  items-center
				flex-row-l w-90 w-90-m pv3 w-70-l center  bg-black-70 br4"
				id="game-container"
			>
				<Dice
					setRound={setRound}
					setScores={setScores}
					currentRound={round}
					isP1Next={isP1Next}
					scores={scores}
					setIsP1Next={setIsP1Next}
					init={init}
				/>

				<div className="mt3 flex flex-column justify-center w-90 w-80-m w-75-l items-center  br2 ph0 pv1 ml4-l">
					<GameInfo
						isP1Next={isP1Next}
						currentRound={round}
						totalRound={totalRound}
					/>
					<PlayerBoard
						playerName="P1"
						score={scores.score1}
						bgColor="green"
						isActive={round === 6 ? false : isP1Next}
						winner={winner}
					/>

					<PlayerBoard
						playerName="P2"
						score={scores.score2}
						bgColor="blue"
						isActive={round === 6 ? false : !isP1Next}
						winner={winner}
					/>
				</div>
			</div>
		</>
	);

	// round 1/3
	// who is the next
	// give the scores and set Scores to the player component
};
export default Game;

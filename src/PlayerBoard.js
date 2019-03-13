import React from "react";
import CountUp from "react-countup";
import ReactAnime from "react-anime";

const PlayerBoard = ({ playerName, score, bgColor, isActive, winner }) => {
	const Anime = ReactAnime;
	const D = () => (
		<Anime
			easing="easeOutElastic"
			duration={500}
			direction="reverse"
			delay={1500}
			translateX="5rem"
			rotate={{
				value: 360,
				duration: 1800,
				easing: "easeInOutSine"
			}}
			scale={1.2}
		>
			<div className="fas fa-dice white f2 absolute top-2 left-1 f1-ns top-2-ns left-2-ns" />
		</Anime>
	);
	return (
		<div
			className={` mv1 mv2-ns bg-${bgColor} w-100 w-100-m w-90-l h-60-l h-100-l b--solid bw1 b--black-80 br4 grow tc pa0  ma1 flex flex-column relative ${
				winner === playerName ? "order-1 shake-effect" : "order-2"
			} `}
		>
			{isActive && <D />}
			<h1 className=" black player-name f4 f3-m f2-k">
				{winner === playerName || winner === "tie" ? (
					<i className="fas fa-trophy f3-m  f2-l yellow ph2 " />
				) : (
					""
				)}

				<i className="fas fa-user f4 mh2 f3-m f2-l" />
				{playerName}
			</h1>

			<h1
				className={`f4 f3-m f2-l mv0 mv3-ns white pa2 br4 pa3-l i ${
					winner === playerName ? "yellow" : "white"
				}`}
			>
				Score:{" "}
				<CountUp
					end={score}
					className={`f4 f3-m f2-l`}
					duration={0.5}
				/>
			</h1>
		</div>
	);
};
export default PlayerBoard;

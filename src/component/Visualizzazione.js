import React from "react";
import Stile from "./visual.module.css";

export const Visualizzazione = (props) => {
	let ingredienti = [];
	Object.keys(props.panino).forEach((key, index) => {
		if (props.panino[key].length > 0) {
			for (let i = 0; i < props.panino[key].length; i++) {
				ingredienti.push(<div className={Stile[key]}></div>);
			}
		}
	});

	return (
		<div className={Stile.container}>
			<div className={Stile.top} />
			{!ingredienti.length ? (
				<div>Please elect ingreedient</div>
			) : (
				ingredienti
			)}
			<div className={Stile.bottom} />
		</div>
	);
};

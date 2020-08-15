import React from "react";

export const Ingredienti = (props) => {
	const aggiungi = (e) => {
		const { name } = e.target;

		props.setPanino((panino) => ({
			...panino,
			[name]: [...panino[name], "uwu"],
		}));
	};

	const rimuovi = (e) => {
		const { name } = e.target;

		props.setPanino((panino) => ({
			...panino,
			[name]: panino[name].length > 1 ? panino[name].pop() : [],
		}));
	};

	const nomi = ["burgher", "cheese", "ketchup", "mayo"];
	return (
		<div>
			{nomi.map((el) => {
				return (
					<div>
						<button name={el} onClick={aggiungi}>
							Add
						</button>{" "}
						<button
							name={el}
							onClick={rimuovi}
							disabled={
								props.panino[el].length > 0 ? false : true
							}
						>
							Remove
						</button>
						{el}
					</div>
				);
			})}
		</div>
	);
};

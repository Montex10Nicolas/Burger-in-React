import React from "react";

export const Ingredienti = ({panino, aggiungi, rimuovi}) => {
	const nomi = ["burger", "cheese", "ketchup", "mayo"];
	return (
		<div>
			{nomi.map((el, idx) => {
				return (
					<div key={`Componente${idx}`}>
						<button name={el} onClick={() => aggiungi(el)}>
							Add
						</button>{" "}
						<button
							name={el}
							onClick={() => rimuovi(el)}
							disabled={
								panino[el].length > 0 ? false : true
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

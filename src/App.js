import React, { useState } from "react";
import { Ingredienti } from "./component/AggiungiIngredienti";
import { Visualizzazione } from "./component/Visualizzazione";

function App() {
	const [panino, setPanino] = useState({
		burger: [],
		cheese: [],
		ketchup: [],
		mayo: [],
	});

	const rimuovi = (name) => {
		let coso = panino[name];
		coso.pop();
		setPanino((panino) => ({
			...panino,
			[name]: coso,
		}));
	}

	const aggiungi = (name) => {
		setPanino((panino) => ({
			...panino,
			[name]: [...panino[name], "uwu"],
		}));
	}

	return (
		<div>
			<Visualizzazione panino={panino} />
			<Ingredienti panino={panino} aggiungi={aggiungi} rimuovi={rimuovi} />
		</div>
	);
}

export default App;

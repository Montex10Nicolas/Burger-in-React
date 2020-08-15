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

	return (
		<div>
			<Visualizzazione panino={panino} />
			<Ingredienti panino={panino} setPanino={setPanino} />
		</div>
	);
}

export default App;

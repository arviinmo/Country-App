"use strict";
const React = require("react");
const { Box } = require("ink");
const TextInput = require("ink-text-input").default;
const wcc = require("world-countries-capitals");

const App = () => {
	const [country, setCountry] = React.useState("");
	const [capital, setCapital] = React.useState("");
	const [currency, setCurrency] = React.useState("");
	const [phone, setPhone] = React.useState("");

	

	return (
		<Box>
			<TextInput
				placeholder="Enter country..."
				value={country}
				onChange={setCountry}
			/>
		</Box>
	);
};

module.exports = App;

export default interface ILevel {
	// input neurons.
	inputs: number[];
	// output neurons.
	outputs: number[];
	// biases is above what value the output neurons will fire.
	biases: number[];
	// weights are Arrays of values of the connection between input- and output neurons.
	weights: number[][];
}

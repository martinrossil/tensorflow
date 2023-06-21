import ILevel from './ILevel';
import { randomizeLevel } from './utils';

export default class Level implements ILevel {
	// input neurons.
	public inputs: number[];
	// output neurons.
	public outputs: number[];
	// biases is above what value the output neurons will fire.
	public biases: number[];
	// weights are Arrays of values of the connection between input- and output neurons.
	public weights: number[][];

	public constructor(inputCount: number, outputCount: number) {
		this.inputs = new Array(inputCount);
		this.outputs = new Array(outputCount);
		this.biases = new Array(outputCount);
		this.weights = [];

		for (let i = 0; i < inputCount; i++) {
			this.weights[i] = new Array(outputCount);
		}

		randomizeLevel(this);
	}
}

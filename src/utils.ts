import ILevel from './ILevel';
import INeuralNetwork from './INeuralNetwork';

export function randomizeLevel(level: ILevel) {
	for (let i = 0; i < level.inputs.length; i++) {
		for (let j = 0; j < level.outputs.length; j++) {
			level.weights[i][j] = randomMinusOneAndOne();
		}
	}

	for (let i = 0; i < level.biases.length; i++) {
		level.biases[i] = randomMinusOneAndOne();
	}
}

export function randomMinusOneAndOne() {
	return parseFloat(((Math.random() * 2) - 1).toFixed(1));
}

export function feedForward(sensors: number[], level: ILevel) {
	// set the inputs to the sensor values.
	for (let i = 0; i < level.inputs.length; i++) {
		level.inputs[i] = sensors[i];
	}

	// loop over outputs and calculate a sum of value of the inputs and weights.
	for (let i = 0; i < level.outputs.length; i++) {
		let sum = 0;
		for (let j = 0; j < level.inputs.length; j++) {
			sum += level.inputs[j] * level.weights[j][i];
		}

		if (sum > level.biases[i]) {
			level.outputs[i] = 1;
		} else {
			level.outputs[i] = 0;
		}
	}

	return level.outputs;
}

export function networkFeedForward(givenInputs: number[], levels: ILevel[]) {
	let outputs = feedForward(givenInputs, levels[0]);
	for (let i = 1; i < levels.length; i++) {
		outputs = feedForward(outputs, levels[i]);
	}

	return outputs;
}

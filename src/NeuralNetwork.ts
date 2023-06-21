import ILevel from './ILevel';
import INeuralNetwork from './INeuralNetwork';
import Level from './Level';

export default class NeuralNetwork implements INeuralNetwork {
	public levels: ILevel[];

	public constructor(neuronCounts: number[]) {
		this.levels = [];
		for (let i = 0; i < neuronCounts.length - 1; i++) {
			this.levels.push(new Level(neuronCounts[i], neuronCounts[i + 1]));
		}
	}
}

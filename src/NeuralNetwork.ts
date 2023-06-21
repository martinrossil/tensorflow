import Level from './Level';

export default class NeuralNetwork extends HTMLElement {
	public constructor() {
		super();
		console.log('NeuralNetwork()');
		const level = new Level(4, 4);
		console.log(level);
	}
}
customElements.define('neural-network', NeuralNetwork);

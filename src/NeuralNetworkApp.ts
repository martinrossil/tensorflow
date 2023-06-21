import Level from './Level';
import NeuralNetwork from './NeuralNetwork';
import { networkFeedForward } from './utils';

export default class NeuralNetworkApp extends HTMLElement {
	public constructor() {
		super();
		console.log('NeuralNetworkApp()');
		const network = new NeuralNetwork([4, 16, 16, 4]);
		const output = networkFeedForward([1, 0, 0, 1], network.levels);
		console.log(network.levels);
		console.table(output);
	}
}
customElements.define('neural-network-app', NeuralNetworkApp);

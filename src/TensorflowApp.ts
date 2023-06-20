export default class TensorflowApp extends HTMLElement {
	public constructor() {
		super();
		console.log('TensorflowApp()');
	}
}
customElements.define('tensorflow-app', TensorflowApp);

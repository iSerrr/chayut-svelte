import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		language: 'he'
	}
});

export default app;
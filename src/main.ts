import App from './App.svelte';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';

ModuleManager.register(
	IgcDataGridModule
);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
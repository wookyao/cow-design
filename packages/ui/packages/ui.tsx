import type { App, Plugin } from 'vue';
import Button from './button';
import Color from './color';

const components: Record<string, Plugin> = {
	Button,
	Color,
};

const install = (app: App) => {
	for (const key of Object.keys(components)) {
		app.use(components[key]);
	}
};

const CowUI = {
	...components,
	install,
};

export default CowUI;

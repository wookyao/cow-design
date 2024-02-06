import type { App } from 'vue';
import _Button from './_button.tsx';

const Button = Object.assign(_Button, {
	install: (app: App) => {
		app.component(_Button.name, _Button);
	},
});

export type ButtonInstance = InstanceType<typeof _Button>;

export default Button;

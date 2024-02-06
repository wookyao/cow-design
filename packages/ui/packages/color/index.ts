import type { App } from 'vue';
import _Color from './_color.tsx';

const Color = Object.assign(_Color, {
	install: (app: App) => {
		app.component(_Color.name, _Color);
	},
});

export type ColorInstance = InstanceType<typeof _Color>;

export default Color;

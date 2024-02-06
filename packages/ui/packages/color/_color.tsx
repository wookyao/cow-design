import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'CColor',
	setup() {
		const colors = ref(['red', 'blue', 'green', 'yellow', 'orange', 'gray']);

		return () => (
			<div>
				{colors.value.map((it) => (
					<div style={{ backgroundColor: it }}>{it}</div>
				))}
			</div>
		);
	},
});

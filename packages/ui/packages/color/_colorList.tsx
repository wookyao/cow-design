import { PropType, computed, defineComponent } from 'vue';
import { generate } from '@arco-design/color';

const ColorMap: Record<string, string[]> = {
	gray: [
		'#FAFAFA',
		'#F5F5F5',
		'#eeeeee',
		'#e0e0e0',
		'#BDBDBD',
		'#9E9E9E',
		'#757575',
		'#616161',
		'#424242',
		'#212121',
	],
	grayDark: [
		'#212121',
		'#424242',
		'#616161',
		'#757575',
		'#9E9E9E',
		'#BDBDBD',
		'#e0e0e0',
		'#eeeeee',
		'#F5F5F5',
		'#FAFAFA',
	],
};

export default defineComponent({
	name: 'CCardList',
	props: {
		color: {
			type: String as PropType<string>,
			default: '',
		},
		isDark: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	},
	setup(props) {
		// 获取rgb颜色值
		const colorList = computed(() => {
			if (props.color == 'gray') {
				return ColorMap[props.color];
			}

			return Array.from({ length: 10 }, (_, i) => {
				return generate(props.color, { index: i + 1, dark: props.isDark });
			});
		});

		return () => (
			<div class="color-list">
				{colorList.value.map((it, idx) => (
					<div class="color-item" style={{ '--bg-color': `${it}` }}>
						<span>{it}</span>
						<span>{idx + 1}</span>
					</div>
				))}
			</div>
		);
	},
});

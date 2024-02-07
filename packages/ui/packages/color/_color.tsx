import { defineComponent, ref } from 'vue';
import ColorList from './_colorList';
import './style/index.less';

export default defineComponent({
	name: 'CColor',
	setup() {
		const colors = ref([
			{
				label: '红色',
				value: '#E53935',
				name: 'red',
			},
			{
				label: '绿色',
				value: '#43A047',
				name: 'green',
			},
			{
				label: '蓝色',
				value: '#2196F3',
				name: 'blue',
			},
			{
				label: '黄色',
				value: '#FDD835',
				name: 'yellow',
			},
			{
				label: '橘色',
				value: '#FB8C00',
				name: 'orange',
			},
			{
				label: '灰色',
				value: 'gray',
				name: 'gray',
			},
		]);

		return () => (
			<div>
				<p>颜色卡</p>
				<div class="color-card">
					{colors.value.map((it) => (
						<ColorList key={it.value} title={it.label} color={it.value} />
					))}
				</div>
				<p>颜色卡 / 暗色</p>
				<div class="color-card dark">
					{colors.value.map((it) => (
						<ColorList
							key={it.value}
							title={it.label}
							color={it.value}
							isDark={true}
						/>
					))}
				</div>
			</div>
		);
	},
});

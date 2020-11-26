function getColorsVar(prefix, ...name) {
	return name.reduce((colors, curr) => {
		const varName = prefix ? `${prefix}${curr}` : curr;
		colors[curr] = `var(--${varName})`;

		return colors;
	}, {});
}

const base = getColorsVar(null, 'primary', 'secondary', 'danger', 'green', 'warning');
const backgroundColor = getColorsVar('bg-', 'dark', 'default', 'light', 'lighter', 'input', 'input-dark', 'card');
const textColor = getColorsVar('text-', 'default', 'light', 'lighter');

module.exports = {
	corePlugins: {
		container: false,
	},
	theme: {
		borderRadius: {
			sm: '0.125rem',
			default: '0.25rem',
			md: '0.5rem',
			lg: '0.9375rem',
			full: '9999px',
		},
		extend: {
			colors: base,
			backgroundColor,
			textColor,
		},
		minWidth: {
			0: '0',
			'1/4': '25%',
			'1/3': '33%',
			'40%': '40%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},
		textColor: {
			'primary': '#49B794',
			'secondary': '#ffed4a',
			'danger': '#e3342f',
		}
	},
	variants: {
		boxShadow: ['group-hover'],
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					width: '100%',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: '2rem',
					paddingRight: '2rem',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1004px',
					},
					'@screen xl': {
						maxWidth: '1200px',
					},
				},
			});
		},
	],
};

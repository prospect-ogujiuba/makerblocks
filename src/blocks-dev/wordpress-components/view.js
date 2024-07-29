import Edit from "./edit";

let wordpressComponentWrapper = document.querySelector(
	"#wordpress-components-wrapper",
);

if (wordpressComponentWrapper) {
	const root = ReactDOM.createRoot(
		wordpressComponentWrapper,
	);
	root.render(<WordPressComponents />);
}

function WordPressComponents() {
	return <Edit />;
}

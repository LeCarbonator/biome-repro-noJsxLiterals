export function App() {
	// Test cases ported from:
	// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md#examples

	// an allowed string
	const Correct = <div>allowed</div>;
	// an allowed string surrounded by only whitespace
	const Correct2 = <div>
    allowed
    </div>;
}
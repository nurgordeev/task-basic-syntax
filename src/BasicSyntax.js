import { type } from "os";

export function romanToInteger(str) {
	let result = 0;
	let romanValue = {
		I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
	}
	for (let i = 0; i < str.length - 1; i++) {
		const curr = romanValue[str[i]];
		const next = romanValue[str[i + 1]];
		if (curr < next) {
			result -= curr;
		} else {
			result += curr;
		}
	}

	return result + (romanValue[str[str.length - 1]]);
}

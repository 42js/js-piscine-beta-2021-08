// export { setTimer } from "./setTimeTimeout.js";

export default function setTimer(callback, interval) {
	let count = 0;
	setTimeout(callback, interval, count);
}

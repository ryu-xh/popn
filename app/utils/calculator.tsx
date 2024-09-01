const sumNotes = (cool: number, great: number, good: number, bad: number) => {
	return cool + great + good + bad;
}

const calculateScore = (cool: number, great: number, good: number) => {
	return cool + (great * 0.7) + (good * 0.4);
}

const calculateScorePreviousVersion = (cool: number, great: number, good: number) => {
	return cool + (great * 0.5) + (good * 0.1);
}

const calculateBad = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return Math.floor((calculateScore(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const calculateBadPreviousVersion = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return Math.floor((calculateScorePreviousVersion(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

export {calculateScore, calculateScorePreviousVersion, calculateBad};
const sumNotes = (cool: number, great: number, good: number, bad: number) => {
	return cool + great + good + bad;
}

const calculateScore = (cool: number, great: number, good: number) => {
	return cool + (great * 0.7) + (good * 0.4);
}

const calculateScorePreviousVersion = (cool: number, great: number, good: number) => {
	return cool + (great * 0.5) + (good * 0.1);
}

const calculateOriginalBad = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return ((calculateScore(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const calculateBad = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return Math.floor((calculateScore(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const isNewVersionScore = (score: number, cool: number, great: number, good: number) => {
	return calculateOriginalBad(score, cool, great, good) - calculateBad(score, cool, great, good) < 0.01;
}

const calculateOriginalBadPreviousVersion = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return ((calculateScorePreviousVersion(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const calculateBadPreviousVersion = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return Math.floor((calculateScorePreviousVersion(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const isPreviousVersionScore = (score: number, cool: number, great: number, good: number) => {
	return calculateOriginalBadPreviousVersion(score, cool, great, good) - calculateBadPreviousVersion(score, cool, great, good) < 0.01;
}

export {calculateScore, calculateScorePreviousVersion, calculateBad, calculateBadPreviousVersion, isNewVersionScore, isPreviousVersionScore};

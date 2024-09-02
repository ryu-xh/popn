const sumNotes = (cool: number, great: number, good: number, bad: number) => {
	return cool + great + good + bad;
}

const calculateScoreWithoutDivideSumNotes = (cool: number, great: number, good: number) => {
	return cool + (great * 0.7) + (good * 0.4);
}

const calculateScore = (cool: number, great: number, good: number, bad: number) => {
	const score = calculateScoreWithoutDivideSumNotes(cool, great, good);
	const notes = sumNotes(cool, great, good, bad);

	if (notes === 0) {
		return 0;
	}

	return Math.floor(score / notes * 100000);
}

const calculateScorePreviousVersionWithoutDivideSumNotes = (cool: number, great: number, good: number) => {
	return cool + (great * 0.5) + (good * 0.1);
}

const calculateScorePreviousVersion = (cool: number, great: number, good: number, bad: number) => {
	const score = calculateScorePreviousVersionWithoutDivideSumNotes(cool, great, good);
	const notes = sumNotes(cool, great, good, bad);

	if (notes === 0) {
		return 0;
	}

	return Math.floor(score / notes * 100000);
}

const calculateOriginalBad = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return ((calculateScoreWithoutDivideSumNotes(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const calculateBad = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return Math.floor((calculateScoreWithoutDivideSumNotes(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const isNewVersionScore = (score: number, cool: number, great: number, good: number) => {
	return calculateOriginalBad(score, cool, great, good) - calculateBad(score, cool, great, good) < 0.01;
}

const calculateOriginalBadPreviousVersion = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return ((calculateScorePreviousVersionWithoutDivideSumNotes(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const calculateBadPreviousVersion = (score: number, cool: number, great: number, good: number) => {
	const originalScore = score / 100000;

	return Math.floor((calculateScorePreviousVersionWithoutDivideSumNotes(cool, great, good) - (originalScore * cool) - (originalScore * great) - (originalScore * good)) / originalScore);
}

const isPreviousVersionScore = (score: number, cool: number, great: number, good: number) => {
	return calculateOriginalBadPreviousVersion(score, cool, great, good) - calculateBadPreviousVersion(score, cool, great, good) < 0.01;
}

export {calculateScore, calculateScorePreviousVersion, calculateBad, calculateBadPreviousVersion, isNewVersionScore, isPreviousVersionScore};

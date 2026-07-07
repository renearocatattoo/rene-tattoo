/** Embaralha um array (Fisher-Yates) sem mutar o original. */
export function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/** Seleciona N itens aleatórios mantendo a ordem original da lista. */
export function pickRandomSubset<T>(array: readonly T[], count: number): T[] {
  if (array.length <= count) return [...array];

  const selectedIndices = shuffleArray(array.map((_, index) => index))
    .slice(0, count)
    .sort((a, b) => a - b);

  return selectedIndices.map((index) => array[index]);
}

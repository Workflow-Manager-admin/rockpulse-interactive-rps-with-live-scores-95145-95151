/**
 * Storage utilities for persisting game scores
 */

const STORAGE_KEY = 'rockpulse_scores';

/**
 * PUBLIC_INTERFACE
 * Saves scores to local storage
 * @param {object} scores - The scores object { player: number, computer: number }
 */
export const saveScores = (scores) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  } catch (error) {
    console.error('Error saving scores to local storage:', error);
  }
};

/**
 * PUBLIC_INTERFACE
 * Loads scores from local storage
 * @returns {object} - The scores object { player: number, computer: number }
 */
export const loadScores = () => {
  try {
    const storedScores = localStorage.getItem(STORAGE_KEY);
    return storedScores ? JSON.parse(storedScores) : { player: 0, computer: 0 };
  } catch (error) {
    console.error('Error loading scores from local storage:', error);
    return { player: 0, computer: 0 };
  }
};

/**
 * PUBLIC_INTERFACE
 * Resets scores in local storage
 * @returns {object} - The reset scores object { player: 0, computer: 0 }
 */
export const resetScores = () => {
  const resetScores = { player: 0, computer: 0 };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resetScores));
  } catch (error) {
    console.error('Error resetting scores in local storage:', error);
  }
  return resetScores;
};

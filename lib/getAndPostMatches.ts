
import { getHeroes } from '@/lib/get_heroes';

export const getAndPostMatches = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/matches', { method: 'POST' })

  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

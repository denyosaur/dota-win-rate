
import { getHeroes } from '@/lib/get_heroes';

export const getAndPostHeroes = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/heroes', { method: 'POST' })

  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

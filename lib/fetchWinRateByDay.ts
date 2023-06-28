import { stratzApiToken } from '@/env';

export const fetchWinRateByDay = async () => {
  try {
    const statzApiUrl = 'https://api.stratz.com/graphql';
    const query = `query {
            heroStats {
              winDay(
                gameModeIds: [ALL_PICK_RANKED, ALL_PICK, CAPTAINS_MODE, CAPTAINS_DRAFT]
              ) {
                day
                winCount
                matchCount
                heroId
              }
            }
          }`;
    const res = await fetch(statzApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${stratzApiToken}`,
      },
      body: JSON.stringify({
        query
      }),
    });

    const { data: { heroStats: { winDay } } } = await res.json();
    return winDay

  } catch (err) {
    throw err;
  }
}

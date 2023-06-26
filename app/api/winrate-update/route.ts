import { NextResponse } from 'next/server';
import { stratzApiToken } from '@/env';

import prisma from '@/lib/prisma';

export async function POST() {
  try {
    const statzApiUrl = 'https://api.stratz.com/graphql';

    const todaysDate = new Date();

    const endDate = new Date(todaysDate.setDate(todaysDate.getDate() - 31));
    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth();

    let dayToUse = new Date();

    const fetchStats = async () => {
      const query = `query {
        heroStats {
          winDay(
            take: ${Math.floor(dayToUse.getTime() / 1000)},
            gameModeIds: [ALL_PICK_RANKED, ALL_PICK, CAPTAINS_MODE, CAPTAINS_DRAFT]
          ) {
            day
            winCount
            matchCount
            heroId
          }
        }
      }`;
      try {
        console.log(Math.floor(dayToUse.getTime() / 1000))
        if (dayToUse.getDate() === endDay && dayToUse.getMonth() === endMonth) clearInterval(intervalID);

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

        await Promise.all(winDay.map(async (hero: {
          day: bigint;
          heroId: number;
          matchCount: number;
          winCount: number;
        }) => {
          const idToUse = `${hero.day}-${hero.heroId}`;
          await prisma.winRates.upsert({
            where: { id: idToUse },
            update: {
              id: idToUse,
              day: hero.day,
              hero: hero.heroId,
              matches: hero.matchCount,
              wins: hero.winCount,
            },
            create: {
              id: idToUse,
              day: hero.day,
              hero: hero.heroId,
              matches: hero.matchCount,
              wins: hero.winCount,
            },
          });
        }));

        dayToUse.setDate(dayToUse.getDate() - 1);


      } catch (err) {
        console.error(`Error: ${err}`);
      }
    };

    const intervalID = setInterval(fetchStats, 10000);

    return NextResponse.json({ message: "Success", success: true });
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

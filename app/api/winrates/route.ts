import { NextResponse } from 'next/server';

import { prisma } from '@/db';

import { fetchWinRateByDay } from '@/lib/fetchWinRateByDay';
import { filterDuplicateWinrateIds } from '@/lib/filterDuplicateWinrateIds';

export async function POST() {
  try {
    const fetchedWinRates = await fetchWinRateByDay();
    const resId = await prisma.win_rates.findMany({
      select: {
        id: true,
      },
    });
    const currentIds = resId.map(idObj => idObj.id);

    const filteredForDuplicates = filterDuplicateWinrateIds(fetchedWinRates, currentIds);

    const data = filteredForDuplicates.map(hero => {
      const idToUse = `${hero.day}-${hero.heroId}`;

      return {
        id: idToUse,
        day: hero.day,
        hero: hero.heroId,
        matches: hero.matchCount,
        wins: hero.winCount,
      }
    })

    await prisma.win_rates.createMany({
      data
    });

    return NextResponse.json({ message: "Success", success: true });
  } catch (err) {
    console.log(err)
  }
}

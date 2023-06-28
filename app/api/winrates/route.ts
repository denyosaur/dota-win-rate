import { NextResponse } from 'next/server';
import { fetchWinRateByDay } from '@/lib/fetchWinRateByDay';

import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const res = await prisma.winRates.findMany({
      where: {
        hero: 1
      }
    });

  } catch (err) {
    throw err;
  }
}

export async function POST() {
  try {
    const fetchedWinRates = await fetchWinRateByDay();

    const filterDuplicates = (arr: HeroArrayItem[], key1: string, key2: string) => {
      const uniqueValues = new Set();
      return arr.filter(item => {
        const combinedKey = `${item[key1]}-${item[key2]}`;
        if (uniqueValues.has(combinedKey)) {
          return false;
        }
        uniqueValues.add(combinedKey);
        return true;
      });
    };

    const filteredForDuplicates = filterDuplicates(fetchedWinRates, 'day', 'heroId');

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


    await prisma.winRates.createMany({
      data
    });

    return NextResponse.json({ message: "Success", success: true });
  } catch (err) {
    console.log(err)
  }
}

interface HeroArrayItem {
  "day": bigint;
  "winCount": number;
  "matchCount": number;
  "heroId": number;
  [key: string]: any;
}

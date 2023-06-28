import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST() {
  try {
    const todaysDate = new Date();
    let dateToUse = new Date(todaysDate.getFullYear() - 1, todaysDate.getMonth(), todaysDate.getDate());

    const fetchData = async (startDate: Date) => {
      const endOfDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 23, 59, 59);
      const sqlQuery = `
        SELECT
          matches.match_id,
          matches.start_time,
          ((player_matches.player_slot < 128) = matches.radiant_win) win,
          player_matches.hero_id
        FROM matches
        JOIN player_matches using(match_id)
        JOIN heroes on heroes.id = player_matches.hero_id
        AND matches.start_time >= extract(epoch from timestamp '${startDate.toISOString()}')
        AND matches.start_time <= extract(epoch from timestamp '${endOfDay.toISOString()}')
        ORDER BY matches.match_id NULLS LAST
        LIMIT 50000
      `;
      const encodedSqlQuery = encodeURIComponent(sqlQuery);
      const openDotaApi = `https://api.opendota.com/api/explorer?sql=${encodedSqlQuery}`;

      try {
        const res = await fetch(openDotaApi);
        const data = await res.json();

        await Promise.all(data.rows.map(async (match: { match_id: string; hero_id: number; start_time: string; win: boolean }) => {
          await prisma.matches.create({
            data: {
              match_id: +match.match_id,
              hero: match.hero_id,
              start_time: match.start_time,
              win: match.win,
            },
          });
        }));

        const nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + 1);

        if (nextDay <= todaysDate) {
          fetchData(nextDay);
        }
      } catch (err) {
        const nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + 1);
        fetchData(nextDay);

        throw err;
      }
    };

    fetchData(dateToUse);
    return NextResponse.json({ message: "Heroes updated", success: true });
  } catch (err) {
    throw err;
  }
}
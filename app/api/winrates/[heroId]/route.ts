import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: { heroId: string } }) {
  try {
    const { heroId } = params;

    const res = await prisma.winRates.findMany({
      where: {
        hero: +heroId,
      }
    });

    const stringifiedData = res.map((dayObj) => ({
      ...dayObj,
      day: dayObj.day.toString(),
    }));

    return NextResponse.json({ data: stringifiedData, success: true });
  } catch (err) {
    throw err;
  }
}
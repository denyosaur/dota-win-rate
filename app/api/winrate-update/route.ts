import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST() {
  try {
    const res = await prisma.matches.findMany();
    console.log(res)
    //   await prisma.heroes.create({
    //     data: {
    //       hero_id: +hero.id,
    //       hero_name: adjustedName,
    //       hero_image,
    //     }
    //   })
    // }))
    return NextResponse.json({ message: res, success: true });
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
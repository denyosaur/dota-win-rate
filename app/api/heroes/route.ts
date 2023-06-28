import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { HeroFromOpenDota } from '@/interface';

export async function GET() {
  try {
    const res = await prisma.heroes.findMany();

    return NextResponse.json({ data: res, success: true });
  } catch (err) {
    throw err;
  }
}

export async function POST() {
  try {
    const res = await fetch('https://api.opendota.com/api/heroes', { method: 'GET' });
    const resJson = await res.json();

    resJson.sort((a: HeroFromOpenDota, b: HeroFromOpenDota) => {
      const nameA = a.localized_name.toLowerCase();
      const nameB = b.localized_name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    const dataToUse = resJson.map((hero: HeroFromOpenDota) => {
      const adjustedName = hero.name.substring(14);
      console.log(hero.name, '--', adjustedName)
      return {
        hero_id: hero.id,
        hero_name: hero.localized_name,
        hero_image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${adjustedName}.png?`,
        primary_attributes: hero.primary_attr,
        roles: hero.roles,
      }
    })

    await prisma.heroes.createMany({
      data: dataToUse
    });

    return NextResponse.json({ message: "Heroes added", success: true });
  } catch (err) {
    throw err;
  }
}
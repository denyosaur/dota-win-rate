import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/db";

import { HeroFromStratz } from '@/interface';

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
    const res = await fetch('https://api.stratz.com/api/v1/hero', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRATZ_TOKEN}`
      }
    });
    const resJson = await res.json();


    const dataToUse = Object.keys(resJson).map(id => {
      return {
        heroId: resJson[id].id,
        shortName: resJson[id].shortName,
        displayName: resJson[id].displayName,
        heroImage: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${resJson[id].shortName}.png?`,
        attributePrimary: resJson[id].stat.AttributePrimary,
        roles: [],
        roleStats: resJson[id].roles,
        startingDamageMin: resJson[id].stat.startingDamageMin,
        startingDamageMax: resJson[id].stat.startingDamageMax,
        attackRange: resJson[id].stat.attackRange,
        attackRate: resJson[id].stat.attackRate,
        startingArmor: resJson[id].stat.startingArmor,
        startingMagicArmor: resJson[id].stat.startingMagicArmor,
        moveSpeed: resJson[id].stat.moveSpeed,
        moveTurnRate: resJson[id].stat.moveTurnRate,
        visionDaytimeRange: resJson[id].stat.visionDaytimeRange,
        visionNighttimeRange: resJson[id].stat.visionNighttimeRange,
        strengthBase: resJson[id].stat.strengthBase,
        strengthGain: resJson[id].stat.strengthGain,
        intelligenceBase: resJson[id].stat.intelligenceBase,
        intelligenceGain: resJson[id].stat.intelligenceGain,
        agilityBase: resJson[id].stat.agilityBase,
        agilityGain: resJson[id].stat.agilityGain,
        complexity: resJson[id].stat.complexity,
        hpRegen: resJson[id].stat.hpRegen,
        mpRegen: resJson[id].stat.mpRegen,
        attackType: resJson[id].stat.attackType,
        hype: resJson[id].language.hype,
        bio: resJson[id].language.bio,
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

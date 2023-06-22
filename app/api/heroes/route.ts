import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { getHeroes } from '@/lib/get_heroes';

// export async function POST(request: Request) {
//   try {
//     const json = await request.json();

//     const user = await prisma.user.create({
//       data: json,
//     });

//     return new NextResponse(JSON.stringify(user), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: any) {
//     if (error.code === "P2002") {
//       return new NextResponse("User with email already exists", {
//         status: 409,
//       });
//     }
//     return new NextResponse(error.message, { status: 500 });
//   }
// }

export async function POST() {
  try {
    const res = await getHeroes();

    const arr = await Promise.all(res.map(async (hero) => {
      const adjustedName = hero.name.substring(14);
      const hero_image = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${adjustedName}.png?`;

      await prisma.heroes.create({
        data: {
          hero_id: +hero.id,
          hero_name: adjustedName,
          hero_image,
        }
      })
    }))
    return NextResponse.json({ message: "Heroes updated", success: true });
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
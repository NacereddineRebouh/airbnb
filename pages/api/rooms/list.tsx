import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
type room = {
  id: number;
  property_name: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  veds: number;
  location: string;
  long: string;
  lat: string;
  images: string;
  price: number;
  distance: number;
};

// POST /api/login
// Required fields in body: name, email, password

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // try {
  //   const result = await prisma.$queryRaw`SELECT * FROM rooms`;
  //   res.json(
  //     JSON.parse(
  //       JSON.stringify(
  //         result,
  //         (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
  //       )
  //     )
  //   );
  // } catch (error) {
  //   res.json(error);
  //   throw error;
  // }

  if (req.method === "GET") {
    const limit = 10;
    const cursor = req.query.cursor;
    const cursorObj =
      cursor === "" ? undefined : { id: parseInt(cursor as string) };

    const rooms = await prisma.rooms.findMany({
      take: limit,
      cursor: cursorObj,
      skip: cursor === "1" || "" ? 0 : 1,
    });
    // console.log(rooms);
    const rooms_bigint = rooms.map((value) => {
      // console.log(value);
      const dd = JSON.parse(
        JSON.stringify(
          value,
          (key, v) => (typeof v === "bigint" ? v.toString() : v) // return everything else unchanged
        )
      );
      // console.log(dd);
      return dd;
    });
    // console.log(rooms_bigint);
    return res.json({
      rooms_bigint,
      nextId:
        rooms_bigint.length === limit
          ? rooms_bigint[rooms_bigint.length - 1].id
          : undefined,
    });
  } else {
    res.status(405).json({
      error: "Method not allowed",
    });
  }
}

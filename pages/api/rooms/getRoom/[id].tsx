import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
// const bcrypt = require("bcrypt");
import bcrypt from "bcryptjs-react";
import { renameSync } from "fs";

// GET /api/login
// Required fields in body: name, email, password
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const result = await prisma.rooms.findFirst({
        where: {
          id: parseInt(id as string),
        },
      });

      res.json(
        JSON.parse(
          JSON.stringify(
            result,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value // return everything else unchanged
          )
        )
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        // if (error.code === "P2002") {
        //   console.log(
        //     "There is a unique constraint violation, a new user cannot be created with this email"
        //   );
        //   res.status(409).json({
        //     error:
        //       "There is a unique constraint violation, a new user cannot be created with this email",
        //   });
        // }
        console.log(error);
      }
    }
  } else {
    res.status(405).json({
      error: "Method not allowed",
    });
  }
}

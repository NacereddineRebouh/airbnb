import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
const bcrypt = require("bcrypt");

// POST /api/signup
// Required fields in body: name, email, password
interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
    password: string;
  };
}
export default async function handle(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = await bcrypt.hash(req.body.password, 10);

      const result = await prisma.users.create({
        data: { name, email, password },
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
        if (error.code === "P2002") {
          console.log(
            "There is a unique constraint violation, a new user cannot be created with this email"
          );
          res.status(409).json({
            error:
              "There is a unique constraint violation, a new user cannot be created with this email",
          });
        }
      }
    }
  } else {
    res.status(405).json({
      error: "Method not allowed",
    });
  }
}

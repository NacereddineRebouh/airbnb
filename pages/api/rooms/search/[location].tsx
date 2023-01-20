import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
// const bcrypt = require("bcrypt");
import bcrypt from "bcryptjs-react";
import { renameSync } from "fs";

// POST /api/login
// Required fields in body: name, email, password
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const password = req.body.password;
    console.log(password);
    const result = await prisma.users.findFirst({
      where: {
        email: req.body.email,
      },
    });
    console.log(result);

    if (result) {
      if (await bcrypt.compare(password, result.password)) {
        res.json(
          JSON.parse(
            JSON.stringify(
              result,
              (key, value) =>
                typeof value === "bigint" ? value.toString() : value // return everything else unchanged
            )
          )
        );
      } else {
        res.json({ error: "email or password is wrong" });
      }
    } else {
      res.json({ error: "email or password is wrong" });
    }
  } catch (error) {
    res.json(error);
    throw error;
  }
}

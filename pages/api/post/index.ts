// pages/api/post/index.ts

import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// import { useSession } from "next-auth/react";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  // const { data: session, status } = useSession();

  // const { data: session, status } = useSession();

  const session = await getSession({ req });
  console.log("session", session);
  // console.log(req);

  // const result = await prisma.post.create({
  //   data: {
  //     title: title,
  //     content: content,
  //     author: { connect: { email: session?.user?.email } },
  //   },
  // });
  // res.json(result);
}

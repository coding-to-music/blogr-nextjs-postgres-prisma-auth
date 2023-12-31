// pages/api/post/CreatePost.ts

import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });

    console.log("Session:", session);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { title, content } = req.body;

    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session.user.email } },
      },
    });

    res.json(result);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Error creating post" });
  }
}

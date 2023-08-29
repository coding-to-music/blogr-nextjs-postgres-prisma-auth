// /pages/api/post/CreatePostHandler.tsx

import { useSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// Create a new React component that handles the session and post creation logic
async function CreatePostHandler({ req, res }) {
  const { title, content } = req.body;
  const { data: session } = useSession();

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  console.log("session", session);

  try {
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

export default CreatePostHandler;

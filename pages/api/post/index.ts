import getSessionHandler from "../../../pages/api/auth/session";
import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title, email
// Optional fields in body: content
export default async function handle(req, res) {
  try {
    const { title, content } = req.body;

    // Check for an active session
    const session = await getSessionHandler(req, res);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    console.log("session", session);

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

// /pages/api/post/index.ts

import CreatePost from "./CreatePost";

export default function handle(req, res) {
  // Call the CreatePost component with req and res
  CreatePost({ req, res });
}

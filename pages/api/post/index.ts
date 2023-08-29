// /pages/api/post/index.ts

import CreatePostHandler from "./CreatePostHandler";

export default function handle(req, res) {
  CreatePostHandler({ req, res });
}

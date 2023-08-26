import { getSession } from "next-auth/react";

const getSessionHandler = async (req) => {
  const session = await getSession({ req });

  console.log("session", session);

  return session || null; // Return null if session is falsy
};

export default getSessionHandler;
//
//
//
//
//
//
//
//

// import { getSession } from "next-auth/react";

// const getSessionHandler = async (req, res) => {
//   const session = await getSession({ req });

//   if (session) {
//     res.status(200).json({ user: session.user });
//   } else {
//     res.status(401).json({ error: "Unauthorized" });
//   }
// };

// export default getSessionHandler;

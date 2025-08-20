import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 1, name: "Nyx" },
    { id: 1, name: "Thyago" },
    { id: 1, name: "Black" },
  ];

  const id = req.query.id?.toString();
  console.log(req.query);
  if (id && users[id]) {
    return res.json({ success: true, user: users[id] });
  } else {
    return res.status(404).json({ success: false, error: "User not found" });
  }
};

import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 1, name: "Nyx" },
    { id: 1, name: "Thyago" },
    { id: 1, name: "Black" },
  ];

  return res.json({ success: true, users });
};

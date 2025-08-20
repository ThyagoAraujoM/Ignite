import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.query.params;
  console.log(req.query.params);
  if (params) {
    return res.json({ success: true, params: params });
  } else {
    return res.status(404).json({ success: false, error: "User not found" });
  }
};

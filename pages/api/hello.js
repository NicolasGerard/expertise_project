// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import phones from "./phones_models.json";

export default function handler(req, res) {
  res.status(200).json(phones);
}

export default function handler(req, res) {
  console.log(req.query);
  return req.status(200).json();
}

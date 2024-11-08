
export default async function handler(request, res) {
  if (request.method == 'GET') {
    const date = new Date()
    return res.status(200).json(date)
  }
}
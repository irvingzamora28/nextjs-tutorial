import { articles } from "../../../data";

export default function handler(req, res) {
    let articleId = req.query.id
    const filtered = articles.filter((article) => article.id === articleId)
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Article with the id of ${articleId} not found`})
    }
}
import { createNewsService, findAllNewsService } from "../sevices/news.service.js";

const createNewsController = async (req, res) => {
    try {

        const { title, text, banner } = req.body;

        if (!title || !text || !banner) {
            res.status(400).send({ message: "Submit all fields for registration" });
        }
        
        await createNewsService({
            title,
            text,
            banner,
            user: req.userId,
        });

        res.send(201);
    } catch (err) { res.status(500).send({ message: err.message }) }
}

const findAllNewsController = async (req, res) => {

    const news = await findAllNewsService();

    if (news.lenght === 0) {
        return res.status(400).send({ message: "There are no registered news" });
    }

    res.send(news);
}

export { createNewsController, findAllNewsController };
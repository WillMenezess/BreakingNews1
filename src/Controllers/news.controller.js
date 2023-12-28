import { createNewsService, findAllNewsService } from "../sevices/news.service.js";
import { ObjectId } from "mongoose";

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
            user: { _id: "658d6b5b250f646d5440c73d" },
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
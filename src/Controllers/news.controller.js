import { createNewsService, findAllNewsService, countNewsService } from "../sevices/news.service.js";

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
    let{ limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);
 
    if (!limit){
        limit = 5;
    }

    if (!offset){
        offset = 0;
    }

    const news = await findAllNewsService(offset, limit);
    const total = await countNewsService();
    const currentUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${offset}` : null;
    
    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    if (news.lenght === 0) {
        return res.status(400).send({ message: "There are no registered news" });
    }

    res.send({
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,

        results: news.map((Item) => ({
            id: Item._id,
            title: Item.title,
            text: Item.text,
            banner: Item.banner,
            likes: Item.likes,
            comments: Item.comments,
            name: Item.user.name,
            userName: Item.user.username,
            userAvatar: Item.user.avatar
        })),
    });
}

export { createNewsController, findAllNewsController };
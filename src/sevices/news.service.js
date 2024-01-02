import News from "../models/News.model.js";

const createNewsService = (body) => News.create(body);

const findAllNewsService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countNewsService = () => News.countDocuments();

export {
    createNewsService,
    findAllNewsService,
    countNewsService,
};
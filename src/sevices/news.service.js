import News from "../models/News.model.js";

const createNewsService = (body) => News.create(body);

const findAllNewsService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countNewsService = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const findByIdService = (id) => News.findById(id).populate("user");

const searchByTitleService = (title) => News.find({
    title: { $regex: `${title || ""}`, $options: "i" }
}).sort({ _id: -1 }).populate("user");

const byUserService = (id) => News.find({ user: id }).sort({ _id: -1 }).populate("user");

const updateUserService = (id, title, text, banner) => News.findOneAndUpdate({ _id: id }, { title, text, banner }, {rawResult: true});

export {
    createNewsService,
    findAllNewsService,
    countNewsService,
    topNewsService,
    findByIdService,
    searchByTitleService,
    byUserService,
    updateUserService,
};
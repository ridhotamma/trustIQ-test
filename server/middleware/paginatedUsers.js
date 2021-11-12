const paginatedResults = (model) => {
  return async (req, res, next) => {
    const totalData = await model.countDocuments().exec();

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || totalData;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.total = totalData;
      results.results = await model
        .find()
        .limit(limit)
        .skip(startIndex)
        .sort({ name: 1 })
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
};

export default paginatedResults;

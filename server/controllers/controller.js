let modelObject = undefined;

const init = (model) => modelObject = model;

const create = (model, next) => {
    model.save((err, data) => {
        if(err) return next(err);

        next(null, data);
    })
}

const updateOne = (id, updates, next) => {
    delete updates._id;
    modelObject.findByIdAndUpdate(id, updates, (err, result) => {
        if(err) return next(err);

        next(null, result);
    })
}

module.exports = {
    init,
    create,
    updateOne
}
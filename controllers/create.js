module.exports = {
    create(res, req) {
        res.render('create');
    },
    post(res, req) {
        res.redirect('/');
    }
}
module.exports = {
    create(req, res) {
        res.render('create.hbs',{title:'Create Cube'});
    },
    post(req, res) {
        res.redirect('/');
    }
}
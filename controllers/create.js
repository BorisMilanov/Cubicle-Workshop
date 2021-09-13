module.exports = {
    create(req, res) {
        res.render('create.hbs',{title:'Create Cube'});
    },
    post: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            dificulty: req.body.dificulty
        }

        await req.storage.create(cube);

        res.redirect('/');
    }
}
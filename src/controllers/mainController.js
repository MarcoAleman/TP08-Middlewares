module.exports = {
    main: (req,res) => {
        res.render("index");
    },
    admin: (req, res) => {
        res.send("Hola Admin: " + req.query.user)
    }
}

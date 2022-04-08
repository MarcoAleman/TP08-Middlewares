const ADMINs = ["Ada", "Greta", "Vim", "Tim"];

function userAdmin (req, res, next) {
    if(ADMINs.includes(req.query.user)){
        next()
    } else {
        res.send("No tienes los privilegios para ingresa");
    }
}

module.exports = userAdmin;
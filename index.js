var Tickly = {
    loop: function(func) {
        (function loop(time) {
            func(Math.min((Date.now() - time) / 1000, 1))
            require("raf")(loop.bind(null, Date.now()))
        })(Date.now())
    }
}

module.exports = Tickly

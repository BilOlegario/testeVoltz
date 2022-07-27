const { Item } = require("./item");

class Sulfuras extends Item {
    constructor(quality) {
        super("Sulfuras, Hand of Ragnaros", 0, quality)
    }

    updateQuality() {}
}

module.exports = {
    Sulfuras,
}
const { Item } = require("./item");

class GenericItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {
        this.sellIn -= 1
        this.quality -= 1

        if (this.sellIn <= 0) {
            this.quality -= 1
        }

        if (this.quality <= 0) {
            this.quality = 0
        }
    }
}

module.exports = {
    GenericItem,
}
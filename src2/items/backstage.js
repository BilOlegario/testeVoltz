const { Item } = require("./item");

class Backstage extends Item {
    constructor(sellIn, quality) {
        super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality)
    }

    updateQuality() {
        this.sellIn -= 1
        switch (true) {
            case (this.sellIn <= 0):
                this.quality = 0
                break
            case (this.sellIn <= 5):
                this.quality += 3
                break
            case (this.sellIn <= 10):
                this.quality += 2
                break
            default:
                this.quality += 1
        }
        if (this.quality >= 50) {
            this.quality = 50
        }
    }
}

module.exports = {
    Backstage,
}
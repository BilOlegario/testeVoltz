class Shop {
  constructor(items = []) {
    this.items = items;
  }

  subSellIn = (num, sellIn) => sellIn - num
  subQuality = (num, quality) => quality - num
  addQuality = (num, quality) => quality + num

  updateQuality() {

    for (var i = 0; i < this.items.length; i++) {

      this.items[i].sellIn = this.subSellIn(1, this.items[i].sellIn)

      if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        this.sulfuras(i)
        continue
      }
      else if (this.items[i].name === "Aged Brie") {
        this.agedBrie(i)
        continue
      }
      else if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        this.backstage(i)
        continue
      }
      else if (this.items[i].name.toLowerCase().includes('conjured')) {
        this.conjured(i)
        continue
      }
      else {
        this.normalItens(i)
        if (this.items[i].quality < 0) {
          this.items[i].quality = 0
        }
      }
    }
    return this.items;
  }

  sulfuras(i) {
    this.items[i].quality = 80
  }

  agedBrie(i) {
    if (this.items[i].quality < 50)
      this.items[i].quality = this.addQuality(1, this.items[i].quality)
  }

  backstage(i) {
    if (this.items[i].sellIn > 10) {
      this.items[i].quality = this.addQuality(1, this.items[i].quality)
    } else if (this.items[i].sellIn > 5) {
      this.items[i].quality = this.addQuality(2, this.items[i].quality)
    } else if (this.items[i].sellIn > 0) {
      this.items[i].quality = this.addQuality(3, this.items[i].quality)
    } else if (this.items[i].sellIn < 1) {
      this.items[i].quality = this.items[i].quality = 0
    }
    if (this.items[i].quality > 50) {
      this.items[i].quality = this.items[i].quality = 50
    }
  }

  conjured(i) {
    if (this.items[i].sellIn > 0) {
      this.items[i].quality = this.subQuality(2, this.items[i].quality)
    } else if (this.items[i].sellIn <= 0) {
      this.items[i].quality = this.subQuality(4, this.items[i].quality)
    }
    if (this.items[i].quality < 1) {
      this.items[i].quality = 0
    }
  }

  normalItens(i) {
    if (this.items[i].sellIn > 0) {
      this.items[i].quality = this.subQuality(1, this.items[i].quality)
    } else if (this.items[i].sellIn <= 0) {
      this.items[i].quality = this.subQuality(2, this.items[i].quality)
    }
  }
}

module.exports = {
  Shop,
}

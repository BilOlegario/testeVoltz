const { Shop } = require("../src2/shop");
const { Sulfuras } = require("../src2/items/sulfuras");
const { GenericItem } = require("../src2/items/genericItem");
const { Item } = require("../src2/items/item");
const { AgedBrie } = require("../src2/items/agedBrie");
const { Backstage } = require("../src2/items/backstage");
const { Conjured } = require("../src2/items/conjured");

describe("Sulfuras Rule", function () {
  it("verify sulfuras values", function () {
    let expectedItem = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    const items = new Shop([new Sulfuras(80)]);
    expect(expectedItem).toEqual(items.items[0])
  });
});

describe("Generic Item", function () {
  it("verify update values from generic itens with sellIn > 0", function () {
    let expectedItem = new Item("+5 Dexterity Vest", 9, 19)
    const items = new Shop([new GenericItem("+5 Dexterity Vest", 10, 20)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });
});

describe("Generic Item sellIn <= 0", function () {
  it("verify update values from generic", function () {
    let expectedItem = new Item("+5 Strength Vest", -1, 18)
    const items = new Shop([new GenericItem("+5 Strength Vest", 0, 20)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });
});

describe("Aged Brie Rules", function () {
  it("verify updated values from Aged Brie", function () {
    let expectedItem = new Item("Aged Brie", 1, 1)
    const items = new Shop([new AgedBrie(2, 0)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });
});

describe("Backstage", function () {
  it("verify updated values from Backstage with sellIn > 10", function () {
    let expectedItem = new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21)
    const items = new Shop([new Backstage(15, 20)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });

  it("verify updated values from Backstage with sellIn <= 10", function () {
    let expectedItem = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 42)
    const items = new Shop([new Backstage(10, 40)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });

  it("verify updated values from Backstage with sellIn <= 5", function () {
    let expectedItem = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 43)
    const items = new Shop([new Backstage(5, 40)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });

  it("verify updated values from Backstage with max quality", function () {
    let expectedItem = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50)
    const items = new Shop([new Backstage(2, 49)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });

  it("verify updated values from Backstage with sellIn <= 0 after 2 days", function () {
    let days = 2
    let expectedItem = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)
    const items = new Shop([new Backstage(2, 49)]);
    for (let i = 0; i < days; i++) {
      items.updateQuality()
    }
    expect(expectedItem).toEqual(items.items[0])
  });
});

describe("Conjured Rules", function () {
  it("verify updated values from Conjured items", function () {
    let expectedItem = new Item("Conjured Mana Cake", 2, 4)
    const items = new Shop([new Conjured("Conjured Mana Cake", 3, 6)]);
    items.updateQuality()
    expect(expectedItem).toEqual(items.items[0])
  });
});
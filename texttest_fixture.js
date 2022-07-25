
const { Shop } = require("../src/shop");
const { Item } = require("../src/item");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("+5 Strength Vest", 0, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40),
  new Item("Backstage passes to a TAFKAL80ETC concert", 1, 40),
  new Item("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[3]) || 3;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}

const { Shop } = require("../src2/shop");
const { Backstage } = require("../src2/items/backstage")
const { Sulfuras } = require("../src2/items/sulfuras")
const { AgedBrie } = require("../src2/items/agedBrie")
const { Conjured } = require("../src2/items/conjured")
const { GenericItem } = require("../src2/items/genericItem")

const items = [
  new GenericItem("+5 Dexterity Vest", 10, 20),
  new GenericItem("+5 Strength Vest", 0, 20),
  new AgedBrie(2, 0),
  new Sulfuras(80),
  new Backstage(15, 20),
  new Backstage(10, 40),
  new Backstage(5, 40),
  new Backstage(2, 49),
  new Conjured("Conjured Mana Cake", 3, 6),
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

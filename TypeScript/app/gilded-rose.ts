import { Item } from "./item";
import { getUpdateQualityTypes } from "./item-type";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    this.items.forEach((currentItem) => {
      const upgradaeQuality = getUpdateQualityTypes(currentItem.name);
      currentItem = upgradaeQuality(currentItem);
    });
    return this.items;
  }
}

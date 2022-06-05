import {
  updateQualityForAgedBrie,
  updateQualityForConcert,
  updateQualityForSulfuras,
  updateQualityForConjured,
  updateQualityForNormalItem,
} from "./update-quality";

enum Items {
  AGED_BRIE = "Aged Brie",
  BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured",
}

export const getUpdateQualityTypes = (itemName: string): any => {
  let updateQuality: any;
  switch (itemName) {
    case Items.AGED_BRIE: {
      updateQuality = updateQualityForAgedBrie;
      break;
    }
    case Items.BACKSTAGE_PASSES: {
      updateQuality = updateQualityForConcert;
      break;
    }
    case Items.SULFURAS: {
      updateQuality = updateQualityForSulfuras;
      break;
    }
    case Items.CONJURED: {
      updateQuality = updateQualityForConjured;
      break;
    }
    default: {
      updateQuality = updateQualityForNormalItem;
    }
  }
};

//maybe just for weapons
export class item {
  _id: number;
  index: number;
  name: string;
  equipment_category: string;
  "weapon_category:": string;
  weapon_range: string;
  category_range: string;
  cost: Object;
  damage: Object;

  //   "dice_count": 1,
  //   "dice_value": 4,
  //   "damage_type": {
  //       "url": "http://www.dnd5eapi.co/api/damage-types/2",
  //       "name": "Bludgeoning"
  //   }

  range: Object;
  //   {
  //       "normal": 5,
  //       "long": null
  //   },
  weight: number;
  properties: Object;
  //   [
  //       {
  //           "name": "Light",
  //           "url": "http://www.dnd5eapi.co/api/weapon-properties/4"
  //       },
  //       {
  //           "name": "Monk",
  //           "url": "http://www.dnd5eapi.co/api/weapon-properties/11"
  //       }
  //   ],
  url: string;
}

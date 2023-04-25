import { WWMap } from "components/schemas/map";
import { PropertyTile, Tile, tileSchema } from "../components/schemas/tile";
import { Army } from "../components/schemas/army";

type AWBWMapData = {
  name: string;
  tileData: number[];
  width: number;
};
const causticFinaleAwbw = [
  34, 3, 1, 5, 1, 1, 34, 3, 2, 2, 3, 7, 9, 2, 34, 26, 28, 111, 1, 1, 34, 26, 3,
  1, 1, 1, 39, 1, 1, 5, 35, 1, 1, 32, 33, 28, 3, 7, 27, 9, 34, 1, 3, 1, 3, 1,
  42, 26, 3, 1, 3, 1, 30, 27, 27, 9, 1, 1, 1, 29, 28, 28, 4, 27, 4, 9, 1, 1, 2,
  3, 1, 34, 16, 34, 3, 2, 32, 30, 30, 28, 34, 16, 34, 1, 1, 3, 1, 1, 1, 2, 16,
  1, 2, 2, 3, 34, 1, 3, 18, 20, 3, 1, 3, 1, 1, 3, 35, 7, 35, 1, 1, 1, 1, 21, 15,
  15, 20, 1, 1, 34, 1, 1, 7, 27, 4, 9, 3, 1, 34, 19, 1, 3, 1, 34, 3, 3, 1, 1, 3,
  34, 5, 47, 1, 3, 1, 1, 3, 16, 1, 1, 1, 2, 2, 2, 3, 1, 18, 15, 26, 1, 1, 2, 2,
  44, 1, 21, 15, 34, 1, 3, 2, 2, 3, 18, 20, 34, 5, 3, 44, 2, 3, 1, 1, 34, 1, 1,
  3, 1, 3, 2, 34, 16, 3, 28, 28, 1, 1, 3, 4, 27, 8, 1, 3, 1, 34, 3, 1, 1, 1, 16,
  1, 32, 28, 3, 1, 34, 2, 16, 28, 29, 29, 2, 1, 1, 34, 1, 3, 21, 34, 32, 31, 1,
  1, 1, 34, 21, 19, 3, 30, 31, 3, 1, 16, 1, 1, 1, 3, 30, 1, 34, 3, 1, 1, 3, 21,
  19, 3, 31, 1, 34, 21, 15, 19, 1, 2, 2, 1, 7, 27, 4, 133, 2, 1, 21, 19, 28, 8,
  1, 1, 3, 34, 1, 2, 3, 1, 26, 34, 1, 110, 105, 2, 3, 21, 15, 26, 1, 39, 1, 1,
  1, 1, 34, 7, 9, 1, 3, 111, 109, 133, 1, 34, 2, 5, 3, 2, 1, 3, 35, 15, 15, 26,
  3, 1, 34,
];





const awbwTileMapping: Record<string, Tile> = {
  '1': { type: 'plain', variant: "normal" },
  '2': { type: 'mountain' },
  '3': { type: 'forest' },
  '4': { type: 'river', variant: "right-left" },
  '5': { type: 'river', variant: "top-bottom" },
  '6': { type: 'river', variant: "top-right-bottom-left" },
  '7': { type: 'river', variant: "top-right" },
  '8': { type: 'river', variant: "right-bottom" },
  '9': { type: 'river', variant: "bottom-left" },
  '10': { type: 'river', variant: "left-top" },
  '11': { type: 'river', variant: "right-bottom-left" },
  '12': { type: 'river', variant: "top-left-bottom" },
  '13': { type: 'river', variant: "left-top-right" },
  '14': { type: 'river', variant: "bottom-right-top" },
  '15': { type: 'road', variant: "right-left" },
  '16': { type: 'road', variant: "top-bottom" },
  '17': { type: 'road', variant: "top-right-bottom-left" },
  '18': { type: 'road', variant: "top-right" },
  '19': { type: 'road', variant: "right-bottom" },
  '20': { type: 'road', variant: "bottom-left" },
  '21': { type: 'road', variant: "left-top" },
  '22': { type: 'road', variant: "right-bottom-left" },
  '23': { type: 'road', variant: "top-left-bottom" },
  '24': { type: 'road', variant: "left-top-right" },
  '25': { type: 'road', variant: "bottom-right-top" },
  '26': { type: 'bridge', variant: "right-left" },
  '27': { type: 'bridge', variant: "top-bottom" },
  '28': { type: 'sea' },
  '29': { type: 'shoal' },
  '30': { type: 'shoal' },
  '31': { type: 'shoal' },
  '32': { type: 'shoal' },
  '33': { type: 'reef' },
  '34': { type: 'city', playerSlot: -1 },
  '35': { type: 'base', playerSlot: -1 },
  '36': { type: 'airport', playerSlot: -1 },
  '37': { type: 'harbor', playerSlot: -1 },
  '38': { type: 'city', playerSlot: 0 },
  '39': { type: 'base', playerSlot: 0 },
  '40': { type: 'airport', playerSlot: 0 },
  '41': { type: 'hq', playerSlot: 0 },
  '42': { type: 'harbor', playerSlot: 0 },
  '43': { type: 'city', playerSlot: 1 },
  '44': { type: 'base', playerSlot: 1 },
  '45': { type: 'airport', playerSlot: 1 },
  '46': { type: 'hq', playerSlot: 1 },
  '47': { type: 'harbor', playerSlot: 1 },
  '48': { type: 'city', playerSlot: 2 },
  '49': { type: 'base', playerSlot: 2 },
  '50': { type: 'airport', playerSlot: 2 },
  '51': { type: 'hq', playerSlot: 2 },
  '52': { type: 'harbor', playerSlot: 2 },
  '53': { type: 'city', playerSlot: 3 },
  '54': { type: 'base', playerSlot: 3 },
  '55': { type: 'airport', playerSlot: 3 },
  '56': { type: 'hq', playerSlot: 3 },
  '57': { type: 'harbor', playerSlot: 3 },
  '81': { type: 'city', playerSlot: 5 },
  '82': { type: 'base', playerSlot: 5 },
  '83': { type: 'airport', playerSlot: 5 },
  '84': { type: 'hq', playerSlot: 5 },
  '85': { type: 'harbor', playerSlot: 5 },
  '86': { type: 'city', playerSlot: 6 },
  '87': { type: 'base', playerSlot: 6 },
  '88': { type: 'airport', playerSlot: 6 },
  '89': { type: 'hq', playerSlot: 6 },
  '90': { type: 'harbor', playerSlot: 6 },
  '91': { type: 'city', playerSlot: 4 },
  '92': { type: 'base', playerSlot: 4 },
  '93': { type: 'airport', playerSlot: 4 },
  '94': { type: 'hq', playerSlot: 4 },
  '95': { type: 'harbor', playerSlot: 4 },
  '96': { type: 'city', playerSlot: 7 },
  '97': { type: 'base', playerSlot: 7 },
  '98': { type: 'airport', playerSlot: 7 },
  '99': { type: 'hq', playerSlot: 7 },
  '100': { type: 'harbor', playerSlot: 7 },
  '101': { type: 'pipe', variant: "right-left" },
  '102': { type: 'pipe', variant: "top-bottom" },
  '103': { type: 'pipe', variant: "left-top" },
  '104': { type: 'pipe', variant: "top-right" },
  '105': { type: 'pipe', variant: "right-bottom" },
  '106': { type: 'pipe', variant: "bottom-left" },
  '107': { type: 'pipe', variant: "top" },
  '108': { type: 'pipe', variant: "right" },
  '109': { type: 'pipe', variant: "bottom" },
  '110': { type: 'pipe', variant: "left" },
  '111': { type: 'unused-silo' },
  '112': { type: 'used-silo' },
  '113': { type: 'pipe-seam', variant: "right-left", hp: 100 },
  '114': { type: 'pipe-seam', variant: "top-bottom", hp: 100},
  '115': { type: 'plain', variant: "broken-pipe-right-left" },
  '116': { type: 'plain', variant: "broken-pipe-top-bottom", },
  '117': { type: 'base', playerSlot: 8 },
  '118': { type: 'airport', playerSlot: 8 },
  '119': { type: 'city', playerSlot: 8 },
  '120': { type: 'hq', playerSlot: 8 },
  '121': { type: 'harbor', playerSlot: 8 },
  '122': { type: 'base', playerSlot: 9 },
  '123': { type: 'airport', playerSlot: 9 },
  '124': { type: 'city', playerSlot: 9 },
  '125': { type: 'hq', playerSlot: 9 },
  '126': { type: 'harbor', playerSlot: 9 },
  '127': { type: 'comtower', playerSlot: 8 },
  '128': { type: 'comtower', playerSlot: 4 },
  '129': { type: 'comtower', playerSlot: 1 },
  '130': { type: 'comtower', playerSlot: 7 },
  '131': { type: 'comtower', playerSlot: 2 },
  '132': { type: 'comtower', playerSlot: 9 },
  '133': { type: 'comtower', playerSlot: -1 },
  '134': { type: 'comtower', playerSlot: 0 },
  '135': { type: 'comtower', playerSlot: 5 },
  '136': { type: 'comtower', playerSlot: 3 },
  '137': { type: 'comtower', playerSlot: 6 },
  '138': { type: 'lab', playerSlot: 8 },
  '139': { type: 'lab', playerSlot: 4 },
  '140': { type: 'lab', playerSlot: 1 },
  '141': { type: 'lab', playerSlot: 7 },
  '142': { type: 'lab', playerSlot: 2 },
  '143': { type: 'lab', playerSlot: 6 },
  '144': { type: 'lab', playerSlot: 9 },
  '145': { type: 'lab', playerSlot: -1 },
  '146': { type: 'lab', playerSlot: 0 },
  '147': { type: 'lab', playerSlot: 5 },
  '148': { type: 'lab', playerSlot: 3 },
  '149': { type: 'airport', playerSlot: 10 },
  '150': { type: 'base', playerSlot: 10 },
  '151': { type: 'city', playerSlot: 10 },
  '152': { type: 'comtower', playerSlot: 10 },
  '153': { type: 'hq', playerSlot: 10 },
  '154': { type: 'lab', playerSlot: 10 },
  '155': { type: 'harbor', playerSlot: 10 },
  '156': { type: 'airport', playerSlot: 11 },
  '157': { type: 'base', playerSlot: 11 },
  '158': { type: 'city', playerSlot: 11 },
  '159': { type: 'comtower', playerSlot: 11 },
  '160': { type: 'hq', playerSlot: 11 },
  '161': { type: 'lab', playerSlot: 11 },
  '162': { type: 'harbor', playerSlot: 11 },
  '163': { type: 'airport', playerSlot: 12 },
  '164': { type: 'base', playerSlot: 12 },
  '165': { type: 'city', playerSlot: 12 },
  '166': { type: 'comtower', playerSlot: 12 },
  '167': { type: 'hq', playerSlot: 12 },
  '168': { type: 'lab', playerSlot: 12 },
  '169': { type: 'harbor', playerSlot: 12 },
  '170': { type: 'airport', playerSlot: 13 },
  '171': { type: 'base', playerSlot: 13 },
  '172': { type: 'city', playerSlot: 13 },
  '173': { type: 'comtower', playerSlot: 13 },
  '174': { type: 'hq', playerSlot: 13 },
  '175': { type: 'lab', playerSlot: 13 },
  '176': { type: 'harbor', playerSlot: 13 },
  '181': { type: 'airport', playerSlot: 14 },
  '182': { type: 'base', playerSlot: 14 },
  '183': { type: 'city', playerSlot: 14 },
  '184': { type: 'comtower', playerSlot: 14 },
  '185': { type: 'hq', playerSlot: 14 },
  '186': { type: 'lab', playerSlot: 14 },
  '187': { type: 'harbor', playerSlot: 14 },
  '188': { type: 'airport', playerSlot: 15 },
  '189': { type: 'base', playerSlot: 15 },
  '190': { type: 'city', playerSlot: 15 },
  '191': { type: 'comtower', playerSlot: 15 },
  '192': { type: 'hq', playerSlot: 15 },
  '193': { type: 'lab', playerSlot: 15 },
  '194': { type: 'harbor', playerSlot: 15 },
}



/*
//CODE USED TO PARSE THE IDs of every country, might be a good idea to keep it here for a bit just in-case we change our data structure (since it was a pain to gather and organize this).

//Organized by id as: city, base, airport,  HQ, comtower, lab
const propertyTile: Record<Army, number[]> = {
  //900 Here means a neutral HQ which doesn't exist...
  "neutral": [34,35,36,900, 37, 133, 145],
  "orange-star": [38,39,40,41,42, 134, 146],
  "blue-moon": [43,44,45,46,47, 129, 140],
  "green-earth": [48,49,50,51,52, 131, 142],
  "yellow-comet": [53,54,55,56,57, 136, 148],
  "black-hole": [91,92,93,94,95, 128, 139],
  "red-fire": [81,82,83,84,85, 135, 147],
  "grey-sky": [86,87,88,89,90, 137, 143],
  "brown-desert" :[96,97,98,99,100, 130, 141],
  "amber-blaze": [119,117,118,120,121, 127, 138],
  "jade-sun": [124,122,123,125,126, 132, 144],
  "cobalt-ice": [151,150,149,153,155,152,154],
  "pink-cosmos": [158,157,156,160,162,159,161],
  "teal-galaxy": [165,164,163,167,169,166,168],
  "purple-lighting": [172, 171,170,174,176,173,175],
  "acid-rain": [183,182,181,185,187,184,186],
  "white-nova": [190,189,188,192,194,191,193],
}

function insertArmies() {
  const armyArray:string[] = [ "neutral", "orange-star", "blue-moon", "green-earth", "yellow-comet", "black-hole", "red-fire", "grey-sky", "brown-desert", "amber-blaze", "jade-sun", "cobalt-ice", "pink-cosmos", "teal-galaxy", "purple-lighting", "acid-rain", "white-nova",
  ]
  const tileName:string[] = ["city", "base", "airport", "hq", "harbor","comtower", "lab",]
  armyArray.forEach((country) => {
    for (let i = 0; i < tileName.length; i++) {
      // @ts-ignore
      awbwTileMapping[propertyTile[country][i]] = {type: tileName[i] as PropertyTile["type"], playerSlot: country as Army}
    }
  })
  console.log(awbwTileMapping);
}
 */


const convertAWBWMapToWWMap = (awbwMapData: AWBWMapData): WWMap => {
  const parsedArray: Tile[][] = [];
  for (let i = 0; i < awbwMapData.width; i++) {
    const emptyArray: Tile[] = []
    for (let j = 0; j < awbwMapData.width; j++) {
      emptyArray.push(awbwTileMapping[awbwMapData.tileData[j + i * awbwMapData.width]])
    }
    parsedArray.push(emptyArray)
  }
  return {
    name: awbwMapData.name,
    tiles: parsedArray as WWMap["tiles"],
  };
};
convertAWBWMapToWWMap(
  {
    name: "Caustic Finale",
    tileData: causticFinaleAwbw,
    width: 18
  })
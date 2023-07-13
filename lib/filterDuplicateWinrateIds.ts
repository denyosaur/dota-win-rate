
export const filterDuplicateWinrateIds = (arr: HeroArrayItem[], currentIds: string[]) => {
  const uniqueWinrates = new Set();
  const currentIdSet = new Set([...currentIds]);

  return arr.filter(item => {
    const combinedKey = `${item['day']}-${item['heroId']}`;
    if (uniqueWinrates.has(combinedKey) || currentIdSet.has(combinedKey)) {
      return false;
    }
    uniqueWinrates.add(combinedKey);
    return true;
  });
}

interface HeroArrayItem {
  "day": bigint;
  "winCount": number;
  "matchCount": number;
  "heroId": number;
  [key: string]: any;
}

function totalWoodRequired(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 6;
    const perTableWood = 3;
    const perBedWood = 50;
    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalBedWood = perBedWood * bedQuantity;
    const totalWoods = totalChairWood + totalTableWood + totalBedWood;
    return totalWoods;
}
const totalWoods = totalWoodRequired(3, 5, 2);
console.log(totalWoods);
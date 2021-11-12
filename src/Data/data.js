import { subDays } from "date-fns";
export const userData = [];
for (let num = 30; num >= 0; num--) {
    userData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Users: Math.floor(Math.random() * 100)
    })
}
export const CardData = [];
for (let num = 30; num >= 0; num--) {
    CardData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Cards: Math.floor(Math.random() * 100)
    })
}
export const BoardData = [];
for (let num = 30; num >= 0; num--) {
    BoardData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Boards: Math.floor(Math.random() * 100)
    })
}
export const TeamData = [];
for (let num = 30; num >= 0; num--) {
    TeamData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Teams: Math.floor(Math.random() * 100)
    })
}
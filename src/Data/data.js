import { subDays } from "date-fns";
export const userData = [];
for (let num = 30; num >= 0; num--) {
    userData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Users: Math.floor(Math.random() * 100)
    })
}
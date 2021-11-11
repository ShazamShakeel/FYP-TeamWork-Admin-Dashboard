import { subDays } from "date-fns";
export const userData = [];
for (let num = 30; num >= 0; num--) {
    userData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Users: Math.floor(Math.random() * 100)
    })
}
export const TaskData = [];
for (let num = 30; num >= 0; num--) {
    TaskData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Tasks: Math.floor(Math.random() * 100)
    })
}
export const ProjectData = [];
for (let num = 30; num >= 0; num--) {
    ProjectData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Projects: Math.floor(Math.random() * 100)
    })
}
export const TeamData = [];
for (let num = 30; num >= 0; num--) {
    TeamData.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Teams: Math.floor(Math.random() * 100)
    })
}
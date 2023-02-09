import {LoveEvents} from "../static/LoveEvent";
import {WorkEvents} from "../static/WorkEvent";
import {SchoolEvents} from "../static/SchoolEvent";
import {DailyEvents} from "../static/DailyEvent";
import {FriendEvents} from "../static/FriendEvent";

export const getEvent = () => {
    return [...(LoveEvents), ...(WorkEvents), ...(SchoolEvents), ...(DailyEvents), ...(FriendEvents)]
}

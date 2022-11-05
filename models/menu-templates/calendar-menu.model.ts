import MenuBase from "./base-menu.model";
import { google } from "googleapis";

export default class CalendarMenu extends MenuBase {
    calendar = google.calendar('v3');
}

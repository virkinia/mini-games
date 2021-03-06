"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
;
const getLocationsWithTimezones = (request, response, next) => {
    let locations = [
        {
            location: 'Germany',
            timezoneName: 'Central European Time',
            timezoneAbbr: 'CET',
            utcOffset: 1
        },
        {
            location: 'China',
            timezoneName: 'China Standard Time',
            timezoneAbbr: 'CST',
            utcOffset: 8
        },
        {
            location: 'Argentina',
            timezoneName: 'Argentina Time',
            timezoneAbbr: 'ART',
            utcOffset: -3
        },
        {
            location: 'Japan',
            timezoneName: 'Japan Standard Time',
            timezoneAbbr: 'JST',
            utcOffset: 9
        }
    ];
    response.status(200).json(locations);
};
app.get('/timezones', getLocationsWithTimezones);
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

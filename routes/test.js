var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json({
  "items": [
    {
      "startDate": "2017-11-12T00:01:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "All Day",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/radio-city-christmas-spectacular/160626/3",
      "guid": "4e968f3e-e1fe-41dc-ae12-acbafb34b57e",
      "id": 160626,
      "sequence": 3,
      "allDay": true,
      "cityPick": false,
      "name": "Radio City Christmas Spectacular",
      "desc": "The Radio City Christmas Spectacular is a one-of-a-kind celebration for family, friends, and loved ones. The radiant Radio City Music Hall is decked out for the season and the Rockettes shine like never before in a breathtaking new number that transforms the stage into a glistening winter wonderland! Share in the joy with Santa, the Nutcracker, and the unforgettable Living Nativity. No one does it better than the Radio City Christmas Spectacular!\\n<div>\\n<div id=\\\"_mcePaste\\\" class=\\\"mcePaste\\\" data-mce-bogus=\\\"1\\\" style=\\\"position: absolute; left: 0px; top: -25px; width: 1px; height: 1px; overflow: hidden;\\\"><\\/div>\\n<\\/div>",
      "shortDesc": "This world-famous holiday show is always a family favorite.",
      "email": "guestrelations@msg.com",
      "website": "http://www.radiocitychristmas.com/",
      "contactName": "Radio City Music Hall",
      "phone": "(212) 465-6225",
      "location": "Radio City Music Hall",
      "addressType": "Address",
      "address": "1260 6th Avenue",
      "city": "New York",
      "state": "NY",
      "zip": "10020",
      "imageUrl": "/assets/home/images/events/2013/November-December/0_RadioCity.jpg",
      "extendedDate": "Check website for dates and times of shows.",
      "boroughs": [
        "Mn"
      ],
      "mapType": "POINT"
    },
    {
      "startDate": "2017-11-12T00:01:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "All Day",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/street-closures/11840/347",
      "guid": "72de24e5-7e27-4afc-af8b-f0efdcc9b140",
      "id": 11840,
      "sequence": 347,
      "allDay": true,
      "cityPick": false,
      "name": "Street Closures",
      "desc": "Learn about weekly and weekend street closures, and access the NYC Street Closure Map. <br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about weekend street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/maps.nyc.gov\\/streetclosure\\/\\\">Go to the Street Closure Map<\\/a>\\n<div style=\\\"position: absolute; left: -40px; top: -25px; width: 1px; height: 1px; overflow: hidden;\\\" data-mce-bogus=\\\"1\\\" class=\\\"mcePaste\\\" id=\\\"_mcePaste\\\">??<\\/div>",
      "shortDesc": "Learn about weekly and weekend street closures, and access the NYC Street Closure Map.",
      "website": "http://www.nyc.gov/html/dot/html/home/home.shtml",
      "addressType": "Other",
      "address": "Various locations Citywide",
      "boroughs": [
        "Bx",
        "Bk",
        "Mn",
        "Qn",
        "SI"
      ],
      "mapType": "POINT"
    },
    {
      "startDate": "2017-11-12T07:00:00.000-05:00",
      "endDate": "2017-11-12T19:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "7am to 7pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/chelseas-down-to-earth-farmers-market/155084/163",
      "guid": "D6D6A95C-98A7-11E7-98D7-F8D1568B2193",
      "id": 155084,
      "sequence": 163,
      "allDay": false,
      "cityPick": false,
      "name": "Chelseas Down to Earth Farmers Market",
      "desc": "Farmers Market<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Farmers Market",
      "addressType": "Other",
      "address": "173 WEST   23 STREET between 8 AVENUE and 9 AVENUE  Manhattan",
      "boroughs": [
        "Mn"
      ],
      "mapType": "POINT"
    },
    {
      "startDate": "2017-11-12T07:00:00.000-05:00",
      "endDate": "2017-11-12T17:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "7am to 5pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/murray-hill-farmers-market/155564/1",
      "guid": "B3AA3EAA-98AA-11E7-9DDB-90ACB65E6BA2",
      "id": 155564,
      "sequence": 1,
      "allDay": false,
      "cityPick": false,
      "name": "Murray Hill Farmers Market",
      "desc": "Farmers Market<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Farmers Market",
      "addressType": "Other",
      "address": " SECOND AVENUE between EAST   32 STREET and EAST   33 STREET  Manhattan",
      "boroughs": [
        "Mn"
      ],
      "mapType": "POINT",
      "geometry": [
        {
          "lat": "40.7451911",
          "lng": "-73.9791699"
        }
      ]
    },
    {
      "startDate": "2017-11-12T08:00:00.000-05:00",
      "endDate": "2017-11-12T17:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "8am to 5pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/92-street-greenmarket-sunday/154976/1",
      "guid": "3FFF71DA-98A7-11E7-972E-FF026D418F37",
      "id": 154976,
      "sequence": 1,
      "allDay": false,
      "cityPick": false,
      "name": "92 Street Greenmarket Sunday",
      "desc": "Farmers Market<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Farmers Market",
      "addressType": "Other",
      "address": " 1 AVENUE between EAST   92 STREET and EAST   93 STREET  Manhattan",
      "boroughs": [
        "Mn"
      ],
      "mapType": "POINT",
      "geometry": [
        {
          "lat": "40.7813659",
          "lng": "-73.94660639999999"
        }
      ]
    },
    {
      "startDate": "2017-11-12T08:00:00.000-05:00",
      "endDate": "2017-11-12T17:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "8am to 5pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/carroll-gardens-greenmarket-sunday/155082/1",
      "guid": "CC7320B2-98A7-11E7-A0D7-EB9EE697F676",
      "id": 155082,
      "sequence": 1,
      "allDay": false,
      "cityPick": false,
      "name": "Carroll Gardens Greenmarket Sunday",
      "desc": "Farmers Market<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Farmers Market",
      "addressType": "Other",
      "address": " CARROLL STREET between SMITH STREET and COURT STREET  Brooklyn",
      "boroughs": [
        "Bk"
      ],
      "mapType": "POINT",
      "geometry": [
        {
          "lat": "40.67925109999999",
          "lng": "-73.9957742"
        }
      ]
    },
    {
      "startDate": "2017-11-12T08:00:00.000-05:00",
      "endDate": "2017-11-12T17:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "8am to 5pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/columbia-greenmarket-sunday/155120/1",
      "guid": "11DE6CF6-98A8-11E7-BD5B-D46D478E8319",
      "id": 155120,
      "sequence": 1,
      "allDay": false,
      "cityPick": false,
      "name": "Columbia Greenmarket Sunday",
      "desc": "Farmers Market<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Farmers Market",
      "addressType": "Other",
      "address": " BROADWAY between WEST  114 STREET and WEST  116 STREET  Manhattan",
      "boroughs": [
        "Mn"
      ],
      "mapType": "POINT"
    },
    {
      "startDate": "2017-11-12T08:00:00.000-05:00",
      "endDate": "2017-11-12T18:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "8am to 6pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/corona-greenmarket-friday/155139/129",
      "guid": "2023C838-98A8-11E7-82DB-E429B2C20172",
      "id": 155139,
      "sequence": 129,
      "allDay": false,
      "cityPick": false,
      "name": "Corona Greenmarket Friday",
      "desc": "Farmers Market<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Farmers Market",
      "addressType": "Other",
      "address": " ROOSEVELT AVENUE between 104 STREET and 108 STREET  Queens",
      "boroughs": [
        "Qn"
      ],
      "mapType": "POINT"
    },
    {
      "startDate": "2017-11-12T08:00:00.000-05:00",
      "endDate": "2017-11-12T17:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "8am to 5pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/cortelyou-greenmarket-sunday/155154/1",
      "guid": "2BC7DD0A-98A8-11E7-9B1A-92FA90F5A61C",
      "id": 155154,
      "sequence": 1,
      "allDay": false,
      "cityPick": false,
      "name": "Cortelyou Greenmarket Sunday",
      "desc": "Farmers Market<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Farmers Market",
      "addressType": "Other",
      "address": " CORTELYOU ROAD between RUGBY ROAD and ARGYLE ROAD  Brooklyn",
      "boroughs": [
        "Bk"
      ],
      "mapType": "POINT",
      "geometry": [
        {
          "lat": "40.640725",
          "lng": "-73.96573029999999"
        }
      ]
    },
    {
      "startDate": "2017-11-12T08:00:00.000-05:00",
      "endDate": "2017-11-12T19:00:00.000-05:00",
      "datePart": "Nov 12",
      "timePart": "8am to 7pm",
      "canceled": false,
      "permalink": "http://www1.nyc.gov/events/flea-market/155873/1",
      "guid": "CCA2859A-98A8-11E7-B3E2-B31431005E3D",
      "id": 155873,
      "sequence": 1,
      "allDay": false,
      "cityPick": false,
      "name": "flea market",
      "desc": "Sidewalk Sale<br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/wkndtraf.shtml\\\">Learn about related weekend street closures<\\/a><br \\/><a href=\\\"http:\\/\\/www.nyc.gov\\/html\\/dot\\/html\\/motorist\\/weektraf.shtml\\\">Learn about related weekly street closures<\\/a> <br \\/><a href=\\\"http:\\/\\/gis.nyc.gov\\/streetclosure\\/\\\">Visit the NYC Street Closures Map<\\/a>",
      "shortDesc": "Sidewalk Sale",
      "addressType": "Other",
      "address": " BLEECKER STREET between CARMINE STREET and LEROY STREET  Manhattan",
      "boroughs": [
        "Mn"
      ],
      "mapType": "POINT"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "numPages": 54,
    "totalItems": 536,
    "isFirstPage": true,
    "isLastPage": false
  }
});
});

module.exports = router;

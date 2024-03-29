"use strict";


// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
function makeCar(make, model) {
    var newObject = {
        make: make,
        model: model
    };
    return newObject;
}

// console.log(makeCar("VW", "beetle"));

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67

var salesReport = {
    title: "Monthly Sales Report",
    date: "03-17-2015",
    office: "Codeup",
    employees: [
        {
            empNum: 1,
            firstName: "Jane",
            lastName: "Janeway",
            salesUnits: 3
        },
        {
            empNum: 3,
            firstName: "Tirica",
            lastName: "Triciason",
            salesUnits: 5
        },
        {
            empNum: 4,
            firstName: "Jeannette",
            lastName: "Jeanson",
            salesUnits: 4
        },
        {
            empNum: 5,
            firstName: "Charles Emmerson III",
            lastName: "Winchester",
            salesUnits: 2
        },
        {
            empNum: 6,
            firstName: "Chet",
            lastName: "Chedderson",
            salesUnits: 8
        },
        {
            empNum: 7,
            firstName: "Chaiam",
            lastName: "Chaiamson",
            salesUnits: 12
        },
        {
            empNum: 8,
            firstName: "Dale",
            lastName: "Dalesinger",
            salesUnits: 1
        },
        {
            empNum: 9,
            firstName: "Zig",
            lastName: "Ziglar",
            salesUnits: 50
        },
        {
            empNum: 10,
            firstName: "Henry",
            lastName: "Kissinger",
            salesUnits: 1
        },
        {
            empNum: 11,
            firstName: "Arthur Herbert",
            lastName: "Fonzarelli",
            salesUnits: 23
        },
        {
            empNum: 12,
            firstName: "Betty",
            lastName: "Boop",
            salesUnits: 67
        }]
};

// console.log(salesReport);

// Exercise 3. On the salesReport object you made, add the following methods.
// getEmployeeCount() should return the total number of employees
// getTotalNumberOfSales() should return the total number of units sold
// getAverageSalesPerEmployee() should return the average units sold per employee
salesReport.getEmployeeCount = function () {
    return this.employees.length;
};
// console.log(salesReport.getEmployeeCount());
salesReport.getTotalNumberOfSales = function () {
    var unitsSold = 0;
    this.employees.forEach(function (units) {
        unitsSold += units.salesUnits;
    });
    return unitsSold;
};
// console.log(salesReport.getTotalNumberOfSales());

salesReport.getAverageSalesPerEmployee = function () {
    return this.getTotalNumberOfSales() / this.getEmployeeCount();
};

// console.log(salesReport.getAverageSalesPerEmployee());

// Exercise 4. Go to https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json
// then copy the JSON and assign it to a variable named profiles.
var profile = [
    {
        id: "54e23c3e46ab53a440b580e8",
        index: 0,
        guid: "9962b468-ef3e-4993-b677-617469bc3008",
        isActive: false,
        balance: "$2,097.02",
        picture: "http://placehold.it/32x32",
        age: 39,
        eyeColor: "blue",
        name: "Hebert Estes",
        gender: "male",
        company: "ANDRYX",
        email: "hebertestes@andryx.com",
        phone: "+1 (866) 456-2268",
        address: "121 Emmons Avenue, Klondike, Kentucky, 5975",
        about: "Sit cillum deserunt irure laboris tempor fugiat laboris. Amet commodo amet est incididunt. Dolore qui fugiat cillum pariatur dolore excepteur elit ipsum.\r\n",
        registered: "2014-11-10T01:44:03 +06:00",
        latitude: -80.157843,
        longitude: 161.93016,
        tags: [
            "sit",
            "occaecat",
            "non",
            "ea",
            "sit",
            "laboris",
            "exercitation"
        ],
        friends: [
            {
                id: 0,
                name: "Tanisha Leonard"
            },
            {
                id: 1,
                name: "Dennis Wilson"
            },
            {
                id: 2,
                name: "Lupe Howe"
            }
        ],
        greeting: "Hello, Hebert Estes! You have 4 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3ef5cc0d250968c212",
        index: 1,
        guid: "905f849d-49bf-4a57-b4f3-5d6e4bf1b04c",
        isActive: false,
        balance: "$3,654.02",
        picture: "http://placehold.it/32x32",
        age: 30,
        eyeColor: "green",
        name: "Allison Wynn",
        gender: "male",
        company: "PHARMACON",
        email: "allisonwynn@pharmacon.com",
        phone: "+1 (926) 525-3131",
        address: "724 Brevoort Place, Lodoga, Indiana, 3880",
        about: "Esse quis cillum sunt occaecat ad et eu incididunt aliquip dolor. Adipisicing labore magna anim cillum nisi. Elit mollit consequat velit nulla cillum excepteur elit ullamco deserunt. Anim aliquip Lorem excepteur ad veniam et labore in qui ullamco. Occaecat sit do incididunt voluptate id magna ea amet.\r\n",
        registered: "2014-06-10T13:41:26 +05:00",
        latitude: 55.737207,
        longitude: -167.177561,
        tags: [
            "enim",
            "officia",
            "laboris",
            "irure",
            "veniam",
            "occaecat",
            "pariatur"
        ],
        friends: [
            {
                id: 0,
                name: "Curry Cox"
            },
            {
                id: 1,
                name: "Alma Dale"
            },
            {
                id: 2,
                name: "Barbara Mayo"
            }
        ],
        greeting: "Hello, Allison Wynn! You have 19 unread messages.",
        favoriteFruit: "apple"
    },
    {
        id: "54e23c3e09cc6875638cd36b",
        index: 2,
        guid: "1b042d48-9cfa-4db5-8b60-4104165591c3",
        isActive: true,
        balance: "$1,536.02",
        picture: "http://placehold.it/32x32",
        age: 31,
        eyeColor: "brown",
        name: "Jacobs Floyd",
        gender: "male",
        company: "QUONK",
        email: "jacobsfloyd@quonk.com",
        phone: "+1 (853) 537-3315",
        address: "941 Cox Place, Bluffview, Georgia, 5882",
        about: "Deserunt adipisicing proident exercitation cillum anim consectetur labore exercitation. Commodo reprehenderit laborum enim exercitation. Ullamco nulla culpa aliqua nisi fugiat consectetur deserunt nostrud in eu.\r\n",
        registered: "2014-07-30T03:17:32 +05:00",
        latitude: 30.215667,
        longitude: 68.831905,
        tags: [
            "est",
            "aute",
            "laborum",
            "sint",
            "anim",
            "sit",
            "consectetur"
        ],
        friends: [
            {
                id: 0,
                name: "Robles Chan"
            },
            {
                id: 1,
                name: "Whitfield Strickland"
            },
            {
                id: 2,
                name: "Lina Melton"
            }
        ],
        greeting: "Hello, Jacobs Floyd! You have 5 unread messages.",
        favoriteFruit: "banana"
    },
    {
        id: "54e23c3e54e4094147a3b1da",
        index: 3,
        guid: "69eb3454-8acc-46f1-a636-c6df00dfb542",
        isActive: false,
        balance: "$3,919.64",
        picture: "http://placehold.it/32x32",
        age: 20,
        eyeColor: "green",
        name: "Fay Hammond",
        gender: "female",
        company: "INRT",
        email: "fayhammond@inrt.com",
        phone: "+1 (922) 429-2592",
        address: "518 Randolph Street, Whitestone, Arizona, 8189",
        about: "Aliqua sunt exercitation quis cupidatat fugiat nulla laboris occaecat ut reprehenderit qui incididunt. Amet excepteur qui amet mollit sint enim velit est dolor eu. Velit labore ea aute ipsum consequat culpa cupidatat excepteur aliqua. Sit commodo id est deserunt commodo. Labore sit deserunt enim in dolore incididunt. Officia qui est veniam cillum consequat minim duis Lorem esse magna culpa cupidatat cupidatat enim. Amet eiusmod elit qui reprehenderit commodo quis.\r\n",
        registered: "2015-01-30T08:05:38 +06:00",
        latitude: 33.825844,
        longitude: -65.969538,
        tags: [
            "aliqua",
            "esse",
            "sint",
            "pariatur",
            "commodo",
            "do",
            "anim"
        ],
        friends: [
            {
                id: 0,
                name: "Dudley Booker"
            },
            {
                id: 1,
                name: "Esmeralda Tyler"
            },
            {
                id: 2,
                name: "Rosa Hampton"
            }
        ],
        greeting: "Hello, Fay Hammond! You have 10 unread messages.",
        favoriteFruit: "banana"
    },
    {
        id: "54e23c3e177caf5567ba87ac",
        index: 4,
        guid: "97962c85-7700-4ffa-a01e-2fcbc147fd81",
        isActive: false,
        balance: "$3,681.39",
        picture: "http://placehold.it/32x32",
        age: 39,
        eyeColor: "green",
        name: "Chasity Marsh",
        gender: "female",
        company: "WAZZU",
        email: "chasitymarsh@wazzu.com",
        phone: "+1 (976) 425-2362",
        address: "604 Just Court, Eastvale, Federated States Of Micronesia, 8644",
        about: "Irure excepteur consequat esse qui tempor deserunt nulla fugiat. Ut excepteur do veniam dolore dolor proident sunt voluptate ad ipsum nisi. Lorem proident deserunt Lorem cupidatat dolor nulla qui id aliqua. Et nulla laborum deserunt tempor ad culpa. Ullamco occaecat adipisicing dolore laborum laborum duis aliqua nisi irure ex. Incididunt tempor Lorem quis dolore.\r\n",
        registered: "2014-07-31T06:03:19 +05:00",
        latitude: -31.660978,
        longitude: 37.559095,
        tags: [
            "aliquip",
            "duis",
            "irure",
            "amet",
            "aliquip",
            "dolore",
            "esse"
        ],
        friends: [
            {
                id: 0,
                name: "Kristina Glover"
            },
            {
                id: 1,
                name: "Ora Christian"
            },
            {
                id: 2,
                name: "Jacklyn Joseph"
            }
        ],
        greeting: "Hello, Chasity Marsh! You have 9 unread messages.",
        favoriteFruit: "apple"
    },
    {
        id: "54e23c3eaffbb506aa15ec1c",
        index: 5,
        guid: "fc3e04d1-44c2-449e-891a-d4f8053d14a4",
        isActive: true,
        balance: "$1,694.42",
        picture: "http://placehold.it/32x32",
        age: 30,
        eyeColor: "brown",
        name: "Camacho Cortez",
        gender: "male",
        company: "EARTHWAX",
        email: "camachocortez@earthwax.com",
        phone: "+1 (869) 528-2019",
        address: "101 Haring Street, Nicut, Louisiana, 1473",
        about: "Qui ad commodo elit voluptate cupidatat exercitation amet ea laborum sunt aliquip nisi irure. Veniam voluptate eiusmod sint aliquip ea. Voluptate voluptate Lorem nulla laborum eiusmod occaecat et nostrud sint in cillum reprehenderit magna nulla. Lorem id fugiat laborum qui mollit amet. Culpa officia ipsum nisi culpa in. Fugiat quis eu cupidatat non culpa in ea velit pariatur non in excepteur.\r\n",
        registered: "2014-03-17T12:04:00 +05:00",
        latitude: 74.434627,
        longitude: 69.527088,
        tags: [
            "et",
            "sit",
            "in",
            "id",
            "ullamco",
            "elit",
            "laborum"
        ],
        friends: [
            {
                id: 0,
                name: "Sexton Tillman"
            },
            {
                id: 1,
                name: "Boone Steele"
            },
            {
                id: 2,
                name: "Elvia Ward"
            }
        ],
        greeting: "Hello, Camacho Cortez! You have 19 unread messages.",
        favoriteFruit: "apple"
    },
    {
        id: "54e23c3e0fd8074c2ca52667",
        index: 6,
        guid: "af8d9a03-fde9-4039-b20c-c4708d4cfc3c",
        isActive: false,
        balance: "$1,214.10",
        picture: "http://placehold.it/32x32",
        age: 35,
        eyeColor: "green",
        name: "Avery Flynn",
        gender: "male",
        company: "TERSANKI",
        email: "averyflynn@tersanki.com",
        phone: "+1 (966) 404-2471",
        address: "569 Oakland Place, Beyerville, Puerto Rico, 2395",
        about: "Minim consequat anim ad et tempor et pariatur cillum ut. Ea Lorem consectetur sunt aliquip ea minim minim id dolore incididunt qui magna. Magna velit labore dolore voluptate ut aliquip esse qui est ipsum cupidatat duis enim. Sunt esse eiusmod cupidatat duis quis sunt anim dolore adipisicing enim dolore aliqua mollit. Commodo sit ad eiusmod reprehenderit.\r\n",
        registered: "2014-04-13T10:25:03 +05:00",
        latitude: -89.879409,
        longitude: 143.441709,
        tags: [
            "quis",
            "esse",
            "Lorem",
            "minim",
            "nostrud",
            "voluptate",
            "laborum"
        ],
        friends: [
            {
                id: 0,
                name: "Ball Henson"
            },
            {
                id: 1,
                name: "Dalton Mccoy"
            },
            {
                id: 2,
                name: "Carolina Sharp"
            }
        ],
        greeting: "Hello, Avery Flynn! You have 13 unread messages.",
        favoriteFruit: "banana"
    },
    {
        id: "54e23c3eb112d96e4204914d",
        index: 7,
        guid: "95f1c020-f9eb-4a29-b236-e766759d89d0",
        isActive: false,
        balance: "$2,930.31",
        picture: "http://placehold.it/32x32",
        age: 23,
        eyeColor: "blue",
        name: "Michael Cash",
        gender: "male",
        company: "ORBIXTAR",
        email: "michaelcash@orbixtar.com",
        phone: "+1 (996) 439-3660",
        address: "808 Duryea Court, Downsville, Northern Mariana Islands, 2154",
        about: "Minim proident minim consectetur nostrud dolor reprehenderit. Ea est proident non do cillum eu est dolor Lorem id. Tempor enim incididunt consequat voluptate nulla ipsum voluptate id. Incididunt enim laboris nostrud in exercitation est culpa nulla velit.\r\n",
        registered: "2014-05-24T17:56:54 +05:00",
        latitude: -86.621367,
        longitude: -4.06197,
        tags: [
            "eu",
            "sit",
            "dolore",
            "culpa",
            "Lorem",
            "in",
            "esse"
        ],
        friends: [
            {
                id: 0,
                name: "Rodgers Nolan"
            },
            {
                id: 1,
                name: "Jewel Marks"
            },
            {
                id: 2,
                name: "Sue Mejia"
            }
        ],
        greeting: "Hello, Michael Cash! You have 17 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3ef30f14d0e5afddf3",
        index: 8,
        guid: "bde2d56f-2488-40d0-a7d2-21019ee8a18b",
        isActive: false,
        balance: "$1,944.15",
        picture: "http://placehold.it/32x32",
        age: 25,
        eyeColor: "green",
        name: "Madeleine Bray",
        gender: "female",
        company: "KIDSTOCK",
        email: "madeleinebray@kidstock.com",
        phone: "+1 (820) 541-2969",
        address: "684 Stratford Road, Rosine, District Of Columbia, 7177",
        about: "Ullamco ea esse ullamco commodo quis amet ut ad. Sint eiusmod ullamco minim nostrud amet in ex adipisicing velit cillum Lorem enim nostrud. Deserunt esse incididunt eiusmod commodo ullamco id pariatur tempor duis laboris Lorem. Laboris magna Lorem quis laborum ullamco. Dolor minim magna ut occaecat in consequat consequat in commodo pariatur voluptate pariatur dolore. Quis exercitation cillum labore cillum laborum. Dolore est reprehenderit anim reprehenderit consectetur sit quis ea ut veniam.\r\n",
        registered: "2014-08-11T08:54:06 +05:00",
        latitude: 45.118798,
        longitude: -7.698707,
        tags: [
            "id",
            "magna",
            "excepteur",
            "excepteur",
            "excepteur",
            "duis",
            "excepteur"
        ],
        friends: [
            {
                id: 0,
                name: "Herrera Doyle"
            },
            {
                id: 1,
                name: "Berger Fisher"
            },
            {
                id: 2,
                name: "Chang Coffey"
            }
        ],
        greeting: "Hello, Madeleine Bray! You have 2 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3ebd80e9c26b057fa3",
        index: 9,
        guid: "75991ca5-05ed-499e-bbb5-f057f86d05d7",
        isActive: true,
        balance: "$2,839.22",
        picture: "http://placehold.it/32x32",
        age: 37,
        eyeColor: "blue",
        name: "Corine French",
        gender: "female",
        company: "INTRAWEAR",
        email: "corinefrench@intrawear.com",
        phone: "+1 (987) 573-3164",
        address: "964 Clara Street, Snyderville, Oklahoma, 3627",
        about: "Sint cillum laborum labore duis fugiat voluptate adipisicing. Ad culpa et et ea incididunt nulla excepteur officia. Cillum veniam amet ipsum reprehenderit do eiusmod aliqua aute nisi Lorem consectetur esse in incididunt.\r\n",
        registered: "2014-06-25T20:17:13 +05:00",
        latitude: -37.637422,
        longitude: 154.195523,
        tags: [
            "laboris",
            "in",
            "dolore",
            "mollit",
            "velit",
            "laboris",
            "excepteur"
        ],
        friends: [
            {
                id: 0,
                name: "Greta Hill"
            },
            {
                id: 1,
                name: "Cline Curry"
            },
            {
                id: 2,
                name: "Branch Sawyer"
            }
        ],
        greeting: "Hello, Corine French! You have 18 unread messages.",
        favoriteFruit: "banana"
    },
    {
        id: "54e23c3e6d89c09f5507e7dd",
        index: 10,
        guid: "87cffc18-3acf-40c5-8708-1bb93f1b68de",
        isActive: true,
        balance: "$2,467.31",
        picture: "http://placehold.it/32x32",
        age: 29,
        eyeColor: "blue",
        name: "Trudy Cummings",
        gender: "female",
        company: "SPLINX",
        email: "trudycummings@splinx.com",
        phone: "+1 (925) 403-2797",
        address: "558 Charles Place, Tedrow, California, 9832",
        about: "Non id adipisicing deserunt non magna ex adipisicing sint esse sint. Laborum ea nostrud Lorem voluptate quis proident eu nisi exercitation in. Consequat occaecat proident officia anim.\r\n",
        registered: "2014-03-13T17:54:31 +05:00",
        latitude: -36.185131,
        longitude: -37.774906,
        tags: [
            "aute",
            "occaecat",
            "ea",
            "pariatur",
            "consectetur",
            "magna",
            "ea"
        ],
        friends: [
            {
                id: 0,
                name: "Amber Gates"
            },
            {
                id: 1,
                name: "Barron Walsh"
            },
            {
                id: 2,
                name: "Nell Bolton"
            }
        ],
        greeting: "Hello, Trudy Cummings! You have 2 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3e4192cf53edd67c99",
        index: 11,
        guid: "5a5496f1-a027-4c21-85da-c399234cd9a5",
        isActive: true,
        balance: "$3,304.99",
        picture: "http://placehold.it/32x32",
        age: 21,
        eyeColor: "brown",
        name: "Peggy Mayer",
        gender: "female",
        company: "ACCUPRINT",
        email: "peggymayer@accuprint.com",
        phone: "+1 (854) 428-2585",
        address: "830 Willmohr Street, Crenshaw, Missouri, 6032",
        about: "Aliqua sit enim cillum aliquip ad proident excepteur in consectetur eiusmod. Ipsum sint cillum veniam eiusmod aute sunt et do est tempor. Lorem elit dolor dolore incididunt cillum. Enim occaecat minim sunt cillum est velit cillum deserunt tempor eu.\r\n",
        registered: "2014-09-14T07:06:49 +05:00",
        latitude: 48.323912,
        longitude: 22.184821,
        tags: [
            "commodo",
            "esse",
            "ad",
            "ullamco",
            "ea",
            "sint",
            "ipsum"
        ],
        friends: [
            {
                id: 0,
                name: "Hopkins Mccall"
            },
            {
                id: 1,
                name: "Nielsen Weeks"
            },
            {
                id: 2,
                name: "Dale Knowles"
            }
        ],
        greeting: "Hello, Peggy Mayer! You have 13 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3eedcc65f0ec3a5496",
        index: 12,
        guid: "759a21c4-5f9c-4189-9c50-c9d8a9f31037",
        isActive: false,
        balance: "$3,844.42",
        picture: "http://placehold.it/32x32",
        age: 40,
        eyeColor: "brown",
        name: "Chan Hurley",
        gender: "male",
        company: "ZEAM",
        email: "chanhurley@zeam.com",
        phone: "+1 (917) 475-3705",
        address: "915 Channel Avenue, Clinton, North Dakota, 6244",
        about: "Voluptate exercitation ut anim ex adipisicing ut do officia incididunt fugiat cupidatat aliqua. Cillum ullamco irure dolore est consectetur non consequat. Nulla ullamco eu irure qui dolor magna ipsum id in enim voluptate aute. Officia aliqua dolore ut reprehenderit Lorem cillum. Cillum reprehenderit eu cillum aliqua sint eiusmod cupidatat culpa elit in. Fugiat voluptate reprehenderit amet anim qui nisi velit aliqua proident anim.\r\n",
        registered: "2014-03-01T14:51:23 +06:00",
        latitude: 85.901051,
        longitude: -74.986179,
        tags: [
            "minim",
            "veniam",
            "sit",
            "aute",
            "irure",
            "non",
            "eiusmod"
        ],
        friends: [
            {
                id: 0,
                name: "Reese Grant"
            },
            {
                id: 1,
                name: "Jenna Kinney"
            },
            {
                id: 2,
                name: "Rhea May"
            }
        ],
        greeting: "Hello, Chan Hurley! You have 7 unread messages.",
        favoriteFruit: "apple"
    },
    {
        id: "54e23c3eb813e66c6d33aa82",
        index: 13,
        guid: "6fd14a8e-3158-48eb-a7e1-93fe57b74746",
        isActive: true,
        balance: "$3,594.99",
        picture: "http://placehold.it/32x32",
        age: 40,
        eyeColor: "blue",
        name: "Diaz Pena",
        gender: "male",
        company: "SUREPLEX",
        email: "diazpena@sureplex.com",
        phone: "+1 (986) 511-3050",
        address: "184 Kingsway Place, Grantville, Michigan, 2421",
        about: "Enim elit amet officia consectetur do Lorem reprehenderit cupidatat exercitation velit. Ex tempor esse consectetur dolore aute et. Cupidatat duis nulla in incididunt nulla ullamco non magna officia commodo anim. Labore quis ullamco est deserunt excepteur duis nostrud deserunt cillum proident. Non eiusmod consectetur pariatur deserunt irure quis exercitation ex incididunt quis dolore pariatur sunt irure. Eu do fugiat laboris tempor culpa.\r\n",
        registered: "2014-04-19T20:43:12 +05:00",
        latitude: 6.606991,
        longitude: 81.593748,
        tags: [
            "excepteur",
            "elit",
            "ullamco",
            "excepteur",
            "ad",
            "quis",
            "dolore"
        ],
        friends: [
            {
                "id": 0,
                "name": "Mcmillan Knox"
            },
            {
                "id": 1,
                "name": "Flossie Dixon"
            },
            {
                "id": 2,
                "name": "Sears Carson"
            }
        ],
        greeting: "Hello, Diaz Pena! You have 13 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3e502a2f526b689c3e",
        index: 14,
        guid: "459cc82d-7878-42cb-b9c6-073506380036",
        isActive: true,
        balance: "$2,940.24",
        picture: "http://placehold.it/32x32",
        age: 40,
        eyeColor: "brown",
        name: "Heath Castaneda",
        gender: "male",
        company: "NETPLODE",
        email: "heathcastaneda@netplode.com",
        phone: "+1 (944) 478-3741",
        address: "278 Village Road, Sunnyside, Massachusetts, 7496",
        about: "Consectetur mollit cupidatat ex consectetur eiusmod ut. Cupidatat anim cupidatat cupidatat minim ipsum et quis amet proident pariatur. Do consectetur fugiat quis nisi non. Ut eu consequat consequat in ullamco eiusmod quis cillum sunt dolore anim. Non irure aliqua aliqua enim elit labore consequat.\r\n",
        registered: "2014-07-30T21:38:43 +05:00",
        latitude: 69.928876,
        longitude: 33.649878,
        tags: [
            "elit",
            "commodo",
            "ut",
            "ullamco",
            "ullamco",
            "velit",
            "ullamco"
        ],
        friends: [
            {
                id: 0,
                name: "Dora Mack"
            },
            {
                id: 1,
                name: "Christensen Camacho"
            },
            {
                id: 2,
                name: "Castro Kelly"
            }
        ],
        greeting: "Hello, Heath Castaneda! You have 12 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3e69d22e49c7fe62de",
        index: 15,
        guid: "33d2bbe5-d6f7-4844-88fc-b9f6af63b373",
        isActive: false,
        balance: "$3,062.41",
        picture: "http://placehold.it/32x32",
        age: 38,
        eyeColor: "brown",
        name: "Greer Blankenship",
        gender: "male",
        company: "QUALITERN",
        email: "greerblankenship@qualitern.com",
        phone: "+1 (957) 482-3874",
        address: "557 Ingraham Street, Brambleton, South Dakota, 8482",
        about: "Non in excepteur nostrud consectetur. Qui non consectetur officia incididunt elit laboris exercitation exercitation est minim veniam ullamco dolore. Eu sit aute culpa ex sunt amet. Ut et amet Lorem sunt anim pariatur.\r\n",
        registered: "2014-03-30T21:39:41 +05:00",
        latitude: -71.093388,
        longitude: 65.740255,
        tags: [
            "enim",
            "eiusmod",
            "Lorem",
            "reprehenderit",
            "nisi",
            "anim",
            "sunt"
        ],
        friends: [
            {
                id: 0,
                name: "Woods Norman"
            },
            {
                id: 1,
                name: "Marilyn Haney"
            },
            {
                id: 2,
                name: "Webster Nielsen"
            }
        ],
        greeting: "Hello, Greer Blankenship! You have 7 unread messages.",
        favoriteFruit: "banana"
    },
    {
        id: "54e23c3e42676228c442a669",
        index: 16,
        guid: "e44604f0-c7a8-4b89-bda3-0f4710ebe28a",
        isActive: false,
        balance: "$3,067.82",
        picture: "http://placehold.it/32x32",
        age: 32,
        eyeColor: "green",
        name: "Coffey Hayes",
        gender: "male",
        company: "INQUALA",
        email: "coffeyhayes@inquala.com",
        phone: "+1 (880) 451-3490",
        address: "490 Durland Place, Craig, Tennessee, 5034",
        about: "Est esse irure Lorem ullamco veniam fugiat laborum veniam excepteur. Ad enim pariatur nostrud excepteur et nostrud velit dolore ex enim cillum in aliquip fugiat. Nulla laborum exercitation irure magna elit laborum magna ad excepteur. Cillum pariatur Lorem eiusmod ad dolore eiusmod veniam do minim laborum in dolor. Reprehenderit elit ad id voluptate Lorem Lorem dolor cupidatat excepteur. Proident minim ea aute nulla.\r\n",
        registered: "2014-04-01T23:04:39 +05:00",
        latitude: -30.662644,
        longitude: 59.806684,
        tags: [
            "duis",
            "est",
            "in",
            "officia",
            "nostrud",
            "occaecat",
            "mollit"
        ],
        friends: [
            {
                id: 0,
                name: "Suarez Perry"
            },
            {
                id: 1,
                name: "Marlene Sheppard"
            },
            {
                id: 2,
                name: "Cohen Yates"
            }
        ],
        greeting: "Hello, Coffey Hayes! You have 19 unread messages.",
        favoriteFruit: "strawberry"
    },
    {
        id: "54e23c3e4ac5969958013235",
        index: 17,
        guid: "fa7e26df-d239-41e8-9aa9-be5e808b6f89",
        isActive: true,
        balance: "$2,646.76",
        picture: "http://placehold.it/32x32",
        age: 24,
        eyeColor: "brown",
        name: "Leanne Hurst",
        gender: "female",
        company: "ACCIDENCY",
        email: "leannehurst@accidency.com",
        phone: "+1 (820) 420-3317",
        address: "196 Columbus Place, Carbonville, New Jersey, 7513",
        about: "Dolor occaecat dolore ut tempor. Veniam elit anim duis do pariatur. Qui excepteur nisi eiusmod mollit laboris fugiat commodo ipsum reprehenderit labore cillum. Aliquip laborum commodo nisi cupidatat labore nostrud exercitation adipisicing mollit eu magna proident ex Lorem. Nostrud magna sint sint consequat consectetur et sint.\r\n",
        registered: "2014-11-10T01:25:55 +06:00",
        latitude: 16.671695,
        longitude: 139.707959,
        tags: [
            "culpa",
            "deserunt",
            "tempor",
            "quis",
            "reprehenderit",
            "incididunt",
            "est"
        ],
        friends: [
            {
                id: 0,
                name: "Farley Frank"
            },
            {
                id: 1,
                name: "Pruitt Frye"
            },
            {
                id: 2,
                name: "Simpson Cardenas"
            }
        ],
        greeting: "Hello, Leanne Hurst! You have 5 unread messages.",
        favoriteFruit: "banana"
    },
    {
        id: "54e23c3ed945981ba2580614",
        index: 18,
        guid: "e608dc5c-fee4-4086-971b-3ebd37bfa137",
        isActive: true,
        balance: "$2,227.79",
        picture: "http://placehold.it/32x32",
        age: 22,
        eyeColor: "brown",
        name: "Ewing Larson",
        gender: "male",
        company: "ESCENTA",
        email: "ewinglarson@escenta.com",
        phone: "+1 (943) 439-3760",
        address: "136 Beard Street, Wattsville, New Hampshire, 2803",
        about: "Veniam eiusmod exercitation culpa mollit reprehenderit ullamco voluptate voluptate irure qui duis anim et. Laborum dolor quis do voluptate. In pariatur dolor id mollit et enim. Qui ex qui in cillum irure enim non reprehenderit irure et excepteur aliquip eu eu.\r\n",
        registered: "2014-07-21T19:17:41 +05:00",
        latitude: 15.903555,
        longitude: -159.721203,
        tags: [
            "Lorem",
            "magna",
            "dolor",
            "aliquip",
            "reprehenderit",
            "eu",
            "voluptate"
        ],
        friends: [
            {
                id: 0,
                name: "Suzette Huffman"
            },
            {
                id: 1,
                name: "Paige Santiago"
            },
            {
                id: 2,
                name: "Dollie Fernandez"
            }
        ],
        greeting: "Hello, Ewing Larson! You have 16 unread messages.",
        favoriteFruit: "strawberry"
    }
];
// Exercise 5. Create an object named profileReport and add the following methods that use the "profiles" JSON data.
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  getInactiveCount() should return the number of inactive profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getLowestBalance() should return the customer name with the lowest balance
//  getHighestBalance() should return the customer name with the highest balance
//  getMostFavoriteFruit() should return the most common fruit
//  getLeastFavoriteFruit() should return the least favorite fruit
//  getTotalNumberOfUnreadMessages() should return the number of unread messages for all users
//  getAverageNumberOfUnreadMessages() should return the average number of unread mesages per user.
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.

var profileReport = {
    getProfileCount: function () {
        return profile.length;
    },
    getActiveCount: function () {
        var activePRof = 0;
        profile.forEach(function (prof) {
            if (prof.isActive === true) {
                activePRof++;
            }
        });
        return activePRof;
    },
    getInactiveCount: function () {
        var inactivePRof = 0;
        profile.forEach(function (prof) {
            if (prof.isActive === false) {
                inactivePRof++;
            }
        });
        return inactivePRof;
    },
    sumOfAllBalances: function () {
        var totalBal = 0;
        profile.forEach(function (bal) {
            var fixNum = bal.balance.replace('$', '');
            fixNum = fixNum.replace(',', '');
            totalBal += parseFloat(fixNum);
        });
        return totalBal;
    },
    getAverageBalance: function () {
        var avg = this.sumOfAllBalances() / this.getProfileCount();
        return avg.toFixed(2);
    },
    getLowestBalance: function () {
        var lowestIndex;
        var lowestVal;
        profile.forEach(function (bal, index) {
            var fixNum = bal.balance.replace('$', '');
            fixNum = fixNum.replace(',', '');
            if (typeof lowestVal === "undefined" || lowestVal > fixNum) {
                lowestVal = fixNum;
                lowestIndex = index;
            }
        });
        return profile[lowestIndex].name;
    },
    getHighestBalance: function () {
        var highestVal;
        var highestIndex;
        profile.forEach(function (bal, index) {
            var fixNum = bal.balance.replace('$', '');
            fixNum = fixNum.replace(',', '');
            if (typeof highestVal === "undefined" || highestVal < fixNum) {
                highestIndex = fixNum;
                highestIndex = index;
            }
        });
        return profile[highestIndex].name;
    },
    getMostFavoriteFruit: function () {
        var fruitArray = [];
        profile.forEach(function (fav) {
            fruitArray.push(fav.favoriteFruit);
        });

        var mostDup = 0;
        var mostDupIndex = 0;
        for (var i = 0; i < fruitArray.length; i++) {
            var dupCount = 0;
            for (var j = i + 1; j < fruitArray.length; j++) {
                if (fruitArray[i] === fruitArray[j]) {
                    dupCount++;
                }
            }
            if (dupCount > mostDup) {
                mostDup = dupCount;
                mostDupIndex = i;
            }
        }
        return profile[mostDupIndex].favoriteFruit;
    },
    getLeastFavoriteFruit: function () {
        var fruitArray = [];
        profile.forEach(function (fav) {
            fruitArray.push(fav.favoriteFruit);
        });

        var leastDup = fruitArray.length;
        var leastDupIndex = 0;
        for (var i = 0; i < fruitArray.length; i++) {
            var dupCount = 0;
            for (var j = i + 1; j < fruitArray.length; j++) {
                if (fruitArray[i] === fruitArray[j]) {
                    dupCount++;
                }
            }
            if (dupCount < leastDup) {
                leastDup = dupCount;
                leastDupIndex = i;
            }
        }
        return profile[leastDupIndex].favoriteFruit;
    },
    getTotalNumberOfUnreadMessages: function () {
        var totalUnread = 0;
        profile.forEach(function (unread) {
            var messageNum = unread.greeting.match(/\d+/g);
            totalUnread += parseInt(messageNum);
        });
        return totalUnread;
    },
    getAverageNumberOfUnreadMessages: function () {
        var avg = this.getTotalNumberOfUnreadMessages() / this.getProfileCount();
        return avg.toFixed(2);
    },
    getAverageAge: function () {
        var totalAge = 0;
        profile.forEach(function (person) {
            totalAge += person.age;
        });
        return (totalAge / this.getProfileCount()).toFixed(0);
    },
    getGenderCounts: function () {
        var maleCount = 0;
        var femaleCount = 0;
        profile.forEach(function (person) {
            if (person.gender === "male") {
                maleCount++;
            } else {
                femaleCount++;
            }
        });
        return "\"m\": " + maleCount + ", \"f\": " + femaleCount;
    },
    getAllCompanyNames: function () {
        var companyArray = [];
        profile.forEach(function (person) {
            companyArray.push(person.company);
        });
        return companyArray;
    },
    getMostCommonEyeColor: function () {
        var eyeArray = [];
        profile.forEach(function (fav) {
            eyeArray.push(fav.eyeColor);
        });

        var mostDup = 0;
        var mostDupIndex = 0;
        for (var i = 0; i < eyeArray.length; i++) {
            var dupCount = 0;
            for (var j = i + 1; j < eyeArray.length; j++) {
                if (eyeArray[i] === eyeArray[j]) {
                    dupCount++;
                }
            }
            if (dupCount > mostDup) {
                mostDup = dupCount;
                mostDupIndex = i;
            }
        }
        return profile[mostDupIndex].eyeColor;
    },
    getBalancesForActiveAndNonActive: function () {
        var activeBalance = 0;
        var inactiveBalance = 0;
        var fixNum;
        profile.forEach(function (prof) {
            if (prof.isActive === true) {
                fixNum = prof.balance.replace('$', '');
                fixNum = fixNum.replace(',', '');
                activeBalance += parseFloat(fixNum);
            } else {
                fixNum = prof.balance.replace('$', '');
                fixNum = fixNum.replace(',', '');
                inactiveBalance += parseFloat(fixNum);
            }
        });
        return "\"Active-balances\": " + activeBalance.toFixed(2) + ", \"Inactive-balances\": " + inactiveBalance.toFixed(2);
    }
};

// console.log(profileReport.getProfileCount());
// console.log(profileReport.getActiveCount());
// console.log(profileReport.getInactiveCount());
// console.log(profileReport.sumOfAllBalances());
// console.log(profileReport.getAverageBalance());
// console.log(profileReport.getLowestBalance());
// console.log(profileReport.getHighestBalance());
// console.log(profileReport.getMostFavoriteFruit());
// console.log(profileReport.getLeastFavoriteFruit());
// console.log(profileReport.getTotalNumberOfUnreadMessages());
// console.log(profileReport.getAverageNumberOfUnreadMessages());
// console.log(profileReport.getAverageAge());
// console.log(profileReport.getGenderCounts());
// console.log(profileReport.getAllCompanyNames());
// console.log(profileReport.getMostCommonEyeColor());
// console.log(profileReport.getBalancesForActiveAndNonActive());

// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
// Now create a variable named person2 and assign person1 to it.
// Then reassign the name property on person2 with person2.name = "Bob";
// console.log the name property on person 1.
// Why do you think changing person2 altered person1?
// The term for this behavior is assignment by reference.

var person1 = {name: "Phil"};
var person2 = person1;
person2.name = "Bob";
// console.log(person1);
// console.log(person2);


// Exercise 7. More practice with assignment by reference
// Add the following HTML to your index.html page in this project.
// <input type="text" id="input" name="input">
// now, create a variable named input and assign it document.getElementById("input").
// now run input.value = "Hello" from the JS console. Did you see any HTML change?
// Create a second variable named inputElement.
// var inputElement = document.getElementById("input");
// now, run inputElement.value = "I am altering an object by altering its properties" in your JS console.
// See how both the "input" and "textInput" varialbes are referencing the same underlying HTML element?
// This behavior is another example of "assignment by reference"

// var input = document.getElementById("input");
// var inputElement = document.getElementById("input");



const sketch = require("sketch");
const shortid = require("shortid");

const { DataSupplier } = sketch;

//local
const names = require("../assets/Names");
const lastnames = require("../assets/LastNames");
const cities = require("../assets/Cities");
const dates = require("../assets/Dates");
const streets = require("../assets/Streets");
const alleys = require("../assets/Alleys");
const jobs = require("../assets/Jobs");
const building = require("../assets/Building");
const zipcodes = require("../assets/ZipcodePrefixes");

export function onStartup() {
    DataSupplier.registerDataSupplier("public.text", "ID", "SupplyId");
    DataSupplier.registerDataSupplier("public.text", "Name", "SupplyNames");
    DataSupplier.registerDataSupplier("public.text", "City", "SupplyCities");
    DataSupplier.registerDataSupplier("public.text", "Date", "SupplyDates");
    DataSupplier.registerDataSupplier("public.text", "Time", "SupplyTime");
    DataSupplier.registerDataSupplier("public.text", "Job", "SupplyJobs");
    DataSupplier.registerDataSupplier(
        "public.text",
        "Zipcode",
        "SupplyZipcodes"
    );
    DataSupplier.registerDataSupplier(
        "public.text",
        "Address",
        "SupplyAddress"
    );
    DataSupplier.registerDataSupplier(
        "public.text",
        "Phone number",
        "SupplyPhones"
    );
}

export function onShutdown() {
    DataSupplier.deregisterDataSuppliers();
}

export function onSupplyCities(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dynamicData = cities.slice(Math.floor(Math.random() * cities.length));
    dynamicData.push.apply(dynamicData, cities);
    while (dynamicData.length < dataCount) {
        dynamicData.push.apply(dynamicData, cities);
    }

    shuffle(dynamicData);
    dynamicData = dynamicData.slice(0, dataCount);
    var dataIndex = 0;
    while (dataIndex < dataCount) {
        DataSupplier.supplyDataAtIndex(
            dataKey,
            dynamicData[dataIndex],
            dataIndex
        );
        dataIndex++;
    }
}

export function onSupplyPhones(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var numbersFirstPart = [
        "۰۹۰۱",
        "۰۹۰۲",
        "۰۹۰۳",
        "۰۹۱۱",
        "۰۹۱۲",
        "۰۹۱۳",
        "۰۹۱۴",
        "۰۹۱۵",
        "۰۹۱۶",
        "۰۹۱۷",
        "۰۹۱۸",
        "۰۹۳۰",
        "۰۹۳۴",
        "۰۹۳۵",
        "۰۹۳۶",
        "۰۹۳۷",
        "۰۹۳۸",
        "۰۹۳۹",
        "۰۹۹۰"
    ];

    var dynamicData = numbersFirstPart.slice(
        Math.floor(Math.random() * numbersFirstPart.length)
    );

    dynamicData.push.apply(dynamicData, numbersFirstPart);

    while (dynamicData.length < dataCount) {
        dynamicData.push.apply(dynamicData, numbersFirstPart);
    }

    shuffle(dynamicData);
    dynamicData = dynamicData.slice(0, dataCount);
    var dataIndex = 0;
    while (dataIndex < dataCount) {
        var randomNumber = Math.floor(
            Math.random() * (9999999 - 1000000) + 1000000
        );

        DataSupplier.supplyDataAtIndex(
            dataKey,
            `${dynamicData[dataIndex]}${toPersian(randomNumber)}`,
            dataIndex
        );
        dataIndex++;
    }
}

export function onSupplyId(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        var id = shortid.generate();

        DataSupplier.supplyDataAtIndex(dataKey, id, dataIndex);
        dataIndex++;
    }
}

export function onSupplyNames(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    // Start the data to be provided at a random position in the array.
    var namesDynamicData = names.slice(
        Math.floor(Math.random() * names.length)
    );
    namesDynamicData.push.apply(namesDynamicData, names);
    while (namesDynamicData.length < dataCount) {
        namesDynamicData.push.apply(namesDynamicData, names);
    }

    // Start the data to be provided at a random position in the array.
    var lastNamesDynamicData = lastnames.slice(
        Math.floor(Math.random() * lastnames.length)
    );
    lastNamesDynamicData.push.apply(lastNamesDynamicData, lastnames);
    while (lastNamesDynamicData.length < dataCount) {
        lastNamesDynamicData.push.apply(lastNamesDynamicData, lastnames);
    }

    shuffle(namesDynamicData);
    shuffle(lastNamesDynamicData);

    namesDynamicData = namesDynamicData.slice(0, dataCount);
    lastNamesDynamicData = lastNamesDynamicData.slice(0, dataCount);

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        DataSupplier.supplyDataAtIndex(
            dataKey,
            `${namesDynamicData[dataIndex]} ${lastNamesDynamicData[dataIndex]}`,
            dataIndex
        );
        dataIndex++;
    }
}

export function onSupplyDates(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dynamicData = dates.slice(Math.floor(Math.random() * dates.length));
    dynamicData.push.apply(dynamicData, dates);
    while (dynamicData.length < dataCount) {
        dynamicData.push.apply(dynamicData, dates);
    }

    shuffle(dynamicData);
    dynamicData = dynamicData.slice(0, dataCount);
    var dataIndex = 0;
    while (dataIndex < dataCount) {
        DataSupplier.supplyDataAtIndex(
            dataKey,
            dynamicData[dataIndex],
            dataIndex
        );
        dataIndex++;
    }
}

export function onSupplyTime(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var times = [];

    for (var i = 0; i < dataCount; i++) {
        var hour = Math.floor(Math.random() * 23) + 1;
        var minute = Math.floor(Math.random() * 60) + 1;

        var modifiedHour = hour < 10 ? `0${hour}` : hour;
        var modifiedMinute = minute < 10 ? `0${minute}` : minute;

        times.push(`${toPersian(modifiedHour)}:${toPersian(modifiedMinute)}`);
    }

    shuffle(times);

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        DataSupplier.supplyDataAtIndex(dataKey, times[dataIndex], dataIndex);
        dataIndex++;
    }
}

export function onSupplyAddress(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var addresses = [];

    for (var i = 0; i < dataCount; i++) {
        var streetIndex = Math.floor(Math.random() * streets.length);
        var alleyIndex = Math.floor(Math.random() * alleys.length);
        var cityIndex = Math.floor(Math.random() * cities.length);
        var buildingIndex = Math.floor(Math.random() * building.length);
        var unit = Math.floor(Math.random() * 100) + 1;

        var address = `${cities[cityIndex]}، خیابان ${
            streets[streetIndex]
        }، کوچه ${alleys[alleyIndex]}، ${
            building[buildingIndex]
        }، واحد ${toPersian(unit)}`;

        addresses.push(address);
    }

    shuffle(addresses);

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        DataSupplier.supplyDataAtIndex(
            dataKey,
            addresses[dataIndex],
            dataIndex
        );
        dataIndex++;
    }
}

export function onSupplyJobs(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var selectedJobs = [];

    for (var i = 0; i < dataCount; i++) {
        var jobIndex = Math.floor(Math.random() * jobs.length);

        selectedJobs.push(jobs[jobIndex]);
    }

    shuffle(selectedJobs);

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        DataSupplier.supplyDataAtIndex(
            dataKey,
            selectedJobs[dataIndex],
            dataIndex
        );
        dataIndex++;
    }
}

export function onSupplyZipcodes(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var selectedZipcodes = [];

    for (var i = 0; i < dataCount; i++) {
        var zipcodeIndex = Math.floor(Math.random() * zipcodes.length);

        selectedZipcodes.push(
            `${zipcodes[zipcodeIndex]}-${toPersian(
                getRndInteger(10000, 99999)
            )}`
        );
    }

    shuffle(selectedZipcodes);

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        DataSupplier.supplyDataAtIndex(
            dataKey,
            selectedZipcodes[dataIndex],
            dataIndex
        );
        dataIndex++;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const toPersian = value => {
    const charCodeZero = "۰".charCodeAt(0);
    return String(value).replace(/[0-9]/g, w =>
        String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
    );
};

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

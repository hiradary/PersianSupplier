const sketch = require("sketch");
const shortid = require("shortid");

//constants
const names = require("../constants/Names");
const address = require("../constants/Address");
const lastnames = require("../constants/LastNames");
const CITIES = require("../constants/Cities");
const PROVINCES = require("../constants/Provinces");
const COUNTRIES = require("../constants/Countries");
const JOBS = require("../constants/Jobs");
const ZIPCODE_PREFIXES = require("../constants/ZipcodePrefixes");

//utils
const utils = require("../utils");

//variables
const { ALLEYS, BUILDINGS, STREETS } = address;
const { DataSupplier } = sketch;
const { LAST_NAMES, EN_LAST_NAMES } = lastnames;
const { NAMES, EN_NAMES } = names;
const { getRndInteger, putZero, toPersian, getRndBoolean, sample } = utils;

export function onStartup() {
    DataSupplier.registerDataSupplier("public.text", "ID", "SupplyId");
    DataSupplier.registerDataSupplier("public.text", "Name", "SupplyNames");
    DataSupplier.registerDataSupplier("public.text", "City", "SupplyCities");
    DataSupplier.registerDataSupplier("public.text", "Province", "SupplyProvinces");
    DataSupplier.registerDataSupplier("public.text", "Country", "SupplyCountries");
    DataSupplier.registerDataSupplier("public.text", "Date", "SupplyDates");
    DataSupplier.registerDataSupplier("public.text", "Time", "SupplyTime");
    DataSupplier.registerDataSupplier("public.text", "Job", "SupplyJobs");
    DataSupplier.registerDataSupplier("public.text", "Email", "SupplyEmail");
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
    DataSupplier.registerDataSupplier("public.text", "Phone", "SupplyPhones");
}

export function onShutdown() {
    DataSupplier.deregisterDataSuppliers();
}

export function onSupplyCities(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const city = sample(CITIES);
        DataSupplier.supplyDataAtIndex(dataKey, city, dataIndex);
        dataIndex++;
    }
}

export function onSupplyProvinces(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const city = sample(PROVINCES);
        DataSupplier.supplyDataAtIndex(dataKey, city, dataIndex);
        dataIndex++;
    }
}

export function onSupplyCountries(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const country = sample(COUNTRIES);
        DataSupplier.supplyDataAtIndex(dataKey, country, dataIndex);
        dataIndex++;
    }
}

export function onSupplyPhones(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var phonePrefixes = [
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

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const randomNumber = Math.floor(
            Math.random() * (9999999 - 1000000) + 1000000
        );
        const phonePrefix = sample(phonePrefixes);

        const phone = `${phonePrefix}${toPersian(randomNumber)}`;

        DataSupplier.supplyDataAtIndex(dataKey, phone, dataIndex);
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

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const name = sample(NAMES);
        const lastname = sample(LAST_NAMES);

        const text = `${name} ${lastname}`;

        DataSupplier.supplyDataAtIndex(dataKey, text, dataIndex);
        dataIndex++;
    }
}

export function onSupplyDates(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const year = "۹۷";
        const month = toPersian(putZero(Math.floor(Math.random() * 12) + 1));
        const day = toPersian(putZero(Math.floor(Math.random() * 30) + 1));

        const date = `${year}/${month}/${day}`;

        DataSupplier.supplyDataAtIndex(dataKey, date, dataIndex);
        dataIndex++;
    }
}

export function onSupplyTime(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const hour = putZero(Math.floor(Math.random() * 23) + 1);
        const minute = putZero(Math.floor(Math.random() * 60) + 1);
        const time = `${toPersian(hour)}:${toPersian(minute)}`;

        DataSupplier.supplyDataAtIndex(dataKey, time, dataIndex);
        dataIndex++;
    }
}

export function onSupplyAddress(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        var street = sample(STREETS);
        var alley = sample(ALLEYS);
        var city = sample(CITIES);
        var building = sample(BUILDINGS);
        var unit = Math.floor(Math.random() * 100) + 1;

        var address = `${city}، خیابان ${street}، کوچه ${alley}، ${building}، واحد ${toPersian(
            unit
        )}`;

        DataSupplier.supplyDataAtIndex(dataKey, address, dataIndex);
        dataIndex++;
    }
}

export function onSupplyJobs(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const job = sample(JOBS);

        DataSupplier.supplyDataAtIndex(dataKey, job, dataIndex);
        dataIndex++;
    }
}

export function onSupplyZipcodes(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const zipcode = `${sample(ZIPCODE_PREFIXES)}-${toPersian(
            getRndInteger(10000, 99999)
        )}`;

        DataSupplier.supplyDataAtIndex(dataKey, zipcode, dataIndex);
        dataIndex++;
    }
}

export function onSupplyEmail(context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;

    const seperators = ["_", ".", ""];
    const suffixes = ["gmail", "yahoo", "icloud", "aol", "mail", "outlook"];

    var dataIndex = 0;
    while (dataIndex < dataCount) {
        const name = sample(EN_NAMES);
        const lastname = sample(EN_LAST_NAMES);
        const seperator = sample(seperators);
        const useNumber = getRndBoolean();
        const suffix = sample(suffixes);

        const email = `${name}${seperator}${lastname}${useNumber ||
            ""}@${suffix}.com`;

        DataSupplier.supplyDataAtIndex(dataKey, email, dataIndex);
        dataIndex++;
    }
}

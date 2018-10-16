const sketch = require('sketch')
const names = require('../assets/Names');
const lastnames = require('../assets/LastNames');
const cities = require('../assets/Cities');
const dates = require('../assets/Dates');
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {

  DataSupplier.registerDataSupplier('public.text', 'Names', 'SupplyNames');
  DataSupplier.registerDataSupplier('public.text', 'Cities', 'SupplyCities');
  DataSupplier.registerDataSupplier('public.text', 'Dates', 'SupplyDates');
  DataSupplier.registerDataSupplier('public.text', 'Phone Numbers', 'SupplyPhones');

}

export function onShutdown () {
  DataSupplier.deregisterDataSuppliers();
}

export function onSupplyCities (context) {
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
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;  
  } 
}

export function onSupplyPhones (context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;

  var randomNumber = Math.floor(Math.random() * (9999999 - 1000000) + 1000000);

  var numbersFirstPart = [
    '0901',
    '0902',
    '0903',
    '0911',
    '0912',
    '0913',
    '0914',
    '0915',
    '0916',
    '0917',
    '0918',
    '0930',
    '0934',
    '0935',
    '0936',
    '0937',
    '0938',
    '0939',
    '0990',
  ];

  var dynamicData = numbersFirstPart.slice(Math.floor(Math.random() * numbersFirstPart.length));
  dynamicData.push.apply(dynamicData, numbersFirstPart);
  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, numbersFirstPart);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;
  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, `${dynamicData}${randomNumber}`, dataIndex);
    dataIndex++;  
  } 
}


export function onSupplyNames (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    
    // Start the data to be provided at a random position in the array.
    var namesDynamicData = names.slice(Math.floor(Math.random() * names.length));
    namesDynamicData.push.apply(namesDynamicData, names);
    while (namesDynamicData.length < dataCount) {
      namesDynamicData.push.apply(namesDynamicData, names);
    }

    // Start the data to be provided at a random position in the array.
    var lastNamesDynamicData = lastnames.slice(Math.floor(Math.random() * lastnames.length));
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
      DataSupplier.supplyDataAtIndex(dataKey, `${namesDynamicData[dataIndex]} ${lastNamesDynamicData[dataIndex]}`, dataIndex);
      dataIndex++;  
    } 
    // DataSupplier.supplyData(dataKey, dynamicData);  
  }

export function onSupplyDates (context) {
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
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;  
  } 
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
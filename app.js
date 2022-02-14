const bestPiceLocation = document.getElementById('best-price');
const subTotalPriceLocation = document.getElementById('sub-total-price');


// adding all the prices
function addPrice(price) {
    subTotalPriceLocation.innerText = parseInt(bestPiceLocation.innerText) + parseInt(deliveryPriceLocation.innerText) + parseInt(storagePriceLocation.innerText) + parseInt(memoryPriceLocation.innerText);
};


// event handler for 8GB memory button
const memoryPriceLocation = document.getElementById('memory-price');
document.getElementById('memory-eight').addEventListener('click', function () {
    memoryPriceLocation.innerText = 100;
    addPrice();
});


// event handler for 16GB memory button
document.getElementById('memory-sixteen').addEventListener('click', function () {
    memoryPriceLocation.innerText = 150;
    addPrice();
});


// event handler for storage
const storagePriceLocation = document.getElementById('storage-price');
document.getElementById('first-storage').addEventListener('click', function () {
    storagePriceLocation.innerText = 275;
    addPrice();
});
document.getElementById('second-storage').addEventListener('click', function () {
    storagePriceLocation.innerText = 330;
    addPrice();
});
document.getElementById('third-storage').addEventListener('click', function () {
    storagePriceLocation.innerText = 430;
    addPrice();
});


// event handler for delivery button
const deliveryPriceLocation = document.getElementById('delivery-price');
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryPriceLocation.innerText = 0;
    addPrice();
});
document.getElementById('charge-delivery').addEventListener('click', function () {
    deliveryPriceLocation.innerText = 20;
    addPrice();
});




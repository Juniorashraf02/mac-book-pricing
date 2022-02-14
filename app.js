
const bestPiceLocation = document.getElementById('best-price');
const bestPrice = parseInt(bestPiceLocation.innerText);
const subTotalPriceLocation = document.getElementById('sub-total-price');


// event handler for 8GB memory button
const memoryPriceLocation = document.getElementById('memory-price');
document.getElementById('memory-eight').addEventListener('click', function () {
    memoryPriceLocation.innerText = 100;
    subTotalPriceLocation.innerText = bestPrice + parseInt(memoryPriceLocation.innerText) + parseInt(storagePriceLocation.innerText);
});
// event handler for 16GB memory button
document.getElementById('memory-sixteen').addEventListener('click', function () {
    memoryPriceLocation.innerText = 150;
    subTotalPriceLocation.innerText = bestPrice + parseInt(memoryPriceLocation.innerText) + parseInt(storagePriceLocation.innerText);
});




// event handler for storage
const storagePriceLocation = document.getElementById('storage-price');
document.getElementById('first-storage').addEventListener('click', function () {
    storagePriceLocation.innerText = 275;
    subTotalPriceLocation.innerText = bestPrice + parseInt(storagePriceLocation.innerText) + parseInt(memoryPriceLocation.innerText);
});
document.getElementById('second-storage').addEventListener('click', function () {
    storagePriceLocation.innerText = 330;
    subTotalPriceLocation.innerText = bestPrice + parseInt(storagePriceLocation.innerText) + parseInt(memoryPriceLocation.innerText);
});
document.getElementById('third-storage').addEventListener('click', function () {
    storagePriceLocation.innerText = 430;
    subTotalPriceLocation.innerText = bestPrice + parseInt(storagePriceLocation.innerText) + parseInt(memoryPriceLocation.innerText);
});


// event handler for delivery button
const deliveryPriceLocation = document.getElementById('delivery-price');
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryPriceLocation.innerText = 0;
    subTotalPriceLocation.innerText = bestPrice + parseInt(deliveryPriceLocation.innerText) + parseInt(storagePriceLocation.innerText) + parseInt(memoryPriceLocation.innerText);
});
document.getElementById('charge-delivery').addEventListener('click', function () {
    deliveryPriceLocation.innerText = 20;
    subTotalPriceLocation.innerText = bestPrice + parseInt(deliveryPriceLocation.innerText) + parseInt(storagePriceLocation.innerText) + parseInt(memoryPriceLocation.innerText);

});




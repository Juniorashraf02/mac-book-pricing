const bestPiceLocation = document.getElementById('best-price');
const subTotalPriceLocation = document.getElementById('sub-total-price');
const inputLocation = document.getElementById('input-value');
const memoryPriceLocation = document.getElementById('memory-price');
const storagePriceLocation = document.getElementById('storage-price');
const deliveryPriceLocation = document.getElementById('delivery-price');


updatePrice('memory-eight', memoryPriceLocation, 100);
updatePrice('memory-sixteen', memoryPriceLocation, 150);
updatePrice('first-storage', storagePriceLocation, 300);
updatePrice('second-storage', storagePriceLocation, 450);
updatePrice('third-storage', storagePriceLocation, 550);
updatePrice('free-delivery', deliveryPriceLocation, 0);
updatePrice('charge-delivery', deliveryPriceLocation, 20);

// adding all the prices
function addPrice(price) {
    subTotalPriceLocation.innerText = parseInt(bestPiceLocation.innerText) + parseInt(deliveryPriceLocation.innerText) + parseInt(storagePriceLocation.innerText) + parseInt(memoryPriceLocation.innerText);
};

function updatePrice(id, location, price) {
    document.getElementById(id).addEventListener('click', function () {
        location.innerText = price;
        addPrice();
    });
};

// promo code section
document.getElementById('apply-btn').addEventListener('click', function () {
    if (inputLocation.value == 'istiak') {
        subTotalPriceLocation.innerText = subTotalPriceLocation.innerText - 100;
        document.getElementById('apply-section').style.display = 'none';
        document.getElementById('total').innerText = subTotalPriceLocation.innerText
        return subTotalPriceLocation.innerText;
    }
    else {
        document.getElementById('wrong-code').innerText = 'Invalid promo code!';
        document.getElementById('total').innerText = subTotalPriceLocation.innerText
    }
});





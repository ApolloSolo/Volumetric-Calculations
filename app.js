class FracTank {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
}

//Frac 1A Variables
const frac1A = new FracTank("Frac 1A", 104.04);
const form1A = document.querySelector('#tank1AInputs');
const frac1ATotalOutput = document.querySelector('#oneA-total-gal');
const frac1AWaterOutput = document.querySelector('#oneA-water-gal');
const fra1AProductOutput = document.querySelector('#oneA-product-gal');
const oneAarr = [frac1ATotalOutput, frac1AWaterOutput, fra1AProductOutput];
//Frac 1A Variables

// 1B //
const frac1B = new FracTank("frac 1B", 107.40);
const form1B = document.querySelector('#tank1BInputs');
const frac1BTotalOutput = document.querySelector('#oneB-total-gal');
const frac1BWaterOutput = document.querySelector('#oneB-water-gal');
const fra1BProductOutput = document.querySelector('#oneB-product-gal');
const oneBarr = [frac1BTotalOutput, frac1BWaterOutput, fra1BProductOutput];
// 1B //

function fracVolumeOutput (fracObj, form, arr) {
    const formDTP = parseFloat(form.elements[0].value) * 12;
    const formDTW = parseFloat(form.elements[1].value) * 12;
    const totalLiquidHeight = fracObj.height - formDTP;
    const waterInches = fracObj.height - formDTW;
    let totalGallons = 0;
    let gallonsWater = 0;
    let gallonsProduct = 0;
    //No Product
    if(formDTP === 0){
        totalGallons = findTotalGallons(waterInches);
        gallonsWater = findWaterGallons(waterInches);
        gallonsProduct = totalGallons - gallonsWater;
    }
    //No Water
    else if(formDTW === 0) {
        totalGallons = findTotalGallons(totalLiquidHeight);
        gallonsProduct = totalGallons;
    }
    //Normal Conditions
    else{
        totalGallons = findTotalGallons(totalLiquidHeight);
        gallonsWater = findWaterGallons(waterInches);
        gallonsProduct = totalGallons - gallonsWater; 
    }

    console.log(totalGallons, gallonsWater, gallonsProduct);
    displayValue(arr[0], totalGallons);
    displayValue(arr[1], gallonsWater);
    displayValue(arr[2], gallonsProduct);
}

function displayValue(outputDisplay, volume) {
    outputDisplay.value = volume.toFixed(2);
    outputDisplay.classList.add('center');
}

function findTotalGallons (totalHeight) {
    const totalDecimal = totalHeight - Math.floor(totalHeight);
    const volume = (strapGallons[Math.ceil(totalHeight)] - strapGallons[Math.floor(totalHeight)]) * totalDecimal + strapGallons[Math.floor(totalHeight)];
    return volume;
}

function findWaterGallons (waterHeight) {
    const totalDecimal = waterHeight - Math.floor(waterHeight);
    const volume = (strapGallons[Math.ceil(waterHeight)] - strapGallons[Math.floor(waterHeight)]) * totalDecimal + strapGallons[Math.floor(waterHeight)];
    return volume;
}

const strapGallons = {0: 0.0, 1: 22, 2: 89, 3: 200, 4: 317, 5: 485, 6: 653, 7: 821, 8: 990, 9: 1158, 10: 1326, 11: 1494, 12: 1662, 13: 1830, 14: 1999, 15: 2167, 16: 2335, 17: 2503,
    18: 2671, 19: 2840, 20: 3008, 21: 3176, 22: 3344, 23: 3512, 24: 3680, 25: 3849, 26: 4017, 27: 4185, 28: 4353, 29: 4521, 30: 4690, 31: 4858, 32: 5026, 33: 5194, 34: 5362, 
    35: 5581, 36: 5699, 37: 5867, 38: 6035, 39: 6203, 40: 6371, 41: 6540, 42: 6708, 43: 6876, 44: 7044, 45: 7212, 46: 7381, 47: 7549, 48: 7717, 49: 7885, 50: 8053, 51: 8221, 
    52: 8390, 53: 8558, 54: 8726, 55: 8894, 56: 9062, 57: 9231, 58: 9399, 59: 9567, 60: 9735, 61: 9903, 62: 10071, 63: 10240, 64: 10408, 65: 10576, 66: 10744, 67: 10912, 68: 11081, 
    69: 11249, 70: 11417, 71: 11585, 72: 11753, 73: 11922, 74: 12090, 75: 12258, 76: 12426, 77: 12594, 78: 12762, 79: 12931, 80: 13099, 81: 13267, 82: 13435, 83: 13603, 84: 13772, 
    85: 13940, 86: 14108, 87: 14276, 88: 14444, 89: 14612, 90: 14781, 91: 14949, 92: 15117, 93: 15285, 94: 15453, 95: 15622, 96: 15790, 97: 15958, 98: 16126
}

form1A.addEventListener('submit', (e) => {
    e.preventDefault();
    fracVolumeOutput(frac1A, form1A, oneAarr);
})

form1B.addEventListener('submit', (e) => {
    e.preventDefault();
    fracVolumeOutput(frac1B, form1B, oneBarr);
})
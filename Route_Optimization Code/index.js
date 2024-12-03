function getNSH(pinCode) {
    var nsh = "Delhi";
    return nsh;
}

function getICH(pinCode) {
    var nsh = "Delhi";
    return ich;
}

function getPinCode(geo_location) {
    pinCode = 452001;
    return pinCode;
}

function getDistance(source, dest) {
    // use google map api here
    return 1500;
}

function planICHTransit() {

}

function getIntraCircleOptimaltPath(sourceNSH, destNSH, distance, postType) {
    // impliment any optimization logic here
    
    
}



function planNSHTransit(sourcePin, destPin, postType) {
    sourceNSH = getNSH(sourcePin);
    destNSH = getNSH(destPin);
    
    distance = getDistance(sourceNSH, destNSH);
    getIntraCircleOptimaltPath(sourceNSH, destNSH, distance, postType);
}


function Plan(sourcePin, destPin, postType) {
    if (sourcePin.slice(0, 3) == destPin.slice(0, 3)) {
        planICHTransit(sourcePin, destPin);
    }
    else {
        planNSHTransit(sourcePin, destPin, postType);
    }
}
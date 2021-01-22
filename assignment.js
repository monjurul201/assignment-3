function kilometerToMeter(kilometer){
    if(kilometer<0){
        return "Kilometer can not be Negative";
    
    }
    else{
        var meter=kilometer*1000;
    
    }
    return meter;
}
var output=kilometerToMeter(-5);
console.log(output);
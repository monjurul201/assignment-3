


function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "kilometer cannot be negative.";

    }
    else {
        var meter = kilometer * 1000;

    }
    return meter;
}
var output = kilometerToMeter(-4);
console.log(output);


//Problem:2

function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return " value Can't Be Negative"
    }
    else {
        return (watch * 50) + (mobile * 50) + (laptop * 500);
    }
}

console.log(budgetCalculator(1, 2, 1));





//problem:3

function hotelCost(days) {

    if (days <= 0) {
        return "Days Can't Be Negative Or Zero";
    }

    if (days <= 10 && days > 0) {
        return days * 100
    }

    else if (days <= 20 && days > 10) {
        let firstTenCost = 10 * 100;
        let remainDays = days - 10;
        return firstTenCost + (remainDays * 80);
    }

    else if (days > 20) {
        let firstTwentyCost = 10 * 100 + 10 * 80
        let remainDays = days - 20;
        return firstTwentyCost + (remainDays * 50);
    }
}

console.log(hotelCost(45))

//problem:4


function megaFriend(friendsName) {
    var bigName = friendsName[0];

    for (i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > bigName.length) {
            bigName = friendsName[i];
        }
    }
    return bigName;
}

console.log(typeof megaFriend(["amin", "jalaol", "khalila", "balila", "amina", "jaminadsfgsg"]));
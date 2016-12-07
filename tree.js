var flower = {
    type: "flower",
    info: "",
    water: 4,
    time: 250
};
var cactus = {
    type: "cactus",
    info: "",
    water: 4,
    time: 250
};
var normalTree = {
    type: "normalTree",
    info: "",
    water: 4,
    time: 250
};
var flower = {
    type: "flower",
    minTem: 0,
    maxTem: 0,
    info: "",
    water: 4,
    time: 250
};
var cactus = {
    type: "cactus",
    info: "",
    water: 4,
    time: 250
};
var normalTree = {
    type: "normalTree",
    info: "",
    water: 4,
    time: 250
};
var suggestText = "";
var status = 0;

function findStatus(type, temp, water) {
    if (type == "Cactus") {
        if (water < 300)
            status += 1024;
        else if (water < 350)
            status += 256;
        else if (water < 900)
            status += 0;
        else
            status += 1024;
        if (temp < 30)
            status += 0;
        else if (temp < 40)
            status += 16;
        else
            status += 1024;
    } else if (type == "Flower") {
        if (water < 300)
            status += 1024;
        else if (water < 350)
            status += 64;
        else if (water < 700)
            status += 0;
        else
            status += 1024;
        if (temp < 15)
            status += 1024;
        else if (temp < 30)
            status += 0;
        else
            status += 1024;
    } else {
        if (water < 300)
            status += 256;
        else if (water < 700)
            status += 0;
        else
            status += 1024;
        if (temp < 15)
            status += 1024;
        else if (temp < 32)
            status += 0;
        else if (temp < 40)
            status += 16;
        else
            status += 1024;
    }
    setTextWaring(status);

}

function setTextWaring(status) {
    if (status == 0)
        suggestText = "fine";
    else if (status == 4)
        suggestText = "watering";
    else if (status == 16)
        suggestText = "no watering";
    else if (status == 64)
        suggestText = "lighting";
    else if (status == 256)
        suggestText = "no lighting";
    else if (status >= 1024)
        suggestText = "dead";
    else if (status == 8)
        suggestText = "watering";
        else if (status == 68)
            suggestText = "watering+light";
        else if (status == 260)
            suggestText = "watering+no light";
        else if (status == 32)
            suggestText = "no watering";
        else if (status == 80)
            suggestText = "no watering+light";
        else if (status == 272)
            suggestText = "no watering+no light";
        else if (status == 128)
            suggestText = "light";
        else if (status == 512)
            suggestText = "no light";
        else
            suggestText = "fine"; $('#sugText').html(suggestText); $('#sugText').css('font-size', '25px');
    }

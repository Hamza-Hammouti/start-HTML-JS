var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Switch light off';
document.body.appendChild(btn);

// schijf hier tussen je code
var licht = "aan";
btn.onclick = aanenuit

function aanenuit() {
    if (licht == "aan") {
        console.log("Het licht is aan");
        document.body.style.backgroundColor = "yellow";
        btn.innerHTML = 'Light switch is on';
        licht = "uit"
    } else {
        console.log("Het licht is uit");
        document.body.style.backgroundColor = "black";
        btn.innerHTML = 'Light switch is off';
        licht = "aan"
    }
}

// schijf hier tussen je code
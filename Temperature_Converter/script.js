function convertTemperature() {

let temp =
parseFloat(
document.getElementById("temperature").value
);

let from =
document.getElementById("fromUnit").value;

let to =
document.getElementById("toUnit").value;

let result =
document.getElementById("result");

/* Validation */

if(isNaN(temp)){

result.innerHTML = `
<div style="
color:#ff6b6b;
font-size:22px;
font-weight:bold;
">
❌ Please Enter A Valid Temperature
</div>
`;

return;
}

/* Same Unit */

if(from === to){

result.innerHTML = `
<div>

<h2 style="
color:#22c55e;
margin-bottom:10px;
">
${temp.toFixed(2)} °${to}
</h2>

<p>
Both units are same.
</p>

</div>
`;

return;
}

let converted;

/* Celsius */

if(from === "C" && to === "F"){

converted = (temp * 9/5) + 32;

}

else if(from === "C" && to === "K"){

converted = temp + 273.15;

}

/* Fahrenheit */

else if(from === "F" && to === "C"){

converted = (temp - 32) * 5/9;

}

else if(from === "F" && to === "K"){

converted = ((temp - 32) * 5/9) + 273.15;

}

/* Kelvin */

else if(from === "K" && to === "C"){

converted = temp - 273.15;

}

else if(from === "K" && to === "F"){

converted = ((temp - 273.15) * 9/5) + 32;

}

/* Output */

result.innerHTML = `

<div style="
width:100%;
">

<h1 style="
font-size:45px;
color:#22c55e;
margin-bottom:15px;
">
${converted.toFixed(2)} °${to}
</h1>

<p style="
font-size:20px;
color:#cbd5e1;
margin-bottom:10px;
">
${temp} °${from}
</p>

<p style="
font-size:28px;
font-weight:bold;
">
⬇
</p>

<p style="
font-size:22px;
color:white;
margin-top:10px;
">
${converted.toFixed(2)} °${to}
</p>

</div>

`;
}

/* Enter Key Support */

document
.getElementById("temperature")
.addEventListener("keypress", function(e){

if(e.key === "Enter"){

convertTemperature();

}

});

/* Default Welcome Message */

window.onload = function(){

document.getElementById("result").innerHTML = `

<div>

<h2 style="
color:#22c55e;
">
🌡 Ready To Convert
</h2>

<p style="
margin-top:10px;
color:#cbd5e1;
">
Enter temperature and choose units.
</p>

</div>

`;

};
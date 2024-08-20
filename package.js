// get references to the plus and minus button 
const increasePressed = document.getElementById('increase');
const decreasedPressed = document.getElementById('decrease');

// get references to the display element
const displayEle1 = document.getElementById('el');
const onedisplayEle1 = document.getElementById('room');
const btnclick1 = document.getElementById('button');
const list1 = document.getElementById('hide_btn_diplay1');
const result1 = document.getElementById('result_display1');

// initial value
let currentValue = 199;
let onedisplay1 = 1;

//function to update the display
function updateOneDisplay1() {
    onedisplayEle1.textContent = onedisplay1;
}

function updateDisplay1() {
    displayEle1.textContent = currentValue;
}

function submit1() {
    result1.textContent = `Thank you for choosing ${onedisplay1} room(s)`;
}

// Eventlistener for the plus button
increasePressed.addEventListener('click', function () {
    currentValue += 199;
    onedisplay1 += 1;
    updateDisplay1();
    updateOneDisplay1();

    // Enable the minus button if procurrentvaly is greater than 199
    if (currentValue > 199) {
        decreasedPressed.disabled = false;
    }
});

// Eventlistener for the minus button
decreasedPressed.addEventListener('click', function () {
    currentValue -= 199;
    onedisplay1 -= 1;
    updateDisplay1();
    updateOneDisplay1();

    // Disable the minus button if procurrentvaly is back to 199
    if (currentValue === 199) {
        decreasedPressed.disabled = true;
    }
});

// initially disable the minus button
decreasedPressed.disabled = true;

// initial display
updateDisplay1();
updateOneDisplay1();
submit1();


// Pro package
// get references to the plus and minus button 
const proincreasePressed = document.getElementById('proincrease');
const prodecreasedPressed = document.getElementById('prodecrease');

// get references to the display element
const displayEle = document.getElementById('proel');
const onedisplayEle = document.getElementById('proroom');
const btnclick = document.getElementById('button');
const list = document.getElementById('hide_btn_diplay');
const result = document.getElementById('result_display');

// initial value
let procurrentValue = 249;
let onedisplay = 1;

//function to update the display
function updateOneDisplay() {
    onedisplayEle.textContent = onedisplay;
}

function updateDisplay() {
    displayEle.textContent = procurrentValue;
}

function submit() {
    result.textContent = `Thank you for choosing ${onedisplay} room(s)`;
}

// Eventlistener for the plus button
proincreasePressed.addEventListener('click', function () {
    procurrentValue += 249;
    onedisplay += 1;
    updateDisplay();
    updateOneDisplay();

    // Enable the minus button if procurrentvaly is greater than 249
    if (procurrentValue > 249) {
        prodecreasedPressed.disabled = false;
    }
});

// Eventlistener for the minus button
prodecreasedPressed.addEventListener('click', function () {
    procurrentValue -= 249;
    onedisplay -= 1;
    updateDisplay();
    updateOneDisplay();

    // Disable the minus button if procurrentvaly is back to 249
    if (procurrentValue === 249) {
        prodecreasedPressed.disabled = true;
    }
});

// initially disable the minus button
prodecreasedPressed.disabled = true;

// initial display
updateDisplay();
updateOneDisplay();
submit();
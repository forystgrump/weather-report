const state = {
    tempUp: 80,
    tempDown: 80,
    citySearch: " "
}

const hotter = () => {
    const weatherUp = document.querySelector("#weather");

    state.tempUp += 1;

    document.querySelector("#weather").textContent = `${state.tempUp}`

};

const cooler = () => {
    const weatherDown = document.querySelector("#weather");

    state.tempDown = state.tempUp;

    state.tempDown -= 1;

    document.querySelector("#weather").textContent = `${state.tempDown}`

};

const registerEventHandlers = () => {
    const weatherButton = document.querySelector("#warm");

    const weatherButtonDown = document.querySelector("#cool");

    weatherButton.addEventListener("click", hotter);

    weatherButtonDown.addEventListener("click", cooler);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
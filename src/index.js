import { createStore } from "redux";

const lightDiv = document.getElementsByClassName("light")[0];
const switchButton = document.getElementById("switch-btn");

const counterHeadings = document.getElementsByTagName("h1")[0];
const plusButton = document.getElementById("plus-btn");
const minusButton = document.getElementById("minus-btn");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = (diff) => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

const initState = {
  light: true,
  count: 123
};

function reducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH: {
      return {
        ...state,
        light: !state.light
      };
    }
    case INCREMENT: {
      return {
        ...state,
        count: state.count + action.diff
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default:
      return state;
  }
}
const store = createStore(reducer);

const render = () => {
  const { light, count } = store.getState();
  if (light) {
    lightDiv.style.background = "orange";
    switchButton.innerText = "끄기";
  } else {
    lightDiv.style.background = "gray";
    switchButton.innerText = "켜기";
  }
  counterHeadings.innerText = count;
};

render();

switchButton.onclick = () => {
  store.dispatch(toggleSwitch());
};
plusButton.onclick = () => {
  store.dispatch(increment(5));
};
minusButton.onclick = () => {
  store.dispatch(decrement());
};

store.subscribe(render);

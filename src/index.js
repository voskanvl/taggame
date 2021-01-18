// import "./style.css";
import { validate } from './validate.js';
import { setCoors } from './setCoors.js';
import { changeItems } from './changeItems.js';
import { didWin } from './didWin.js';
import { setCanGo } from './setCanGo.js';

const items = document.querySelectorAll('.item');
const monitor = document.querySelector('#monitor>div>span');
let counter = 0;
let canGo = [];

const initiate = items => {
  let range = new Array(16).fill(null).map((_, i) => i + 1);
  range[15] = null;
  items.forEach((el, idx) => {
    const randomValue = Math.round(Math.random() * (range.length - 1));

    el.textContent = range[randomValue];
    el.setAttribute('draggable', true);
    if (!range[randomValue]) {
      el.setAttribute('data-empty', true);
      el.setAttribute('draggable', false);
    }

    setCoors(el, idx);

    delete range[randomValue];
    range = range.flat();
  });
  canGo = setCanGo(items, 'can-go', canGo);
};

const refreshColor = items => {
  items.forEach(e => (e.style.backgroundColor = ''));
};

const hoora = () => {
  const onOption = {
    bottom: '0px',
    right: '0px',
    opacity: 1,
  };
  document.querySelector('#score').innerText = counter;
  Object.assign(document.querySelector('#modal').style, onOption);
};

initiate(items);

items.forEach(item => {
  item.addEventListener('click', ev => {});
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({
        id: e.target.id,
        text: e.target.innerText,
      })
    );
    return false;
  });

  item.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'red';
  });
  item.addEventListener('dragleave', e => {
    e.preventDefault();
    e.target.style.backgroundColor = '';
  });

  item.addEventListener('drop', e => {
    e.preventDefault();
    refreshColor(items);
    const { id, text } = JSON.parse(e.dataTransfer.getData('text/plain'));
    const dragged = document.getElementById(id);
    if (validate(e.target, dragged)) {
      counter++;
      monitor.textContent = counter;
      changeItems(e.target, dragged);
      console.log(canGo);
      canGo = setCanGo(items, 'can-go', canGo);
      if (didWin(items)) hoora();
    }
  });
});

// const anyItems = document.querySelectorAll(".item");
// document.querySelector(".item:last-child").setAttribute("data-empty", true);
// didWin(anyItems);
// if (didWin(anyItems)) {
//       document.querySelector("#modal").style.opacity = 1;
//       document.querySelector("#modal").style.display = "block";
//     }

// counter = 10;
// hoora();

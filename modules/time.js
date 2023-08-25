import { DateTime } from './luxon.js';

const myTime = (element) => {
  setInterval(() => {
    const actually = DateTime.now();
    const perfecthour = actually.toLocaleString({
      month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
    });
    element.innerText = perfecthour;
  }, 1000);
};
export default myTime;
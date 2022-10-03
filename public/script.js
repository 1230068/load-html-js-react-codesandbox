function hoge() {
  const t = new Date();
  alert(`今日は${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日`);
}

document.getElementById("Btn").addEventListener(
  "click",
  function (ev) {
    hoge();
    ev.stopImmediatePropagation();
  },
  false
);

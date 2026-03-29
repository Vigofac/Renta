window.onload = () => {
  document.querySelectorAll(".progress div").forEach(bar => {
    let w = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => bar.style.width = w, 300);
  });
};

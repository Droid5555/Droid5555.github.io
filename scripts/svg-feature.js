const watch = document.getElementById('watch_1');

document.addEventListener('mousemove', async (event) => {
  let {clientX: mouseX, clientY: mouseY} = event;

  setTimeout(() => {
    watch.style.transform = `translate(${mouseX - 710}px, ${mouseY - window.scrollY*0.001 - 380}px)`;
    // watch.style.transform = `translate(${mouseX}px, ${mouseY - window.scrollY*0.001 - 200}px)`;
  }, 50);
});

document.addEventListener('click', async () => {
  watch.classList.toggle('spinning');
});

watch.addEventListener('animationend', function() {
  watch.classList.toggle('spinning');
});




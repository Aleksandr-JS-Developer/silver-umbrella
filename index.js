if(window.silverUmbrella !== true){
  const el = document.querySelector('[style="position: absolute; width: 100vw; height: 100vh; top: 0; left: 0;"]');
  el.deleteAttribute('onmouseenter');
  el.deleteAttribute('style');
  
  console.log(1);
} 

window.silverUmbrella = true;

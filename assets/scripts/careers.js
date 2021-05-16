function parallaxInit() {
  document.querySelectorAll('.img-parallax').forEach((img, i) => {
    var imgParent = img.parentElement;

    function parallaxImg() {
      var speed = parseFloat(img.dataset.speed);
      var imgY = imgParent.offsetTop;
      var winY = this.scrollY;
      var winH = this.innerHeight;
      var parentH = imgParent.clientHeight;
      var winBottom = winY + winH;

      if (winBottom > imgY && winY < imgY + parentH) {
        var imgBottom = (winBottom - imgY) * speed;
        var imgTop = winH + parentH;
        var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
      }

      var insertedStyles = `top:${imgPercent}%;transform:translate(-50%, -${imgPercent}%`;
      img.style = insertedStyles;

      img.style = `top:${imgPercent}%;transform:translate(-50%, -${imgPercent}%`;
    }

    window.addEventListener('scroll', () => {
      parallaxImg();
      console.log('scrolling');
    });
  });
}

parallaxInit();

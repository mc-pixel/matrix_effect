var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    cw = window.innerWidth,
    ch = window.innerHeight,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 10,
    maxColumns = cw/fontSize;

  class fallingChar {
      constructor(x,y){
          this.x=x;
          this.y=y;
      }

      draw(ctx) {
          this.value=charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
          this.speed = (Math.random() * fontSize * 3) / 4 +(fontSize * 3) / 4;

          ctx.fillStyle = "rgba(2,255,0)";
          ctx.font = fontSize + "px sans-serif";
          ctx.fillText(this.value,this.x,this.y);
          this.y += this.speed;

          if (this.y > ch) {
              this.y = (Math.random() * ch) / 2 -50;
              this.x = Math.floor(Math.random() * maxColumns) * fontSize;
              this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) /4;

          }
      }
  }

  var update = () => {
      if(fallingCharArr.length < maxCharCount) {
          var fallingChar = new fallingChar( Math.floor(Math.random() * maxColumns) * fontSize, (Math.random() * ch) / 2 - 50);
          fallingCharArr.push(fallingChar);
      }
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0,0,cw,ch);
      for(let i = 0; i < fallingCharArr.length && frames % 2 == 0;i++) {
          fallingCharArr[i].draw(ctx);
      }

      requestAnimationFrame(update);
      frames++;

  };
  update;
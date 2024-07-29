class NestAnimate {
  constructor(target) {
    this.setting = { zIndex: -1, opacity: 0.5, color: "0,0,0", count: 90 };
    this.target = target;
    this.canvas = document.createElement("canvas");
    this.target.appendChild(this.canvas);
    this.canvas.style.cssText = `position:fixed;top:0;left:0;z-index:${this.setting.zIndex};opacity:${this.setting.opacity};`;
    this.ctx = this.canvas.getContext("2d");
    this.mouse = { x: null, y: null, max: 20000 };
    this.handleSize();
    window.addEventListener("resize", this.handleSize);
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("mouseout", this.mouseOut);
  }
  mouseMove = (e) => (this.mouse = { ...this.mouse, x: e.clientX, y: e.clientY });
  mouseOut = () => (this.mouse = { ...this.mouse, x: null, y: null });
  handleSize = () => {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  };
  animation = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const mouseDots = [this.mouse, ...this.dots];
    let dr, dx, dy, y, prex, prey;
    this.dots.forEach((dot) => {
      mouseDots.forEach((mdot) => {
        if (dot !== mdot && null !== mdot.x && null !== mdot.y) {
          dx = dot.x - mdot.x;
          dy = dot.y - mdot.y;
          prex = dot.x + dot.xa - mdot.x;
          prey = dot.y + dot.ya - mdot.y;
          y = dx * dx + dy * dy;
          if (mdot === this.mouse) {
            dot.xd = y < mdot.max ? (((Math.abs(prex) > Math.abs(dx) && Math.abs(prex) * Math.abs(dx) > 0 ? -1 : 1) * y) / mdot.max) * 2 * dot.xa : 0;
            dot.yd = y < mdot.max ? (((Math.abs(prey) > Math.abs(dy) && Math.abs(prey) * Math.abs(dy) > 0 ? -1 : 1) * y) / mdot.max) * 2 * dot.ya : 0;
          }
          if (y < mdot.max) {
            dr = (mdot.max - y) / mdot.max;
            this.ctx.beginPath();
            this.ctx.lineWidth = dr / 2;
            this.ctx.strokeStyle = `rgba(${this.setting.color},${dr + 0.2})`;
            this.ctx.moveTo(dot.x, dot.y);
            this.ctx.lineTo(mdot.x, mdot.y);
            this.ctx.stroke();
          }
        }
      });
      dot.x += dot.xa + dot.xd;
      dot.y += dot.ya + dot.yd;
      dot.xa *= dot.x > this.width || dot.x < 0 ? -1 : 1;
      dot.ya *= dot.y > this.height || dot.y < 0 ? -1 : 1;
      this.ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
      mouseDots.splice(mouseDots.indexOf(dot), 1);
    });
    window.requestAnimationFrame(this.animation);
  };
  draw = () => {
    this.dots = Array.from({ length: this.setting.count }).reduce((acc, _) => [...acc, { x: Math.random() * this.width, y: Math.random() * this.height, xa: 2 * Math.random() - 1, ya: 2 * Math.random() - 1, xd: 0, yd: 0, max: 6000 }], []);
    setTimeout(this.animation, 100);
  };
}

new NestAnimate(document.body).draw();

let canvas, circles;
const controls = {
  view: { x: 0, y: 0, zoom: 1 },
  viewPos: { prevX: null, prevY: null, isDragging: false },
};

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.mouseWheel((e) => Controls.zoom(controls).worldZoom(e));
  circles = Circle.create(100);
}

function draw() {
  background(100);
  translate(controls.view.x, controls.view.y);
  scale(controls.view.zoom);
  circles.forEach((circle) => circle.show());
}

window.mousePressed = (e) => Controls.move(controls).mousePressed(e);
window.mouseDragged = (e) => Controls.move(controls).mouseDragged(e);
window.mouseReleased = (e) => Controls.move(controls).mouseReleased(e);

class Controls {
  static move(controls) {
    function mousePressed(e) {
      controls.viewPos.isDragging = true;
      controls.viewPos.prevX = e.clientX;
      controls.viewPos.prevY = e.clientY;
    }

    return {
      mousePressed,
      mouseDragged,
      mouseReleased,
    };
  }

  static zoom(controls) {
    function worldZoom(e) {
      const { x, y, deltaY } = e;
      const direction = deltaY > 0 ? -1 : 1;
      const factor = 0.05;
      const zoom = 1 * direction * factor;

      const wx = (x - controls.view.x) / (width * controls.view.zoom);
      const wy = (y - controls.view.y) / (height * controls.view.zoom);

      controls.view.x -= wx * width * zoom;
      controls.view.y -= wy * height * zoom;
      controls.view.zoom += zoom;
    }

    return { worldZoom };
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 15, 15);
  }

  static create(count) {
    return Array.from(Array(count), () => {
      const x = random(-500, width + 500);
      const y = random(-500, height + 500);
      return new this(x, y);
    });
  }
}

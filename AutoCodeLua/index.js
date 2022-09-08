//set canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

//set the image
const img = new Image();
img.crossOrigin = "anonymous";
img.src =
  "data:image/jpeg;base64,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";
trackTransforms(ctx);
var lastX = canvas.width / 2,
  lastY = canvas.height / 2;
var dragStart, dragged;
var scaleFactor = 1.1;
var zoomTotal = 1.1;
var lastImageX = canvas.width / 2,
  lastImageY = canvas.height / 2;
var imageWidth = img.width;
var imageHeight = img.height;
var newImageWidth = img.width;
var newImageHeight = img.height;
var offsetCanvasToEndImageX = lastImageX + imageWidth;

let xyValue = document.getElementById("xyValue");
let pixelValue = document.getElementById("pixelValue");
const controls = {
  view: { x: 0, y: 0, zoom: 1 },
};
const clientX = 0;
const clientY = 0;
let newCenterZoom = { x: 0, y: 0 };

// function dimensionScale(zoomTotal,imageWidth,imageHeight){
//   var newImageWidth = imageWidth * (1-zoomTotal)/2;
//   var newImageHeight = imageHeight * (1-zoomTotal)/2;
// }
//redraw the image
function redraw(isZoom = false) {
  // Clear the entire canvas
  var p1 = ctx.transformedPoint(0, 0);
  var p2 = ctx.transformedPoint(canvas.width, canvas.height);
  ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
  lastImageX = -p1.x;
  lastImageY = -p1.y;
  if (!isZoom) {
    //trường hợp chỉ move -> lấy được tọa độ ảnh
    // lastImageX = -p1.x;
    // lastImageY = -p1.y;
    console.log("not zoom");
  } else {
    // lastImageX = -p1.x + imageWidth * 0.05;
    // lastImageY = -p1.y + imageHeight * 0.05;
    // console.log("zoommmmm");
    // console.log(zoomTotal);
    // console.log(imageWidth);
    // console.log(imageWidth * 0.05);
    // console.log(imageWidth * 1.1 * 0.05);
    // console.log(p1.x);
    // console.log(p1.y);
    // console.log(p2.x);
    // console.log(p2.y);
    // console.log(canvas.getBoundingClientRect());
    // var rect = canvas.getBoundingClientRect();
    // console.log(-p1.x - rect.top);
    console.log(controls.view.x);
    console.log(controls.view.y);
    const wx = (clientX - controls.view.x) / (img.width * 0.1);
    const wy = (clientY - controls.view.y) / (img.height * 0.1);
    controls.view.x -= wx * img.width * 0.1;
    controls.view.y -= wy * img.height * 0.1;
    console.log(wx);
    console.log(wy);
    console.log(controls.view.x);
    console.log(controls.view.y);
  }
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  ctx.drawImage(img, 0, 0);
}

var zoom = function (clicks) {
  var pt = ctx.transformedPoint(lastX, lastY);
  controls.view.x = pt.x;
  controls.view.y = pt.y;
  ctx.translate(pt.x, pt.y);
  var factor = Math.pow(scaleFactor, clicks);
  debugger;
  console.log("factor");
  ctx.scale(factor, factor);
  ctx.translate(-pt.x, -pt.y);
  lastImageX = Math.floor(newImageWidth / 10);
  lastImageY = Math.floor(newImageHeight / 10);
  // console.log(newImageWidth);
  // console.log(newImageHeight);
  // console.log(lastImageX);
  // console.log(lastImageY);
  // console.log(pt);
  // console.log(canvas.viewportTransform);
  // console.log("ctx.currentTransform", canvas);
  redraw(true);
};

var handleScroll = function (evt) {
  var delta = evt.wheelDelta
    ? evt.wheelDelta / 40
    : evt.detail
    ? -evt.detail
    : 0;
  clientX = evt.clientX;
  clientY = evt.clientY;
  if (delta) {
    newCenterZoom = zoomTotal + delta * 0.1;
    zoom(delta);
  }
  return evt.preventDefault() && false;
};

function trackTransforms(ctx) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var xform = svg.createSVGMatrix();
  ctx.getTransform = function () {
    return xform;
  };

  var savedTransforms = [];
  var save = ctx.save;
  ctx.save = function () {
    savedTransforms.push(xform.translate(0, 0));
    return save.call(ctx);
  };

  var restore = ctx.restore;
  ctx.restore = function () {
    xform = savedTransforms.pop();
    return restore.call(ctx);
  };

  var scale = ctx.scale;
  ctx.scale = function (sx, sy) {
    return scale.call(ctx, sx, sy);
  };

  var rotate = ctx.rotate;
  ctx.rotate = function (radians) {
    xform = xform.rotate((radians * 180) / Math.PI);
    return rotate.call(ctx, radians);
  };

  var translate = ctx.translate;
  ctx.translate = function (dx, dy) {
    xform = xform.translate(dx, dy);
    return translate.call(ctx, dx, dy);
  };

  var transform = ctx.transform;
  ctx.transform = function (a, b, c, d, e, f) {
    var m2 = svg.createSVGMatrix();
    m2.a = a;
    m2.b = b;
    m2.c = c;
    m2.d = d;
    m2.e = e;
    m2.f = f;
    xform = xform.multiply(m2);
    return transform.call(ctx, a, b, c, d, e, f);
  };

  var setTransform = ctx.setTransform;
  ctx.setTransform = function (a, b, c, d, e, f) {
    xform.a = a;
    xform.b = b;
    xform.c = c;
    xform.d = d;
    xform.e = e;
    xform.f = f;
    return setTransform.call(ctx, a, b, c, d, e, f);
  };

  var pt = svg.createSVGPoint();
  ctx.transformedPoint = function (x, y) {
    pt.x = x;
    pt.y = y;
    return pt.matrixTransform(xform.inverse());
  };
}

function mousedown(evt) {
  if (!evt.ctrlKey && !evt.altKey) {
    document.body.style.mozUserSelect = document.body.style.userSelect = "none";
    lastX = evt.offsetX || evt.pageX - canvas.offsetLeft;
    lastY = evt.offsetY || evt.pageY - canvas.offsetTop;
    dragStart = ctx.transformedPoint(lastX, lastY);
    dragged = false;
  } else if (evt.altKey) {
    MouseDownRangeChoose(evt);
  }
}
//event for listener
canvas.addEventListener("mousedown", mousedown, false);

function mouseup(evt) {
  if (!evt.ctrlKey && !evt.altKey) {
    dragStart = null;
    if (!dragged) {
      const rect = canvas.getBoundingClientRect();

      newImageWidth = evt.clientX - rect.left;
      newImageHeight = evt.clientY - rect.top;
      newCenterZoom = { x: evt.clientX, y: evt.clientY };
      zoom(evt.shiftKey ? -1 : 1);
    }
  } else if (evt.altKey) {
    MouseUpRangeChoose(evt);
  } else {
    onlyOnClickCtrl(evt);
  }
}
canvas.addEventListener("mouseup", mouseup, false);

canvas.addEventListener(
  "mousemove",
  function (evt) {
    if (!evt.altKey) {
      lastX = evt.offsetX || evt.pageX - canvas.offsetLeft;
      lastY = evt.offsetY || evt.pageY - canvas.offsetTop;

      dragged = true;
      if (dragStart) {
        var pt = ctx.transformedPoint(lastX, lastY);
        ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
        redraw();
      }
    } else {
      MouseMoveRangeChoose(evt);
    }
  },
  false
);

function onlyOnClickCtrl(evt) {
  const destination = document.getElementById("selected-color");
  const bounding = canvas.getBoundingClientRect();
  const x = evt.clientX - bounding.left;
  const y = evt.clientY - bounding.top;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;
  // destination.style.background = rgba;
  xyValue.value = `${x},${y}`;
  // pixelValue.value = `${pixel.data}`;
  destination.value = RGBAToHexA(data[0], data[1], data[2]);
}

canvas.addEventListener("DOMMouseScroll", handleScroll, false);

canvas.addEventListener("mousewheel", handleScroll, false);

//build xong static mới load
window.onload = function () {
  redraw();
};

//copy
document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
  const inputField = copyLinkParent.querySelector(".copy-link-input");
  const copyButton = copyLinkParent.querySelector(".copy-link-button");

  inputField.addEventListener("focus", () => inputField.select());

  copyButton.addEventListener("click", () => {
    const text = inputField.value;
    inputField.select();
    navigator.clipboard.writeText(text);

    inputField.value = "Copied!";
    var tooltip = copyButton.querySelector("#myTooltip");
    tooltip.innerHTML = "Copied: " + text;
    setTimeout(() => {
      inputField.value = text;
      tooltip.innerHTML = "Copy";
    }, 2000);
  });
});

//xử lý tính kích thước range chọn
var last_mousex = (last_mousey = 0);
var mousex = (mousey = 0);
var mousedown = false;

function MouseUpRangeChoose(evt) {
  // last_mousex = evt.clientX - canvas.offsetLeft;
  // last_mousey = evt.clientY - canvas.offsetTop;
  mousedown = false;
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function MouseDownRangeChoose(evt) {
  // last_mousex = parseInt(evt.clientX - canvas.offsetLeft);
  // last_mousey = parseInt(evt.clientY - canvas.offsetTop);
  last_mousex = evt.pageX - canvas.offsetLeft;
  last_mousey = evt.pageY - canvas.offsetTop;
  mousedown = true;
}
// let last_mousex_Input = document.getElementById("Last_mousex");
// let last_mousey_Input = document.getElementById("Last_mousey");
// let mousex_Input = document.getElementById("Mousex");
// let mousey_Input = document.getElementById("Mousey");
function MouseMoveRangeChoose(evt) {
  // mousex = parseInt(evt.clientX - canvas.offsetLeft);
  // mousey = parseInt(evt.clientY - canvas.offsetTop);
  mousex = evt.pageX - canvas.offsetLeft;
  mousey = evt.pageY - canvas.offsetTop;
  if (mousedown) {
    // last_mousex_Input.value = `${last_mousex}`;
    // last_mousey_Input.value = `${last_mousey}`;
    // mousex_Input.value = `${mousex}`;
    // mousey_Input.value = `${mousey}`;
    redraw();
    ctx.beginPath();
    var width = (mousex - last_mousex) / 1.1;
    var height = (mousey - last_mousey) / 1.1;

    //ctx.fillStyle = "#8ED6FF";
    ctx.fillStyle = "#eee0";
    ctx.fill();
    ctx.strokeStyle = "#1B9AFF";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      last_mousex - lastImageX,
      last_mousey - lastImageY,
      width,
      height
    );
  }
}

//convert rgba to decimal
function RGBAToHexA(r, g, b) {
  return (r << 16) + (g << 8) + b;
}

/*
 * ===========================================
 *  COLORBLOCK RENDER ENGINE
 *  Filename: core/infrastructure/render.js
 * ===========================================
 *
 *  Responsible for visual output such as:
 *  - Motion & pen drawing
 *  - Turtle/sprite rendering
 *  - Canvas refresh
 */

export class ColorblockRenderer {
  constructor(canvasId = "stage") {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.clear();
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.angle = 90;
    this.penDown = false;
    this.penColor = "#000000";
  }

  clear() {
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update(context) {
    const { x, y, angle, pen, penColor } = context;
    if (pen) {
      this.ctx.strokeStyle = penColor;
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(x + this.canvas.width / 2, this.canvas.height / 2 - y);
      this.ctx.stroke();
    }
    this.x = x + this.canvas.width / 2;
    this.y = this.canvas.height / 2 - y;
    this.angle = angle;
  }

  drawTurtle() {
    this.ctx.fillStyle = "#333";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    this.ctx.fill();
  }

  renderLoop() {
    requestAnimationFrame(() => this.renderLoop());
    this.drawTurtle();
  }
}

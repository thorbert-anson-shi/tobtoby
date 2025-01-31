export default class PhysicsObject {
  x: number = 0;
  y: number = 0;
  vy: number = 0;
  vx: number = 0;
  dy: number = 0;
  dx: number = 0;
  gravityConst: number = 9.81;

  gravitate(dt: number) {
    this.vy += this.gravityConst * dt;
    this.y += this.vy * dt;
  }
}

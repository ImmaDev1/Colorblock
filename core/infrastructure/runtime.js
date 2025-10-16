/*
 * ===========================================
 *  COLORBLOCK RUNTIME ENVIRONMENT
 *  Filename: core/infrastructure/runtime.js
 * ===========================================
 *
 *  Provides shared context, timers, variable
 *  storage, and asynchronous helpers.
 */

export class ColorblockRuntime {
  constructor() {
    this.variables = {};
    this.startTime = performance.now();
    this.eventHandlers = {};
  }

  // --- Time ---
  getUptime() {
    return (performance.now() - this.startTime) / 1000;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // --- Variables ---
  setVar(name, value) {
    this.variables[name] = value;
  }

  getVar(name) {
    return this.variables[name] ?? 0;
  }

  changeVar(name, value) {
    if (typeof this.variables[name] !== "number") this.variables[name] = 0;
    this.variables[name] += value;
  }

  // --- Event Handling ---
  on(event, callback) {
    if (!this.eventHandlers[event]) this.eventHandlers[event] = [];
    this.eventHandlers[event].push(callback);
  }

  emit(event, data) {
    if (this.eventHandlers[event]) {
      for (const fn of this.eventHandlers[event]) fn(data);
    }
  }
}

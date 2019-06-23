import VueRouter from 'vue-router';

class Registry {
  static _routes = new Map();
  static add(route) {
    const {name} = route;
    if (this._routes.has(name)) {
      throw new Error(`route with name ${name} has already been registered!`);
    }
    this._routes.set(name, route);
  }
  static getRoutes() {
    const routes = [];
    for (const route of this._routes.values()) {
      if (this._configure(route)) {
        routes.push(route);
      }
    }
    return routes;
  }
  static _configure(route) {
    if (route.parent) {
      const parentRoute = this._findParent(route);
      this._addChild(parentRoute, route);
      return false;
    }
    return true;
  }
  static _findParent(route) {
    const {parent, name} = route;
    if (!this._routes.has(parent)) {
      throw new Error(`parent ${parent} for route ${name} is not registered!`);
    }
    return this._routes.get(parent);
  }
  static _addChild(parent, child) {
    parent.children = parent.children || [];
    if (!parent.children.includes(child)) {
      parent.children.push(child);
    }
  }
}

export class Router {
  static register(route) {
    Registry.add(route);
  }
  static create(config = {}) {
    return new VueRouter({...config, routes: Registry.getRoutes()});
  }
}

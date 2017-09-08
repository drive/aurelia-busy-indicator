import {inject, Container, ViewEngine} from "aurelia-framework";

@inject(Container, ViewEngine)
export class Busy {
  constructor(container, viewEngine, view, elementSelector = null) {
    this.container = container;
    this.viewEngine = viewEngine;

    this.top = null;
    this.height = null;
    this.width = null;
    this.spinnerTop = null;
    this.spinnerSize= 30;

    this.root = elementSelector === null ? view.fragment.children[0] : view.fragment.children[0].querySelector(elementSelector);
  }

  async show() {
    this.calculateSize();
    await this.createBusyView();
  }

  hide() {
    this.view.removeNodes();
  }

  calculateSize() {
    let boundingBox = this.root.getBoundingClientRect();
    this.top = boundingBox.top;
    this.height = Math.max(boundingBox.height, window.innerHeight - this.top); 
    this.width = boundingBox.width;
    this.spinnerTop = ((window.innerHeight - this.top) / 2) - this.spinnerSize;
  }

  async createBusyView() {
    let factory = await this.viewEngine.loadViewFactory('widgets/busy/busy.html');
    const childContainer = this.container.createChild();
    this.view = factory.create(childContainer);
    this.view.bind(this);
    this.view.appendNodesTo(this.root);
  }
}


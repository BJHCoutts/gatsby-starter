import { UIStore } from "./UIStore"
import { observable } from "mobx"

export class Store {
  ui: UIStore

  constructor() {
    this.ui = new UIStore(this)
  }

  @observable example = {
    testMessage: "from Store",
  }
}

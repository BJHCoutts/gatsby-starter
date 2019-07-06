import { observable } from "mobx"
import { Store } from "./Store"

export class UIStore {
  constructor(public parent: Store) {}

  @observable
  example = {
    colour: "blue",
  }
}

import { NgFor } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    // NOTE: Will be executed whenever a signal changes
    effect(() => console.log(this.counter()));
  }

  increment() {
    // this.counter.update((oldCounter) => oldCounter + 1);
    this.counter.set(this.counter() + 1);

    // this.actions.push("INCREMENT");
    this.actions.update((oldActions) => [...oldActions, "INCREMENT"]);
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    // this.actions.push("DECREMENT");
    this.actions.update((oldActions) => [...oldActions, "DECREMENT"]);
  }
}

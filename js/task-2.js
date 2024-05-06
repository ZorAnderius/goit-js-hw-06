class Storage {
  #items = [];
  constructor(items) {
    this.#items.push(...items);
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index) {
      this.#items.splice(index, 1);
    }

    // this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}
console.log('----------------------------------------------');
console.log('TASK 2');

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

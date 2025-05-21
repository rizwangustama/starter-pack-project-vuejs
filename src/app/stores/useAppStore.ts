export const useAppStore = defineStore('app', {
  state: () => (
    {
      counter: 0,
      name: 'Rizwan Gustama',
      loading: false,
    }
  ),
  actions: {
    addIncrement() {
      this.loading = true;
      setTimeout(() => {
        this.counter++;
        this.loading = false;
      }, 2000);
    },
    addDecrement() {
      this.counter--
    }
  },
})
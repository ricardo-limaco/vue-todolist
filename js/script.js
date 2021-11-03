Vue.config.devtools = true;

new Vue ({
  el: "#root",
  data: {
    tasksList: [
      {text: "Fare la spesa"},
      {text: "Andare in banca"},
      {text: "Comprare il pane"},
    ],
    newTaskText: "",
    newTaskColor: "",
  },
  methods: {
    onAddClick() {
      if (this.newTaskText.trim() === "") {
        return;
      }

      const foundElement = this.tasksList.some((el) => {
        return el.text.toLowerCase() === this.newTaskText.trim().toLowerCase();
      });

      if (foundElement) {
        return;
      }

      this.tasksList.push({
        text: this.newTaskText.trim(),
        color: this.newTaskColor,
      });

      this.newTaskText = "";
    },

    onDeleteClick(indiceDaCancellare) {
      this.tasksList.splice(indiceDaCancellare, 1);
    },

  },
})

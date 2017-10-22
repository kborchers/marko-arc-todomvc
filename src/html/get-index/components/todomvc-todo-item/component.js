const todoApp = require('../app');

module.exports = {
  onCreate() {
    this.state = {
      isEditing: false,
      editingTitle: ''
    };
  },

  saveEdit() {
    if (this.state.isEditing) {
      var newTitle = this.getEl('titleInput').value;
      todoApp.updateTodo(this.input.id, { title: newTitle });
      this.state.isEditing = false;
    }
  },

  cancelEdit() {
    this.state.isEditing = false;
  },

  handleCheckboxChange(event, input) {
    var completed = input.checked === true;
    todoApp.setTodoCompleted(this.input.id, completed);
  },

  handleLabelDblClick() {
    this.state.isEditing = true;
    this.state.editingTitle = this.input.title;
  },

  removeTodo() {
    todoApp.removeTodo(this.input.id);
  },

  onUpdate() {
    if (this.state.isEditing) {
      var inputEl = this.getEl('titleInput');
      inputEl.focus();
      var val = inputEl.value;
      inputEl.value = '';
      inputEl.value = val;
    }
  },

  handleInputKeyDown(event) {
    if (event.keyCode === 13 /* ENTER */) {
      this.saveEdit();
    } else if (event.keyCode === 27 /* ESC */) {
      this.cancelEdit();
    }
  },

  handleDetach(event, node) {
    event.preventDefault();
    node.classList.add('animate');
    var height = node.offsetHeight;
    node.style.maxHeight = height + 'px';

    setTimeout(() => {
      node.style.maxHeight = '0px';
      node.style.opacity = 0;

      setTimeout(() => {
          event.detach();
      }, 250);
    }, 0);
  },

  handleAttach(event, node) {
    var clone = node.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.top = '-200px';
    clone.style.left = '-200px';
    node.parentNode.appendChild(clone);
    var height = clone.offsetHeight;

    clone.parentNode.removeChild(clone);

    node.classList.remove('animate');
    node.style.maxHeight = '0px';
    node.style.opacity = 0;

    setTimeout(() => {
      node.classList.add('animate');
      node.style.maxHeight = height + 'px';
      node.style.opacity = 1;
    }, 10);
  }
};

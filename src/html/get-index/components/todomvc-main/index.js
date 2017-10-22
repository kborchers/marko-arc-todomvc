// Compiled using marko@4.5.3-2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_component = {
        handleToggleAllOnChange: function(event, input) {
          todoApp.toggleAllTodosCompleted(input.checked);
        }
      },
    marko_componentType = "/marko-arc-todomvc-get-index$0/components/todomvc-main/index.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_todoApp = require("../app"),
    todoApp = module_todoApp.default || module_todoApp,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    todomvc_todo_item_template = marko_loadTemplate(require.resolve("../todomvc-todo-item/index.marko")),
    marko_loadTag = marko_helpers.t,
    todomvc_todo_item_tag = marko_loadTag(todomvc_todo_item_template);

function isToggleAllChecked(todos) {
  var toggleAllChecked = true;

  for (var i=0; i<todos.length; i++) {
    var todo = todos[i];
    if (!todo.completed) {
      return false;
    }
  }

  return true;
};

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<section class=\"main\"><input type=\"checkbox\"" +
    marko_attr("checked", isToggleAllChecked(input.todos)) +
    " class=\"toggle-all\"" +
    marko_attr("data-marko", {
      onchange: __component.d("handleToggleAllOnChange")
    }, false) +
    "><ul class=\"todo-list\">");

  marko_forEach(input.todos, function(todo) {
    todomvc_todo_item_tag(todo, out, __component, "todo-" + todo.id);
  });

  out.w("</ul></section>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-arc-todomvc-get-index$0/components/todomvc-main/index.marko",
    component: "./index.marko",
    tags: [
      "../todomvc-todo-item/index.marko"
    ]
  };

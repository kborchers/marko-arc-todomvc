// Compiled using marko@4.5.3-2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_component = ({
    onMount: function () {
        this.subscribeTo(todoApp).on('change', () => {
            this.forceUpdate();
        });
    }
}),
    marko_componentType = "/marko-arc-todomvc-get-index$0/components/todomvc-app/index.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_todoApp = require("../app"),
    todoApp = module_todoApp.default || module_todoApp,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    todomvc_header_template = marko_loadTemplate(require.resolve("../todomvc-header/index.marko")),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    todomvc_header_tag = marko_loadTag(todomvc_header_template),
    todomvc_main_template = marko_loadTemplate(require.resolve("../todomvc-main/index.marko")),
    todomvc_main_tag = marko_loadTag(todomvc_main_template),
    todomvc_footer_template = marko_loadTemplate(require.resolve("../todomvc-footer/index.marko")),
    todomvc_footer_tag = marko_loadTag(todomvc_footer_template);

function filterTodos() {
  var remainingCount = 0;
  var completedCount = 0;
  var filter = todoApp.filter;

  var filteredTodos = todoApp.todos.filter(function(todo) {
    if (todo.completed) {
      completedCount++;
    } else {
      remainingCount++;
    }

    if (todo.pending) {
      return true;
    } else if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  return {
    todos: filteredTodos,
    remainingCount: remainingCount,
    completedCount: completedCount,
    filter: filter
  };
};

function render(input, out, __component, component, state) {
  var data = input;

  var todos = filterTodos();

  out.w("<div class=\"todoapp\">");

  todomvc_header_tag({}, out, __component, "1");

  todomvc_main_tag(todos, out, __component, "2");

  todomvc_footer_tag(todos, out, __component, "3");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "@import url('https://unpkg.com/todomvc-app-css@2.0.6/index.css');",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-arc-todomvc-get-index$0/components/todomvc-app/index.marko",
    component: "./index.marko",
    tags: [
      "../todomvc-header/index.marko",
      "../todomvc-main/index.marko",
      "../todomvc-footer/index.marko"
    ]
  };

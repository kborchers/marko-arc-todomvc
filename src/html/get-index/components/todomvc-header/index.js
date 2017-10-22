// Compiled using marko@4.5.3-2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_component = {
        handleFormSubmit: function(event) {
          var titleInput = this.getEl("new-todo");

          var todoTitle = titleInput.value;

          todoApp.addNewTodo({
              title: todoTitle
            });

          titleInput.value = "";

          event.preventDefault();
        }
      },
    marko_componentType = "/marko-arc-todomvc-get-index$0/components/todomvc-header/index.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/dist/components/taglib/helpers/markoKeyAttr"),
    module_todoApp = require("../app"),
    todoApp = module_todoApp.default || module_todoApp,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header class=\"header\"><h1>todos</h1><form" +
    marko_attr("data-marko", {
      onsubmit: __component.d("handleFormSubmit")
    }, false) +
    "><input placeholder=\"What needs to be done?\" class=\"new-todo\"" +
    marko_attr("data-marko-key", marko_keyAttr("new-todo", __component)) +
    "></form></header>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".header form {\n    margin:0;\n  }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-arc-todomvc-get-index$0/components/todomvc-header/index.marko",
    component: "./index.marko"
  };

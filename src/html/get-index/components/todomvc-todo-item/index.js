// Compiled using marko@4.5.3-2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/marko-arc-todomvc-get-index$0/components/todomvc-todo-item/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/dist/components/taglib/helpers/markoKeyAttr"),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    marko_classAttr = marko_helpers.ca;

require("marko/dist/components/attach-detach");

function render(input, out, __component, component, state) {
  var data = input;

  var className = {
    completed: input.completed,
    editing: state.isEditing
  };

  out.w("<li" +
    marko_classAttr(className) +
    marko_attr("data-marko", {
      ondetach: __component.d("handleDetach"),
      onattach: __component.d("handleAttach")
    }, false) +
    "><div class=\"view\"><input type=\"checkbox\"" +
    marko_attr("checked", input.completed) +
    " aria-label=\"Toggle todo completed\" class=\"toggle\"" +
    marko_attr("data-marko", {
      onchange: __component.d("handleCheckboxChange")
    }, false) +
    "><label" +
    marko_attr("data-marko", {
      ondblclick: __component.d("handleLabelDblClick")
    }, false) +
    ">" +
    marko_escapeXml(input.title) +
    "</label><button aria-label=\"Delete todo\" class=\"destroy\"" +
    marko_attr("data-marko", {
      onclick: __component.d("removeTodo")
    }, false) +
    "></button></div>");

  var __key5 = __component._h_("titleInput");

  __component.e("blur", "saveEdit", __key5);

  out.w("<input title=\"Enter the new todo title\" type=\"text\"" +
    marko_attr("value", state.editingTitle) +
    " class=\"edit\"" +
    marko_attr("data-marko-key", marko_keyAttr("titleInput", __component)) +
    marko_attr("data-marko", {
      onchange: __component.d("saveEdit"),
      onkeydown: __component.d("handleInputKeyDown")
    }, false) +
    "></li>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/marko-arc-todomvc-get-index$0/components/todomvc-todo-item/index.marko",
    component: "./index.marko"
  };

// Compiled using marko@4.5.3-2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_component = {
        setFilter: function(filter, event) {
          todoApp.filter = filter;

          event.preventDefault();
        },
        clearCompleted: function() {
          todoApp.clearCompleted();
        },
        loadDemo: function() {
          todoApp.fetchDemoData();
        }
      },
    marko_componentType = "/marko-arc-todomvc-get-index$0/components/todomvc-footer/index.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_todoApp = require("../app"),
    todoApp = module_todoApp.default || module_todoApp,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_classAttr = marko_helpers.ca,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var remainingTodosWord = input.remainingCount > 1 ? 'items' : 'item';

  out.w("<footer class=\"footer\"><span class=\"todo-count\"><strong>" +
    marko_escapeXml(input.remainingCount) +
    "</strong> " +
    marko_escapeXml(remainingTodosWord) +
    " left</span><ul class=\"filters\"><li><a href=\"#/\"" +
    marko_classAttr((input.filter === "all") && "selected") +
    marko_attr("data-marko", {
      onclick: __component.d("setFilter", [
          "all"
        ])
    }, false) +
    ">All</a></li><li><a href=\"#/active\"" +
    marko_classAttr((input.filter === "active") && "selected") +
    marko_attr("data-marko", {
      onclick: __component.d("setFilter", [
          "active"
        ])
    }, false) +
    ">Active</a></li><li><a href=\"#/completed\"" +
    marko_classAttr((input.filter === "completed") && "selected") +
    marko_attr("data-marko", {
      onclick: __component.d("setFilter", [
          "completed"
        ])
    }, false) +
    ">Completed</a></li></ul>");

  if (input.completedCount > 0) {
    out.w("<button class=\"clear-completed\"" +
      marko_attr("data-marko", {
        onclick: __component.d("clearCompleted")
      }, false) +
      ">Clear completed (" +
      marko_escapeXml(input.completedCount) +
      ")</button>");
  } else {
    out.w("<button class=\"clear-completed\"" +
      marko_attr("data-marko", {
        onclick: __component.d("loadDemo")
      }, false) +
      ">Load Demo Data</button>");
  }

  out.w("</footer>");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-arc-todomvc-get-index$0/components/todomvc-footer/index.marko",
    component: "./index.marko"
  };

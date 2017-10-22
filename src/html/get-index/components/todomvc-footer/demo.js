// Compiled using marko@4.5.3-2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/marko-arc-todomvc-get-index$0/components/todomvc-footer/demo.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    todomvc_footer_template = marko_loadTemplate(require.resolve("./index.marko")),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    todomvc_footer_tag = marko_loadTag(todomvc_footer_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"todoapp\">");

  todomvc_footer_tag({
      remainingCount: 5,
      completedCount: 10,
      filter: "all"
    }, out, __component, "1");

  out.w("</div><div class=\"todoapp\">");

  todomvc_footer_tag({
      remainingCount: 20,
      completedCount: 4,
      filter: "completed"
    }, out, __component, "3");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    aa_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "@import url('https://unpkg.com/todomvc-app-css@2.0.6/index.css');",
          virtualPath: "./demo.marko.css",
          path: "./demo.marko"
        }
    ],
    id: "/marko-arc-todomvc-get-index$0/components/todomvc-footer/demo.marko",
    tags: [
      "./index.marko"
    ]
  };

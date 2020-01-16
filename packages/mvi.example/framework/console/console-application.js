const { viewCreatorFactory, basicRender } = require("mvi.console");
const { run } = require("../../application/app");

const createView = viewCreatorFactory(basicRender);
run(createView);
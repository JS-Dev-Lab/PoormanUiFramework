import { getEngine } from "./UIEngineFactory";
import { run } from "./application/app";

async function main(type) {
  const createView = await getEngine(type);
  run(createView);
}

window.console.log(process.env.Framework);
main(process.env.Framework);

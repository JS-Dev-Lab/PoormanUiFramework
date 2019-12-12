import { getEngine } from "./UIEngineFactory";
import { run } from "./application/app";

async function main(type) {
  const engine = await getEngine(type);
  run(engine);
}

window.console.log(process.env.Framework);
main(process.env.Framework);

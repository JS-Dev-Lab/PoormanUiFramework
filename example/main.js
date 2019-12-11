import { getEngine } from "./UIEngineFactory";
import { MyCountApplication } from "./application/app";

async function run(type) {
  const engine = await getEngine(type);
  const application = new MyCountApplication(engine);
  application.run();
}

window.console.log(process.env.Framework);
run(process.env.Framework);

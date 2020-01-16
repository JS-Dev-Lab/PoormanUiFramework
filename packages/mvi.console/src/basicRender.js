const { prompt } = require("inquirer");

async function basicRender({ state, commands }, print) {
  print(JSON.stringify(state));
  await ask(commands);
}

const ask = async commands => {
  const { command, payload } = await enterQuery(commands);
  commands[command].apply(null, payload);
};

async function enterQuery(commands) {
  const choices = Object.keys(commands);
  const { command, payload } = await prompt([
    {
      type: "list",
      name: "command",
      message: "Choose command among the above:",
      choices
    },
    {
      type: 'input',
      name: 'payload',
      message: 'Enter command payload as a JSON string',
      when: function (answers) {
        return commands[answers.command].length > 0;
      }
    },
  ]);
  return { command, payload: !!payload ? JSON.parse(payload): null };
}

module.exports = { basicRender }
import * as _commands from './commands';
import validator from './validate';

export const name = 'wekan';
export const description = 'Setup a Wekan instance on your server';

export const commands = _commands;

export const validate = {
  wekan: validator,
};

function onlyWekanEnabled(...commandList) {
  return function run(api) {
    if (api.getConfig().wekan) {
      const promise = api.runCommand(commandList.shift());

      commandList.forEach((command) => {
        promise.then(() => api.runCommand(command));
      });

      return promise;
    }
  };
}

export const hooks = {
  'post.default.setup': onlyWekanEnabled('wekan.setup', 'wekan.start'),
};

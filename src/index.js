import * as _commands from './commands';
import validator from './validate';

export const name = 'wekan';
export const description = 'Setup a Wekan instance on your server';

export const commands = _commands;

export const validate = {
  wekan: validator
};

function onlyWekanEnabled(...commands) {
  return function(api) {
    if (api.getConfig().wekan) {
      let promise = api.runCommand(commands.shift());

      commands.forEach(command => {
        promise.then(() => api.runCommand(command));
      });

      return promise;
    }
  }
}

export const hooks = {
  'post.default.setup': onlyWekanEnabled('wekan.setup', 'wekan.start')
}

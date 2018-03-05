# Boilerplate for Meteor Up Plugins

Learn how to create plugins from the [meteor up docs](http://meteor-up.com/docs#creating-a-plugin).

### Folders:

`src` This is the source for the plugin. You can use es6 in these files.

`src/assets` Place any scripts or templates used by nodemiral tasks here.

`lib` Files in this folder are generated by babel, and are used when running the plugin. They are ignored by git, but included when published on npm.


### Scripts

`npm run build` Generates the lib folder from the src folder

`npm run build:watch` Same as the `build` script, but will watch for files that change and regenerate them

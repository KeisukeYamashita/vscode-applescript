'use strict';

import { commands } from 'vscode';

import { osascript } from './osascript';
import { osacompile } from './osacompile';

const activate = (context) => {
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.applescript.run', () => {
      return osascript();
    })
  );
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.applescript.compile', () => {
      return osacompile('.scpt');
    })
  );
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.applescript.compileBundle', () => {
      return osacompile('.scptd');
    })
  );
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.applescript.compileApp', () => {
      return osacompile('.app');
    })
  );
};

export { activate };
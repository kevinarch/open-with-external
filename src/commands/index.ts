import open from './open';
import openAndroidStudio from './openAndroidStudio';
import openMultiple from './openMultiple';
import openXcode from './openXcode';

const commands: CommandModule[] = [open, openMultiple, openAndroidStudio, openXcode];
commands.forEach((command) => {
    command.identifier = `openInExternalApp.${command.identifier}`;
});

export default commands;

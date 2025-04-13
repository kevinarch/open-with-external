import { parseArgs } from './open';
import openInExternalApp from '../openInExternalApp';

const command: CommandModule = {
    identifier: 'openXcode',
    async handler(...args: any[]): Promise<void> {
        const [uri] = parseArgs(args);

        await openInExternalApp(uri, 'xcode');
    },
};

export default command;

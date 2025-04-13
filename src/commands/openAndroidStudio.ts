import vscode from 'vscode';

import { parseArgs } from './open';
import openInExternalApp from '../openInExternalApp';
import { logger } from '../utils/logger';

const command: CommandModule = {
    identifier: 'openAndroidStudio',
    async handler(...args: any[]): Promise<void> {
        const [uri] = parseArgs(args);

        const config = vscode.workspace.getConfiguration('openInExternalApp');
        const androidStudioPath = config.get<string>('androidStudioPath');

        if (!androidStudioPath) {
            throw new Error(
                'Android Studio path is not configured. Please set openInExternalApp.androidStudioPath in settings.',
            );
        }

        logger.info(`Opening with Android Studio at: ${androidStudioPath}`);

        await openInExternalApp(uri, 'android-studio');
    },
};

export default command;

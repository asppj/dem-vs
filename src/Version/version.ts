
import * as vscode from 'vscode';

import { DEM_VERSION } from '../constant';

const version = `0.1.0`;
const short = `dem-vs`;
const description = `A simple request client for crypto hook.`;

function versionInfo() {
    return `
        version: ${version}
        short: ${short}
        description: ${description} 
    `;
}


class VersionMessage {
    commandName(): string {
        return DEM_VERSION;
    }
    show() {
        vscode.window.showInformationMessage(`showVersion:${versionInfo()}`);
    }
}

export default VersionMessage;
import * as vscode from 'vscode';
import { DEM_POST_FORM_PANEL_VIEW } from '../constant';


export class PostFormPanel {
    constructor(context: vscode.ExtensionContext) {
        context.subscriptions.push(
            vscode.commands.registerCommand(DEM_POST_FORM_PANEL_VIEW, this.createPanel)
        );
    }
    createPanel() {
        const panel = vscode.window.createWebviewPanel("DEM_PANEL_VIEW", "测试pannel", vscode.ViewColumn.One, {
            // 在webview中启用脚本
            enableScripts: true,
            localResourceRoots:[],// 禁止加载外部资源
            retainContextWhenHidden: true, // 隐藏时保留面板内容

        });
        panel.webview.html = this.getHTML();
    }

    getHTML() {
        return `    <!DOCTYPE html> 
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        </head>
        <body>
        <h1>Hello world</h1>
        </body>
        </html>
        `
    }
}
import * as vscode from 'vscode';
import { DEM_MENU_CHANGE_TITLE, DEM_MENU_REVEL, DEM_MENU_VIEW } from '../command';

export class DemMenuView {

    constructor(context: vscode.ExtensionContext) {
        const view = vscode.window.createTreeView(DEM_MENU_VIEW, { treeDataProvider: aNodeWithIdTreeDataProvider(), showCollapseAll: true });
        context.subscriptions.push(view);
        vscode.commands.registerCommand(DEM_MENU_REVEL, async () => {
            const key = await vscode.window.showInputBox({ placeHolder: 'Type the label of the item to reveal' });
            if (key) {
                await view.reveal({ key }, { focus: true, select: false, expand: true });
            }
        });
        vscode.commands.registerCommand(DEM_MENU_CHANGE_TITLE, async () => {
            const title = await vscode.window.showInputBox({ prompt: 'Type the new title for the Test View', placeHolder: view.title });
            if (title) {
                view.title = title;
            }
        });
    }
}
class Tree {
    [key: string]: Tree;
}
const tree: Tree = {
    'a': {
        'aa': {
            'aaa': {
                'aaaa': {
                    'aaaaa': {
                        'aaaaaa': {

                        }
                    }
                }
            }
        },
        'ab': {}
    },
    'b': {
        'ba': {},
        'bb': {}
    }
};
const nodes = {};

function aNodeWithIdTreeDataProvider(): vscode.TreeDataProvider<{ key: string }> {
    return {
        getChildren: (element: { key: string }): { key: string }[] => {
            if (element && element.key === "1") {
                return [{ key: "2" }];
            }
            return [{ key: "3" }, { key: "1" }];

        },
        getTreeItem: (element: { key: string }): vscode.TreeItem => {
            if (!element) {
                return {};
            }
            return {
                label: /**vscode.TreeItemLabel**/<any>{ label: element.key, highlights: element.key.length > 1 ? [[element.key.length - 2, element.key.length - 1]] : void 0 },
                id: element.key,
                contextValue: "node",
                
            };
        },
        getParent: ({ key }: { key: string }): { key: string } => {
            if (key === "2") {
                return { key: "1" };
            }
            return { key: "" };
        }
    };
}

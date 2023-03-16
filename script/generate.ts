import * as fs from 'fs';
import * as path from 'path';

const paralyzerFilename = path.join('themes', 'paralyzer.json');

type ThemeColors = {
    [key: string]: string;
};

type ThemeTokenColors = {
    name?: string;
    scope: string | string[];
    settings: {
        foreground?: string;
        background?: string;
        fontStyle?: string;
    };
};

type Theme = {
    name: string;
    type: string;

    // https://code.visualstudio.com/api/references/theme-color
    colors?: ThemeColors;

    // https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#standard-token-types-and-modifiers
    semanticHighlighting: boolean;
    semanticTokenColors: {
        namespace: string;
        class: string;
        enum: string;
        interface: string;
        struct: string;
        typeParameter: string;
        type: string;
        parameter: string;
        variable: string;
        property: string;
        enumMember: string;
        decorator: string;
        event: string;
        function: string;
        method: string;
        macro: string;
        label: string;
        comment: string;
        string: string;
        keyword: string;
        number: string;
        regexp: string;
        operator: string;
    };

    tokenColors?: ThemeTokenColors[];
};

const generateColor = (color: string, opacity?: number) => {
    let s = '';

    const prefix = '#';
    if (!color.startsWith(prefix)) {
        s += prefix;
    }

    s += color;

    if (opacity !== undefined) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        s += opacity?.toString(16).padStart(2, '0');
    }

    return s;
};

const colors = {
    transparent: generateColor('000000', 0),
    black: generateColor('000000'),
    white1: generateColor('e0e7ff'),
    white2: generateColor('717cb4'),
    grey1: generateColor('3b3f51'),
    grey2: generateColor('525975'),
    blue: generateColor('09e7fb'),
    green: generateColor('00ffd8'),
    red: generateColor('de2163'),
    yellow: generateColor('dec32c'),
    orange: generateColor('f78c6c'),
};

const paralyzer: Theme = {
    name: 'Dominator Paralyzer',
    type: 'dark',

    colors: {
        focusBorder: colors.black,
        descriptionForeground: colors.white1,
        errorForeground: colors.yellow,
        'textLink.foreground': colors.blue,
        'button.foreground': colors.white1,
        'button.background': generateColor(colors.white2, 0x50),
        'checkbox.foreground': colors.white1,
        'checkbox.background': colors.transparent,
        'dropdown.foreground': colors.white1,
        'dropdown.background': colors.black,
        'dropdown.border': colors.transparent,
        'input.foreground': colors.white1,
        'input.background': generateColor('0e131a'),
        'input.placeholderForeground': generateColor(colors.white1, 0x60),
        'input.border': colors.transparent,
        'inputOption.activeForeground': colors.blue,
        'inputOption.activeBackground': colors.transparent,
        'inputValidation.infoForeground': generateColor(colors.green, 0x50),
        'inputValidation.warningForeground': generateColor(colors.yellow, 0x50),
        'inputValidation.errorForeground': generateColor(colors.red, 0x50),
        'scrollbar.shadow': colors.transparent,
        'scrollbarSlider.background': generateColor(colors.white1, 0x20),
        'scrollbarSlider.hoverBackground': generateColor(colors.white1, 0x25),
        'scrollbarSlider.activeBackground': generateColor(colors.white1, 0x30),
        'badge.background': colors.black,
        'badge.foreground': colors.white1,
        'progressBar.background': colors.blue,
        'list.hoverForeground': colors.white1,
        'list.hoverBackground': colors.transparent,
        'list.activeSelectionForeground': colors.white1,
        'list.activeSelectionBackground': colors.transparent,
        'list.inactiveSelectionForeground': colors.white1,
        'list.inactiveSelectionBackground': colors.transparent,
        'list.focusForeground': colors.blue,
        'list.focusBackground': colors.transparent,
        'list.highlightForeground': colors.blue,
        'list.warningForeground': colors.yellow,
        'list.errorForeground': colors.red,
        'list.filterMatchBackground': generateColor(colors.white2, 0x50),
        'listFilterWidget.background': colors.transparent,
        'listFilterWidget.outline': colors.transparent,
        'listFilterWidget.noMatchesOutline': colors.transparent,
        'activityBar.foreground': colors.white1,
        'activityBar.background': colors.black,
        'activityBar.dropBorder': colors.blue,
        'activityBarBadge.foreground': colors.black,
        'activityBarBadge.background': colors.blue,
        'sideBar.foreground': colors.grey2,
        'sideBar.background': colors.black,
        'sideBar.border': colors.transparent,
        'sideBarTitle.foreground': colors.white1,
        'sideBarSectionHeader.foreground': colors.grey2,
        'sideBarSectionHeader.background': colors.black,
        'sideBarSectionHeader.border': colors.black,
        'editorGroupHeader.tabsBackground': colors.black,
        'editorGroup.border': colors.transparent,
        'editorGroup.dropBackground': colors.transparent,
        'tab.border': colors.transparent,
        'tab.activeForeground': colors.white1,
        'tab.activeBorder': colors.blue,
        'tab.inactiveForeground': colors.grey2,
        'tab.inactiveBackground': colors.black,
        'editor.foreground': colors.white1,
        'editor.background': colors.black,
        'editorCursor.foreground': colors.blue,
        'editorRuler.foreground': generateColor(colors.grey1, 0xbb),
        'editorLineNumber.foreground': generateColor(colors.grey1, 0xbb),
        'editor.selectionBackground': generateColor(colors.white2, 0x50),
        'editor.lineHighlightBorder': colors.transparent,
        'editorLink.activeForeground': colors.blue,
        'editorInfo.foreground': colors.green,
        'editorWarning.foreground': colors.yellow,
        'editorError.foreground': colors.red,
        'editorOverviewRuler.border': colors.transparent,
        'editorOverviewRuler.infoForeground': colors.green,
        'editorOverviewRuler.warningForeground': colors.yellow,
        'editorOverviewRuler.errorForeground': colors.red,
        'editorHoverWidget.background': colors.black,
        'editorHoverWidget.border': generateColor(colors.white1, 0x10),
        'editorIndentGuide.background': generateColor(colors.grey1, 0xbb),
        'editorIndentGuide.activeBackground': colors.grey1,
        'editorGutter.modifiedBackground': generateColor(colors.green, 0x60),
        'editorGutter.addedBackground': generateColor(colors.blue, 0x60),
        'editorGutter.deletedBackground': generateColor(colors.red, 0x60),
        'diffEditor.insertedTextBackground': generateColor(colors.blue, 0x15),
        'diffEditor.removedTextBackground': generateColor(colors.red, 0x20),
        'editorWidget.background': colors.black,
        'editorWidget.resizeBorder': colors.blue,
        'editorWidget.border': colors.black,
        'editorSuggestWidget.selectedBackground': generateColor(colors.white2, 0x50),
        'peekViewTitleLabel.foreground': colors.white1,
        'peekViewTitleDescription.foreground': generateColor(colors.white1, 0x60),
        'peekViewTitle.background': colors.black,
        'peekViewEditor.background': colors.black,
        'peekView.border': colors.black,
        'peekViewResult.background': colors.black,
        'peekViewEditorGutter.background': colors.black,
        'peekViewResult.matchHighlightBackground': generateColor(colors.white2, 0x50),
        'peekViewEditor.matchHighlightBackground': generateColor(colors.white2, 0x50),
        'panelTitle.activeForeground': colors.white1,
        'panelTitle.inactiveForeground': colors.grey2,
        'panelTitle.activeBorder': colors.blue,
        'panel.background': colors.black,
        'panel.dropBackground': colors.transparent,
        'panel.border': colors.transparent,
        'statusBar.foreground': generateColor('4b526d'),
        'statusBar.background': colors.black,
        'statusBar.noFolderBackground': colors.black,
        'statusBar.debuggingForeground': colors.white1,
        'statusBar.debuggingBackground': colors.blue,
        'statusBarItem.hoverBackground': generateColor(colors.white2, 0x50),
        'titleBar.activeForeground': colors.white1,
        'titleBar.activeBackground': colors.black,
        'titleBar.inactiveForeground': colors.grey2,
        'titleBar.inactiveBackground': colors.black,
        'menu.background': colors.black,
        'menu.foreground': colors.white1,
        'menu.selectionBackground': generateColor(colors.black, 0x50),
        'menu.selectionForeground': colors.blue,
        'menu.selectionBorder': colors.transparent,
        'menu.separatorBackground': colors.white1,
        'menubar.selectionBackground': generateColor(colors.black, 0x30),
        'menubar.selectionForeground': colors.blue,
        'menubar.selectionBorder': colors.transparent,
        'notifications.background': colors.black,
        'notifications.foreground': colors.white1,
        'notificationLink.foreground': colors.blue,
        'extensionButton.prominentBackground': generateColor(colors.blue, 0x90),
        'extensionButton.prominentHoverBackground': colors.blue,
        'pickerGroup.foreground': colors.blue,
        'quickInputList.focusBackground': generateColor(colors.white2, 0x50),
        'terminal.foreground': colors.white1,
        'terminal.ansiWhite': colors.white1,
        'terminal.ansiBlack': colors.black,
        'terminal.ansiBlue': colors.blue,
        'terminal.ansiCyan': colors.blue,
        'terminal.ansiGreen': colors.green,
        'terminal.ansiMagenta': colors.red,
        'terminal.ansiRed': colors.red,
        'terminal.ansiYellow': colors.yellow,
        'terminal.ansiBrightWhite': colors.white1,
        'terminal.ansiBrightBlack': generateColor(colors.white1, 0xbb),
        'terminal.ansiBrightBlue': colors.blue,
        'terminal.ansiBrightCyan': colors.blue,
        'terminal.ansiBrightGreen': colors.green,
        'terminal.ansiBrightMagenta': colors.red,
        'terminal.ansiBrightRed': colors.red,
        'terminal.ansiBrightYellow': colors.yellow,
        'debugToolBar.background': colors.black,
        'gitDecoration.deletedResourceForeground': generateColor(colors.red, 0x90),
        'gitDecoration.conflictingResourceForeground': generateColor(colors.green, 0x90),
        'gitDecoration.modifiedResourceForeground': generateColor(colors.green, 0x90),
        'gitDecoration.untrackedResourceForeground': generateColor(colors.blue, 0x90),
        'gitDecoration.ignoredResourceForeground': generateColor('525975', 0x90),
        'settings.dropdownForeground': colors.white1,
        'settings.dropdownBackground': colors.black,
        'settings.numberInputForeground': colors.white1,
        'settings.numberInputBackground': colors.black,
        'settings.textInputForeground': colors.white1,
        'settings.textInputBackground': colors.black,
        'settings.headerForeground': colors.blue,
        'settings.modifiedItemIndicator': colors.blue,
        'settings.checkboxBackground': colors.black,
        'settings.checkboxForeground': colors.white1,
        'breadcrumb.foreground': colors.grey2,
        'breadcrumb.focusForeground': colors.white1,
        'breadcrumb.activeSelectionForeground': colors.blue,
        'breadcrumb.background': colors.black,
        'breadcrumbPicker.background': colors.black,
    },

    semanticHighlighting: true,
    semanticTokenColors: {
        namespace: colors.green,
        class: colors.blue,
        enum: colors.blue,
        interface: colors.blue,
        struct: colors.blue,
        typeParameter: colors.blue,
        type: colors.blue,
        parameter: colors.white1,
        variable: colors.white1,
        property: colors.white1,
        enumMember: colors.white1,
        decorator: colors.white1,
        event: colors.white1,
        function: colors.blue,
        method: colors.blue,
        macro: colors.blue,
        label: colors.green,
        comment: generateColor(colors.white1, 0xbb),
        string: colors.white1,
        keyword: colors.green,
        number: colors.orange,
        regexp: colors.white1,
        operator: colors.green,
    },

    tokenColors: [
        {
            scope: ['entity.name', 'support'],
            settings: {
                foreground: colors.blue,
            },
        },
        {
            scope: ['keyword', 'storage'],
            settings: {
                foreground: colors.green,
            },
        },
        {
            scope: ['entity.name.variable', 'string'],
            settings: {
                foreground: colors.white1,
            },
        },
        {
            scope: ['constant'],
            settings: {
                foreground: colors.orange,
            },
        },
        {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: {
                fontStyle: 'italic',
                foreground: generateColor(colors.white1, 0xbb),
            },
        },
        {
            scope: ['punctuation'],
            settings: {
                foreground: colors.white1,
            },
        },
        {
            scope: ['*url*', '*uri*', '*link*'],
            settings: {
                fontStyle: 'underline',
            },
        },
        {
            scope: [1, 3, 5, 7].map((depth) => {
                const metas = new Array(depth)
                    .fill('')
                    .map(() => 'meta.structure.dictionary.json')
                    .join(' ');
                return `source.json ${metas} support.type.property-name.json`;
            }),
            settings: {
                foreground: colors.blue,
            },
        },
        {
            scope: [2, 4, 6, 8].map((depth) => {
                const metas = new Array(depth)
                    .fill('')
                    .map(() => 'meta.structure.dictionary.json')
                    .join(' ');
                return `source.json ${metas} support.type.property-name.json`;
            }),
            settings: {
                foreground: colors.green,
            },
        },
        {
            scope: ['markup.heading', 'punctuation.definition.list.begin.markdown'],
            settings: {
                foreground: colors.green,
            },
        },
        {
            scope: ['markup.bold'],
            settings: {
                fontStyle: 'bold',
            },
        },
        {
            scope: ['markup.italic', 'markup.quote'],
            settings: {
                fontStyle: 'italic',
            },
        },
        {
            scope: ['markup.underline'],
            settings: {
                fontStyle: 'underline',
            },
        },
    ],
};

fs.writeFileSync(paralyzerFilename, JSON.stringify(paralyzer));

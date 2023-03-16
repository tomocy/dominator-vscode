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

const colors = {
    transparent: '#00000000',
    black: '#000000',
    white: '#e0e7ff',
    blue: '#09e7fb',
    green: '#00ffd8',
    red: '#de2163',
    yellow: '#dec32c',
    orange: '#f78c6c',
};

const paralyzer: Theme = {
    name: 'Dominator Paralyzer',
    type: 'dark',

    colors: {
        focusBorder: colors.black,
        descriptionForeground: colors.white,
        errorForeground: colors.yellow,
        'textLink.foreground': colors.blue,
        'button.foreground': colors.white,
        'button.background': '#717CB450',
        'checkbox.foreground': colors.white,
        'checkbox.background': colors.transparent,
        'dropdown.foreground': colors.white,
        'dropdown.background': colors.black,
        'dropdown.border': colors.transparent,
        'input.foreground': colors.white,
        'input.background': '#0E131A',
        'input.placeholderForeground': `${colors.white}60`,
        'input.border': colors.transparent,
        'inputOption.activeForeground': colors.blue,
        'inputOption.activeBackground': colors.transparent,
        'inputValidation.infoForeground': `${colors.green}50`,
        'inputValidation.warningForeground': `${colors.yellow}50`,
        'inputValidation.errorForeground': `${colors.red}50`,
        'scrollbar.shadow': colors.transparent,
        'scrollbarSlider.background': `${colors.white}20`,
        'scrollbarSlider.hoverBackground': `${colors.white}25`,
        'scrollbarSlider.activeBackground': `${colors.white}30`,
        'badge.background': colors.black,
        'badge.foreground': colors.white,
        'progressBar.background': colors.blue,
        'list.hoverForeground': colors.white,
        'list.hoverBackground': colors.transparent,
        'list.activeSelectionForeground': colors.white,
        'list.activeSelectionBackground': colors.transparent,
        'list.inactiveSelectionForeground': colors.white,
        'list.inactiveSelectionBackground': colors.transparent,
        'list.focusForeground': colors.blue,
        'list.focusBackground': colors.transparent,
        'list.highlightForeground': colors.blue,
        'list.warningForeground': colors.yellow,
        'list.errorForeground': colors.red,
        'list.filterMatchBackground': '#717CB450',
        'listFilterWidget.background': colors.transparent,
        'listFilterWidget.outline': colors.transparent,
        'listFilterWidget.noMatchesOutline': colors.transparent,
        'activityBar.foreground': colors.white,
        'activityBar.background': colors.black,
        'activityBar.dropBorder': colors.blue,
        'activityBarBadge.foreground': colors.black,
        'activityBarBadge.background': colors.blue,
        'sideBar.foreground': '#525975',
        'sideBar.background': colors.black,
        'sideBar.border': colors.transparent,
        'sideBarTitle.foreground': colors.white,
        'sideBarSectionHeader.foreground': '#525975',
        'sideBarSectionHeader.background': colors.black,
        'sideBarSectionHeader.border': colors.black,
        'editorGroupHeader.tabsBackground': colors.black,
        'editorGroup.border': colors.transparent,
        'editorGroup.dropBackground': colors.transparent,
        'tab.border': colors.transparent,
        'tab.activeForeground': colors.white,
        'tab.activeBorder': colors.blue,
        'tab.inactiveForeground': '#525975',
        'tab.inactiveBackground': colors.black,
        'editor.foreground': colors.white,
        'editor.background': colors.black,
        'editorCursor.foreground': colors.blue,
        'editorRuler.foreground': '#3B3F51BB',
        'editorLineNumber.foreground': '#3B3F51BB',
        'editor.selectionBackground': '#717CB450',
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
        'editorHoverWidget.border': `${colors.white}10`,
        'editorIndentGuide.background': '#3B3F51BB',
        'editorIndentGuide.activeBackground': '#3B3F51',
        'editorGutter.modifiedBackground': `${colors.green}60`,
        'editorGutter.addedBackground': `${colors.blue}60`,
        'editorGutter.deletedBackground': `${colors.red}60`,
        'diffEditor.insertedTextBackground': `${colors.blue}15`,
        'diffEditor.removedTextBackground': `${colors.red}20`,
        'editorWidget.background': colors.black,
        'editorWidget.resizeBorder': colors.blue,
        'editorWidget.border': colors.black,
        'editorSuggestWidget.selectedBackground': '#717CB450',
        'peekViewTitleLabel.foreground': colors.white,
        'peekViewTitleDescription.foreground': `${colors.white}60`,
        'peekViewTitle.background': colors.black,
        'peekViewEditor.background': colors.black,
        'peekView.border': colors.black,
        'peekViewResult.background': colors.black,
        'peekViewEditorGutter.background': colors.black,
        'peekViewResult.matchHighlightBackground': '#717CB450',
        'peekViewEditor.matchHighlightBackground': '#717CB450',
        'panelTitle.activeForeground': colors.white,
        'panelTitle.inactiveForeground': '#525975',
        'panelTitle.activeBorder': colors.blue,
        'panel.background': colors.black,
        'panel.dropBackground': colors.transparent,
        'panel.border': colors.transparent,
        'statusBar.foreground': '#4B526D',
        'statusBar.background': colors.black,
        'statusBar.noFolderBackground': colors.black,
        'statusBar.debuggingForeground': colors.white,
        'statusBar.debuggingBackground': colors.blue,
        'statusBarItem.hoverBackground': '#717CB450',
        'titleBar.activeForeground': colors.white,
        'titleBar.activeBackground': colors.black,
        'titleBar.inactiveForeground': '#525975',
        'titleBar.inactiveBackground': colors.black,
        'menu.background': colors.black,
        'menu.foreground': colors.white,
        'menu.selectionBackground': '#00000050',
        'menu.selectionForeground': colors.blue,
        'menu.selectionBorder': colors.transparent,
        'menu.separatorBackground': colors.white,
        'menubar.selectionBackground': '#00000030',
        'menubar.selectionForeground': colors.blue,
        'menubar.selectionBorder': colors.transparent,
        'notifications.background': colors.black,
        'notifications.foreground': colors.white,
        'notificationLink.foreground': colors.blue,
        'extensionButton.prominentBackground': `${colors.blue}90`,
        'extensionButton.prominentHoverBackground': colors.blue,
        'pickerGroup.foreground': colors.blue,
        'quickInputList.focusBackground': '#717cb450',
        'terminal.foreground': colors.white,
        'terminal.ansiWhite': colors.white,
        'terminal.ansiBlack': colors.black,
        'terminal.ansiBlue': colors.blue,
        'terminal.ansiCyan': colors.blue,
        'terminal.ansiGreen': colors.green,
        'terminal.ansiMagenta': colors.red,
        'terminal.ansiRed': colors.red,
        'terminal.ansiYellow': colors.yellow,
        'terminal.ansiBrightWhite': colors.white,
        'terminal.ansiBrightBlack': `${colors.white}bb`,
        'terminal.ansiBrightBlue': colors.blue,
        'terminal.ansiBrightCyan': colors.blue,
        'terminal.ansiBrightGreen': colors.green,
        'terminal.ansiBrightMagenta': colors.red,
        'terminal.ansiBrightRed': colors.red,
        'terminal.ansiBrightYellow': colors.yellow,
        'debugToolBar.background': colors.black,
        'gitDecoration.deletedResourceForeground': `${colors.red}90`,
        'gitDecoration.conflictingResourceForeground': `${colors.green}90`,
        'gitDecoration.modifiedResourceForeground': `${colors.green}90`,
        'gitDecoration.untrackedResourceForeground': `${colors.blue}90`,
        'gitDecoration.ignoredResourceForeground': '#52597590',
        'settings.dropdownForeground': colors.white,
        'settings.dropdownBackground': colors.black,
        'settings.numberInputForeground': colors.white,
        'settings.numberInputBackground': colors.black,
        'settings.textInputForeground': colors.white,
        'settings.textInputBackground': colors.black,
        'settings.headerForeground': colors.blue,
        'settings.modifiedItemIndicator': colors.blue,
        'settings.checkboxBackground': colors.black,
        'settings.checkboxForeground': colors.white,
        'breadcrumb.foreground': '#525975',
        'breadcrumb.focusForeground': colors.white,
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
        parameter: colors.white,
        variable: colors.white,
        property: colors.white,
        enumMember: colors.white,
        decorator: colors.white,
        event: colors.white,
        function: colors.blue,
        method: colors.blue,
        macro: colors.blue,
        label: colors.green,
        comment: `${colors.white}bb`,
        string: colors.white,
        keyword: colors.green,
        number: colors.orange,
        regexp: colors.white,
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
                foreground: colors.white,
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
                foreground: `${colors.white}bb`,
            },
        },
        {
            scope: ['punctuation'],
            settings: {
                foreground: colors.white,
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

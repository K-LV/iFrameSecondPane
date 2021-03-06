/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, $*/

define(function (require, exports, module) {
    "use strict";

    var CommandManager      = brackets.getModule("command/CommandManager"),
        Menus               = brackets.getModule("command/Menus"),
        AppInit             = brackets.getModule("utils/AppInit"),
        EditorManager       = brackets.getModule("editor/EditorManager"),
        ExtensionUtils      = brackets.getModule("utils/ExtensionUtils"),
        WorkspaceManager = brackets.getModule("view/WorkspaceManager"),
        SidebarView             = brackets.getModule("project/SidebarView"),
        Commands = brackets.getModule("command/Commands");

    var _panel;
    var _edits;
    var _more;
    var reviewpaneHTML = require("text!2pane.html");
    function main(){
        
    }

    function init() {
        CommandManager.execute(Commands.CMD_SPLITVIEW_VERTICAL);
        _panel = $('#second-pane');
        _panel.empty().append($(reviewpaneHTML));
        _edits = $('.main-toolbar').hide();
        _more = $('.content').css("right","0");
    }
    
    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID2 = "ErasePane2"; // package-style naming to avoid collisions
    CommandManager.register("Reveal Preview iFrame", MY_COMMAND_ID2, init);
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuItem(MY_COMMAND_ID2);
    
    AppInit.appReady(function(){
        init();

    });
});

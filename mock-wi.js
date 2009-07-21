//------------------------------------------------------------------------------

InspectorController = {};

InspectorController.hideDOMNodeHighlight = function() {
    console.log("mock-wi.js: called InspectorController.hideDOMNodeHighlight()");
};

InspectorController.highlightDOMNode = function(node) {
    console.log("mock-wi.js: called InspectorController.highlightDOMNode() (node below)");
    console.log(node);
};

InspectorController.loaded = function() {
    var panelName = localStorage.getItem("lastActivePanel");
    if (null == panelName) panelName = "scripts";

    WebInspector.currentPanel = WebInspector.panels[panelName];
};

InspectorController.windowUnloading = function() {
    console.log("mock-wi.js: called InspectorController.windowUnloading()");
};

InspectorController.attach = function() {
    console.log("mock-wi.js: called InspectorController.attach()");
};

InspectorController.detach = function() {
    console.log("mock-wi.js: called InspectorController.detach()");
};

InspectorController.closeWindow = function() {
    console.log("mock-wi.js: called InspectorController.closeWindow()");
};

InspectorController.clearMessages = function() {
    console.log("mock-wi.js: called InspectorController.clearMessages()");
};

InspectorController.toggleNodeSearch = function() {
    console.log("mock-wi.js: called InspectorController.toggleNodeSearch()");
};

InspectorController.isWindowVisible = function() {
    return true;
};

InspectorController.searchingForNode = function() {
    console.log("mock-wi.js: called InspectorController.searchingForNode()");
};

InspectorController.addResourceSourceToFrame = function(identifier, frame) {
    console.log("mock-wi.js: called InspectorController.addResourceSourceToFrame(" + identifier + "," + frame + ")");
};

InspectorController.addSourceToFrame = function(mimeType, sourceValue, frame) {
    console.log("mock-wi.js: called InspectorController.addSourceToFrame(" + mimeType + "," + sourceValue + "," + frame + ")");
};

InspectorController.getResourceDocumentNode = function(identifier) {
    console.log("mock-wi.js: called InspectorController.getResourceDocumentNode(" + identifier + ")");
};

InspectorController.search = function(node, query) {
    console.log("mock-wi.js: called InspectorController.searchsearch()");
};

InspectorController.databaseTableNames = function(database) {
    console.log("mock-wi.js: called InspectorController.databaseTableNames()");
};

InspectorController.setting = function(key) {
    console.log("mock-wi.js: called InspectorController.setting(" + key + ")");
};

InspectorController.setSetting = function(key, value) {
    console.log("mock-wi.js: called InspectorController.setSetting(" + key + "," + value + ")");
};

InspectorController.inspectedWindow = function() { 
    return window;
};

InspectorController.localizedStringsURL = function() {
    return "../English.lproj/localizedStrings.js";
};

InspectorController.hiddenPanels = function() {
// "elements,resources,profiles,databases,scripts"
    return ""; 
} 

InspectorController.platform = function() {
    return "mock-wi";
};

InspectorController.moveByUnrestricted = function(x, y) {
    console.log("mock-wi.js: called InspectorController.moveByUnrestricted()");
};

InspectorController.setAttachedWindowHeight = function(height) {
    console.log("mock-wi.js: called InspectorController.setAttachedWindowHeight(" + height + ")");
};

InspectorController.wrapCallback = function(callback) {
    return callback;
};

InspectorController.resourceTrackingEnabled = function() {
    return true;
};

InspectorController.enableResourceTracking = function(always) {
    console.log("mock-wi.js: called InspectorController.enableResourceTracking(" + always + ")");
};

InspectorController.disableResourceTracking = function(always) {
    console.log("mock-wi.js: called InspectorController.disableResourceTracking(" + always + ")");
};

InspectorController.storeLastActivePanel = function(panelName) {
    localStorage.setItem("lastActivePanel", panelName);
};

InspectorController.enableDebuggerFromFrontend = function(always) {
    console.log("mock-wi.js: called InspectorController.enableDebuggerFromFrontend(" + always + ")");
};

InspectorController.disableDebugger = function(always) {
    console.log("mock-wi.js: called InspectorController.disableDebugger(" + always + ")");
};

InspectorController.pauseInDebugger = function() {
    console.log("mock-wi.js: called InspectorController.pauseInDebugger()");
};

InspectorController.resumeDebugger = function() {
    console.log("mock-wi.js: called InspectorController.resumeDebugger()");
};

InspectorController.stepOverStatementInDebugger = function() {
    console.log("mock-wi.js: called InspectorController.stepOverStatementInDebugger()");
};

InspectorController.stepIntoStatementInDebugger = function() {
    console.log("mock-wi.js: called InspectorController.stepIntoStatementInDebugger()");
};

InspectorController.stepOutOfFunctionInDebugger = function() {
    console.log("mock-wi.js: called InspectorController.stepOutOfFunctionInDebugger()");
};

InspectorController.debuggerEnabled = function() { 
    return true;
};

InspectorController.pauseOnExceptions = function() { 
    return true;
};

InspectorController.profilerEnabled = function() {
    return true;
};

InspectorController.startProfiling = function() {
    console.log("mock-wi.js: called InspectorController.startProfiling()");
};

InspectorController.stopProfiling = function() {
    console.log("mock-wi.js: called InspectorController.stopProfiling()");
};

InspectorController.enableProfiler = function(always) {
    console.log("mock-wi.js: called InspectorController.enableProfiler(" + always + ")");
};

InspectorController.disableProfiler = function(always) {
    console.log("mock-wi.js: called InspectorController.disableProfiler(" + always + ")");
};

InspectorController.currentCallFrame = function() {
    console.log("mock-wi.js: called InspectorController.currentCallFrame()");
};

InspectorController.setPauseOnExceptions = function(pauseOnExceptions) {
    console.log("mock-wi.js: called InspectorController.setPauseOnExceptions(" + pauseOnExceptions + ")");
};

InspectorController.addBreakpoint = function(sourceID, lineNumber) {
    console.log("mock-wi.js: called InspectorController.addBreakpoint(" + sourceID + ", " + lineNumber + ")");
};

InspectorController.removeBreakpoint = function(sourceID, lineNumber) {
    console.log("mock-wi.js: called InspectorController.removeBreakpoint(" + sourceID + ", " + lineNumber + ")");
};

InspectorController.profiles = function() {
    console.log("mock-wi.js: called InspectorController.profiles()");
};

//------------------------------------------------------------------------------


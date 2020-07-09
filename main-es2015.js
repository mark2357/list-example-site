(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/DataNode.ts":
/*!*************************!*\
  !*** ./src/DataNode.ts ***!
  \*************************/
/*! exports provided: DataNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataNode", function() { return DataNode; });
class DataNode {
    constructor(id, name, parentId, value, nodeList) {
        this.childNodes = [];
        this.totalValue = 0;
        this.calculatedTotalValue = false;
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.value = value;
        if (nodeList[this.parentId] !== undefined) {
            let parentNode = nodeList[this.parentId];
            this.addParentNode(parentNode);
            parentNode.addChildNode(this);
        }
    }
    addChildNode(node) {
        this.childNodes.push(node);
    }
    addParentNode(node) {
        this.parentNode = node;
    }
    getTotalValue() {
        if (this.calculatedTotalValue === false) {
            this.calculateTotalValue();
        }
        return this.totalValue;
    }
    calculateTotalValue() {
        let totalValue = this.value;
        this.childNodes.forEach(childNode => {
            totalValue += childNode.getTotalValue();
        });
        this.totalValue = Math.round(totalValue * 100) / 100;
        this.calculatedTotalValue = true;
    }
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-list/data-list.component */ "./src/app/data-list/data-list.component.ts");



class AppComponent {
    constructor() {
        this.title = 'list-example';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-list");
    } }, directives: [_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_1__["DataListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-list/data-list.component */ "./src/app/data-list/data-list.component.ts");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/list-item/list-item.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__["DataListComponent"],
        _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__["DataListComponent"],
                    _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data-list/data-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/data-list/data-list.component.ts ***!
  \**************************************************/
/*! exports provided: DataListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListComponent", function() { return DataListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _DataNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataNode */ "./src/DataNode.ts");
/* harmony import */ var _assets_sampledata_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sampledata.csv */ "./src/assets/sampledata.csv");
/* harmony import */ var _assets_sampledata_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sampledata_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item/list-item.component */ "./src/app/list-item/list-item.component.ts");





class DataListComponent {
    constructor() {
        // contains dictionary of all nodes
        this.nodeList = {};
        // the currently selected node (nodes that are not child nodes will not be visible) will be null if there is no selected node
        this.selectedNode = null;
        // list that contains data of which nodes are displaying there children
        this.listItemChildrenVisible = {};
        /**
         * @description
         * used to analyse the data in the sampledata.csv
         * and format it into a effective tree structure
         */
        this.analyseData = () => {
            // creates a node and adds it to the list
            _assets_sampledata_csv__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(item => {
                let dataNode = new _DataNode__WEBPACK_IMPORTED_MODULE_1__["DataNode"](item.id, item.name, item.parent_id, item.value, this.nodeList);
                this.nodeList[item.id] = dataNode;
            });
            let firstKey = Object.keys(this.nodeList)[0];
            this.rootNode = this.nodeList[firstKey];
            // iteratively determines the total value for each node in the tree 
            this.rootNode.calculateTotalValue();
            // initializes the dictionary used to store weather each list item is open 
            Object.keys(this.nodeList).forEach((key) => {
                this.listItemChildrenVisible[key] = true;
            });
        };
        /**
         * @description
         * function is passed to child components so they can set the children visibility of other items/nodes
         * @param id the id of the item that is having it's children's visibility changed
         * @param value the new visibility value
         */
        this.handleSetChildrenVisibility = (id, value) => {
            this.listItemChildrenVisible[id] = value;
        };
        /**
         * @description
         * function is passed to child components so they can set the selected node
         * @param id the id of the item/node to set as the selected node
         * @param value the new visibility value
         */
        this.handleSetSelectedNode = (id) => {
            this.selectedNode = this.nodeList[id];
        };
        /**
         * @description
         * clears the selected node and display all the nodes
         */
        this.handleClearSelectedNode = () => {
            this.selectedNode = null;
        };
        /**
         * @description
         * shows the children for all nodes/items
         */
        this.handleExpandAllItems = () => {
            Object.keys(this.listItemChildrenVisible).forEach((key) => {
                this.listItemChildrenVisible[key] = true;
            });
        };
        /**
         * @description
         * hides the children for all nodes/items
         */
        this.handleCollapseAll = () => {
            Object.keys(this.listItemChildrenVisible).forEach((key) => {
                this.listItemChildrenVisible[key] = false;
            });
        };
    }
    ngOnInit() {
        this.analyseData();
    }
}
DataListComponent.ɵfac = function DataListComponent_Factory(t) { return new (t || DataListComponent)(); };
DataListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataListComponent, selectors: [["app-data-list"]], decls: 13, vars: 5, consts: [[1, "data-list"], [1, "header-wrapper"], [3, "click"], [3, "disabled", "click"], [1, "list-wrapper"], [3, "dataNode", "setChildrenVisibility", "setSelectedNode", "listItemChildrenVisible"]], template: function DataListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data List Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataListComponent_Template_button_click_5_listener() { return ctx.handleExpandAllItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Expand All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataListComponent_Template_button_click_7_listener() { return ctx.handleCollapseAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Collapse All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataListComponent_Template_button_click_9_listener() { return ctx.handleClearSelectedNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Clear Selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedNode == null ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNode", ctx.selectedNode == null ? ctx.rootNode : ctx.selectedNode)("setChildrenVisibility", ctx.handleSetChildrenVisibility)("setSelectedNode", ctx.handleSetSelectedNode)("listItemChildrenVisible", ctx.listItemChildrenVisible);
    } }, directives: [_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__["ListItemComponent"]], styles: [".data-list[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.data-list[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  color: #eee;\n}\n.data-list[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%] {\n  background-color: #1c1c1c;\n  margin-left: auto;\n  margin-right: auto;\n  overflow-y: scroll;\n  width: 100%;\n  flex-grow: 1;\n  scrollbar-width: thin;\n  scrollbar-color: #206590;\n}\n.data-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  \n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 1em;\n  width: 1em;\n  background: #000;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #206590;\n  -webkit-border-radius: 0.5em;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1saXN0L0Y6XFxXZWJQcm9qZWN0c1xcQW5ndWxhciBTaXRlc1xcbGlzdC1leGFtcGxlL3NyY1xcYXBwXFxkYXRhLWxpc3RcXGRhdGEtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGF0YS1saXN0L2RhdGEtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FERUk7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBR0EscUJBQUE7RUFDQSx3QkFBQTtBQ0ZSO0FET0k7RUFDSSwyQkFBQTtFQUE2QixlQUFBO0VBQzdCLHlCQUFBO0VBQTJCLFdBQUE7RUFDRCxtQkFBQTtFQUMxQixzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4QixxQkFBQTtFQUF1QiwyQkFBQTtFQUN2QixpQkFBQTtFQUFtQjtnREFBQTtBQ0UzQjtBRElBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0E7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FDQUo7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXRhLWxpc3QvZGF0YS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGEtbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG5cclxuICAgIC5oZWFkZXItd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgIC8vIHNldHMgc2Nyb2xsYmFyIHByb3BlcnRpZXMgb25seSB3b3JrcyBvbiBmaXJlZm94XHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogIzIwNjU5MDsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB1c2VkIHRvIHByZXZlbnQgaGlnaGxpZ2h0aW5nIG9mIHRleHRcclxuICAgIC8vIGZyb20gdGhpcyBleGFtcGxlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzgyNjc4Mi9ob3ctdG8tZGlzYWJsZS10ZXh0LXNlbGVjdGlvbi1oaWdobGlnaHRpbmdcclxuICAgIGgxIHtcclxuICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxyXG4gICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHVzZWQgdG8gc3R5bGUgc2Nyb2xsYmFyIGluIHdlYmtpdCBicm93c2VycyBlLmcuIGNocm9tZVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjA2NTkwO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjVlbTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59IiwiLmRhdGEtbGlzdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuLmRhdGEtbGlzdCAuaGVhZGVyLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbn1cbi5kYXRhLWxpc3QgLmxpc3Qtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICMyMDY1OTA7XG59XG4uZGF0YS1saXN0IGgxIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxZW07XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMjA2NTkwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-list',
                templateUrl: './data-list.component.html',
                styleUrls: ['./data-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/list-item/list-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-item/list-item.component.ts ***!
  \**************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ListItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.childrenVisible ? "" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNode", item_r1)("setChildrenVisibility", ctx_r0.setChildrenVisibility)("setSelectedNode", ctx_r0.setSelectedNode)("listItemChildrenVisible", ctx_r0.listItemChildrenVisible);
} }
class ListItemComponent {
    constructor() {
        /**
         * @description
         * handles toggling of children visibility
         */
        this.handleToggleChildren = () => {
            // only bother toggling children if there are children to hide and show
            if (this.dataNode.childNodes.length > 0) {
                this.setChildrenVisibility(this.dataNode.id, !this.childrenVisible);
            }
        };
        /**
         * @description
         * expands all children and it
         */
        this.handleExpandAllChildren = () => {
            this.setHierarchyVisible(this.dataNode);
        };
        /**
         * @description
         * recursively sets children to visible for all nodes bellow given node in hierarchy
         * @param node the current node to set it's children set as
         */
        this.setHierarchyVisible = (node) => {
            this.setChildrenVisibility(node.id, true);
            node.childNodes.forEach((node) => {
                this.setHierarchyVisible(node);
            });
        };
    }
    ngOnInit() {
    }
    /**
     * @description
     * returns the current visibility of the items children
     */
    get childrenVisible() {
        return this.listItemChildrenVisible[this.dataNode.id];
    }
    /**
     * @description
     * returns if the select button should be shown for this list item
     */
    get showSelectButton() {
        if (this.dataNode.childNodes.length === 0 || this.dataNode.parentNode === undefined) {
            return false;
        }
        return true;
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(); };
ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], inputs: { dataNode: "dataNode", indent: "indent", setChildrenVisibility: "setChildrenVisibility", setSelectedNode: "setSelectedNode", listItemChildrenVisible: "listItemChildrenVisible" }, decls: 12, vars: 9, consts: [[1, "list-item"], [1, "item-wrapper"], [3, "click"], [1, "text-wrapper", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "dataNode", "setChildrenVisibility", "setSelectedNode", "listItemChildrenVisible"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemComponent_Template_div_click_2_listener() { return ctx.handleToggleChildren(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemComponent_Template_div_click_4_listener() { return ctx.handleToggleChildren(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemComponent_Template_button_click_9_listener() { return ctx.setSelectedNode(ctx.dataNode.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListItemComponent_div_11_Template, 2, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("arrow-wrapper" + (ctx.dataNode.childNodes.length == 0 ? " hidden-element" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.childrenVisible ? "arrow down" : "arrow right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx.dataNode.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.dataNode.totalValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.showSelectButton ? "" : "hidden-element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataNode.childNodes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ListItemComponent], styles: [".list-item[_ngcontent-%COMP%] {\n  color: #eee;\n  font-family: inherit;\n  padding-left: 1em;\n  white-space: nowrap;\n  text-align: left;\n}\n.list-item[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n  display: flex;\n  flex-direction: row;\n}\n.list-item[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 1em;\n}\n.list-item[_ngcontent-%COMP%]   .hidden-element[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.list-item[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  \n}\n.list-item[_ngcontent-%COMP%]   .arrow-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 1em;\n}\n.list-item[_ngcontent-%COMP%]   .arrow-wrapper[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  border: solid #eee;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n.list-item[_ngcontent-%COMP%]   .arrow-wrapper[_ngcontent-%COMP%]   .arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n.list-item[_ngcontent-%COMP%]   .arrow-wrapper[_ngcontent-%COMP%]   .arrow.down[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pdGVtL0Y6XFxXZWJQcm9qZWN0c1xcQW5ndWxhciBTaXRlc1xcbGlzdC1leGFtcGxlL3NyY1xcYXBwXFxsaXN0LWl0ZW1cXGxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBcUJBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNuQko7QURESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR1I7QURGUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNJWjtBREFJO0VBQ0ksa0JBQUE7QUNFUjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FETUk7RUFDSSwyQkFBQTtFQUE2QixlQUFBO0VBQzdCLHlCQUFBO0VBQTJCLFdBQUE7RUFDRCxtQkFBQTtFQUMxQixzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4QixxQkFBQTtFQUF1QiwyQkFBQTtFQUN2QixpQkFBQTtFQUFtQjtnREFBQTtBQ0czQjtBRENJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQVE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDRVo7QURBWTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7QUNFaEI7QURBWTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7QUNFaEIiLCJmaWxlIjoic3JjL2FwcC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaXRlbSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcblxyXG4gICAgLml0ZW0td3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAudGV4dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZGRlbi1lbGVtZW50IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZGRlbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgIC8vIHVzZWQgdG8gcHJldmVudCBoaWdobGlnaHRpbmcgb2YgdGV4dFxyXG4gICAgLy8gZnJvbSB0aGlzIGV4YW1wbGUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODI2NzgyL2hvdy10by1kaXNhYmxlLXRleHQtc2VsZWN0aW9uLWhpZ2hsaWdodGluZ1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvdy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgIC5hcnJvdyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2VlZTtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRvd24ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubGlzdC1pdGVtIC5pdGVtLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubGlzdC1pdGVtIC5pdGVtLXdyYXBwZXIgLnRleHQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG4ubGlzdC1pdGVtIC5oaWRkZW4tZWxlbWVudCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5saXN0LWl0ZW0gLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGlzdC1pdGVtIHNwYW4ge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG4ubGlzdC1pdGVtIC5hcnJvdy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cbi5saXN0LWl0ZW0gLmFycm93LXdyYXBwZXIgLmFycm93IHtcbiAgYm9yZGVyOiBzb2xpZCAjZWVlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuLmxpc3QtaXRlbSAuYXJyb3ctd3JhcHBlciAuYXJyb3cucmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4ubGlzdC1pdGVtIC5hcnJvdy13cmFwcGVyIC5hcnJvdy5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-item',
                templateUrl: './list-item.component.html',
                styleUrls: ['./list-item.component.scss']
            }]
    }], function () { return []; }, { dataNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setChildrenVisibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setSelectedNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listItemChildrenVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/assets/sampledata.csv":
/*!***********************************!*\
  !*** ./src/assets/sampledata.csv ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"id":1,"name":"Kropf","parent_id":1,"value":48.67},{"id":2,"name":"Chive","parent_id":1,"value":19.15},{"id":3,"name":"Mandrake","parent_id":2,"value":64.16},{"id":4,"name":"Hanson","parent_id":3,"value":36.46},{"id":5,"name":"Fulton","parent_id":1,"value":6.92},{"id":6,"name":"Ruskin","parent_id":5,"value":5.35},{"id":7,"name":"Lake View","parent_id":3,"value":77.96},{"id":8,"name":"Merchant","parent_id":6,"value":60.09},{"id":9,"name":"Luster","parent_id":1,"value":60.13},{"id":10,"name":"Cherokee","parent_id":1,"value":96.37},{"id":11,"name":"5th","parent_id":2,"value":62.42},{"id":12,"name":"Sundown","parent_id":11,"value":55.13},{"id":13,"name":"Mcguire","parent_id":1,"value":15.95},{"id":14,"name":"Spenser","parent_id":3,"value":80.57},{"id":15,"name":"Browning","parent_id":6,"value":28.2},{"id":16,"name":"Summer Ridge","parent_id":15,"value":53.13},{"id":17,"name":"Kedzie","parent_id":1,"value":73.14},{"id":18,"name":"Reindahl","parent_id":4,"value":97.24},{"id":19,"name":"Kensington","parent_id":16,"value":85.21},{"id":20,"name":"Dryden","parent_id":12,"value":66.38},{"id":21,"name":"Meadow Valley","parent_id":5,"value":4.88},{"id":22,"name":"Ronald Regan","parent_id":6,"value":32.54},{"id":23,"name":"Moland","parent_id":18,"value":12.86},{"id":24,"name":"Daystar","parent_id":9,"value":84.54},{"id":25,"name":"Bowman","parent_id":4,"value":92.7},{"id":26,"name":"Sheridan","parent_id":3,"value":13.96},{"id":27,"name":"Anderson","parent_id":13,"value":98.41},{"id":28,"name":"Waxwing","parent_id":27,"value":3.47},{"id":29,"name":"Independence","parent_id":25,"value":87.67},{"id":30,"name":"Veith","parent_id":19,"value":42.18},{"id":31,"name":"Holy Cross","parent_id":2,"value":41.42},{"id":32,"name":"Duke","parent_id":29,"value":24.53},{"id":33,"name":"Chive","parent_id":4,"value":30.23},{"id":34,"name":"Arapahoe","parent_id":27,"value":90.85},{"id":35,"name":"Homewood","parent_id":26,"value":61.44},{"id":36,"name":"Bunker Hill","parent_id":4,"value":22.96},{"id":37,"name":"Clyde Gallagher","parent_id":27,"value":0.33},{"id":38,"name":"Dayton","parent_id":26,"value":13.42},{"id":39,"name":"Union","parent_id":27,"value":71.9},{"id":40,"name":"Continental","parent_id":18,"value":73.18},{"id":41,"name":"Gale","parent_id":1,"value":80.09},{"id":42,"name":"Karstens","parent_id":4,"value":84.73},{"id":43,"name":"Grayhawk","parent_id":23,"value":43.55},{"id":44,"name":"Ilene","parent_id":2,"value":35.91},{"id":45,"name":"Meadow Ridge","parent_id":22,"value":56.22},{"id":46,"name":"Roth","parent_id":32,"value":32.56},{"id":47,"name":"Dayton","parent_id":14,"value":35.51},{"id":48,"name":"Straubel","parent_id":18,"value":38.35},{"id":49,"name":"Badeau","parent_id":20,"value":71.04},{"id":50,"name":"Sycamore","parent_id":21,"value":79.74},{"id":51,"name":"Redwing","parent_id":46,"value":3.71},{"id":52,"name":"Milwaukee","parent_id":17,"value":5.47},{"id":53,"name":"Rigney","parent_id":12,"value":48.79},{"id":54,"name":"Stang","parent_id":3,"value":95.04},{"id":55,"name":"Old Shore","parent_id":15,"value":40.5},{"id":56,"name":"Novick","parent_id":36,"value":47.41},{"id":57,"name":"Atwood","parent_id":6,"value":92.98},{"id":58,"name":"David","parent_id":10,"value":41.07},{"id":59,"name":"Shasta","parent_id":52,"value":75.76},{"id":60,"name":"Burning Wood","parent_id":36,"value":3.67},{"id":61,"name":"Daystar","parent_id":6,"value":99.3},{"id":62,"name":"Graceland","parent_id":33,"value":30.36},{"id":63,"name":"Upham","parent_id":19,"value":99.03},{"id":64,"name":"Blue Bill Park","parent_id":11,"value":86.24},{"id":65,"name":"Vernon","parent_id":39,"value":72.95},{"id":66,"name":"Nelson","parent_id":9,"value":40.85},{"id":67,"name":"Summerview","parent_id":40,"value":44.98},{"id":68,"name":"Center","parent_id":20,"value":0.31},{"id":69,"name":"Old Shore","parent_id":2,"value":83.88},{"id":70,"name":"Cardinal","parent_id":14,"value":45.22},{"id":71,"name":"Bashford","parent_id":47,"value":59.38},{"id":72,"name":"Dwight","parent_id":59,"value":19.73},{"id":73,"name":"Scoville","parent_id":2,"value":61.07},{"id":74,"name":"Golf","parent_id":55,"value":14.63},{"id":75,"name":"Troy","parent_id":12,"value":87.66},{"id":76,"name":"Farwell","parent_id":18,"value":30.06},{"id":77,"name":"Talmadge","parent_id":40,"value":26.93},{"id":78,"name":"Dovetail","parent_id":70,"value":0.36},{"id":79,"name":"Anniversary","parent_id":41,"value":10.47},{"id":80,"name":"Butterfield","parent_id":35,"value":93.29},{"id":81,"name":"Elgar","parent_id":60,"value":78.7},{"id":82,"name":"Cardinal","parent_id":17,"value":52.58},{"id":83,"name":"Briar Crest","parent_id":23,"value":45.2},{"id":84,"name":"Alpine","parent_id":8,"value":4.05},{"id":85,"name":"Artisan","parent_id":63,"value":46.07},{"id":86,"name":"Elgar","parent_id":42,"value":99.14},{"id":87,"name":"Cambridge","parent_id":42,"value":76.81},{"id":88,"name":"Upham","parent_id":56,"value":52.13},{"id":89,"name":"Harper","parent_id":34,"value":1.04},{"id":90,"name":"Harbort","parent_id":67,"value":94.36},{"id":91,"name":"Fieldstone","parent_id":18,"value":53.75},{"id":92,"name":"Derek","parent_id":48,"value":88.94},{"id":93,"name":"Anderson","parent_id":89,"value":92.16},{"id":94,"name":"Sloan","parent_id":22,"value":17.17},{"id":95,"name":"Birchwood","parent_id":89,"value":48.09},{"id":96,"name":"Moulton","parent_id":85,"value":45.98},{"id":97,"name":"Cordelia","parent_id":68,"value":16.18},{"id":98,"name":"Hoffman","parent_id":50,"value":46.1},{"id":99,"name":"Morrow","parent_id":40,"value":99.29},{"id":100,"name":"Stoughton","parent_id":53,"value":84.71},{"id":101,"name":"Briar Crest","parent_id":48,"value":18.28},{"id":102,"name":"Banding","parent_id":71,"value":26.39},{"id":103,"name":"Lien","parent_id":84,"value":86.27},{"id":104,"name":"Michigan","parent_id":92,"value":48.87},{"id":105,"name":"Hovde","parent_id":40,"value":47.48},{"id":106,"name":"Crest Line","parent_id":87,"value":99.14},{"id":107,"name":"Bluejay","parent_id":35,"value":8.55},{"id":108,"name":"Manley","parent_id":32,"value":40.28},{"id":109,"name":"Nevada","parent_id":100,"value":7.14},{"id":110,"name":"8th","parent_id":74,"value":34.18},{"id":111,"name":"Loftsgordon","parent_id":93,"value":79.82},{"id":112,"name":"Mifflin","parent_id":91,"value":7.31},{"id":113,"name":"Fallview","parent_id":104,"value":83.66},{"id":114,"name":"Gulseth","parent_id":50,"value":11.93},{"id":115,"name":"Clarendon","parent_id":69,"value":80.82},{"id":116,"name":"Eliot","parent_id":59,"value":98.42},{"id":117,"name":"Cardinal","parent_id":21,"value":73.75},{"id":118,"name":"Dakota","parent_id":68,"value":63.13},{"id":119,"name":"Anniversary","parent_id":5,"value":74.2},{"id":120,"name":"Waxwing","parent_id":79,"value":52.56},{"id":121,"name":"Walton","parent_id":113,"value":93.22},{"id":122,"name":"Larry","parent_id":50,"value":15.45},{"id":123,"name":"Briar Crest","parent_id":38,"value":27.08},{"id":124,"name":"Kipling","parent_id":20,"value":67.62},{"id":125,"name":"Moulton","parent_id":119,"value":80.2},{"id":126,"name":"Ludington","parent_id":22,"value":1.03},{"id":127,"name":"Schurz","parent_id":18,"value":91.75},{"id":128,"name":"Fallview","parent_id":86,"value":9.9},{"id":129,"name":"Lake View","parent_id":51,"value":27.36},{"id":130,"name":"Grim","parent_id":101,"value":24.47},{"id":131,"name":"North","parent_id":121,"value":92.43},{"id":132,"name":"Warrior","parent_id":91,"value":31.32},{"id":133,"name":"Crowley","parent_id":75,"value":47.75},{"id":134,"name":"5th","parent_id":5,"value":16.77},{"id":135,"name":"Welch","parent_id":20,"value":39.58},{"id":136,"name":"Lotheville","parent_id":79,"value":23.01},{"id":137,"name":"Fremont","parent_id":31,"value":96.97},{"id":138,"name":"Sauthoff","parent_id":13,"value":37.04},{"id":139,"name":"Debra","parent_id":41,"value":22.9},{"id":140,"name":"Hagan","parent_id":12,"value":15.43},{"id":141,"name":"Oneill","parent_id":27,"value":58.29},{"id":142,"name":"6th","parent_id":126,"value":38.67},{"id":143,"name":"Sherman","parent_id":116,"value":32.27},{"id":144,"name":"Manitowish","parent_id":27,"value":40.55},{"id":145,"name":"Arapahoe","parent_id":124,"value":46.06},{"id":146,"name":"Duke","parent_id":61,"value":35.37},{"id":147,"name":"Summerview","parent_id":107,"value":68.46},{"id":148,"name":"Nobel","parent_id":76,"value":53.58},{"id":149,"name":"Maryland","parent_id":138,"value":35.65},{"id":150,"name":"David","parent_id":140,"value":38.52},{"id":151,"name":"Pierstorff","parent_id":9,"value":56.93},{"id":152,"name":"Schmedeman","parent_id":98,"value":82.87},{"id":153,"name":"Fieldstone","parent_id":100,"value":54.93},{"id":154,"name":"Bultman","parent_id":150,"value":3.06},{"id":155,"name":"Prentice","parent_id":128,"value":0.29},{"id":156,"name":"Dryden","parent_id":90,"value":92.88},{"id":157,"name":"Norway Maple","parent_id":128,"value":81.22},{"id":158,"name":"Mariners Cove","parent_id":42,"value":71.43},{"id":159,"name":"Gulseth","parent_id":36,"value":38.38},{"id":160,"name":"Florence","parent_id":77,"value":47.05},{"id":161,"name":"Artisan","parent_id":59,"value":13.94},{"id":162,"name":"Schmedeman","parent_id":40,"value":53.37},{"id":163,"name":"Walton","parent_id":4,"value":62.69},{"id":164,"name":"Erie","parent_id":32,"value":55.76},{"id":165,"name":"Towne","parent_id":16,"value":98.08},{"id":166,"name":"Petterle","parent_id":162,"value":14.3},{"id":167,"name":"Summit","parent_id":138,"value":75.59},{"id":168,"name":"Cordelia","parent_id":46,"value":12.45},{"id":169,"name":"Anderson","parent_id":7,"value":48.91},{"id":170,"name":"Riverside","parent_id":27,"value":36.66},{"id":171,"name":"Corben","parent_id":114,"value":43.32},{"id":172,"name":"Hayes","parent_id":78,"value":7.2},{"id":173,"name":"Katie","parent_id":36,"value":9.42},{"id":174,"name":"Surrey","parent_id":125,"value":64.08},{"id":175,"name":"6th","parent_id":152,"value":31.66},{"id":176,"name":"Welch","parent_id":49,"value":38.15},{"id":177,"name":"Clyde Gallagher","parent_id":109,"value":55.75},{"id":178,"name":"Morrow","parent_id":103,"value":66.92},{"id":179,"name":"Eliot","parent_id":156,"value":6.97},{"id":180,"name":"Fair Oaks","parent_id":29,"value":2.86},{"id":181,"name":"Shasta","parent_id":84,"value":64.14},{"id":182,"name":"Beilfuss","parent_id":35,"value":81.46},{"id":183,"name":"Monument","parent_id":67,"value":96},{"id":184,"name":"Kingsford","parent_id":93,"value":80.77},{"id":185,"name":"Kings","parent_id":63,"value":28.24},{"id":186,"name":"Marquette","parent_id":34,"value":44.3},{"id":187,"name":"Southridge","parent_id":174,"value":78.49},{"id":188,"name":"Pearson","parent_id":112,"value":84.25},{"id":189,"name":"Sunbrook","parent_id":29,"value":27.97},{"id":190,"name":"West","parent_id":127,"value":6.53},{"id":191,"name":"Gina","parent_id":132,"value":84.76},{"id":192,"name":"Cottonwood","parent_id":24,"value":72.41},{"id":193,"name":"Hoepker","parent_id":137,"value":71.29},{"id":194,"name":"Dwight","parent_id":2,"value":29.54},{"id":195,"name":"Eastlawn","parent_id":135,"value":78.13},{"id":196,"name":"Dorton","parent_id":93,"value":24.13},{"id":197,"name":"Thompson","parent_id":177,"value":95.35},{"id":198,"name":"Kim","parent_id":39,"value":22.46},{"id":199,"name":"Dennis","parent_id":63,"value":50.99},{"id":200,"name":"Fuller","parent_id":34,"value":72.4},{"id":201,"name":"Pearson","parent_id":104,"value":60.12},{"id":202,"name":"Pankratz","parent_id":105,"value":81.88},{"id":203,"name":"Morrow","parent_id":68,"value":89.58},{"id":204,"name":"Valley Edge","parent_id":94,"value":89.11},{"id":205,"name":"Fuller","parent_id":91,"value":82.87},{"id":206,"name":"Reindahl","parent_id":138,"value":14.76},{"id":207,"name":"Briar Crest","parent_id":62,"value":47.45},{"id":208,"name":"Meadow Vale","parent_id":190,"value":48.48},{"id":209,"name":"Lerdahl","parent_id":2,"value":32.79},{"id":210,"name":"Elgar","parent_id":105,"value":94.83},{"id":211,"name":"Ryan","parent_id":12,"value":36.4},{"id":212,"name":"Mitchell","parent_id":143,"value":14.2},{"id":213,"name":"Gerald","parent_id":82,"value":26.45},{"id":214,"name":"Kings","parent_id":134,"value":61.44},{"id":215,"name":"Esch","parent_id":173,"value":95.68},{"id":216,"name":"Main","parent_id":136,"value":36.16},{"id":217,"name":"Golf Course","parent_id":105,"value":67.8},{"id":218,"name":"Southridge","parent_id":81,"value":69.24},{"id":219,"name":"Bartelt","parent_id":5,"value":40.33},{"id":220,"name":"Pine View","parent_id":51,"value":87.73},{"id":221,"name":"Sunbrook","parent_id":43,"value":90.43},{"id":222,"name":"Fair Oaks","parent_id":62,"value":15.16},{"id":223,"name":"Mitchell","parent_id":90,"value":8.64},{"id":224,"name":"Muir","parent_id":58,"value":35.28},{"id":225,"name":"Maple","parent_id":217,"value":91.3},{"id":226,"name":"Carberry","parent_id":224,"value":18.11},{"id":227,"name":"Mandrake","parent_id":122,"value":33.1},{"id":228,"name":"Susan","parent_id":81,"value":64.32},{"id":229,"name":"New Castle","parent_id":103,"value":70.49},{"id":230,"name":"Meadow Ridge","parent_id":210,"value":49.84},{"id":231,"name":"Rigney","parent_id":223,"value":77.93},{"id":232,"name":"Gateway","parent_id":185,"value":46.78},{"id":233,"name":"Helena","parent_id":184,"value":50.1},{"id":234,"name":"Garrison","parent_id":192,"value":65.65},{"id":235,"name":"Messerschmidt","parent_id":76,"value":48.31},{"id":236,"name":"Shelley","parent_id":85,"value":56.55},{"id":237,"name":"Springview","parent_id":168,"value":25.06},{"id":238,"name":"Hauk","parent_id":69,"value":49.47},{"id":239,"name":"Riverside","parent_id":115,"value":48.48},{"id":240,"name":"Miller","parent_id":98,"value":38.98},{"id":241,"name":"Hauk","parent_id":136,"value":93.59},{"id":242,"name":"Esker","parent_id":55,"value":43.48},{"id":243,"name":"Miller","parent_id":165,"value":60.55},{"id":244,"name":"Thierer","parent_id":23,"value":84.27},{"id":245,"name":"Kings","parent_id":241,"value":39.32},{"id":246,"name":"Algoma","parent_id":162,"value":77.46},{"id":247,"name":"Warrior","parent_id":115,"value":82.48},{"id":248,"name":"Dayton","parent_id":42,"value":70.64},{"id":249,"name":"Huxley","parent_id":39,"value":44.47},{"id":250,"name":"Gulseth","parent_id":36,"value":89.27},{"id":251,"name":"Declaration","parent_id":96,"value":63.03},{"id":252,"name":"Algoma","parent_id":248,"value":0.83},{"id":253,"name":"Longview","parent_id":139,"value":42.12},{"id":254,"name":"Muir","parent_id":85,"value":63.84},{"id":255,"name":"Mccormick","parent_id":90,"value":58.53},{"id":256,"name":"Anthes","parent_id":216,"value":23.71},{"id":257,"name":"Harper","parent_id":234,"value":47.15},{"id":258,"name":"Gerald","parent_id":225,"value":62.93},{"id":259,"name":"Monterey","parent_id":238,"value":76.27},{"id":260,"name":"Esch","parent_id":22,"value":84.53},{"id":261,"name":"Pleasure","parent_id":140,"value":12.29},{"id":262,"name":"Almo","parent_id":246,"value":51.75},{"id":263,"name":"Melody","parent_id":48,"value":15.72},{"id":264,"name":"Bashford","parent_id":42,"value":49.03},{"id":265,"name":"Summerview","parent_id":202,"value":53.85},{"id":266,"name":"Messerschmidt","parent_id":57,"value":98.17},{"id":267,"name":"Bobwhite","parent_id":208,"value":1.19},{"id":268,"name":"Kenwood","parent_id":45,"value":65.3},{"id":269,"name":"Donald","parent_id":68,"value":33.31},{"id":270,"name":"Evergreen","parent_id":124,"value":44.88},{"id":271,"name":"Doe Crossing","parent_id":39,"value":95.25},{"id":272,"name":"Cottonwood","parent_id":262,"value":64.65},{"id":273,"name":"Summer Ridge","parent_id":116,"value":76.11},{"id":274,"name":"Center","parent_id":46,"value":4.31},{"id":275,"name":"Boyd","parent_id":6,"value":76.9},{"id":276,"name":"Stone Corner","parent_id":50,"value":44.97},{"id":277,"name":"Nobel","parent_id":217,"value":40.35},{"id":278,"name":"Superior","parent_id":249,"value":84.93},{"id":279,"name":"Moose","parent_id":201,"value":10.98},{"id":280,"name":"Debs","parent_id":195,"value":5.78},{"id":281,"name":"Emmet","parent_id":58,"value":38.46},{"id":282,"name":"Vahlen","parent_id":141,"value":41.99},{"id":283,"name":"Buhler","parent_id":226,"value":78.44},{"id":284,"name":"Trailsway","parent_id":264,"value":11.8},{"id":285,"name":"Rigney","parent_id":49,"value":89},{"id":286,"name":"Clarendon","parent_id":60,"value":96.42},{"id":287,"name":"Calypso","parent_id":40,"value":57.62},{"id":288,"name":"Cascade","parent_id":219,"value":53.19},{"id":289,"name":"Memorial","parent_id":153,"value":79.73},{"id":290,"name":"Anderson","parent_id":7,"value":35.91},{"id":291,"name":"Anniversary","parent_id":109,"value":51.92},{"id":292,"name":"Sugar","parent_id":57,"value":77.05},{"id":293,"name":"Forster","parent_id":266,"value":35.09},{"id":294,"name":"Portage","parent_id":82,"value":61.36},{"id":295,"name":"Brown","parent_id":117,"value":92.95},{"id":296,"name":"Kinsman","parent_id":119,"value":73.67},{"id":297,"name":"Mitchell","parent_id":198,"value":25.94},{"id":298,"name":"Service","parent_id":295,"value":73.51},{"id":299,"name":"Banding","parent_id":295,"value":75.18},{"id":300,"name":"Independence","parent_id":241,"value":27.21},{"id":301,"name":"Thierer","parent_id":143,"value":53.98},{"id":302,"name":"Clyde Gallagher","parent_id":58,"value":10.07},{"id":303,"name":"Lake View","parent_id":168,"value":63.9},{"id":304,"name":"Nova","parent_id":278,"value":43.35},{"id":305,"name":"Vermont","parent_id":291,"value":98.29},{"id":306,"name":"Shopko","parent_id":73,"value":77.86},{"id":307,"name":"Maple","parent_id":278,"value":97.69},{"id":308,"name":"Mockingbird","parent_id":70,"value":32.38},{"id":309,"name":"Straubel","parent_id":260,"value":81.49},{"id":310,"name":"South","parent_id":80,"value":26.12},{"id":311,"name":"Boyd","parent_id":150,"value":49.41},{"id":312,"name":"Gerald","parent_id":200,"value":42.07},{"id":313,"name":"Prairie Rose","parent_id":148,"value":44},{"id":314,"name":"Main","parent_id":149,"value":31.01},{"id":315,"name":"Center","parent_id":252,"value":26.76},{"id":316,"name":"Coleman","parent_id":196,"value":73.12},{"id":317,"name":"Duke","parent_id":285,"value":75.82},{"id":318,"name":"Del Mar","parent_id":308,"value":11.17},{"id":319,"name":"Killdeer","parent_id":146,"value":23.19},{"id":320,"name":"Mccormick","parent_id":113,"value":75.88},{"id":321,"name":"Mosinee","parent_id":302,"value":41.68},{"id":322,"name":"Glendale","parent_id":268,"value":31.7},{"id":323,"name":"Eliot","parent_id":189,"value":94.4},{"id":324,"name":"Maple Wood","parent_id":304,"value":34.56},{"id":325,"name":"Nancy","parent_id":208,"value":52.1},{"id":326,"name":"Sutteridge","parent_id":137,"value":93.18},{"id":327,"name":"Donald","parent_id":79,"value":84.92},{"id":328,"name":"Oriole","parent_id":293,"value":31.14},{"id":329,"name":"Division","parent_id":268,"value":98.07},{"id":330,"name":"Porter","parent_id":67,"value":61.76},{"id":331,"name":"Victoria","parent_id":320,"value":6.69},{"id":332,"name":"Quincy","parent_id":80,"value":72.89},{"id":333,"name":"Green","parent_id":161,"value":36.02},{"id":334,"name":"Hayes","parent_id":33,"value":51.46},{"id":335,"name":"Hansons","parent_id":31,"value":2.87},{"id":336,"name":"Tennessee","parent_id":102,"value":63.07},{"id":337,"name":"Dayton","parent_id":148,"value":26.83},{"id":338,"name":"Graedel","parent_id":186,"value":81.48},{"id":339,"name":"Oakridge","parent_id":330,"value":45.01},{"id":340,"name":"Rigney","parent_id":198,"value":31.55},{"id":341,"name":"American","parent_id":255,"value":93.81},{"id":342,"name":"Shasta","parent_id":117,"value":10.57},{"id":343,"name":"Ruskin","parent_id":294,"value":32.96},{"id":344,"name":"Badeau","parent_id":167,"value":23.97},{"id":345,"name":"Mariners Cove","parent_id":69,"value":8.46},{"id":346,"name":"Hoffman","parent_id":212,"value":93.52},{"id":347,"name":"Tony","parent_id":194,"value":50.09},{"id":348,"name":"Mesta","parent_id":101,"value":45.18},{"id":349,"name":"Larry","parent_id":116,"value":69.97},{"id":350,"name":"Talisman","parent_id":11,"value":38.55},{"id":351,"name":"Moose","parent_id":263,"value":51.34},{"id":352,"name":"Annamark","parent_id":291,"value":3.98},{"id":353,"name":"Autumn Leaf","parent_id":252,"value":56.64},{"id":354,"name":"Meadow Ridge","parent_id":176,"value":41.78},{"id":355,"name":"Hermina","parent_id":173,"value":66.09},{"id":356,"name":"Welch","parent_id":121,"value":54.86},{"id":357,"name":"Dayton","parent_id":300,"value":1.15},{"id":358,"name":"Oak Valley","parent_id":321,"value":58.15},{"id":359,"name":"Michigan","parent_id":76,"value":78.99},{"id":360,"name":"Tony","parent_id":330,"value":52.22},{"id":361,"name":"Farwell","parent_id":331,"value":83.75},{"id":362,"name":"Kensington","parent_id":123,"value":2.43},{"id":363,"name":"Kenwood","parent_id":86,"value":76.68},{"id":364,"name":"Magdeline","parent_id":151,"value":1.26},{"id":365,"name":"Melvin","parent_id":286,"value":18.49},{"id":366,"name":"Hanover","parent_id":216,"value":94.15},{"id":367,"name":"Tomscot","parent_id":24,"value":9.96},{"id":368,"name":"Columbus","parent_id":302,"value":31.67},{"id":369,"name":"Heath","parent_id":68,"value":91.71},{"id":370,"name":"1st","parent_id":45,"value":84.82},{"id":371,"name":"Maywood","parent_id":327,"value":74.23},{"id":372,"name":"Oneill","parent_id":185,"value":94.33},{"id":373,"name":"Morningstar","parent_id":118,"value":83.21},{"id":374,"name":"Cambridge","parent_id":158,"value":52.42},{"id":375,"name":"Goodland","parent_id":255,"value":38.29},{"id":376,"name":"Pine View","parent_id":59,"value":30.65},{"id":377,"name":"Ludington","parent_id":314,"value":8.34},{"id":378,"name":"Mendota","parent_id":266,"value":16.47},{"id":379,"name":"Granby","parent_id":70,"value":32.42},{"id":380,"name":"Hoffman","parent_id":355,"value":39.58},{"id":381,"name":"Larry","parent_id":299,"value":86.5},{"id":382,"name":"Laurel","parent_id":265,"value":26.26},{"id":383,"name":"Jenna","parent_id":170,"value":85.93},{"id":384,"name":"American","parent_id":245,"value":9.28},{"id":385,"name":"Lyons","parent_id":105,"value":40.76},{"id":386,"name":"Lotheville","parent_id":362,"value":55.99},{"id":387,"name":"Coolidge","parent_id":224,"value":45.67},{"id":388,"name":"Graedel","parent_id":278,"value":86.59},{"id":389,"name":"Clyde Gallagher","parent_id":85,"value":12.59},{"id":390,"name":"Corscot","parent_id":336,"value":34.6},{"id":391,"name":"Eagle Crest","parent_id":39,"value":63.1},{"id":392,"name":"Holy Cross","parent_id":336,"value":8.09},{"id":393,"name":"Mallory","parent_id":286,"value":39.06},{"id":394,"name":"Grayhawk","parent_id":222,"value":79.48},{"id":395,"name":"Little Fleur","parent_id":215,"value":23.32},{"id":396,"name":"Bultman","parent_id":184,"value":41.84},{"id":397,"name":"Haas","parent_id":128,"value":14.35},{"id":398,"name":"Hermina","parent_id":40,"value":90.11},{"id":399,"name":"Lighthouse Bay","parent_id":93,"value":54.29},{"id":400,"name":"Roth","parent_id":391,"value":97.58},{"id":401,"name":"Kenwood","parent_id":33,"value":46.57},{"id":402,"name":"Springview","parent_id":123,"value":37.53},{"id":403,"name":"Fordem","parent_id":112,"value":52.67},{"id":404,"name":"Waubesa","parent_id":402,"value":67.03},{"id":405,"name":"Prentice","parent_id":81,"value":93.91},{"id":406,"name":"Onsgard","parent_id":281,"value":30.71},{"id":407,"name":"Burrows","parent_id":94,"value":2.59},{"id":408,"name":"Victoria","parent_id":148,"value":42.78},{"id":409,"name":"Hanson","parent_id":315,"value":62.29},{"id":410,"name":"Farwell","parent_id":188,"value":79.29},{"id":411,"name":"Washington","parent_id":330,"value":31.02},{"id":412,"name":"Pankratz","parent_id":126,"value":90.65},{"id":413,"name":"Crest Line","parent_id":363,"value":42.95},{"id":414,"name":"Sullivan","parent_id":148,"value":97.35},{"id":415,"name":"Hauk","parent_id":99,"value":92.7},{"id":416,"name":"Northfield","parent_id":401,"value":99.62},{"id":417,"name":"Dexter","parent_id":359,"value":96.7},{"id":418,"name":"Dottie","parent_id":213,"value":19.82},{"id":419,"name":"Artisan","parent_id":163,"value":32},{"id":420,"name":"Charing Cross","parent_id":254,"value":57.44},{"id":421,"name":"Springview","parent_id":139,"value":34.44},{"id":422,"name":"Ohio","parent_id":24,"value":48.12},{"id":423,"name":"Schlimgen","parent_id":115,"value":80.26},{"id":424,"name":"Mallory","parent_id":63,"value":1.77},{"id":425,"name":"Manley","parent_id":184,"value":43.33},{"id":426,"name":"Merry","parent_id":181,"value":27.71},{"id":427,"name":"Weeping Birch","parent_id":73,"value":83.52},{"id":428,"name":"Monument","parent_id":284,"value":44.15},{"id":429,"name":"Village","parent_id":391,"value":90.6},{"id":430,"name":"Hayes","parent_id":104,"value":78.14},{"id":431,"name":"Fieldstone","parent_id":379,"value":68.79},{"id":432,"name":"Shelley","parent_id":335,"value":20.29},{"id":433,"name":"Harper","parent_id":342,"value":41.86},{"id":434,"name":"Doe Crossing","parent_id":66,"value":96.92},{"id":435,"name":"Swallow","parent_id":427,"value":9.36},{"id":436,"name":"Jana","parent_id":331,"value":40.71},{"id":437,"name":"Scoville","parent_id":305,"value":96.34},{"id":438,"name":"Green","parent_id":225,"value":81.5},{"id":439,"name":"Dawn","parent_id":385,"value":99.54},{"id":440,"name":"7th","parent_id":191,"value":92.37},{"id":441,"name":"Shoshone","parent_id":240,"value":7.44},{"id":442,"name":"Cottonwood","parent_id":384,"value":71.96},{"id":443,"name":"Fallview","parent_id":85,"value":77.85},{"id":444,"name":"Crest Line","parent_id":71,"value":24.18},{"id":445,"name":"Bunting","parent_id":133,"value":58.65},{"id":446,"name":"Elgar","parent_id":56,"value":8.55},{"id":447,"name":"Elgar","parent_id":341,"value":35.66},{"id":448,"name":"Lien","parent_id":97,"value":73.93},{"id":449,"name":"Helena","parent_id":363,"value":58.69},{"id":450,"name":"Glacier Hill","parent_id":7,"value":23.89},{"id":451,"name":"Melrose","parent_id":127,"value":85.7},{"id":452,"name":"Barnett","parent_id":143,"value":3.2},{"id":453,"name":"Michigan","parent_id":312,"value":73.76},{"id":454,"name":"Hudson","parent_id":372,"value":14.58},{"id":455,"name":"Porter","parent_id":214,"value":99.66},{"id":456,"name":"Heath","parent_id":383,"value":70.61},{"id":457,"name":"Kenwood","parent_id":350,"value":56.45},{"id":458,"name":"Summit","parent_id":373,"value":67.4},{"id":459,"name":"Mifflin","parent_id":40,"value":76.37},{"id":460,"name":"Jackson","parent_id":205,"value":42.49},{"id":461,"name":"Oak Valley","parent_id":90,"value":87.27},{"id":462,"name":"Milwaukee","parent_id":360,"value":68.42},{"id":463,"name":"Bobwhite","parent_id":44,"value":14.59},{"id":464,"name":"Iowa","parent_id":429,"value":20.02},{"id":465,"name":"Luster","parent_id":60,"value":90.08},{"id":466,"name":"Talisman","parent_id":427,"value":83.44},{"id":467,"name":"Boyd","parent_id":368,"value":4.05},{"id":468,"name":"Basil","parent_id":439,"value":2.96},{"id":469,"name":"Little Fleur","parent_id":155,"value":75.98},{"id":470,"name":"Longview","parent_id":407,"value":69.45},{"id":471,"name":"Weeping Birch","parent_id":453,"value":41.82},{"id":472,"name":"Fisk","parent_id":81,"value":22.38},{"id":473,"name":"Main","parent_id":136,"value":78.06},{"id":474,"name":"3rd","parent_id":172,"value":94.46},{"id":475,"name":"Golf View","parent_id":313,"value":82.68},{"id":476,"name":"Maple Wood","parent_id":377,"value":23.12},{"id":477,"name":"Vernon","parent_id":149,"value":13.88},{"id":478,"name":"Scofield","parent_id":50,"value":69.69},{"id":479,"name":"Forest Dale","parent_id":204,"value":28.83},{"id":480,"name":"Scoville","parent_id":345,"value":53.75},{"id":481,"name":"Warrior","parent_id":457,"value":74.23},{"id":482,"name":"Carberry","parent_id":118,"value":66.38},{"id":483,"name":"Michigan","parent_id":4,"value":24.65},{"id":484,"name":"Pond","parent_id":62,"value":4.3},{"id":485,"name":"La Follette","parent_id":21,"value":36.46},{"id":486,"name":"Talmadge","parent_id":317,"value":10.36},{"id":487,"name":"Lunder","parent_id":413,"value":67.37},{"id":488,"name":"Fuller","parent_id":100,"value":32.19},{"id":489,"name":"Loftsgordon","parent_id":212,"value":23.32},{"id":490,"name":"Pierstorff","parent_id":337,"value":10.34},{"id":491,"name":"Cardinal","parent_id":266,"value":3.18},{"id":492,"name":"Randy","parent_id":178,"value":62.17},{"id":493,"name":"Packers","parent_id":451,"value":1.74},{"id":494,"name":"Express","parent_id":347,"value":52.2},{"id":495,"name":"Doe Crossing","parent_id":181,"value":41.25},{"id":496,"name":"Warbler","parent_id":165,"value":46.57},{"id":497,"name":"Eggendart","parent_id":335,"value":65.88},{"id":498,"name":"Carberry","parent_id":321,"value":54.93},{"id":499,"name":"Swallow","parent_id":75,"value":34.06},{"id":500,"name":"Judy","parent_id":488,"value":80.05},{"id":501,"name":"Dennis","parent_id":156,"value":7.04},{"id":502,"name":"Swallow","parent_id":369,"value":87.35},{"id":503,"name":"Grayhawk","parent_id":161,"value":90.05},{"id":504,"name":"Westport","parent_id":350,"value":42.52},{"id":505,"name":"Rowland","parent_id":411,"value":76.74},{"id":506,"name":"Hagan","parent_id":21,"value":91.06},{"id":507,"name":"Sauthoff","parent_id":414,"value":8.42},{"id":508,"name":"Florence","parent_id":303,"value":0.91},{"id":509,"name":"Mendota","parent_id":268,"value":97.93},{"id":510,"name":"Ilene","parent_id":20,"value":62.81},{"id":511,"name":"Lakeland","parent_id":448,"value":42.78},{"id":512,"name":"Dorton","parent_id":395,"value":93.24},{"id":513,"name":"Buena Vista","parent_id":140,"value":50.35},{"id":514,"name":"Marcy","parent_id":354,"value":39.4},{"id":515,"name":"Granby","parent_id":185,"value":80.93},{"id":516,"name":"Fulton","parent_id":455,"value":96.44},{"id":517,"name":"Jenna","parent_id":332,"value":44.48},{"id":518,"name":"Oak","parent_id":342,"value":79.52},{"id":519,"name":"Express","parent_id":114,"value":85.07},{"id":520,"name":"Farragut","parent_id":268,"value":24.65},{"id":521,"name":"Monument","parent_id":276,"value":72.24},{"id":522,"name":"Shasta","parent_id":342,"value":69.36},{"id":523,"name":"Welch","parent_id":502,"value":73.34},{"id":524,"name":"Browning","parent_id":41,"value":89.54},{"id":525,"name":"Comanche","parent_id":489,"value":14.19},{"id":526,"name":"Merrick","parent_id":360,"value":38.75},{"id":527,"name":"Lyons","parent_id":192,"value":81.01},{"id":528,"name":"Kensington","parent_id":84,"value":78.17},{"id":529,"name":"Westport","parent_id":143,"value":77.09},{"id":530,"name":"Bonner","parent_id":375,"value":51.39},{"id":531,"name":"Laurel","parent_id":340,"value":71.5},{"id":532,"name":"Pankratz","parent_id":312,"value":21.14},{"id":533,"name":"Quincy","parent_id":257,"value":72.53},{"id":534,"name":"Elgar","parent_id":112,"value":53.95},{"id":535,"name":"Onsgard","parent_id":201,"value":84.12},{"id":536,"name":"Charing Cross","parent_id":161,"value":22.5},{"id":537,"name":"Manufacturers","parent_id":333,"value":70.37},{"id":538,"name":"Graceland","parent_id":168,"value":53.02},{"id":539,"name":"Eggendart","parent_id":61,"value":68.19},{"id":540,"name":"Grayhawk","parent_id":127,"value":96.77},{"id":541,"name":"Nobel","parent_id":3,"value":80.57},{"id":542,"name":"Claremont","parent_id":513,"value":43.04},{"id":543,"name":"American","parent_id":324,"value":18.45},{"id":544,"name":"Manitowish","parent_id":116,"value":99.17},{"id":545,"name":"Mockingbird","parent_id":497,"value":77},{"id":546,"name":"Stang","parent_id":450,"value":55.82},{"id":547,"name":"Dayton","parent_id":226,"value":21.83},{"id":548,"name":"Lien","parent_id":116,"value":84.22},{"id":549,"name":"Park Meadow","parent_id":488,"value":8.79},{"id":550,"name":"American","parent_id":166,"value":99.98},{"id":551,"name":"Russell","parent_id":20,"value":68.63},{"id":552,"name":"Loomis","parent_id":76,"value":84.97},{"id":553,"name":"Quincy","parent_id":487,"value":60.84},{"id":554,"name":"Scott","parent_id":68,"value":64.38},{"id":555,"name":"6th","parent_id":524,"value":92.26},{"id":556,"name":"Glacier Hill","parent_id":550,"value":37.07},{"id":557,"name":"Independence","parent_id":80,"value":16.9},{"id":558,"name":"Evergreen","parent_id":397,"value":65.35},{"id":559,"name":"Redwing","parent_id":134,"value":78.59},{"id":560,"name":"Delaware","parent_id":315,"value":50.86},{"id":561,"name":"Pierstorff","parent_id":23,"value":27.29},{"id":562,"name":"Gale","parent_id":519,"value":42.21},{"id":563,"name":"Brentwood","parent_id":1,"value":4.92},{"id":564,"name":"Debs","parent_id":526,"value":60.24},{"id":565,"name":"Forster","parent_id":235,"value":59.11},{"id":566,"name":"Melrose","parent_id":176,"value":72.59},{"id":567,"name":"Sunbrook","parent_id":200,"value":10.6},{"id":568,"name":"Rutledge","parent_id":155,"value":95.97},{"id":569,"name":"Westridge","parent_id":37,"value":14.42},{"id":570,"name":"Myrtle","parent_id":139,"value":90.06},{"id":571,"name":"Bayside","parent_id":143,"value":56.23},{"id":572,"name":"Merrick","parent_id":218,"value":99.24},{"id":573,"name":"Ridgeway","parent_id":272,"value":74.85},{"id":574,"name":"Lien","parent_id":476,"value":13.42},{"id":575,"name":"Cottonwood","parent_id":504,"value":27.2},{"id":576,"name":"Lakewood Gardens","parent_id":140,"value":16.2},{"id":577,"name":"Clemons","parent_id":174,"value":68.23},{"id":578,"name":"Eggendart","parent_id":543,"value":26.2},{"id":579,"name":"Warrior","parent_id":477,"value":55.66},{"id":580,"name":"Gale","parent_id":78,"value":32.68},{"id":581,"name":"Spaight","parent_id":90,"value":57.43},{"id":582,"name":"Pond","parent_id":156,"value":60.98},{"id":583,"name":"Sherman","parent_id":162,"value":74.82},{"id":584,"name":"Union","parent_id":197,"value":80.21},{"id":585,"name":"Talisman","parent_id":277,"value":39.82},{"id":586,"name":"Ronald Regan","parent_id":320,"value":53.44},{"id":587,"name":"Superior","parent_id":351,"value":87.23},{"id":588,"name":"Sage","parent_id":501,"value":1.64},{"id":589,"name":"Northridge","parent_id":6,"value":12},{"id":590,"name":"Mesta","parent_id":317,"value":47.74},{"id":591,"name":"Porter","parent_id":382,"value":26.48},{"id":592,"name":"Gerald","parent_id":276,"value":34.9},{"id":593,"name":"Meadow Ridge","parent_id":93,"value":88.62},{"id":594,"name":"Bultman","parent_id":303,"value":62.43},{"id":595,"name":"Northview","parent_id":422,"value":67.62},{"id":596,"name":"Shoshone","parent_id":44,"value":94.15},{"id":597,"name":"New Castle","parent_id":511,"value":60.36},{"id":598,"name":"Chive","parent_id":365,"value":77.33},{"id":599,"name":"Vidon","parent_id":321,"value":91.08},{"id":600,"name":"Raven","parent_id":564,"value":20.24},{"id":601,"name":"Summit","parent_id":529,"value":78.16},{"id":602,"name":"Little Fleur","parent_id":559,"value":28.01},{"id":603,"name":"Anthes","parent_id":325,"value":75.19},{"id":604,"name":"Grasskamp","parent_id":501,"value":40.34},{"id":605,"name":"Washington","parent_id":334,"value":29.48},{"id":606,"name":"5th","parent_id":474,"value":25.27},{"id":607,"name":"Michigan","parent_id":579,"value":69.77},{"id":608,"name":"Superior","parent_id":61,"value":62.08},{"id":609,"name":"Gale","parent_id":423,"value":98.37},{"id":610,"name":"Maple","parent_id":147,"value":32.57},{"id":611,"name":"Bluejay","parent_id":524,"value":35.55},{"id":612,"name":"Pierstorff","parent_id":20,"value":31.28},{"id":613,"name":"Artisan","parent_id":361,"value":76.7},{"id":614,"name":"Merry","parent_id":582,"value":79.97},{"id":615,"name":"Dapin","parent_id":31,"value":10.9},{"id":616,"name":"Old Gate","parent_id":158,"value":97.69},{"id":617,"name":"Delaware","parent_id":313,"value":89.18},{"id":618,"name":"Vahlen","parent_id":405,"value":5.59},{"id":619,"name":"Merry","parent_id":360,"value":58.91},{"id":620,"name":"Moland","parent_id":465,"value":6.66},{"id":621,"name":"Thackeray","parent_id":229,"value":6.41},{"id":622,"name":"Emmet","parent_id":57,"value":41.94},{"id":623,"name":"Birchwood","parent_id":362,"value":42.76},{"id":624,"name":"Evergreen","parent_id":4,"value":60.44},{"id":625,"name":"Lien","parent_id":511,"value":81.88},{"id":626,"name":"Derek","parent_id":463,"value":7.84},{"id":627,"name":"Walton","parent_id":463,"value":0.89},{"id":628,"name":"Del Mar","parent_id":374,"value":72.06},{"id":629,"name":"Oriole","parent_id":148,"value":88.98},{"id":630,"name":"Mendota","parent_id":618,"value":44.73},{"id":631,"name":"Nevada","parent_id":255,"value":98.18},{"id":632,"name":"Melrose","parent_id":237,"value":43.58},{"id":633,"name":"Holmberg","parent_id":174,"value":7.73},{"id":634,"name":"Sauthoff","parent_id":539,"value":40.08},{"id":635,"name":"Fallview","parent_id":579,"value":14.09},{"id":636,"name":"East","parent_id":627,"value":14.03},{"id":637,"name":"Fulton","parent_id":450,"value":30.77},{"id":638,"name":"Montana","parent_id":26,"value":25.56},{"id":639,"name":"Mockingbird","parent_id":426,"value":18.43},{"id":640,"name":"Killdeer","parent_id":210,"value":52.4},{"id":641,"name":"Corben","parent_id":576,"value":74.24},{"id":642,"name":"Kensington","parent_id":27,"value":96.94},{"id":643,"name":"Morrow","parent_id":130,"value":19.73},{"id":644,"name":"Fairfield","parent_id":592,"value":31.32},{"id":645,"name":"Dixon","parent_id":537,"value":0.41},{"id":646,"name":"Dennis","parent_id":171,"value":0.17},{"id":647,"name":"Stone Corner","parent_id":146,"value":68.76},{"id":648,"name":"Scott","parent_id":590,"value":0.06},{"id":649,"name":"Walton","parent_id":93,"value":65.54},{"id":650,"name":"Sutteridge","parent_id":312,"value":0.12},{"id":651,"name":"Fordem","parent_id":571,"value":48.69},{"id":652,"name":"Elka","parent_id":108,"value":45.24},{"id":653,"name":"Birchwood","parent_id":185,"value":58.48},{"id":654,"name":"Katie","parent_id":540,"value":16.11},{"id":655,"name":"Tennyson","parent_id":2,"value":76.96},{"id":656,"name":"Northridge","parent_id":410,"value":23.57},{"id":657,"name":"Chive","parent_id":503,"value":17.48},{"id":658,"name":"Corben","parent_id":120,"value":39.71},{"id":659,"name":"Marcy","parent_id":291,"value":61.01},{"id":660,"name":"Longview","parent_id":414,"value":53.15},{"id":661,"name":"Scoville","parent_id":249,"value":67.4},{"id":662,"name":"Barby","parent_id":59,"value":18.58},{"id":663,"name":"Nancy","parent_id":236,"value":60.66},{"id":664,"name":"Mayfield","parent_id":303,"value":55.59},{"id":665,"name":"Waywood","parent_id":79,"value":31.52},{"id":666,"name":"Arkansas","parent_id":613,"value":69.79},{"id":667,"name":"Buena Vista","parent_id":203,"value":26.11},{"id":668,"name":"Nobel","parent_id":412,"value":82.13},{"id":669,"name":"Cody","parent_id":304,"value":54.56},{"id":670,"name":"Kipling","parent_id":582,"value":39.79},{"id":671,"name":"Buhler","parent_id":538,"value":20.4},{"id":672,"name":"Sugar","parent_id":488,"value":40.24},{"id":673,"name":"Troy","parent_id":86,"value":9.31},{"id":674,"name":"Manley","parent_id":69,"value":47.51},{"id":675,"name":"Anthes","parent_id":587,"value":89.57},{"id":676,"name":"Rigney","parent_id":159,"value":83.66},{"id":677,"name":"Scofield","parent_id":553,"value":24.88},{"id":678,"name":"Debs","parent_id":375,"value":80.34},{"id":679,"name":"Erie","parent_id":37,"value":21.84},{"id":680,"name":"Thierer","parent_id":193,"value":37.83},{"id":681,"name":"Hagan","parent_id":132,"value":71.24},{"id":682,"name":"Tomscot","parent_id":57,"value":9.11},{"id":683,"name":"Village Green","parent_id":284,"value":50.66},{"id":684,"name":"Northridge","parent_id":366,"value":3.73},{"id":685,"name":"Pine View","parent_id":136,"value":91.9},{"id":686,"name":"Meadow Ridge","parent_id":563,"value":22.51},{"id":687,"name":"Dottie","parent_id":354,"value":98.87},{"id":688,"name":"Truax","parent_id":22,"value":91.86},{"id":689,"name":"Esker","parent_id":673,"value":10.35},{"id":690,"name":"Burning Wood","parent_id":660,"value":15.01},{"id":691,"name":"Sage","parent_id":574,"value":3.99},{"id":692,"name":"Lotheville","parent_id":609,"value":53.49},{"id":693,"name":"Meadow Valley","parent_id":218,"value":52.86},{"id":694,"name":"Darwin","parent_id":195,"value":84.89},{"id":695,"name":"Truax","parent_id":550,"value":61.44},{"id":696,"name":"Harbort","parent_id":14,"value":39.66},{"id":697,"name":"Kropf","parent_id":270,"value":82.6},{"id":698,"name":"Thompson","parent_id":295,"value":59.65},{"id":699,"name":"Claremont","parent_id":444,"value":60.43},{"id":700,"name":"Dunning","parent_id":583,"value":41.26},{"id":701,"name":"Katie","parent_id":306,"value":12.15},{"id":702,"name":"Annamark","parent_id":608,"value":64.57},{"id":703,"name":"Hansons","parent_id":622,"value":71.2},{"id":704,"name":"Sullivan","parent_id":50,"value":88.4},{"id":705,"name":"John Wall","parent_id":80,"value":31.41},{"id":706,"name":"Clemons","parent_id":312,"value":26.88},{"id":707,"name":"Eagan","parent_id":638,"value":66.57},{"id":708,"name":"Buhler","parent_id":200,"value":29.72},{"id":709,"name":"Anderson","parent_id":113,"value":56.88},{"id":710,"name":"Calypso","parent_id":504,"value":31.11},{"id":711,"name":"Barby","parent_id":653,"value":32.96},{"id":712,"name":"Vidon","parent_id":700,"value":52.19},{"id":713,"name":"Dayton","parent_id":145,"value":74.78},{"id":714,"name":"Magdeline","parent_id":53,"value":27.05},{"id":715,"name":"Rowland","parent_id":123,"value":41.25},{"id":716,"name":"Merchant","parent_id":193,"value":73.94},{"id":717,"name":"Victoria","parent_id":434,"value":12.54},{"id":718,"name":"Sugar","parent_id":422,"value":78.73},{"id":719,"name":"Springs","parent_id":694,"value":69.62},{"id":720,"name":"Marcy","parent_id":709,"value":69.4},{"id":721,"name":"Crowley","parent_id":444,"value":45.85},{"id":722,"name":"Lukken","parent_id":84,"value":62.87},{"id":723,"name":"Stoughton","parent_id":126,"value":19.81},{"id":724,"name":"Grayhawk","parent_id":207,"value":34.3},{"id":725,"name":"Moose","parent_id":703,"value":30.1},{"id":726,"name":"Calypso","parent_id":567,"value":39.08},{"id":727,"name":"Pawling","parent_id":589,"value":47.9},{"id":728,"name":"Kim","parent_id":438,"value":39.07},{"id":729,"name":"Anderson","parent_id":11,"value":1.14},{"id":730,"name":"Bay","parent_id":389,"value":19.97},{"id":731,"name":"Kensington","parent_id":15,"value":43.73},{"id":732,"name":"Northport","parent_id":290,"value":30.1},{"id":733,"name":"Green Ridge","parent_id":567,"value":1.36},{"id":734,"name":"Coolidge","parent_id":715,"value":83.59},{"id":735,"name":"Fairview","parent_id":600,"value":15.23},{"id":736,"name":"Rockefeller","parent_id":512,"value":13.1},{"id":737,"name":"Cordelia","parent_id":266,"value":66.65},{"id":738,"name":"Tony","parent_id":521,"value":16.7},{"id":739,"name":"Mallory","parent_id":269,"value":12.27},{"id":740,"name":"Toban","parent_id":356,"value":28.46},{"id":741,"name":"Bashford","parent_id":404,"value":99.71},{"id":742,"name":"Forest Dale","parent_id":365,"value":71.08},{"id":743,"name":"Amoth","parent_id":588,"value":29.94},{"id":744,"name":"Brickson Park","parent_id":596,"value":80.03},{"id":745,"name":"Marquette","parent_id":429,"value":64.84},{"id":746,"name":"American","parent_id":249,"value":81.19},{"id":747,"name":"Northport","parent_id":225,"value":93.24},{"id":748,"name":"Karstens","parent_id":482,"value":55.29},{"id":749,"name":"Fordem","parent_id":234,"value":57.03},{"id":750,"name":"Loftsgordon","parent_id":157,"value":69.29},{"id":751,"name":"Forest","parent_id":338,"value":75.23},{"id":752,"name":"Brentwood","parent_id":256,"value":57.8},{"id":753,"name":"Lillian","parent_id":429,"value":30.24},{"id":754,"name":"Bayside","parent_id":316,"value":31.1},{"id":755,"name":"Red Cloud","parent_id":406,"value":48.55},{"id":756,"name":"Harbort","parent_id":357,"value":48.42},{"id":757,"name":"Stang","parent_id":617,"value":91.36},{"id":758,"name":"Bluestem","parent_id":286,"value":97.84},{"id":759,"name":"Hansons","parent_id":149,"value":27.75},{"id":760,"name":"Glacier Hill","parent_id":387,"value":40.78},{"id":761,"name":"Harbort","parent_id":161,"value":37.02},{"id":762,"name":"Mesta","parent_id":185,"value":18.25},{"id":763,"name":"Anderson","parent_id":3,"value":41.57},{"id":764,"name":"7th","parent_id":614,"value":16.4},{"id":765,"name":"Kim","parent_id":426,"value":12.85},{"id":766,"name":"Morrow","parent_id":27,"value":99.78},{"id":767,"name":"Farragut","parent_id":405,"value":23.39},{"id":768,"name":"Westerfield","parent_id":79,"value":71.22},{"id":769,"name":"Walton","parent_id":300,"value":59.64},{"id":770,"name":"Eagle Crest","parent_id":462,"value":59.9},{"id":771,"name":"Arapahoe","parent_id":451,"value":7.53},{"id":772,"name":"Mcbride","parent_id":185,"value":19.69},{"id":773,"name":"Kennedy","parent_id":585,"value":23.29},{"id":774,"name":"Brentwood","parent_id":314,"value":87.61},{"id":775,"name":"Vahlen","parent_id":622,"value":28.87},{"id":776,"name":"Marcy","parent_id":611,"value":21.54},{"id":777,"name":"Nobel","parent_id":658,"value":71.2},{"id":778,"name":"Basil","parent_id":304,"value":62.26},{"id":779,"name":"Blue Bill Park","parent_id":402,"value":16.67},{"id":780,"name":"Annamark","parent_id":144,"value":7.46},{"id":781,"name":"Mockingbird","parent_id":777,"value":54.81},{"id":782,"name":"Sunfield","parent_id":58,"value":63.96},{"id":783,"name":"Monica","parent_id":154,"value":99.24},{"id":784,"name":"Tomscot","parent_id":41,"value":83.46},{"id":785,"name":"Lillian","parent_id":652,"value":22.95},{"id":786,"name":"Talmadge","parent_id":699,"value":61.89},{"id":787,"name":"Charing Cross","parent_id":768,"value":31.7},{"id":788,"name":"Bobwhite","parent_id":215,"value":54.46},{"id":789,"name":"Shelley","parent_id":530,"value":58.63},{"id":790,"name":"Loomis","parent_id":198,"value":57.18},{"id":791,"name":"Fulton","parent_id":116,"value":77.85},{"id":792,"name":"Waubesa","parent_id":559,"value":95.58},{"id":793,"name":"Melody","parent_id":300,"value":59.16},{"id":794,"name":"Algoma","parent_id":49,"value":88.83},{"id":795,"name":"Sullivan","parent_id":422,"value":9.13},{"id":796,"name":"Arapahoe","parent_id":6,"value":58.92},{"id":797,"name":"Leroy","parent_id":552,"value":96.79},{"id":798,"name":"Mendota","parent_id":461,"value":98.28},{"id":799,"name":"Hoffman","parent_id":766,"value":25.9},{"id":800,"name":"6th","parent_id":449,"value":62.93},{"id":801,"name":"Scoville","parent_id":658,"value":96.8},{"id":802,"name":"Schlimgen","parent_id":67,"value":43.28},{"id":803,"name":"Hazelcrest","parent_id":48,"value":76.04},{"id":804,"name":"Haas","parent_id":27,"value":57.18},{"id":805,"name":"Lyons","parent_id":335,"value":87.76},{"id":806,"name":"Express","parent_id":707,"value":45.18},{"id":807,"name":"Trailsway","parent_id":116,"value":68.89},{"id":808,"name":"Mcguire","parent_id":459,"value":93.39},{"id":809,"name":"Swallow","parent_id":389,"value":36.6},{"id":810,"name":"Bayside","parent_id":436,"value":43.19},{"id":811,"name":"Westport","parent_id":71,"value":95.18},{"id":812,"name":"Blackbird","parent_id":553,"value":91.85},{"id":813,"name":"Maple","parent_id":777,"value":1.3},{"id":814,"name":"Gulseth","parent_id":693,"value":40.1},{"id":815,"name":"Dovetail","parent_id":552,"value":84.68},{"id":816,"name":"Ridgeway","parent_id":95,"value":87.48},{"id":817,"name":"Bunting","parent_id":135,"value":29.57},{"id":818,"name":"Erie","parent_id":278,"value":23.57},{"id":819,"name":"Cody","parent_id":418,"value":22.39},{"id":820,"name":"Manufacturers","parent_id":606,"value":80.17},{"id":821,"name":"Ludington","parent_id":230,"value":21.35},{"id":822,"name":"Delaware","parent_id":123,"value":37.79},{"id":823,"name":"Spaight","parent_id":731,"value":32.58},{"id":824,"name":"Forest Dale","parent_id":689,"value":89.99},{"id":825,"name":"Springs","parent_id":189,"value":61.21},{"id":826,"name":"Morrow","parent_id":491,"value":11.12},{"id":827,"name":"Hermina","parent_id":249,"value":72.56},{"id":828,"name":"Vernon","parent_id":500,"value":73.81},{"id":829,"name":"Hagan","parent_id":564,"value":47.01},{"id":830,"name":"Monica","parent_id":674,"value":4.66},{"id":831,"name":"Mcbride","parent_id":613,"value":21.62},{"id":832,"name":"Anderson","parent_id":40,"value":66.37},{"id":833,"name":"Fairfield","parent_id":59,"value":94.74},{"id":834,"name":"Farmco","parent_id":86,"value":66.45},{"id":835,"name":"Troy","parent_id":55,"value":60.45},{"id":836,"name":"Loftsgordon","parent_id":773,"value":12.83},{"id":837,"name":"Tomscot","parent_id":769,"value":54.11},{"id":838,"name":"Heath","parent_id":367,"value":15.27},{"id":839,"name":"Anzinger","parent_id":17,"value":4.76},{"id":840,"name":"Hoard","parent_id":386,"value":35.56},{"id":841,"name":"Express","parent_id":722,"value":98.59},{"id":842,"name":"Towne","parent_id":18,"value":96.43},{"id":843,"name":"Division","parent_id":471,"value":89.8},{"id":844,"name":"Grayhawk","parent_id":132,"value":51.12},{"id":845,"name":"Loeprich","parent_id":436,"value":39.57},{"id":846,"name":"Heffernan","parent_id":84,"value":50.95},{"id":847,"name":"Heath","parent_id":565,"value":34.16},{"id":848,"name":"Miller","parent_id":583,"value":56.31},{"id":849,"name":"Spohn","parent_id":370,"value":1.48},{"id":850,"name":"Wayridge","parent_id":41,"value":75.94},{"id":851,"name":"Buhler","parent_id":559,"value":7.6},{"id":852,"name":"3rd","parent_id":338,"value":59.88},{"id":853,"name":"Sutteridge","parent_id":249,"value":65.56},{"id":854,"name":"Killdeer","parent_id":204,"value":98.78},{"id":855,"name":"Butternut","parent_id":675,"value":94.55},{"id":856,"name":"Sutherland","parent_id":716,"value":25.53},{"id":857,"name":"Sutteridge","parent_id":553,"value":44.49},{"id":858,"name":"Eastlawn","parent_id":745,"value":53.94},{"id":859,"name":"Nelson","parent_id":234,"value":95.39},{"id":860,"name":"Buell","parent_id":26,"value":28.56},{"id":861,"name":"Ilene","parent_id":813,"value":35.17},{"id":862,"name":"Milwaukee","parent_id":10,"value":87.69},{"id":863,"name":"Declaration","parent_id":683,"value":95.83},{"id":864,"name":"Ronald Regan","parent_id":50,"value":27.56},{"id":865,"name":"Eastwood","parent_id":722,"value":53.79},{"id":866,"name":"Dakota","parent_id":701,"value":35.58},{"id":867,"name":"Farwell","parent_id":687,"value":94.08},{"id":868,"name":"Mcguire","parent_id":327,"value":40.26},{"id":869,"name":"Paget","parent_id":388,"value":67.7},{"id":870,"name":"Mitchell","parent_id":579,"value":28.96},{"id":871,"name":"Sommers","parent_id":833,"value":93.34},{"id":872,"name":"Havey","parent_id":450,"value":83.22},{"id":873,"name":"International","parent_id":216,"value":73.56},{"id":874,"name":"Northfield","parent_id":722,"value":28.37},{"id":875,"name":"Summerview","parent_id":3,"value":84.37},{"id":876,"name":"Briar Crest","parent_id":515,"value":28.52},{"id":877,"name":"Sullivan","parent_id":23,"value":10.26},{"id":878,"name":"Dakota","parent_id":117,"value":87.84},{"id":879,"name":"Saint Paul","parent_id":172,"value":21.67},{"id":880,"name":"Oxford","parent_id":459,"value":9.47},{"id":881,"name":"Ridge Oak","parent_id":565,"value":98.09},{"id":882,"name":"Mayfield","parent_id":483,"value":82.54},{"id":883,"name":"Beilfuss","parent_id":696,"value":66.07},{"id":884,"name":"Old Shore","parent_id":428,"value":8.76},{"id":885,"name":"Waywood","parent_id":643,"value":9.19},{"id":886,"name":"Rieder","parent_id":506,"value":23.62},{"id":887,"name":"Doe Crossing","parent_id":590,"value":18.14},{"id":888,"name":"Spaight","parent_id":282,"value":66.82},{"id":889,"name":"Anzinger","parent_id":677,"value":60.84},{"id":890,"name":"Acker","parent_id":692,"value":16},{"id":891,"name":"Trailsway","parent_id":517,"value":22.62},{"id":892,"name":"Fisk","parent_id":786,"value":61.67},{"id":893,"name":"Forest","parent_id":641,"value":34.65},{"id":894,"name":"Grover","parent_id":800,"value":60.23},{"id":895,"name":"Waywood","parent_id":255,"value":56.06},{"id":896,"name":"Carberry","parent_id":734,"value":11.57},{"id":897,"name":"Hintze","parent_id":261,"value":8.82},{"id":898,"name":"Grasskamp","parent_id":895,"value":58.05},{"id":899,"name":"Jenna","parent_id":873,"value":32.9},{"id":900,"name":"Westport","parent_id":824,"value":56.14},{"id":901,"name":"Northwestern","parent_id":583,"value":75.95},{"id":902,"name":"Beilfuss","parent_id":667,"value":96.98},{"id":903,"name":"Shoshone","parent_id":788,"value":23.65},{"id":904,"name":"Havey","parent_id":461,"value":75.08},{"id":905,"name":"Artisan","parent_id":757,"value":44.73},{"id":906,"name":"Killdeer","parent_id":534,"value":30.76},{"id":907,"name":"Northridge","parent_id":282,"value":91.95},{"id":908,"name":"Randy","parent_id":757,"value":57.13},{"id":909,"name":"Merchant","parent_id":754,"value":9.43},{"id":910,"name":"Memorial","parent_id":858,"value":11.89},{"id":911,"name":"Cordelia","parent_id":342,"value":4.48},{"id":912,"name":"Eggendart","parent_id":428,"value":48.54},{"id":913,"name":"Texas","parent_id":527,"value":64.93},{"id":914,"name":"Mallard","parent_id":788,"value":55.45},{"id":915,"name":"Burning Wood","parent_id":761,"value":16.68},{"id":916,"name":"Manley","parent_id":114,"value":79.83},{"id":917,"name":"Service","parent_id":856,"value":82.31},{"id":918,"name":"Dwight","parent_id":667,"value":29.27},{"id":919,"name":"Lien","parent_id":109,"value":1.43},{"id":920,"name":"Troy","parent_id":597,"value":59.67},{"id":921,"name":"Novick","parent_id":240,"value":10.73},{"id":922,"name":"Fairview","parent_id":884,"value":57.4},{"id":923,"name":"Moulton","parent_id":97,"value":2.43},{"id":924,"name":"Northview","parent_id":61,"value":99.97},{"id":925,"name":"Anzinger","parent_id":112,"value":15.37},{"id":926,"name":"Sutteridge","parent_id":400,"value":98.17},{"id":927,"name":"Monument","parent_id":267,"value":50.33},{"id":928,"name":"Luster","parent_id":847,"value":42.43},{"id":929,"name":"Hansons","parent_id":446,"value":31.89},{"id":930,"name":"Lien","parent_id":874,"value":12.03},{"id":931,"name":"Dexter","parent_id":84,"value":41.63},{"id":932,"name":"Carey","parent_id":255,"value":33.39},{"id":933,"name":"Orin","parent_id":62,"value":45.83},{"id":934,"name":"Orin","parent_id":732,"value":30.82},{"id":935,"name":"Dovetail","parent_id":743,"value":37.9},{"id":936,"name":"Arapahoe","parent_id":864,"value":46.83},{"id":937,"name":"Sunfield","parent_id":398,"value":49.25},{"id":938,"name":"Del Sol","parent_id":407,"value":47.67},{"id":939,"name":"New Castle","parent_id":698,"value":54.01},{"id":940,"name":"Boyd","parent_id":223,"value":67.76},{"id":941,"name":"Sunfield","parent_id":570,"value":21},{"id":942,"name":"Goodland","parent_id":587,"value":44.88},{"id":943,"name":"Fulton","parent_id":678,"value":10.28},{"id":944,"name":"Meadow Vale","parent_id":848,"value":11.82},{"id":945,"name":"Twin Pines","parent_id":561,"value":73.32},{"id":946,"name":"Mccormick","parent_id":815,"value":25.82},{"id":947,"name":"Summer Ridge","parent_id":876,"value":67.49},{"id":948,"name":"Nancy","parent_id":266,"value":66.3},{"id":949,"name":"Dorton","parent_id":801,"value":52.51},{"id":950,"name":"Rigney","parent_id":110,"value":5.77},{"id":951,"name":"Ronald Regan","parent_id":203,"value":84.31},{"id":952,"name":"High Crossing","parent_id":306,"value":97.37},{"id":953,"name":"Mandrake","parent_id":221,"value":20.51},{"id":954,"name":"Kim","parent_id":364,"value":18.56},{"id":955,"name":"Anderson","parent_id":258,"value":39.19},{"id":956,"name":"Autumn Leaf","parent_id":423,"value":92.14},{"id":957,"name":"Manley","parent_id":438,"value":88.67},{"id":958,"name":"Stone Corner","parent_id":822,"value":62.91},{"id":959,"name":"Green Ridge","parent_id":889,"value":33},{"id":960,"name":"Clarendon","parent_id":278,"value":19.2},{"id":961,"name":"Forest Dale","parent_id":576,"value":17.24},{"id":962,"name":"Merrick","parent_id":596,"value":38.05},{"id":963,"name":"Toban","parent_id":814,"value":48.52},{"id":964,"name":"Mendota","parent_id":325,"value":58.46},{"id":965,"name":"Northridge","parent_id":167,"value":63.76},{"id":966,"name":"Village Green","parent_id":274,"value":60},{"id":967,"name":"Fordem","parent_id":215,"value":89.7},{"id":968,"name":"Golden Leaf","parent_id":228,"value":69.69},{"id":969,"name":"Maple","parent_id":760,"value":76.16},{"id":970,"name":"Crest Line","parent_id":960,"value":75.73},{"id":971,"name":"Bluejay","parent_id":40,"value":42.69},{"id":972,"name":"Mandrake","parent_id":702,"value":74.45},{"id":973,"name":"Amoth","parent_id":627,"value":25.4},{"id":974,"name":"7th","parent_id":705,"value":61.38},{"id":975,"name":"Stang","parent_id":461,"value":4.73},{"id":976,"name":"Marquette","parent_id":567,"value":5.75},{"id":977,"name":"Declaration","parent_id":619,"value":68.92},{"id":978,"name":"Corben","parent_id":216,"value":34.91},{"id":979,"name":"Bluestem","parent_id":132,"value":75.67},{"id":980,"name":"Montana","parent_id":116,"value":56.7},{"id":981,"name":"Shopko","parent_id":669,"value":79.06},{"id":982,"name":"Harbort","parent_id":540,"value":31.87},{"id":983,"name":"Arizona","parent_id":414,"value":90.6},{"id":984,"name":"Loeprich","parent_id":62,"value":53.09},{"id":985,"name":"Cottonwood","parent_id":86,"value":31.48},{"id":986,"name":"Chinook","parent_id":329,"value":38.27},{"id":987,"name":"Norway Maple","parent_id":684,"value":57.78},{"id":988,"name":"Dottie","parent_id":132,"value":99.26},{"id":989,"name":"Fulton","parent_id":96,"value":13.4},{"id":990,"name":"Kingsford","parent_id":207,"value":39.64},{"id":991,"name":"Kenwood","parent_id":700,"value":28.4},{"id":992,"name":"Eastlawn","parent_id":804,"value":41.02},{"id":993,"name":"Pawling","parent_id":755,"value":44.21},{"id":994,"name":"Lake View","parent_id":116,"value":42.84},{"id":995,"name":"Summer Ridge","parent_id":970,"value":0.29},{"id":996,"name":"Monica","parent_id":176,"value":78.37},{"id":997,"name":"Jackson","parent_id":181,"value":44.93},{"id":998,"name":"Lindbergh","parent_id":606,"value":44.42},{"id":999,"name":"Maryland","parent_id":584,"value":6.3},{"id":1000,"name":"Lotheville","parent_id":680,"value":14.35}]

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\WebProjects\Angular Sites\list-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
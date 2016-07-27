"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var froala_directives_1 = require('../lib/froala.directives');
var AppComponent = (function () {
    function AppComponent() {
        this.configs = {
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false,
            toolbarInline: true,
            events: {
                'froalaEditor.initialized': function () {
                    console.log('initialized');
                }
            }
        };
        this.content = '<span>My Document\'s Title</span>';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n  <div class=\"sample\">\n    <h2>Sample: Full Editor</h2>\n    <div [froalaEditor]=\"configs\" [(froalaModel)]=\"content\"></div>\n    <h4>Rendered Content:</h4>\n    <div [froalaView]=\"content\"></div>\n  </div>\n  ",
            directives: [froala_directives_1.FroalaEditorDirective, froala_directives_1.FroalaViewDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
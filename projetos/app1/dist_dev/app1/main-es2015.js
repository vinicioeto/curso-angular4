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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n<div *ngIf=\"jogoEmAndamento; else fimDejogo\">\n  <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n</div>\n<ng-template #fimDejogo>\n  <div\n    *ngIf=\"tipoEncerramento === 'derrota'; else fimDejogoVitoria\"\n    class=\"container\"\n    style=\"margin-top:  50px\"\n  >\n    <div class=\"row\">\n      <div class=\"col\">\n        <h3 style=\"color: red\">Você perdeu!</h3>\n        <button class=\"btn btn-primary\" (click)=\"reniciarJogo()\">\n          Jogar Novamente\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<ng-template #fimDejogoVitoria>\n  <div class=\"container\" style=\"margin-top:  50px\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h3 style=\"color: greenyellow\">Você ganhou!</h3>\n        <button class=\"btn btn-primary\" (click)=\"reniciarJogo()\">\n          Jogar Novamente\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/painel/painel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-progresso [progresso]=\"progresso\"></app-progresso>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"d-flex justify-content-end\">\n          <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <h6>{{ instrucao }}</h6>\n        <p>{{ rodadaFrase.fraseEng }}</p>\n        <div class=\"form-group\">\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            (input)=\"atualizaResposta($event)\"\n            [value]=\"resposta\"\n          ></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"d-flex justify-content-end\">\n          <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            (click)=\"verifcarResposta($event)\"\n          >\n            Verifcar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/progresso/progresso.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n  <div class=\"progress-bar w-{{ progresso }}\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tentativas/tentativas.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img [src]=\"coracaoVazio\" />\n<img [src]=\"coracaoCheio\" />\n<img [src]=\"coracaoCheio\" /> -->\n<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\" />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topo/topo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n  <h1 class=\"navbar-brand mb-0\">{{ titulo }}</h1>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.jogoEmAndamento = true;
    }
    encerrarJogo(tipo) {
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    }
    reniciarJogo() {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topo/topo.component */ "./src/app/topo/topo.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/painel/painel.component.ts");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progresso/progresso.component */ "./src/app/progresso/progresso.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _topo_topo_component__WEBPACK_IMPORTED_MODULE_4__["TopoComponent"], _painel_painel_component__WEBPACK_IMPORTED_MODULE_5__["PainelComponent"], _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__["TentativasComponent"], _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_7__["ProgressoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/painel/frases-mock.ts":
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
const FRASES = [
    { fraseEng: 'I like to learn', frasPtBr: 'Eu gosto de aprender' },
    { fraseEng: 'I watch tv', frasPtBr: 'Eu assisto tv' },
    { fraseEng: 'How are you?', frasPtBr: 'Como vai você?' },
    { fraseEng: 'I eat bread', frasPtBr: 'Eu como pão' },
];


/***/ }),

/***/ "./src/app/painel/painel.component.css":
/*!*********************************************!*\
  !*** ./src/app/painel/painel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  margin-top: 20px;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frases-mock */ "./src/app/painel/frases-mock.ts");



let PainelComponent = class PainelComponent {
    constructor() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_2__["FRASES"];
        this.instrucao = 'Traduza a frase:';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.atualizaRodada();
    }
    ngOnInit() { }
    verifcarResposta() {
        if (this.rodadaFrase.frasPtBr === this.resposta) {
            alert('A tradução está correta');
            // trocar pergunta da rodada
            this.rodada++;
            // atualiza barra de progresso
            this.progresso += 100 / this.frases.length;
            if (this.rodada === 4) {
                this.encerrarJogo.emit('vitoria');
            }
            this.atualizaRodada();
        }
        else {
            alert('A tradução está incoreta');
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('derrota');
            }
        }
    }
    atualizaResposta(resposta) {
        this.resposta = resposta.target.value;
    }
    atualizaRodada() {
        // define a frase da rodada
        this.rodadaFrase = this.frases[this.rodada];
        // limpa a resposta
        this.resposta = '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PainelComponent.prototype, "encerrarJogo", void 0);
PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-painel',
        template: __webpack_require__(/*! raw-loader!./painel.component.html */ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html"),
        styles: [__webpack_require__(/*! ./painel.component.css */ "./src/app/painel/painel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PainelComponent);



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/*!***************************************************!*\
  !*** ./src/app/progresso/progresso.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress{\r\n  background-color: gainsboro;\r\n  border: solid 1px black;\r\n}\r\n\r\n.progress-bar{\r\n  background: blue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzby9wcm9ncmVzc28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXJ7XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressoComponent = class ProgressoComponent {
    constructor() {
        this.progresso = 0;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProgressoComponent.prototype, "progresso", void 0);
ProgressoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progresso',
        template: __webpack_require__(/*! raw-loader!./progresso.component.html */ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html"),
        styles: [__webpack_require__(/*! ./progresso.component.css */ "./src/app/progresso/progresso.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProgressoComponent);



/***/ }),

/***/ "./src/app/shared/coracao.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
class Coracao {
    constructor(cheio, urlCoracaoCheio = '/assets/coracao_cheio.png', urlCoracaoVazio = '/assets/coracao_vazio.png') {
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    exibeCoracao() {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    }
}
Coracao.ctorParameters = () => [
    { type: Boolean },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhdGl2YXMvdGVudGF0aXZhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/coracao.model */ "./src/app/shared/coracao.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TentativasComponent = class TentativasComponent {
    constructor() {
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true)
        ];
    }
    ngOnChanges() {
        // this.tentativas
        // this.coracoes.length
        // tslint:disable-next-line: triple-equals
        if (this.tentativas !== this.coracoes.length) {
            let indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TentativasComponent.prototype, "tentativas", void 0);
TentativasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tentativas',
        template: __webpack_require__(/*! raw-loader!./tentativas.component.html */ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html"),
        styles: [__webpack_require__(/*! ./tentativas.component.css */ "./src/app/tentativas/tentativas.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TentativasComponent);



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/*!*****************************************!*\
  !*** ./src/app/topo/topo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcG8vdG9wby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopoComponent = class TopoComponent {
    constructor() {
        this.titulo = 'Aprendendo Inglês';
    }
};
TopoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topo',
        // selector: '[app-topo]',
        // selector: '.app-topo',
        template: __webpack_require__(/*! raw-loader!./topo.component.html */ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html"),
        styles: [__webpack_require__(/*! ./topo.component.css */ "./src/app/topo/topo.component.css")]
    })
], TopoComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\estudos\curso-angular4\projetos\app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
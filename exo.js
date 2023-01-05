var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(pattes, couleur) {
        this.pattes = pattes;
        this.couleur = couleur;
    }
    return Animals;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animals));
var ChatEuropeen = /** @class */ (function (_super) {
    __extends(ChatEuropeen, _super);
    function ChatEuropeen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatEuropeen;
}(Cat));
var ChatChartreux = /** @class */ (function (_super) {
    __extends(ChatChartreux, _super);
    function ChatChartreux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatChartreux;
}(Cat));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animals));
var ChienTerreNeuve = /** @class */ (function (_super) {
    __extends(ChienTerreNeuve, _super);
    function ChienTerreNeuve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChienTerreNeuve;
}(Dog));
var ChienMoonMoon = /** @class */ (function (_super) {
    __extends(ChienMoonMoon, _super);
    function ChienMoonMoon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChienMoonMoon;
}(Dog));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bird;
}(Animals));
var Mesange = /** @class */ (function (_super) {
    __extends(Mesange, _super);
    function Mesange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mesange;
}(Bird));
var Merle = /** @class */ (function (_super) {
    __extends(Merle, _super);
    function Merle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Merle;
}(Bird));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fish;
}(Animals));
var Thon = /** @class */ (function (_super) {
    __extends(Thon, _super);
    function Thon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Thon;
}(Fish));
var Requin = /** @class */ (function (_super) {
    __extends(Requin, _super);
    function Requin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Requin;
}(Fish));
var Asticot = /** @class */ (function (_super) {
    __extends(Asticot, _super);
    function Asticot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Asticot;
}(Animals));
// ACTIONS //
function photo(animal) {
    console.log("Photo des neufs animaux");
}
function chatQuiMiaule(chat) {
    console.log("Miaouuuu");
}
function aboiement(chien) {
    console.log("Waaaff");
}
function voler(oiseau) {
    console.log("vole vole petit oiseau");
}
function nager(poisson) {
    console.log("les petits poissons nagent nagent comme les gros");
}
function caresserLesAnimauxAQuatrePattes(animal) {
    if (animal.pattes === 4) {
        console.log("Câlin mes amis à 4 pattes :D");
    }
    else {
        console.log('Pas de caresse');
    }
}
function nourrir(animal) {
    if (animal.couleur === "noir") {
        console.log("Mange mange !");
    }
    else {
        console.log("Ne mange pas");
    }
}
var rex = new ChienTerreNeuve(4, "noir");
photo(rex);
caresserLesAnimauxAQuatrePattes(rex);
nourrir(rex);
// const caracteristique1 = new Animals();
// const caracteristique2 = new Animals();

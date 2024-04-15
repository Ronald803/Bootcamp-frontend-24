"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTrainer = exports.Pokemon = exports.getInfoMove = exports.getSinglePokemon = void 0;
var axios_1 = require("axios");
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class
*/
function getSinglePokemon(id) {
    return axios_1.default.get("https://pokeapi.co/api/v2/pokemon/".concat(id));
}
exports.getSinglePokemon = getSinglePokemon;
function getInfoMove(url) {
    return axios_1.default.get(url);
}
exports.getInfoMove = getInfoMove;
function getNewPokemons(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.listOfIds = [1, 2, 3];
            return _this;
        }
        return class_1;
    }(constructor));
}
var Pokemon = /** @class */ (function () {
    function Pokemon(pokemonResult) {
        var _this = this;
        this.name = '';
        this.id = 0;
        this.moves = [];
        this.types = [];
        this.buildFieldsPokemon(pokemonResult).then(function () {
            _this.displayInfo();
        });
    }
    Pokemon.prototype.buildFieldsPokemon = function (pokemon) {
        return __awaiter(this, void 0, void 0, function () {
            var chosenMoves;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.name = pokemon.name;
                        this.id = pokemon.id;
                        pokemon.types.forEach(function (type) {
                            _this.types.push(type.type);
                        });
                        return [4 /*yield*/, chooseFourAleatory(pokemon.moves)];
                    case 1:
                        chosenMoves = _a.sent();
                        this.moves = chosenMoves;
                        return [2 /*return*/];
                }
            });
        });
    };
    Pokemon.prototype.displayInfo = function () {
        console.log("==========================");
        console.log("".concat(this.id, " ").concat(this.name));
        console.log('Type(s):');
        this.types.forEach(function (type) {
            console.log("\t".concat(type.name));
        });
        console.log('Moves:');
        this.moves.forEach(function (move) {
            console.log("\t".concat(move.name));
        });
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var PokemonTrainer = /** @class */ (function () {
    function PokemonTrainer(name) {
        this.pokemons = [];
        this.listOfIds = [2, 4];
        this.name = name;
    }
    PokemonTrainer.prototype.getPokemons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listPokemons, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPokemons = this.listOfIds.map(function (id) { return getSinglePokemon(id); });
                        return [4 /*yield*/, Promise.all(listPokemons)];
                    case 1:
                        results = _a.sent();
                        results.forEach(function (result) {
                            _this.pokemons.push(new Pokemon(result.data));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer.prototype.showTeam = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Trainer:', this.name);
                        return [4 /*yield*/, this.getPokemons()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer = __decorate([
        getNewPokemons,
        __metadata("design:paramtypes", [String])
    ], PokemonTrainer);
    return PokemonTrainer;
}());
exports.PokemonTrainer = PokemonTrainer;
var chooseFourAleatory = function (arr) { return __awaiter(void 0, void 0, void 0, function () {
    var choosen, i, randomPosition, answer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                choosen = [];
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < 4)) return [3 /*break*/, 4];
                randomPosition = Math.floor(Math.random() * arr.length);
                return [4 /*yield*/, getInfoMove(arr[randomPosition].move.url)];
            case 2:
                answer = _a.sent();
                choosen.push({
                    name: arr[randomPosition].move.name,
                    url: arr[randomPosition].move.url,
                    accuracy: answer.data.accuracy,
                    type: answer.data.type.name,
                    damage: answer.data.power,
                    powerPoints: answer.data.pp,
                });
                arr.splice(randomPosition, 1);
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, choosen];
        }
    });
}); };

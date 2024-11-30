"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  drinks: () => drinks_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/drinks.ts
var drinks = [
  { id: 1, name: "Mojito", ingredients: ["Rum branco", "A\xE7\xFAcar", "Lim\xE3o", "Hortel\xE3", "\xC1gua com g\xE1s"], instructions: "Macere as folhas de hortel\xE3 com o a\xE7\xFAcar e o suco de lim\xE3o. Adicione rum e complete com \xE1gua com g\xE1s. Mexa bem e decore com um ramo de hortel\xE3." },
  { id: 2, name: "Margarita", ingredients: ["Tequila", "Triple sec", "Suco de lim\xE3o", "Sal"], instructions: "Misture tequila, triple sec e suco de lim\xE3o com gelo. Coe em um copo com borda de sal." },
  { id: 3, name: "Old Fashioned", ingredients: ["Bourbon", "A\xE7\xFAcar", "Angostura bitters", "Casca de laranja"], instructions: "Macere o a\xE7\xFAcar com bitters e um pouco de \xE1gua. Adicione o bourbon e gelo. Mexa e decore com a casca de laranja." },
  { id: 4, name: "Pi\xF1a Colada", ingredients: ["Rum branco", "Creme de coco", "Suco de abacaxi", "Gelo"], instructions: "Bata todos os ingredientes com gelo no liquidificador at\xE9 ficar homog\xEAneo. Sirva em um copo gelado e decore com uma fatia de abacaxi." },
  { id: 5, name: "Martini", ingredients: ["Gin", "Vermute seco", "Azeitona ou twist de lim\xE3o"], instructions: "Mexa o gin e o vermute com gelo. Coe em um copo gelado e decore com a azeitona ou o twist de lim\xE3o." },
  { id: 6, name: "Caipirinha", ingredients: ["Cacha\xE7a", "Lim\xE3o", "A\xE7\xFAcar", "Gelo"], instructions: "Macere o lim\xE3o com a\xE7\xFAcar. Adicione gelo e cacha\xE7a. Mexa bem." },
  { id: 7, name: "Negroni", ingredients: ["Gin", "Campari", "Vermute doce"], instructions: "Misture todos os ingredientes com gelo. Coe em um copo com gelo e decore com casca de laranja." },
  { id: 8, name: "Whiskey Sour", ingredients: ["Whiskey", "Suco de lim\xE3o", "A\xE7\xFAcar", "Clara de ovo (opcional)"], instructions: "Bata todos os ingredientes com gelo. Coe e sirva. Decore com uma cereja." },
  { id: 9, name: "Batida de Coco", ingredients: ["Leite condensado", "Leite de coco", "Cacha\xE7a", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador at\xE9 ficar cremoso. Sirva gelado." },
  { id: 10, name: "Gin T\xF4nica", ingredients: ["Gin", "\xC1gua t\xF4nica", "Lim\xE3o"], instructions: "Despeje o gin sobre gelo. Adicione \xE1gua t\xF4nica e mexa levemente. Decore com uma fatia de lim\xE3o." },
  { id: 11, name: "Bloody Mary", ingredients: ["Vodka", "Suco de tomate", "Suco de lim\xE3o", "Molho ingl\xEAs", "Tabasco", "Sal de aipo", "Pimenta"], instructions: "Misture todos os ingredientes e sirva com gelo. Decore com um talo de aipo." },
  { id: 12, name: "Tequila Sunrise", ingredients: ["Tequila", "Suco de laranja", "Grenadine"], instructions: "Despeje tequila e suco de laranja sobre gelo. Adicione grenadine lentamente para criar o efeito de nascer do sol." },
  { id: 13, name: "Sex on the Beach", ingredients: ["Vodka", "Licor de p\xEAssego", "Suco de laranja", "Suco de cranberry"], instructions: "Misture todos os ingredientes com gelo e sirva em um copo alto." },
  { id: 14, name: "Aperol Spritz", ingredients: ["Aperol", "Prosecco", "\xC1gua com g\xE1s"], instructions: "Misture Aperol e Prosecco sobre gelo. Adicione \xE1gua com g\xE1s e mexa levemente. Decore com uma fatia de laranja." },
  { id: 15, name: "Batida de Morango", ingredients: ["Leite condensado", "Morango", "Vodka", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador at\xE9 ficar cremoso. Sirva gelado." },
  { id: 16, name: "Cuba Libre", ingredients: ["Rum", "Coca-Cola", "Lim\xE3o"], instructions: "Misture o rum e a Coca-Cola sobre gelo. Esprema uma fatia de lim\xE3o e mexa levemente." },
  { id: 17, name: "Manhattan", ingredients: ["Whiskey", "Vermute doce", "Angostura bitters"], instructions: "Misture todos os ingredientes com gelo. Coe em um copo gelado e decore com uma cereja." },
  { id: 18, name: "Irish Coffee", ingredients: ["Whiskey irland\xEAs", "Caf\xE9 quente", "A\xE7\xFAcar", "Creme de leite"], instructions: "Misture o whiskey, o caf\xE9 e o a\xE7\xFAcar. Adicione o creme levemente batido por cima." },
  { id: 19, name: "Batida de Abacaxi", ingredients: ["Abacaxi", "Leite condensado", "Vodka", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador e sirva gelado." },
  { id: 20, name: "Caipiroska", ingredients: ["Vodka", "Lim\xE3o", "A\xE7\xFAcar", "Gelo"], instructions: "Macere o lim\xE3o com o a\xE7\xFAcar. Adicione gelo e vodka. Mexa bem." },
  { id: 21, name: "Mint Julep", ingredients: ["Bourbon", "Hortel\xE3", "A\xE7\xFAcar", "\xC1gua"], instructions: "Macere hortel\xE3 com a\xE7\xFAcar e \xE1gua. Adicione o bourbon e gelo. Mexa e decore com hortel\xE3." },
  { id: 22, name: "Clericot", ingredients: ["Vinho branco", "Frutas picadas", "Licor", "\xC1gua com g\xE1s"], instructions: "Misture o vinho, as frutas e o licor. Complete com \xE1gua com g\xE1s e sirva gelado." },
  { id: 23, name: "Mimosa", ingredients: ["Champanhe", "Suco de laranja"], instructions: "Misture o champanhe e o suco de laranja em partes iguais. Sirva gelado." },
  { id: 24, name: "Gin Fizz", ingredients: ["Gin", "Suco de lim\xE3o", "A\xE7\xFAcar", "\xC1gua com g\xE1s"], instructions: "Bata o gin, o suco e o a\xE7\xFAcar com gelo. Coe e complete com \xE1gua com g\xE1s." },
  { id: 25, name: "Bellini", ingredients: ["Prosecco", "Pur\xEA de p\xEAssego"], instructions: "Misture o prosecco com o pur\xEA de p\xEAssego e sirva em uma ta\xE7a." },
  { id: 26, name: "Espresso Martini", ingredients: ["Vodka", "Licor de caf\xE9", "Caf\xE9 espresso"], instructions: "Bata todos os ingredientes com gelo e coe em uma ta\xE7a." },
  { id: 27, name: "Blue Lagoon", ingredients: ["Vodka", "Blue cura\xE7ao", "Suco de lim\xE3o"], instructions: "Misture os ingredientes com gelo e sirva em um copo alto." },
  { id: 28, name: "Batida de Maracuj\xE1", ingredients: ["Maracuj\xE1", "Leite condensado", "Cacha\xE7a", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador at\xE9 ficar cremoso." },
  { id: 29, name: "Kir Royal", ingredients: ["Champanhe", "Licor de cassis"], instructions: "Despeje o licor em uma ta\xE7a e complete com champanhe." },
  { id: 30, name: "Tom Collins", ingredients: ["Gin", "Suco de lim\xE3o", "A\xE7\xFAcar", "\xC1gua com g\xE1s"], instructions: "Misture gin, suco de lim\xE3o e a\xE7\xFAcar. Complete com \xE1gua com g\xE1s." },
  { id: 31, name: "Long Island Iced Tea", ingredients: ["Vodka", "Tequila", "Rum", "Gin", "Triple sec", "Suco de lim\xE3o", "Coca-Cola"], instructions: "Misture todos os ingredientes com gelo e adicione Coca-Cola." },
  { id: 32, name: "Pisco Sour", ingredients: ["Pisco", "Suco de lim\xE3o", "A\xE7\xFAcar", "Clara de ovo"], instructions: "Bata todos os ingredientes com gelo e coe em um copo." },
  { id: 33, name: "Batida de Amendoim", ingredients: ["Amendoim", "Leite condensado", "Vodka", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador." },
  { id: 34, name: "Sangria", ingredients: ["Vinho tinto", "Frutas", "A\xE7\xFAcar", "\xC1gua com g\xE1s"], instructions: "Misture todos os ingredientes e deixe na geladeira antes de servir." },
  { id: 35, name: "Caipir\xEDssima", ingredients: ["Rum", "Lim\xE3o", "A\xE7\xFAcar", "Gelo"], instructions: "Macere o lim\xE3o com a\xE7\xFAcar, adicione rum e gelo. Mexa bem." },
  { id: 36, name: "Dry Martini", ingredients: ["Gin", "Vermute seco"], instructions: "Misture o gin e o vermute com gelo e coe." },
  { id: 37, name: "Frozen Margarita", ingredients: ["Tequila", "Suco de lim\xE3o", "Triple sec", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador." },
  { id: 38, name: "French 75", ingredients: ["Gin", "Champanhe", "Suco de lim\xE3o", "A\xE7\xFAcar"], instructions: "Misture gin, suco e a\xE7\xFAcar. Complete com champanhe." },
  { id: 39, name: "Batida de Banana", ingredients: ["Banana", "Leite condensado", "Cacha\xE7a", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador." },
  { id: 40, name: "Brandy Alexander", ingredients: ["Brandy", "Licor de cacau", "Creme de leite"], instructions: "Bata todos os ingredientes com gelo e coe." },
  { id: 41, name: "Rabo de Galo", ingredients: ["Cacha\xE7a", "Vermute"], instructions: "Misture os ingredientes com gelo e sirva." },
  { id: 42, name: "Batida de Manga", ingredients: ["Manga", "Leite condensado", "Vodka", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador." },
  { id: 43, name: "Moscow Mule", ingredients: ["Vodka", "Suco de lim\xE3o", "Ginger beer"], instructions: "Misture os ingredientes com gelo e decore com uma fatia de lim\xE3o." },
  { id: 44, name: "Americano", ingredients: ["Campari", "Vermute doce", "\xC1gua com g\xE1s"], instructions: "Misture os ingredientes com gelo e complete com \xE1gua com g\xE1s." },
  { id: 45, name: "Grasshopper", ingredients: ["Licor de menta", "Licor de cacau", "Creme de leite"], instructions: "Bata os ingredientes com gelo e coe." },
  { id: 46, name: "Batida de Morango com Leite", ingredients: ["Morango", "Leite condensado", "Leite", "Gelo"], instructions: "Bata tudo no liquidificador at\xE9 ficar homog\xEAneo." },
  { id: 47, name: "Caipil\xE9", ingredients: ["Cacha\xE7a", "Lim\xE3o", "A\xE7\xFAcar", "Picol\xE9"], instructions: "Macere o lim\xE3o com a\xE7\xFAcar, adicione a cacha\xE7a e um picol\xE9 no copo." },
  { id: 48, name: "Batida de Uva", ingredients: ["Suco de uva", "Leite condensado", "Cacha\xE7a", "Gelo"], instructions: "Bata todos os ingredientes no liquidificador." },
  { id: 49, name: "Kir", ingredients: ["Vinho branco", "Licor de cassis"], instructions: "Misture o licor com o vinho branco e sirva." },
  { id: 50, name: "Clover Club", ingredients: ["Gin", "Suco de lim\xE3o", "Xarope de framboesa", "Clara de ovo"], instructions: "Bata todos os ingredientes com gelo e coe em uma ta\xE7a." }
];
var drinks_default = drinks;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  drinks
});

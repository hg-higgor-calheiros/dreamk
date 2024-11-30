import { Injectable } from '@nestjs/common';
import { CreateDrinkInput } from './dto/create-drink.input';
import { UpdateDrinkInput } from './dto/update-drink.input';
import { drinks as drinksMock } from 'core';
import { Drink } from 'core';

let drinks = drinksMock;

@Injectable()
export class DrinksService {
  create(createDrinkInput: CreateDrinkInput) {
    console.log(createDrinkInput);
    return 'This action adds a new drink';
  }

  findAll(): Drink[] {
    return drinks;
  }

  findOne(id: number) {
    return drinks.filter((drink) => drink.id === id)[0];
  }

  update(id: number, updateDrinkInput: UpdateDrinkInput) {
    drinks.forEach((drink) => {
      if (drink.id === id) {
        drink.name = updateDrinkInput.name ?? drink.name;
        drink.ingredients = updateDrinkInput.ingredients ?? drink.ingredients;
        drink.instructions =
          updateDrinkInput.instructions ?? drink.instructions;
      }
    });
    return this.findOne(id);
  }

  remove(id: number): boolean {
    drinks = drinks.filter((drink) => drink.id !== id);
    return true;
  }
}

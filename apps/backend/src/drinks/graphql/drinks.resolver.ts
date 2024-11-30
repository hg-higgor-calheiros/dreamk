import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DrinksService } from '../drinks.service';
import { Drink } from '../entities/drink.entity';
import { CreateDrinkInput } from '../dto/create-drink.input';
import { UpdateDrinkInput } from '../dto/update-drink.input';

@Resolver(() => Drink)
export class DrinksResolver {
  constructor(private readonly drinksService: DrinksService) {}

  @Mutation(() => Drink)
  createDrink(@Args('createDrinkInput') createDrinkInput: CreateDrinkInput) {
    return this.drinksService.create(createDrinkInput);
  }

  @Query(() => [Drink], { name: 'drinks' })
  findAll() {
    return this.drinksService.findAll();
  }

  @Query(() => Drink, { name: 'drink' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.drinksService.findOne(id);
  }

  @Mutation(() => Drink)
  updateDrink(@Args('updateDrinkInput') updateDrinkInput: UpdateDrinkInput) {
    return this.drinksService.update(updateDrinkInput.id, updateDrinkInput);
  }

  @Mutation(() => Drink)
  removeDrink(@Args('id', { type: () => Int }) id: number) {
    return this.drinksService.remove(id);
  }
}

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDrinkInput {
  @Field(() => String, { description: 'Drink name' })
  name: string;

  @Field(() => [String], { description: 'Drink ingredients' })
  ingredients: string[];

  @Field(() => String, { description: 'Drink instructions' })
  instructions: string;
}

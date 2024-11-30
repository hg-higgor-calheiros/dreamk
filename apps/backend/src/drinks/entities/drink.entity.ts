import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Drink {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => String, { description: 'Drink name' })
  name: string;

  @Field(() => [String], { description: 'Drink ingredients' })
  ingredients: string[];

  @Field(() => String, { description: 'Drink instructions' })
  instructions: string;
}

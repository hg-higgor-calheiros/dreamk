import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { DrinksResolver } from './graphql/drinks.resolver';

@Module({
  providers: [DrinksResolver, DrinksService],
})
export class DrinksModule {}

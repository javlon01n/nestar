import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppReolver {
    @Query(() => String )
    public sayHello(): string {
        return 'GraphQL API Server';
    }
}
import { GqlModuleOptions } from '@nestjs/graphql';
import { isDevelopment } from '@/consts/envs';
const graphqlConfig: GqlModuleOptions = {
  autoSchemaFile: true,
  debug: isDevelopment,
  playground: isDevelopment,
  context: ({req}) => ({req}),
};
export = graphqlConfig;

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AboutMe } from "./AboutMe";
import { AboutMeCountArgs } from "./AboutMeCountArgs";
import { AboutMeFindManyArgs } from "./AboutMeFindManyArgs";
import { AboutMeFindUniqueArgs } from "./AboutMeFindUniqueArgs";
import { CreateAboutMeArgs } from "./CreateAboutMeArgs";
import { UpdateAboutMeArgs } from "./UpdateAboutMeArgs";
import { DeleteAboutMeArgs } from "./DeleteAboutMeArgs";
import { AboutMeService } from "../aboutMe.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AboutMe)
export class AboutMeResolverBase {
  constructor(
    protected readonly service: AboutMeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AboutMe",
    action: "read",
    possession: "any",
  })
  async _aboutMesMeta(
    @graphql.Args() args: AboutMeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AboutMe])
  @nestAccessControl.UseRoles({
    resource: "AboutMe",
    action: "read",
    possession: "any",
  })
  async aboutMes(
    @graphql.Args() args: AboutMeFindManyArgs
  ): Promise<AboutMe[]> {
    return this.service.aboutMes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AboutMe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AboutMe",
    action: "read",
    possession: "own",
  })
  async aboutMe(
    @graphql.Args() args: AboutMeFindUniqueArgs
  ): Promise<AboutMe | null> {
    const result = await this.service.aboutMe(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AboutMe)
  @nestAccessControl.UseRoles({
    resource: "AboutMe",
    action: "create",
    possession: "any",
  })
  async createAboutMe(
    @graphql.Args() args: CreateAboutMeArgs
  ): Promise<AboutMe> {
    return await this.service.createAboutMe({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AboutMe)
  @nestAccessControl.UseRoles({
    resource: "AboutMe",
    action: "update",
    possession: "any",
  })
  async updateAboutMe(
    @graphql.Args() args: UpdateAboutMeArgs
  ): Promise<AboutMe | null> {
    try {
      return await this.service.updateAboutMe({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AboutMe)
  @nestAccessControl.UseRoles({
    resource: "AboutMe",
    action: "delete",
    possession: "any",
  })
  async deleteAboutMe(
    @graphql.Args() args: DeleteAboutMeArgs
  ): Promise<AboutMe | null> {
    try {
      return await this.service.deleteAboutMe(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

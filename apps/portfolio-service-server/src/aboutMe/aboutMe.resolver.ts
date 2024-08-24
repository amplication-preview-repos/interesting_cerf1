import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AboutMeResolverBase } from "./base/aboutMe.resolver.base";
import { AboutMe } from "./base/AboutMe";
import { AboutMeService } from "./aboutMe.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AboutMe)
export class AboutMeResolver extends AboutMeResolverBase {
  constructor(
    protected readonly service: AboutMeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

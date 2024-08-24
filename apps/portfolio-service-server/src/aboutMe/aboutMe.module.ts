import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AboutMeModuleBase } from "./base/aboutMe.module.base";
import { AboutMeService } from "./aboutMe.service";
import { AboutMeController } from "./aboutMe.controller";
import { AboutMeResolver } from "./aboutMe.resolver";

@Module({
  imports: [AboutMeModuleBase, forwardRef(() => AuthModule)],
  controllers: [AboutMeController],
  providers: [AboutMeService, AboutMeResolver],
  exports: [AboutMeService],
})
export class AboutMeModule {}

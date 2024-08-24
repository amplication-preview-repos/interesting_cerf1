/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AboutMeWhereUniqueInput } from "./AboutMeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AboutMeUpdateInput } from "./AboutMeUpdateInput";

@ArgsType()
class UpdateAboutMeArgs {
  @ApiProperty({
    required: true,
    type: () => AboutMeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AboutMeWhereUniqueInput)
  @Field(() => AboutMeWhereUniqueInput, { nullable: false })
  where!: AboutMeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AboutMeUpdateInput,
  })
  @ValidateNested()
  @Type(() => AboutMeUpdateInput)
  @Field(() => AboutMeUpdateInput, { nullable: false })
  data!: AboutMeUpdateInput;
}

export { UpdateAboutMeArgs as UpdateAboutMeArgs };

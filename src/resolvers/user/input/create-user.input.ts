import { InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  password: string
}
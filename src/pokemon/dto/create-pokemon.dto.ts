import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {
    @IsString()
    @MinLength(1)
    name: string;
    
    @IsNumber()
    @Min(1)
    @IsPositive()
    no: number;
}

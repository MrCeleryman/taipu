import { TaipuStatic } from "./TaipuStatic";
import { TypeDefinition } from "./TypeDefinition";
import { ValidationResult } from "./ValidationResult";
export declare class Taipu<T = any> {
    /** Name of the Taipu type */
    readonly name: string;
    /** Type definition of the Taipu type */
    readonly typeDefinition: Readonly<TypeDefinition>;
    /**
     * @param name Name of the Taipu type
     * @param typeDefinition Type definition of the Taipu type
     */
    constructor(name: string, typeDefinition: TypeDefinition);
    toString(): string;
    readonly type: string;
    /**
     * Validates the given value to the type definition defined in the Taipu
     * instance.
     *
     * @param value Value to test
     */
    validate(value: any): ValidationResult;
    /**
     * Runs validation of the given value, but only returns the success value.
     *
     * @param value Value to test
     */
    is(value: any): value is T;
    static readonly IsTaipuInstance: typeof TaipuStatic.IsTaipuInstance;
    static readonly CreateTypeUnion: typeof TaipuStatic.CreateTypeUnion;
    static readonly CreatePartialType: typeof TaipuStatic.CreatePartialType;
    static readonly GetTypeName: typeof TaipuStatic.GetTypeName;
}
export declare const or: typeof TaipuStatic.CreateTypeUnion;
export declare const partial: typeof TaipuStatic.CreatePartialType;


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model SecondaryProfile
 * 
 */
export type SecondaryProfile = $Result.DefaultSelection<Prisma.$SecondaryProfilePayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProfileStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus]

}

export type ProfileStatus = $Enums.ProfileStatus

export const ProfileStatus: typeof $Enums.ProfileStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secondaryProfile`: Exposes CRUD operations for the **SecondaryProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecondaryProfiles
    * const secondaryProfiles = await prisma.secondaryProfile.findMany()
    * ```
    */
  get secondaryProfile(): Prisma.SecondaryProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    SecondaryProfile: 'SecondaryProfile',
    Picture: 'Picture'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "secondaryProfile" | "picture"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      SecondaryProfile: {
        payload: Prisma.$SecondaryProfilePayload<ExtArgs>
        fields: Prisma.SecondaryProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecondaryProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecondaryProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>
          }
          findFirst: {
            args: Prisma.SecondaryProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecondaryProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>
          }
          findMany: {
            args: Prisma.SecondaryProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>[]
          }
          create: {
            args: Prisma.SecondaryProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>
          }
          createMany: {
            args: Prisma.SecondaryProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecondaryProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>[]
          }
          delete: {
            args: Prisma.SecondaryProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>
          }
          update: {
            args: Prisma.SecondaryProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>
          }
          deleteMany: {
            args: Prisma.SecondaryProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecondaryProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecondaryProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>[]
          }
          upsert: {
            args: Prisma.SecondaryProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryProfilePayload>
          }
          aggregate: {
            args: Prisma.SecondaryProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecondaryProfile>
          }
          groupBy: {
            args: Prisma.SecondaryProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecondaryProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecondaryProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SecondaryProfileCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PictureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    secondaryProfile?: SecondaryProfileOmit
    picture?: PictureOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    pictures: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | ProfileCountOutputTypeCountPicturesArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    age: number | null
  }

  export type ProfileSumAggregateOutputType = {
    age: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    profileId: string | null
    isPhoneNumberVisible: boolean | null
    phoneNumber: string | null
    age: number | null
    activeTime: Date | null
    profileStatus: $Enums.ProfileStatus | null
    raasi: string | null
    star: string | null
    employment: string | null
    city: string | null
    shortlisted: boolean | null
    isDeleted: boolean | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    profileId: string | null
    isPhoneNumberVisible: boolean | null
    phoneNumber: string | null
    age: number | null
    activeTime: Date | null
    profileStatus: $Enums.ProfileStatus | null
    raasi: string | null
    star: string | null
    employment: string | null
    city: string | null
    shortlisted: boolean | null
    isDeleted: boolean | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    profileId: number
    isPhoneNumberVisible: number
    phoneNumber: number
    age: number
    activeTime: number
    profileStatus: number
    raasi: number
    star: number
    employment: number
    city: number
    shortlisted: number
    isDeleted: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    age?: true
  }

  export type ProfileSumAggregateInputType = {
    age?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profileId?: true
    isPhoneNumberVisible?: true
    phoneNumber?: true
    age?: true
    activeTime?: true
    profileStatus?: true
    raasi?: true
    star?: true
    employment?: true
    city?: true
    shortlisted?: true
    isDeleted?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profileId?: true
    isPhoneNumberVisible?: true
    phoneNumber?: true
    age?: true
    activeTime?: true
    profileStatus?: true
    raasi?: true
    star?: true
    employment?: true
    city?: true
    shortlisted?: true
    isDeleted?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profileId?: true
    isPhoneNumberVisible?: true
    phoneNumber?: true
    age?: true
    activeTime?: true
    profileStatus?: true
    raasi?: true
    star?: true
    employment?: true
    city?: true
    shortlisted?: true
    isDeleted?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    profileId: string
    isPhoneNumberVisible: boolean
    phoneNumber: string | null
    age: number | null
    activeTime: Date | null
    profileStatus: $Enums.ProfileStatus | null
    raasi: string | null
    star: string | null
    employment: string | null
    city: string | null
    shortlisted: boolean | null
    isDeleted: boolean
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
    shortlisted?: boolean
    isDeleted?: boolean
    secondaryProfile?: boolean | Profile$secondaryProfileArgs<ExtArgs>
    pictures?: boolean | Profile$picturesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
    shortlisted?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
    shortlisted?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
    shortlisted?: boolean
    isDeleted?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "profileId" | "isPhoneNumberVisible" | "phoneNumber" | "age" | "activeTime" | "profileStatus" | "raasi" | "star" | "employment" | "city" | "shortlisted" | "isDeleted", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secondaryProfile?: boolean | Profile$secondaryProfileArgs<ExtArgs>
    pictures?: boolean | Profile$picturesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      secondaryProfile: Prisma.$SecondaryProfilePayload<ExtArgs> | null
      pictures: Prisma.$PicturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      profileId: string
      isPhoneNumberVisible: boolean
      phoneNumber: string | null
      age: number | null
      activeTime: Date | null
      profileStatus: $Enums.ProfileStatus | null
      raasi: string | null
      star: string | null
      employment: string | null
      city: string | null
      shortlisted: boolean | null
      isDeleted: boolean
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    secondaryProfile<T extends Profile$secondaryProfileArgs<ExtArgs> = {}>(args?: Subset<T, Profile$secondaryProfileArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pictures<T extends Profile$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly profileId: FieldRef<"Profile", 'String'>
    readonly isPhoneNumberVisible: FieldRef<"Profile", 'Boolean'>
    readonly phoneNumber: FieldRef<"Profile", 'String'>
    readonly age: FieldRef<"Profile", 'Int'>
    readonly activeTime: FieldRef<"Profile", 'DateTime'>
    readonly profileStatus: FieldRef<"Profile", 'ProfileStatus'>
    readonly raasi: FieldRef<"Profile", 'String'>
    readonly star: FieldRef<"Profile", 'String'>
    readonly employment: FieldRef<"Profile", 'String'>
    readonly city: FieldRef<"Profile", 'String'>
    readonly shortlisted: FieldRef<"Profile", 'Boolean'>
    readonly isDeleted: FieldRef<"Profile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.secondaryProfile
   */
  export type Profile$secondaryProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    where?: SecondaryProfileWhereInput
  }

  /**
   * Profile.pictures
   */
  export type Profile$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model SecondaryProfile
   */

  export type AggregateSecondaryProfile = {
    _count: SecondaryProfileCountAggregateOutputType | null
    _avg: SecondaryProfileAvgAggregateOutputType | null
    _sum: SecondaryProfileSumAggregateOutputType | null
    _min: SecondaryProfileMinAggregateOutputType | null
    _max: SecondaryProfileMaxAggregateOutputType | null
  }

  export type SecondaryProfileAvgAggregateOutputType = {
    age: number | null
  }

  export type SecondaryProfileSumAggregateOutputType = {
    age: number | null
  }

  export type SecondaryProfileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    profileId: string | null
    isPhoneNumberVisible: boolean | null
    phoneNumber: string | null
    age: number | null
    activeTime: Date | null
    profileStatus: $Enums.ProfileStatus | null
    raasi: string | null
    star: string | null
    employment: string | null
    city: string | null
  }

  export type SecondaryProfileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    profileId: string | null
    isPhoneNumberVisible: boolean | null
    phoneNumber: string | null
    age: number | null
    activeTime: Date | null
    profileStatus: $Enums.ProfileStatus | null
    raasi: string | null
    star: string | null
    employment: string | null
    city: string | null
  }

  export type SecondaryProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    profileId: number
    isPhoneNumberVisible: number
    phoneNumber: number
    age: number
    activeTime: number
    profileStatus: number
    raasi: number
    star: number
    employment: number
    city: number
    _all: number
  }


  export type SecondaryProfileAvgAggregateInputType = {
    age?: true
  }

  export type SecondaryProfileSumAggregateInputType = {
    age?: true
  }

  export type SecondaryProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profileId?: true
    isPhoneNumberVisible?: true
    phoneNumber?: true
    age?: true
    activeTime?: true
    profileStatus?: true
    raasi?: true
    star?: true
    employment?: true
    city?: true
  }

  export type SecondaryProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profileId?: true
    isPhoneNumberVisible?: true
    phoneNumber?: true
    age?: true
    activeTime?: true
    profileStatus?: true
    raasi?: true
    star?: true
    employment?: true
    city?: true
  }

  export type SecondaryProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profileId?: true
    isPhoneNumberVisible?: true
    phoneNumber?: true
    age?: true
    activeTime?: true
    profileStatus?: true
    raasi?: true
    star?: true
    employment?: true
    city?: true
    _all?: true
  }

  export type SecondaryProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryProfile to aggregate.
     */
    where?: SecondaryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryProfiles to fetch.
     */
    orderBy?: SecondaryProfileOrderByWithRelationInput | SecondaryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecondaryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecondaryProfiles
    **/
    _count?: true | SecondaryProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecondaryProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecondaryProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecondaryProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecondaryProfileMaxAggregateInputType
  }

  export type GetSecondaryProfileAggregateType<T extends SecondaryProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSecondaryProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecondaryProfile[P]>
      : GetScalarType<T[P], AggregateSecondaryProfile[P]>
  }




  export type SecondaryProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecondaryProfileWhereInput
    orderBy?: SecondaryProfileOrderByWithAggregationInput | SecondaryProfileOrderByWithAggregationInput[]
    by: SecondaryProfileScalarFieldEnum[] | SecondaryProfileScalarFieldEnum
    having?: SecondaryProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecondaryProfileCountAggregateInputType | true
    _avg?: SecondaryProfileAvgAggregateInputType
    _sum?: SecondaryProfileSumAggregateInputType
    _min?: SecondaryProfileMinAggregateInputType
    _max?: SecondaryProfileMaxAggregateInputType
  }

  export type SecondaryProfileGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    profileId: string
    isPhoneNumberVisible: boolean
    phoneNumber: string | null
    age: number | null
    activeTime: Date | null
    profileStatus: $Enums.ProfileStatus | null
    raasi: string | null
    star: string | null
    employment: string | null
    city: string | null
    _count: SecondaryProfileCountAggregateOutputType | null
    _avg: SecondaryProfileAvgAggregateOutputType | null
    _sum: SecondaryProfileSumAggregateOutputType | null
    _min: SecondaryProfileMinAggregateOutputType | null
    _max: SecondaryProfileMaxAggregateOutputType | null
  }

  type GetSecondaryProfileGroupByPayload<T extends SecondaryProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecondaryProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecondaryProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecondaryProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SecondaryProfileGroupByOutputType[P]>
        }
      >
    >


  export type SecondaryProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secondaryProfile"]>

  export type SecondaryProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secondaryProfile"]>

  export type SecondaryProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secondaryProfile"]>

  export type SecondaryProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profileId?: boolean
    isPhoneNumberVisible?: boolean
    phoneNumber?: boolean
    age?: boolean
    activeTime?: boolean
    profileStatus?: boolean
    raasi?: boolean
    star?: boolean
    employment?: boolean
    city?: boolean
  }

  export type SecondaryProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "profileId" | "isPhoneNumberVisible" | "phoneNumber" | "age" | "activeTime" | "profileStatus" | "raasi" | "star" | "employment" | "city", ExtArgs["result"]["secondaryProfile"]>
  export type SecondaryProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SecondaryProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SecondaryProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $SecondaryProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecondaryProfile"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      profileId: string
      isPhoneNumberVisible: boolean
      phoneNumber: string | null
      age: number | null
      activeTime: Date | null
      profileStatus: $Enums.ProfileStatus | null
      raasi: string | null
      star: string | null
      employment: string | null
      city: string | null
    }, ExtArgs["result"]["secondaryProfile"]>
    composites: {}
  }

  type SecondaryProfileGetPayload<S extends boolean | null | undefined | SecondaryProfileDefaultArgs> = $Result.GetResult<Prisma.$SecondaryProfilePayload, S>

  type SecondaryProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecondaryProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecondaryProfileCountAggregateInputType | true
    }

  export interface SecondaryProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecondaryProfile'], meta: { name: 'SecondaryProfile' } }
    /**
     * Find zero or one SecondaryProfile that matches the filter.
     * @param {SecondaryProfileFindUniqueArgs} args - Arguments to find a SecondaryProfile
     * @example
     * // Get one SecondaryProfile
     * const secondaryProfile = await prisma.secondaryProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecondaryProfileFindUniqueArgs>(args: SelectSubset<T, SecondaryProfileFindUniqueArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecondaryProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecondaryProfileFindUniqueOrThrowArgs} args - Arguments to find a SecondaryProfile
     * @example
     * // Get one SecondaryProfile
     * const secondaryProfile = await prisma.secondaryProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecondaryProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SecondaryProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecondaryProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryProfileFindFirstArgs} args - Arguments to find a SecondaryProfile
     * @example
     * // Get one SecondaryProfile
     * const secondaryProfile = await prisma.secondaryProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecondaryProfileFindFirstArgs>(args?: SelectSubset<T, SecondaryProfileFindFirstArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecondaryProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryProfileFindFirstOrThrowArgs} args - Arguments to find a SecondaryProfile
     * @example
     * // Get one SecondaryProfile
     * const secondaryProfile = await prisma.secondaryProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecondaryProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SecondaryProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecondaryProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecondaryProfiles
     * const secondaryProfiles = await prisma.secondaryProfile.findMany()
     * 
     * // Get first 10 SecondaryProfiles
     * const secondaryProfiles = await prisma.secondaryProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secondaryProfileWithIdOnly = await prisma.secondaryProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecondaryProfileFindManyArgs>(args?: SelectSubset<T, SecondaryProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecondaryProfile.
     * @param {SecondaryProfileCreateArgs} args - Arguments to create a SecondaryProfile.
     * @example
     * // Create one SecondaryProfile
     * const SecondaryProfile = await prisma.secondaryProfile.create({
     *   data: {
     *     // ... data to create a SecondaryProfile
     *   }
     * })
     * 
     */
    create<T extends SecondaryProfileCreateArgs>(args: SelectSubset<T, SecondaryProfileCreateArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecondaryProfiles.
     * @param {SecondaryProfileCreateManyArgs} args - Arguments to create many SecondaryProfiles.
     * @example
     * // Create many SecondaryProfiles
     * const secondaryProfile = await prisma.secondaryProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecondaryProfileCreateManyArgs>(args?: SelectSubset<T, SecondaryProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecondaryProfiles and returns the data saved in the database.
     * @param {SecondaryProfileCreateManyAndReturnArgs} args - Arguments to create many SecondaryProfiles.
     * @example
     * // Create many SecondaryProfiles
     * const secondaryProfile = await prisma.secondaryProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecondaryProfiles and only return the `id`
     * const secondaryProfileWithIdOnly = await prisma.secondaryProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecondaryProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SecondaryProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecondaryProfile.
     * @param {SecondaryProfileDeleteArgs} args - Arguments to delete one SecondaryProfile.
     * @example
     * // Delete one SecondaryProfile
     * const SecondaryProfile = await prisma.secondaryProfile.delete({
     *   where: {
     *     // ... filter to delete one SecondaryProfile
     *   }
     * })
     * 
     */
    delete<T extends SecondaryProfileDeleteArgs>(args: SelectSubset<T, SecondaryProfileDeleteArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecondaryProfile.
     * @param {SecondaryProfileUpdateArgs} args - Arguments to update one SecondaryProfile.
     * @example
     * // Update one SecondaryProfile
     * const secondaryProfile = await prisma.secondaryProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecondaryProfileUpdateArgs>(args: SelectSubset<T, SecondaryProfileUpdateArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecondaryProfiles.
     * @param {SecondaryProfileDeleteManyArgs} args - Arguments to filter SecondaryProfiles to delete.
     * @example
     * // Delete a few SecondaryProfiles
     * const { count } = await prisma.secondaryProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecondaryProfileDeleteManyArgs>(args?: SelectSubset<T, SecondaryProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecondaryProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecondaryProfiles
     * const secondaryProfile = await prisma.secondaryProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecondaryProfileUpdateManyArgs>(args: SelectSubset<T, SecondaryProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecondaryProfiles and returns the data updated in the database.
     * @param {SecondaryProfileUpdateManyAndReturnArgs} args - Arguments to update many SecondaryProfiles.
     * @example
     * // Update many SecondaryProfiles
     * const secondaryProfile = await prisma.secondaryProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecondaryProfiles and only return the `id`
     * const secondaryProfileWithIdOnly = await prisma.secondaryProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecondaryProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SecondaryProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecondaryProfile.
     * @param {SecondaryProfileUpsertArgs} args - Arguments to update or create a SecondaryProfile.
     * @example
     * // Update or create a SecondaryProfile
     * const secondaryProfile = await prisma.secondaryProfile.upsert({
     *   create: {
     *     // ... data to create a SecondaryProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecondaryProfile we want to update
     *   }
     * })
     */
    upsert<T extends SecondaryProfileUpsertArgs>(args: SelectSubset<T, SecondaryProfileUpsertArgs<ExtArgs>>): Prisma__SecondaryProfileClient<$Result.GetResult<Prisma.$SecondaryProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecondaryProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryProfileCountArgs} args - Arguments to filter SecondaryProfiles to count.
     * @example
     * // Count the number of SecondaryProfiles
     * const count = await prisma.secondaryProfile.count({
     *   where: {
     *     // ... the filter for the SecondaryProfiles we want to count
     *   }
     * })
    **/
    count<T extends SecondaryProfileCountArgs>(
      args?: Subset<T, SecondaryProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecondaryProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecondaryProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecondaryProfileAggregateArgs>(args: Subset<T, SecondaryProfileAggregateArgs>): Prisma.PrismaPromise<GetSecondaryProfileAggregateType<T>>

    /**
     * Group by SecondaryProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecondaryProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecondaryProfileGroupByArgs['orderBy'] }
        : { orderBy?: SecondaryProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecondaryProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecondaryProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecondaryProfile model
   */
  readonly fields: SecondaryProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecondaryProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecondaryProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecondaryProfile model
   */
  interface SecondaryProfileFieldRefs {
    readonly id: FieldRef<"SecondaryProfile", 'String'>
    readonly createdAt: FieldRef<"SecondaryProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"SecondaryProfile", 'DateTime'>
    readonly name: FieldRef<"SecondaryProfile", 'String'>
    readonly profileId: FieldRef<"SecondaryProfile", 'String'>
    readonly isPhoneNumberVisible: FieldRef<"SecondaryProfile", 'Boolean'>
    readonly phoneNumber: FieldRef<"SecondaryProfile", 'String'>
    readonly age: FieldRef<"SecondaryProfile", 'Int'>
    readonly activeTime: FieldRef<"SecondaryProfile", 'DateTime'>
    readonly profileStatus: FieldRef<"SecondaryProfile", 'ProfileStatus'>
    readonly raasi: FieldRef<"SecondaryProfile", 'String'>
    readonly star: FieldRef<"SecondaryProfile", 'String'>
    readonly employment: FieldRef<"SecondaryProfile", 'String'>
    readonly city: FieldRef<"SecondaryProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SecondaryProfile findUnique
   */
  export type SecondaryProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryProfile to fetch.
     */
    where: SecondaryProfileWhereUniqueInput
  }

  /**
   * SecondaryProfile findUniqueOrThrow
   */
  export type SecondaryProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryProfile to fetch.
     */
    where: SecondaryProfileWhereUniqueInput
  }

  /**
   * SecondaryProfile findFirst
   */
  export type SecondaryProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryProfile to fetch.
     */
    where?: SecondaryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryProfiles to fetch.
     */
    orderBy?: SecondaryProfileOrderByWithRelationInput | SecondaryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryProfiles.
     */
    cursor?: SecondaryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryProfiles.
     */
    distinct?: SecondaryProfileScalarFieldEnum | SecondaryProfileScalarFieldEnum[]
  }

  /**
   * SecondaryProfile findFirstOrThrow
   */
  export type SecondaryProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryProfile to fetch.
     */
    where?: SecondaryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryProfiles to fetch.
     */
    orderBy?: SecondaryProfileOrderByWithRelationInput | SecondaryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryProfiles.
     */
    cursor?: SecondaryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryProfiles.
     */
    distinct?: SecondaryProfileScalarFieldEnum | SecondaryProfileScalarFieldEnum[]
  }

  /**
   * SecondaryProfile findMany
   */
  export type SecondaryProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryProfiles to fetch.
     */
    where?: SecondaryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryProfiles to fetch.
     */
    orderBy?: SecondaryProfileOrderByWithRelationInput | SecondaryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecondaryProfiles.
     */
    cursor?: SecondaryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryProfiles.
     */
    skip?: number
    distinct?: SecondaryProfileScalarFieldEnum | SecondaryProfileScalarFieldEnum[]
  }

  /**
   * SecondaryProfile create
   */
  export type SecondaryProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SecondaryProfile.
     */
    data: XOR<SecondaryProfileCreateInput, SecondaryProfileUncheckedCreateInput>
  }

  /**
   * SecondaryProfile createMany
   */
  export type SecondaryProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecondaryProfiles.
     */
    data: SecondaryProfileCreateManyInput | SecondaryProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecondaryProfile createManyAndReturn
   */
  export type SecondaryProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SecondaryProfiles.
     */
    data: SecondaryProfileCreateManyInput | SecondaryProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecondaryProfile update
   */
  export type SecondaryProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SecondaryProfile.
     */
    data: XOR<SecondaryProfileUpdateInput, SecondaryProfileUncheckedUpdateInput>
    /**
     * Choose, which SecondaryProfile to update.
     */
    where: SecondaryProfileWhereUniqueInput
  }

  /**
   * SecondaryProfile updateMany
   */
  export type SecondaryProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecondaryProfiles.
     */
    data: XOR<SecondaryProfileUpdateManyMutationInput, SecondaryProfileUncheckedUpdateManyInput>
    /**
     * Filter which SecondaryProfiles to update
     */
    where?: SecondaryProfileWhereInput
    /**
     * Limit how many SecondaryProfiles to update.
     */
    limit?: number
  }

  /**
   * SecondaryProfile updateManyAndReturn
   */
  export type SecondaryProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * The data used to update SecondaryProfiles.
     */
    data: XOR<SecondaryProfileUpdateManyMutationInput, SecondaryProfileUncheckedUpdateManyInput>
    /**
     * Filter which SecondaryProfiles to update
     */
    where?: SecondaryProfileWhereInput
    /**
     * Limit how many SecondaryProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecondaryProfile upsert
   */
  export type SecondaryProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SecondaryProfile to update in case it exists.
     */
    where: SecondaryProfileWhereUniqueInput
    /**
     * In case the SecondaryProfile found by the `where` argument doesn't exist, create a new SecondaryProfile with this data.
     */
    create: XOR<SecondaryProfileCreateInput, SecondaryProfileUncheckedCreateInput>
    /**
     * In case the SecondaryProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecondaryProfileUpdateInput, SecondaryProfileUncheckedUpdateInput>
  }

  /**
   * SecondaryProfile delete
   */
  export type SecondaryProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
    /**
     * Filter which SecondaryProfile to delete.
     */
    where: SecondaryProfileWhereUniqueInput
  }

  /**
   * SecondaryProfile deleteMany
   */
  export type SecondaryProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryProfiles to delete
     */
    where?: SecondaryProfileWhereInput
    /**
     * Limit how many SecondaryProfiles to delete.
     */
    limit?: number
  }

  /**
   * SecondaryProfile without action
   */
  export type SecondaryProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryProfile
     */
    select?: SecondaryProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryProfile
     */
    omit?: SecondaryProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryProfileInclude<ExtArgs> | null
  }


  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    profileId: string | null
  }

  export type PictureMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    profileId: string | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    profileId: number
    _all: number
  }


  export type PictureMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    profileId?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    profileId?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    profileId?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    profileId: string
    _count: PictureCountAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    profileId?: boolean
  }

  export type PictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "url" | "profileId", ExtArgs["result"]["picture"]>
  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PictureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      url: string
      profileId: string
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureFindUniqueArgs>(args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureFindFirstArgs>(args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PictureFindManyArgs>(args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
     */
    create<T extends PictureCreateArgs>(args: SelectSubset<T, PictureCreateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pictures.
     * @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PictureCreateManyArgs>(args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {PictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
     */
    delete<T extends PictureDeleteArgs>(args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PictureUpdateArgs>(args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PictureDeleteManyArgs>(args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PictureUpdateManyArgs>(args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures and returns the data updated in the database.
     * @param {PictureUpdateManyAndReturnArgs} args - Arguments to update many Pictures.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PictureUpdateManyAndReturnArgs>(args: SelectSubset<T, PictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
     */
    upsert<T extends PictureUpsertArgs>(args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Picture model
   */
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", 'String'>
    readonly createdAt: FieldRef<"Picture", 'DateTime'>
    readonly updatedAt: FieldRef<"Picture", 'DateTime'>
    readonly url: FieldRef<"Picture", 'String'>
    readonly profileId: FieldRef<"Picture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }

  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Picture createManyAndReturn
   */
  export type PictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
  }

  /**
   * Picture updateManyAndReturn
   */
  export type PictureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }

  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to delete.
     */
    limit?: number
  }

  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    profileId: 'profileId',
    isPhoneNumberVisible: 'isPhoneNumberVisible',
    phoneNumber: 'phoneNumber',
    age: 'age',
    activeTime: 'activeTime',
    profileStatus: 'profileStatus',
    raasi: 'raasi',
    star: 'star',
    employment: 'employment',
    city: 'city',
    shortlisted: 'shortlisted',
    isDeleted: 'isDeleted'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SecondaryProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    profileId: 'profileId',
    isPhoneNumberVisible: 'isPhoneNumberVisible',
    phoneNumber: 'phoneNumber',
    age: 'age',
    activeTime: 'activeTime',
    profileStatus: 'profileStatus',
    raasi: 'raasi',
    star: 'star',
    employment: 'employment',
    city: 'city'
  };

  export type SecondaryProfileScalarFieldEnum = (typeof SecondaryProfileScalarFieldEnum)[keyof typeof SecondaryProfileScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url',
    profileId: 'profileId'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProfileStatus'
   */
  export type EnumProfileStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileStatus'>
    


  /**
   * Reference to a field of type 'ProfileStatus[]'
   */
  export type ListEnumProfileStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    name?: StringFilter<"Profile"> | string
    profileId?: StringFilter<"Profile"> | string
    isPhoneNumberVisible?: BoolFilter<"Profile"> | boolean
    phoneNumber?: StringNullableFilter<"Profile"> | string | null
    age?: IntNullableFilter<"Profile"> | number | null
    activeTime?: DateTimeNullableFilter<"Profile"> | Date | string | null
    profileStatus?: EnumProfileStatusNullableFilter<"Profile"> | $Enums.ProfileStatus | null
    raasi?: StringNullableFilter<"Profile"> | string | null
    star?: StringNullableFilter<"Profile"> | string | null
    employment?: StringNullableFilter<"Profile"> | string | null
    city?: StringNullableFilter<"Profile"> | string | null
    shortlisted?: BoolNullableFilter<"Profile"> | boolean | null
    isDeleted?: BoolFilter<"Profile"> | boolean
    secondaryProfile?: XOR<SecondaryProfileNullableScalarRelationFilter, SecondaryProfileWhereInput> | null
    pictures?: PictureListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    activeTime?: SortOrderInput | SortOrder
    profileStatus?: SortOrderInput | SortOrder
    raasi?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    employment?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    shortlisted?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    secondaryProfile?: SecondaryProfileOrderByWithRelationInput
    pictures?: PictureOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    name?: StringFilter<"Profile"> | string
    isPhoneNumberVisible?: BoolFilter<"Profile"> | boolean
    phoneNumber?: StringNullableFilter<"Profile"> | string | null
    age?: IntNullableFilter<"Profile"> | number | null
    activeTime?: DateTimeNullableFilter<"Profile"> | Date | string | null
    profileStatus?: EnumProfileStatusNullableFilter<"Profile"> | $Enums.ProfileStatus | null
    raasi?: StringNullableFilter<"Profile"> | string | null
    star?: StringNullableFilter<"Profile"> | string | null
    employment?: StringNullableFilter<"Profile"> | string | null
    city?: StringNullableFilter<"Profile"> | string | null
    shortlisted?: BoolNullableFilter<"Profile"> | boolean | null
    isDeleted?: BoolFilter<"Profile"> | boolean
    secondaryProfile?: XOR<SecondaryProfileNullableScalarRelationFilter, SecondaryProfileWhereInput> | null
    pictures?: PictureListRelationFilter
  }, "id" | "profileId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    activeTime?: SortOrderInput | SortOrder
    profileStatus?: SortOrderInput | SortOrder
    raasi?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    employment?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    shortlisted?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    profileId?: StringWithAggregatesFilter<"Profile"> | string
    isPhoneNumberVisible?: BoolWithAggregatesFilter<"Profile"> | boolean
    phoneNumber?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    age?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    activeTime?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    profileStatus?: EnumProfileStatusNullableWithAggregatesFilter<"Profile"> | $Enums.ProfileStatus | null
    raasi?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    star?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    employment?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    city?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    shortlisted?: BoolNullableWithAggregatesFilter<"Profile"> | boolean | null
    isDeleted?: BoolWithAggregatesFilter<"Profile"> | boolean
  }

  export type SecondaryProfileWhereInput = {
    AND?: SecondaryProfileWhereInput | SecondaryProfileWhereInput[]
    OR?: SecondaryProfileWhereInput[]
    NOT?: SecondaryProfileWhereInput | SecondaryProfileWhereInput[]
    id?: StringFilter<"SecondaryProfile"> | string
    createdAt?: DateTimeFilter<"SecondaryProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SecondaryProfile"> | Date | string
    name?: StringFilter<"SecondaryProfile"> | string
    profileId?: StringFilter<"SecondaryProfile"> | string
    isPhoneNumberVisible?: BoolFilter<"SecondaryProfile"> | boolean
    phoneNumber?: StringNullableFilter<"SecondaryProfile"> | string | null
    age?: IntNullableFilter<"SecondaryProfile"> | number | null
    activeTime?: DateTimeNullableFilter<"SecondaryProfile"> | Date | string | null
    profileStatus?: EnumProfileStatusNullableFilter<"SecondaryProfile"> | $Enums.ProfileStatus | null
    raasi?: StringNullableFilter<"SecondaryProfile"> | string | null
    star?: StringNullableFilter<"SecondaryProfile"> | string | null
    employment?: StringNullableFilter<"SecondaryProfile"> | string | null
    city?: StringNullableFilter<"SecondaryProfile"> | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type SecondaryProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    activeTime?: SortOrderInput | SortOrder
    profileStatus?: SortOrderInput | SortOrder
    raasi?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    employment?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type SecondaryProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: SecondaryProfileWhereInput | SecondaryProfileWhereInput[]
    OR?: SecondaryProfileWhereInput[]
    NOT?: SecondaryProfileWhereInput | SecondaryProfileWhereInput[]
    createdAt?: DateTimeFilter<"SecondaryProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SecondaryProfile"> | Date | string
    name?: StringFilter<"SecondaryProfile"> | string
    isPhoneNumberVisible?: BoolFilter<"SecondaryProfile"> | boolean
    phoneNumber?: StringNullableFilter<"SecondaryProfile"> | string | null
    age?: IntNullableFilter<"SecondaryProfile"> | number | null
    activeTime?: DateTimeNullableFilter<"SecondaryProfile"> | Date | string | null
    profileStatus?: EnumProfileStatusNullableFilter<"SecondaryProfile"> | $Enums.ProfileStatus | null
    raasi?: StringNullableFilter<"SecondaryProfile"> | string | null
    star?: StringNullableFilter<"SecondaryProfile"> | string | null
    employment?: StringNullableFilter<"SecondaryProfile"> | string | null
    city?: StringNullableFilter<"SecondaryProfile"> | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "profileId">

  export type SecondaryProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    activeTime?: SortOrderInput | SortOrder
    profileStatus?: SortOrderInput | SortOrder
    raasi?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    employment?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    _count?: SecondaryProfileCountOrderByAggregateInput
    _avg?: SecondaryProfileAvgOrderByAggregateInput
    _max?: SecondaryProfileMaxOrderByAggregateInput
    _min?: SecondaryProfileMinOrderByAggregateInput
    _sum?: SecondaryProfileSumOrderByAggregateInput
  }

  export type SecondaryProfileScalarWhereWithAggregatesInput = {
    AND?: SecondaryProfileScalarWhereWithAggregatesInput | SecondaryProfileScalarWhereWithAggregatesInput[]
    OR?: SecondaryProfileScalarWhereWithAggregatesInput[]
    NOT?: SecondaryProfileScalarWhereWithAggregatesInput | SecondaryProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecondaryProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SecondaryProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SecondaryProfile"> | Date | string
    name?: StringWithAggregatesFilter<"SecondaryProfile"> | string
    profileId?: StringWithAggregatesFilter<"SecondaryProfile"> | string
    isPhoneNumberVisible?: BoolWithAggregatesFilter<"SecondaryProfile"> | boolean
    phoneNumber?: StringNullableWithAggregatesFilter<"SecondaryProfile"> | string | null
    age?: IntNullableWithAggregatesFilter<"SecondaryProfile"> | number | null
    activeTime?: DateTimeNullableWithAggregatesFilter<"SecondaryProfile"> | Date | string | null
    profileStatus?: EnumProfileStatusNullableWithAggregatesFilter<"SecondaryProfile"> | $Enums.ProfileStatus | null
    raasi?: StringNullableWithAggregatesFilter<"SecondaryProfile"> | string | null
    star?: StringNullableWithAggregatesFilter<"SecondaryProfile"> | string | null
    employment?: StringNullableWithAggregatesFilter<"SecondaryProfile"> | string | null
    city?: StringNullableWithAggregatesFilter<"SecondaryProfile"> | string | null
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: StringFilter<"Picture"> | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    url?: StringFilter<"Picture"> | string
    profileId?: StringFilter<"Picture"> | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    profileId?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    url?: StringFilter<"Picture"> | string
    profileId?: StringFilter<"Picture"> | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    profileId?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Picture"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
    url?: StringWithAggregatesFilter<"Picture"> | string
    profileId?: StringWithAggregatesFilter<"Picture"> | string
  }

  export type ProfileCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    shortlisted?: boolean | null
    isDeleted?: boolean
    secondaryProfile?: SecondaryProfileCreateNestedOneWithoutProfileInput
    pictures?: PictureCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    shortlisted?: boolean | null
    isDeleted?: boolean
    secondaryProfile?: SecondaryProfileUncheckedCreateNestedOneWithoutProfileInput
    pictures?: PictureUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    secondaryProfile?: SecondaryProfileUpdateOneWithoutProfileNestedInput
    pictures?: PictureUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    secondaryProfile?: SecondaryProfileUncheckedUpdateOneWithoutProfileNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    shortlisted?: boolean | null
    isDeleted?: boolean
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SecondaryProfileCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    profile: ProfileCreateNestedOneWithoutSecondaryProfileInput
  }

  export type SecondaryProfileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
  }

  export type SecondaryProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneRequiredWithoutSecondaryProfileNestedInput
  }

  export type SecondaryProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecondaryProfileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
  }

  export type SecondaryProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecondaryProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    profile: ProfileCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    profileId: string
  }

  export type PictureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    profileId: string
  }

  export type PictureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumProfileStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileStatus | EnumProfileStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProfileStatusNullableFilter<$PrismaModel> | $Enums.ProfileStatus | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SecondaryProfileNullableScalarRelationFilter = {
    is?: SecondaryProfileWhereInput | null
    isNot?: SecondaryProfileWhereInput | null
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    activeTime?: SortOrder
    profileStatus?: SortOrder
    raasi?: SortOrder
    star?: SortOrder
    employment?: SortOrder
    city?: SortOrder
    shortlisted?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    activeTime?: SortOrder
    profileStatus?: SortOrder
    raasi?: SortOrder
    star?: SortOrder
    employment?: SortOrder
    city?: SortOrder
    shortlisted?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    activeTime?: SortOrder
    profileStatus?: SortOrder
    raasi?: SortOrder
    star?: SortOrder
    employment?: SortOrder
    city?: SortOrder
    shortlisted?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumProfileStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileStatus | EnumProfileStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProfileStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProfileStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProfileStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumProfileStatusNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type SecondaryProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    activeTime?: SortOrder
    profileStatus?: SortOrder
    raasi?: SortOrder
    star?: SortOrder
    employment?: SortOrder
    city?: SortOrder
  }

  export type SecondaryProfileAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type SecondaryProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    activeTime?: SortOrder
    profileStatus?: SortOrder
    raasi?: SortOrder
    star?: SortOrder
    employment?: SortOrder
    city?: SortOrder
  }

  export type SecondaryProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    isPhoneNumberVisible?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    activeTime?: SortOrder
    profileStatus?: SortOrder
    raasi?: SortOrder
    star?: SortOrder
    employment?: SortOrder
    city?: SortOrder
  }

  export type SecondaryProfileSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    profileId?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    profileId?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    profileId?: SortOrder
  }

  export type SecondaryProfileCreateNestedOneWithoutProfileInput = {
    create?: XOR<SecondaryProfileCreateWithoutProfileInput, SecondaryProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SecondaryProfileCreateOrConnectWithoutProfileInput
    connect?: SecondaryProfileWhereUniqueInput
  }

  export type PictureCreateNestedManyWithoutProfileInput = {
    create?: XOR<PictureCreateWithoutProfileInput, PictureUncheckedCreateWithoutProfileInput> | PictureCreateWithoutProfileInput[] | PictureUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutProfileInput | PictureCreateOrConnectWithoutProfileInput[]
    createMany?: PictureCreateManyProfileInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type SecondaryProfileUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<SecondaryProfileCreateWithoutProfileInput, SecondaryProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SecondaryProfileCreateOrConnectWithoutProfileInput
    connect?: SecondaryProfileWhereUniqueInput
  }

  export type PictureUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<PictureCreateWithoutProfileInput, PictureUncheckedCreateWithoutProfileInput> | PictureCreateWithoutProfileInput[] | PictureUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutProfileInput | PictureCreateOrConnectWithoutProfileInput[]
    createMany?: PictureCreateManyProfileInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumProfileStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProfileStatus | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SecondaryProfileUpdateOneWithoutProfileNestedInput = {
    create?: XOR<SecondaryProfileCreateWithoutProfileInput, SecondaryProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SecondaryProfileCreateOrConnectWithoutProfileInput
    upsert?: SecondaryProfileUpsertWithoutProfileInput
    disconnect?: SecondaryProfileWhereInput | boolean
    delete?: SecondaryProfileWhereInput | boolean
    connect?: SecondaryProfileWhereUniqueInput
    update?: XOR<XOR<SecondaryProfileUpdateToOneWithWhereWithoutProfileInput, SecondaryProfileUpdateWithoutProfileInput>, SecondaryProfileUncheckedUpdateWithoutProfileInput>
  }

  export type PictureUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PictureCreateWithoutProfileInput, PictureUncheckedCreateWithoutProfileInput> | PictureCreateWithoutProfileInput[] | PictureUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutProfileInput | PictureCreateOrConnectWithoutProfileInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutProfileInput | PictureUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PictureCreateManyProfileInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutProfileInput | PictureUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutProfileInput | PictureUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type SecondaryProfileUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<SecondaryProfileCreateWithoutProfileInput, SecondaryProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SecondaryProfileCreateOrConnectWithoutProfileInput
    upsert?: SecondaryProfileUpsertWithoutProfileInput
    disconnect?: SecondaryProfileWhereInput | boolean
    delete?: SecondaryProfileWhereInput | boolean
    connect?: SecondaryProfileWhereUniqueInput
    update?: XOR<XOR<SecondaryProfileUpdateToOneWithWhereWithoutProfileInput, SecondaryProfileUpdateWithoutProfileInput>, SecondaryProfileUncheckedUpdateWithoutProfileInput>
  }

  export type PictureUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PictureCreateWithoutProfileInput, PictureUncheckedCreateWithoutProfileInput> | PictureCreateWithoutProfileInput[] | PictureUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutProfileInput | PictureCreateOrConnectWithoutProfileInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutProfileInput | PictureUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PictureCreateManyProfileInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutProfileInput | PictureUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutProfileInput | PictureUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutSecondaryProfileInput = {
    create?: XOR<ProfileCreateWithoutSecondaryProfileInput, ProfileUncheckedCreateWithoutSecondaryProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSecondaryProfileInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutSecondaryProfileNestedInput = {
    create?: XOR<ProfileCreateWithoutSecondaryProfileInput, ProfileUncheckedCreateWithoutSecondaryProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSecondaryProfileInput
    upsert?: ProfileUpsertWithoutSecondaryProfileInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSecondaryProfileInput, ProfileUpdateWithoutSecondaryProfileInput>, ProfileUncheckedUpdateWithoutSecondaryProfileInput>
  }

  export type ProfileCreateNestedOneWithoutPicturesInput = {
    create?: XOR<ProfileCreateWithoutPicturesInput, ProfileUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPicturesInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<ProfileCreateWithoutPicturesInput, ProfileUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPicturesInput
    upsert?: ProfileUpsertWithoutPicturesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPicturesInput, ProfileUpdateWithoutPicturesInput>, ProfileUncheckedUpdateWithoutPicturesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProfileStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileStatus | EnumProfileStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProfileStatusNullableFilter<$PrismaModel> | $Enums.ProfileStatus | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumProfileStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileStatus | EnumProfileStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProfileStatus[] | ListEnumProfileStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProfileStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProfileStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProfileStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumProfileStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type SecondaryProfileCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
  }

  export type SecondaryProfileUncheckedCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
  }

  export type SecondaryProfileCreateOrConnectWithoutProfileInput = {
    where: SecondaryProfileWhereUniqueInput
    create: XOR<SecondaryProfileCreateWithoutProfileInput, SecondaryProfileUncheckedCreateWithoutProfileInput>
  }

  export type PictureCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type PictureUncheckedCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type PictureCreateOrConnectWithoutProfileInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutProfileInput, PictureUncheckedCreateWithoutProfileInput>
  }

  export type PictureCreateManyProfileInputEnvelope = {
    data: PictureCreateManyProfileInput | PictureCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type SecondaryProfileUpsertWithoutProfileInput = {
    update: XOR<SecondaryProfileUpdateWithoutProfileInput, SecondaryProfileUncheckedUpdateWithoutProfileInput>
    create: XOR<SecondaryProfileCreateWithoutProfileInput, SecondaryProfileUncheckedCreateWithoutProfileInput>
    where?: SecondaryProfileWhereInput
  }

  export type SecondaryProfileUpdateToOneWithWhereWithoutProfileInput = {
    where?: SecondaryProfileWhereInput
    data: XOR<SecondaryProfileUpdateWithoutProfileInput, SecondaryProfileUncheckedUpdateWithoutProfileInput>
  }

  export type SecondaryProfileUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecondaryProfileUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureUpsertWithWhereUniqueWithoutProfileInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutProfileInput, PictureUncheckedUpdateWithoutProfileInput>
    create: XOR<PictureCreateWithoutProfileInput, PictureUncheckedCreateWithoutProfileInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutProfileInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutProfileInput, PictureUncheckedUpdateWithoutProfileInput>
  }

  export type PictureUpdateManyWithWhereWithoutProfileInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutProfileInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: StringFilter<"Picture"> | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    url?: StringFilter<"Picture"> | string
    profileId?: StringFilter<"Picture"> | string
  }

  export type ProfileCreateWithoutSecondaryProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    shortlisted?: boolean | null
    isDeleted?: boolean
    pictures?: PictureCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutSecondaryProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    shortlisted?: boolean | null
    isDeleted?: boolean
    pictures?: PictureUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutSecondaryProfileInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSecondaryProfileInput, ProfileUncheckedCreateWithoutSecondaryProfileInput>
  }

  export type ProfileUpsertWithoutSecondaryProfileInput = {
    update: XOR<ProfileUpdateWithoutSecondaryProfileInput, ProfileUncheckedUpdateWithoutSecondaryProfileInput>
    create: XOR<ProfileCreateWithoutSecondaryProfileInput, ProfileUncheckedCreateWithoutSecondaryProfileInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSecondaryProfileInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSecondaryProfileInput, ProfileUncheckedUpdateWithoutSecondaryProfileInput>
  }

  export type ProfileUpdateWithoutSecondaryProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pictures?: PictureUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSecondaryProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pictures?: PictureUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutPicturesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    shortlisted?: boolean | null
    isDeleted?: boolean
    secondaryProfile?: SecondaryProfileCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutPicturesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profileId: string
    isPhoneNumberVisible?: boolean
    phoneNumber?: string | null
    age?: number | null
    activeTime?: Date | string | null
    profileStatus?: $Enums.ProfileStatus | null
    raasi?: string | null
    star?: string | null
    employment?: string | null
    city?: string | null
    shortlisted?: boolean | null
    isDeleted?: boolean
    secondaryProfile?: SecondaryProfileUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutPicturesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPicturesInput, ProfileUncheckedCreateWithoutPicturesInput>
  }

  export type ProfileUpsertWithoutPicturesInput = {
    update: XOR<ProfileUpdateWithoutPicturesInput, ProfileUncheckedUpdateWithoutPicturesInput>
    create: XOR<ProfileCreateWithoutPicturesInput, ProfileUncheckedCreateWithoutPicturesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPicturesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPicturesInput, ProfileUncheckedUpdateWithoutPicturesInput>
  }

  export type ProfileUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    secondaryProfile?: SecondaryProfileUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    isPhoneNumberVisible?: BoolFieldUpdateOperationsInput | boolean
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileStatus?: NullableEnumProfileStatusFieldUpdateOperationsInput | $Enums.ProfileStatus | null
    raasi?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    shortlisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    secondaryProfile?: SecondaryProfileUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type PictureCreateManyProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type PictureUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
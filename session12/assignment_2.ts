// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .


type FirstArgument<T>=T extends (arg1:infer A,...args:any[])=>any?A:never
type MyFunction = (id: string, active: boolean) => void;
type AnotherFunc = (count: number) => boolean;
type X=FirstArgument<MyFunction>
type Y = FirstArgument<AnotherFunc>;

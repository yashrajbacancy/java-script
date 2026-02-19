// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};

type StringifiedUser = {
  [K in keyof User]: string;
};

type OptionalAndNullableUser = {
  [K in keyof User]?: User[K] | null;
};

const readOnlyUser: ReadOnlyUser = {
  id: 1,
  name: "Yashraj",
  email: "yash@test.com",
  isActive: true,
};

//This would cause error
// readOnlyUser.name = "Rahul";

const stringUser: StringifiedUser = {
  id: "1",
  name: "Yashraj",
  email: "yash@test.com",
  isActive: "true", // now string
};

const optionalUser: OptionalAndNullableUser = {
  id: null,
  name: "Guest",
  // other properties optional
};

console.log(readOnlyUser, stringUser, optionalUser);

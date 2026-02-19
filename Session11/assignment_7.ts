// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.

type User = {
  id: string;
  name: string;
  email: string | null;
  isActive: boolean | undefined;
};

type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type UserWithReadonly = ReadonlyByKeys<User, "id" | "email">;

type CleanUser = NonNullableFields<User>;

const user1: UserWithReadonly = {
  id: "1",
  name: "Yash",
  email: "test@test.com",
  isActive: true,
};

// Error (readonly)
// user1.id = "2";

const user2: CleanUser = {
  id: "1",
  name: "Yash",
  email: "test@test.com", // cannot be null
  isActive: true, // cannot be undefined
};

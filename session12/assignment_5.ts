// Create a constructor type for UserRepository .
// Create a callable type that formats User name.

class UserRepository {
  constructor(public name: string) {}
}

type UserRepositoryConstructor = new (name: string) => UserRepository;
const Repo: UserRepositoryConstructor = UserRepository;
const user1 = new Repo("Yash");
console.log(user1.name);

type FormatUserName = (name: string) => string;
const formatName: FormatUserName = (name) => {
  return "User: " + name.toUpperCase();
};
console.log(formatName(user1.name));

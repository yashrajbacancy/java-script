// Create a constant adminUser.
// Create a type from it using typeof.
// Add a new property and observe how the type changes automatically.

const adminUser = {
  id: "0",
  name: "Guest",
  email: "guest@test.com",
  role: "ADMIN",
  project: "Dashboard",
  isActive: true
};



type Admin = typeof adminUser;




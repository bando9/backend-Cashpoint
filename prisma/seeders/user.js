const prisma = require("../client");

const bcrypt = require("bcryptjs");

async function main() {
  // hash password
  const password = await bcrypt.hash("password", 10);

  // create user
  await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@gmail.com",
      password,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

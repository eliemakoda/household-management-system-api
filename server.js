require("dotenv").config();
const app = require("./src/middleware/application.middleware");
const http = require("http");
const db = require("./config/database.config");

const PROTOCOL = "http";

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => {
  return res.status(200).send({ msg: "Welcome to your API!" });
});

async function checkDatabaseConnection() {
  try {
    // Attempt to connect to the database
    console.log("Connecting to the database...");
    await db.$connect();
    console.log("Database connection successful!");
    console.log("Database working perfectly!");
    console.log("loading routers..");
    console.log("middlewares and routers compilation...");
    console.log("server working at ");
    console.log(`${PROTOCOL}://localhost:${PORT}`);
  } catch (error) {
    console.error("Database connection failed:");
  } finally {
    // Disconnect the Prisma Client
    await db.$disconnect();
  }
}

const MainApplication = http.createServer(app);

MainApplication.listen(PORT, async () => {
  console.log("Starting the server....");
  console.log("Database configuration...");
  try {
    await checkDatabaseConnection();
   
  } catch (err) {
    console.error("DATABASE ERROR! ");
    // console.log(err)
  }
});

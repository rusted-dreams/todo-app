import app from "./app";
import dotenv from "dotenv";
import pool, { testDBConnection } from "./db/connectDB";

dotenv.config();

const PORT = process.env.PORT || 3000;

//test db connection
testDBConnection();

app.listen(PORT, () => {
  console.log(`Server is up at http://localhost:${PORT}`);
});

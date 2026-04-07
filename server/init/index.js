if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/find-your-space";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Use a valid admin ID as owner
  const ownerId = "69cc27a49a404f62e9ed370a";

  const processedData = initData.data.map((obj) => ({
    ...obj,
    owner: ownerId,
  }));

  console.log(`Starting insertion of ${processedData.length} records...`);

  // Chunked insertion to avoid timeouts
  const chunkSize = 50;
  for (let i = 0; i < processedData.length; i += chunkSize) {
    const chunk = processedData.slice(i, i + chunkSize);
    await Listing.insertMany(chunk);
    console.log(`Inserted ${i + chunk.length} / ${processedData.length}`);
  }

  console.log("Data was successfully initialized");
};

initDB().catch((err) => {
  console.error("Initialization Error:", err);
});

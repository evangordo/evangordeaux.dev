const { default: mongoose } = require("mongoose");

const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
    console.log("connect to db");
  } catch (error) {
    console.log("failed to connect to mongo", error);
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occured"
    );
  }
};

import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error("Please define the MONGODB_URL environment variable inside .env");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

const dbConnect = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URL, {
        }).then((mongoose) => {
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

export default dbConnect;

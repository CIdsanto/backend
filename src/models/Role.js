import { model, Schema } from "mongoose";

const roleSchema = new Schema(
    {
    name: String,
    },
    {
        versionKey: false,
    }
);

// {name: "admin", _id: "abcsdefghijklmnop"}
// {name: "moderator", _id: "abcsdefghijklmnop"}

export default model("Role", roleSchema);

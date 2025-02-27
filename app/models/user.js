import mongoose, { Schema } from "mongoose";
import { createHmac, randomBytes } from "crypto";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(this.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

userSchema.static(
  "updateOneAndSave",
  async function (id, name, email, role, password) {
    const user = await this.findOne({ _id: id });
    if (!user) throw new Error("Invalid email or password");

    const salt = user.salt;
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    await User.updateOne({_id: id}, {$set: {name: name,email: email, salt: salt, role: role, password: hashedPassword }})

    return true;
  }
);

userSchema.static("matchPassword", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProvidedHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (hashedPassword !== userProvidedHash)
    throw new Error("Invalid email or password");

  return true;
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);

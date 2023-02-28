const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "departments",
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const employeeModel = mongoose.model("employees", employeeSchema);
module.exports = employeeModel;

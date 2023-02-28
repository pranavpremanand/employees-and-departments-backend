const mongoose = require("mongoose");
const departmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const departmentModel = mongoose.model("departments", departmentSchema);
module.exports = departmentModel;

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookID: { type: Number, required: true },
    title: { type: String, required: true },
    authors: { type: [String], default: [] },
    average_rating: { type: Number, default: 0 },
    isbn: { type: Number },
    isbn13: { type: String },
    language_code: { type: String, default: "eng" },
    num_pages: { type: Number, default: 0 },
    ratings_count: { type: Number, default: 0 },
    text_reviews_count: { type: Number, default: 0 },
    publication_date: { type: String }, 
    publisher: { type: String },
  },
  { timestamps: true }
);


bookSchema.pre("save", function (next) {
  if (typeof this.authors === "string") {
    this.authors = this.authors.split("/").map((a) => a.trim());
  }
  next();
});

//  Export the model
export default mongoose.model("kadhals", bookSchema);

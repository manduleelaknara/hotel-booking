import { v2 as cloudinary } from "cloudinary";

// Direct config - no env
cloudinary.config({
  cloud_name: "don8yfd7k",
  api_key: "897161227238815",
  api_secret: "WVUVNMUe4NiBJmrL7RNsMJ7uPeY"
});

cloudinary.uploader
  .upload(
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg",
    { folder: "test" }
  )
  .then((r) => console.log("SUCCESS:", r.secure_url))
  .catch((e) => console.log("FAILED:", e.message, "HTTP:", e.http_code));

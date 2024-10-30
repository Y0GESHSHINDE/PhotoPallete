import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage,db, auth } from "../../Firebase/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Upload({ user }) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    console.log(user.uid)

    if (!image) {
      setError("Please select an image.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const imageRef = ref(storage, `images/${user.uid}/${image.name}`);

      await uploadBytes(imageRef, image);

      const downloadURL = await getDownloadURL(imageRef);

      const imagesCollectionRef = collection(db, "users", user.uid, "images");
      await addDoc(imagesCollectionRef, {
        url: downloadURL,
        timestamp: serverTimestamp(),
      });

      setError("Image uploaded and saved ");
      setLoading(false);
    } catch (err) {
      setError(`Error uploading image: ${err.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="container-flex mt-5">
      <div className="row">
        <div className="col">
          <div className="row d-flex justify-content-center">
            <div className="card col-10 col-sm-8 col-md-6 col-xl-4">
              <div className="card-body">
                <form onSubmit={uploadImage}>
                  <h3 className="text-center">Upload Photo</h3>
                  <p className="text-danger text-center">{error}</p>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <input
                    type="submit"
                    className="btn btn-dark mt-3 text-center form-control"
                    value={loading ? "Uploading..." : "Upload"}
                    disabled={loading}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;

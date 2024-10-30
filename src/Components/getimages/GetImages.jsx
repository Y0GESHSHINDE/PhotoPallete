import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase/Firebase";
import { collection, query, onSnapshot, Timestamp } from "firebase/firestore";

function GetImages() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const user = auth.currentUser;
  useEffect(() => {
    const imagesCollectionRef = collection(db, "users", user.uid, "images");
    const imagesQuery = query(imagesCollectionRef);

    const unsubscribe = onSnapshot(imagesQuery,(snapshot) => {
        const fetchedImages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(fetchedImages);
      },
      (error) => {
        setError(`Error fetching images: ${error.message}`);
      }
    );

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="container mt-5">
      <h3 className="text-center">Uploaded Images</h3>
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="row d-flex justify-content-center">
        {images.length === 0 ? (
          <p className="text-center">No images uploaded yet.</p>
        ) : (
          images.map((image) => (
            <div key={image.id} className="col-10 col-sm-6 col-md-4 mb-4">
              <div className="card">
                <img
                  src={image.url}
                  alt="Uploaded"
                  className="card-img-top img-fluid"
                  style={{ height: "250px" }}
                />
                {/* <div className="card-body">
                  <p className="card-text text-center">{user.email}</p>
                </div> */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GetImages;

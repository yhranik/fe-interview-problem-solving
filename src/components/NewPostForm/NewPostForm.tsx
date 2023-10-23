import { useState } from "react";
import styles from "./NewPostForm.module.css";
import { createPost, Post } from "../../api/fakeBackend";

type Status = Post["status"];

type PostData = Omit<Post, "id">;

type FieldName = "title" | "status" | "description";

export const NewPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    status: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const addPost = async (postData: PostData) => {
    setLoading(true);

    try {
      console.log("submitting data");
      const response = await createPost(postData);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    addPost(formData);
  };

  const handleFieldChange = (e, fieldName: FieldName) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      {JSON.stringify(formData)}
      {loading && <div>Loading ...</div>}
      <div className={styles.row}>
        <label>title:</label>
        <input
          value={formData.title}
          onChange={(e) => handleFieldChange(e, "title")}
        />
      </div>
      <div className={styles.row}>
        <label>status:</label>
        <input
          value={formData.status}
          onChange={(e) => handleFieldChange(e, "status")}
        />
      </div>
      <div className={styles.row}>
        <label>description:</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleFieldChange(e, "description")}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

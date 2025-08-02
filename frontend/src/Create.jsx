import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Create = ({ url, token }) => {
  const [title, SetTitle] = useState("");
  const [tags, SetTags] = useState("");
  const [json, SetJson] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const timeRef = useRef(null);

  const autoSaveDraft = async () => {
    if (title && tags && json) {
      try {
        await axios.post(
          `${url}/session/my-sessions/save-draft`,
          { title, tags, json_file_url: json },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.info("Auto-saved as draft");
        navigate("/");
      } catch (err) {
        console.log("Auto-save failed");
      }
    }
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    if (timeRef.current) clearTimeout(timeRef.current);
    if (formSubmitted) return;
    timeRef.current = setTimeout(() => {
      autoSaveDraft();
    }, 5000);
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (timeRef.current) {
      clearTimeout(timeRef.current); 
    }
    setFormSubmitted(true);
    const action = e.nativeEvent.submitter.value;
    const endPoint = action === "publish" ? "/publish" : "/save-draft";
    try {
      const res = await axios.post(
        `${url}/session/my-sessions${endPoint}`,
        { title, tags, json_file_url: json },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(res.data.message);
      navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  if (!token) {
    return (
      <div className="text-center py-5">
        <h1>You must be logged in</h1>
        <Link to="/user" className="btn btn-outline-success px-4">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4 fw-bold">Create New Session</h3>

      <form
        className="p-4 border rounded shadow-sm bg-white"
        onSubmit={sendData}
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            required
            value={title}
            onChange={handleChange(SetTitle)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. yoga, meditation"
            required
            value={tags}
            onChange={handleChange(SetTags)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> JSON content</label>
          <input
            type="text"
            className="form-control"
            placeholder="Paste your JSON content"
            required
            value={json}
            onChange={handleChange(SetJson)}
          />
        </div>

        <div className="d-flex gap-3 mt-4">
          <button
            type="submit"
            name="action"
            value="draft"
            className="btn btn-secondary"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            name="action"
            value="publish"
            className="btn btn-primary"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

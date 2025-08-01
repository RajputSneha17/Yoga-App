import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = ({ url, token }) => {
  const [title, SetTitle] = useState("");
  const [tags, SetTags] = useState("");
  const [json, SetJson] = useState("");
  const navigate = useNavigate();

  const sendData = async (isPublish) => {
    const endPoint = isPublish ? "/publish" : "/save-draft";
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

  return (
    <div className="container mt-5">
      <h3 className="mb-4 fw-bold">Create New Session</h3>

      <form className="p-4 border rounded shadow-sm bg-white">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={(e) => SetTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. yoga, meditation"
            value={tags}
            onChange={(e) => SetTags(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">JSON File URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Paste your JSON URL"
            value={json}
            onChange={(e) => SetJson(e.target.value)}
          />
        </div>

        <div className="d-flex gap-3 mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => sendData(false)}
          >
            Save as Draft
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => sendData(true)}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

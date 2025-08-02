import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = ({url, token}) => {
    const navigate = useNavigate();
  const { state } = useLocation();
  const item = state?.draft;

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [json, setJson] = useState("");
  const [id, setId] = useState("");
  const [isPublish, setIsPublish] = useState(false);

  useEffect(() => {
    if (item) {
      setId(item._id || "");
      setTitle(item.title || "");
      setTags(item.tags || "");
      setJson(item.json_file_url || "");
    }
  }, [item]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const endPoint = isPublish ? "/publish" : "/save-draft";
    try {
      const res = await axios.post(
        `${url}/session/my-sessions${endPoint}`,
        { title, tags, json_file_url: json, id },
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
    <div className="container">
      <h2 className="fw-bold pt-4">Edit</h2>
      <form className="p-4 border rounded shadow-sm bg-white" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input
            type="text"
            className="form-control"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">JSON File URL</label>
          <input
            type="text"
            className="form-control"
            required
            value={json}
            onChange={(e) => setJson(e.target.value)}
          />
        </div>

        <div className="d-flex gap-3 mt-4">
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => setIsPublish(false)}
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setIsPublish(true)}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;

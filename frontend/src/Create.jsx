import React from "react";

const Create = () => {
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
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. yoga, meditation"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">JSON File URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Paste your JSON URL"
          />
        </div>

        <div className="d-flex gap-3 mt-4">
          <button type="button" className="btn btn-secondary">
            Save as Draft
          </button>
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

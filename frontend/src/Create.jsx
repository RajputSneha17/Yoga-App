import React from "react";

const Create = () => {
  return (
    <div className="modal show fade d-block" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow p-3">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">Create New Session</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form>
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
            </form>
          </div>

          <div className="modal-footer border-0">
            <button className="btn btn-secondary">Save as Draft</button>
            <button className="btn btn-primary">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

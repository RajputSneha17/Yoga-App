import axios from "axios";

const Draft = ({token}) => {
  

  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-semibold">Your Drafts</h3>

      <div className="row g-4">
        {drafts.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>

                <p className="mb-2">
                  <strong>Tags:</strong> {item.tags.join(", ")}
                </p>

                <p className="mb-2">
                  <strong>JSON File:</strong>{" "}
                  <a
                    href={item.json_file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.json_file_url}
                  </a>
                </p>

                <span
                  className={`badge ${
                    item.status === "draft" ? "bg-secondary" : "bg-success"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Draft;

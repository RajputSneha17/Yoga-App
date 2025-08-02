import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Draft = ({ token, url }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${url}/session/my-sessions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="container py-4">
      <h3 className="mb-4 fw-semibold">Your Drafts</h3>

      <div className="row g-4">
        {data.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>

                <p className="mb-2">
                  <strong>Tags:</strong> {item.tags}
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
                <button className="btn btn-outline-success px-4 ms-5">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Draft;

import axios from "axios";
import { useEffect, useState } from "react";

const Sessions = ({ url }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${url}/session/sessions`);
      setData(res.data); // ✅ Corrected
    } catch (err) {
      console.error("Failed to fetch sessions:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our All Sessions</h2>
      <div className="row justify-content-center gap-4">
        {data.map((item, index) => (
          <div key={index} className="col-md-3">
            <div className="card p-4 text-center">
              <h3>{item.title}</h3>
              <p className="bg-success text-white ">{item.tags}</p>
              <p>{item.json_file_url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sessions;

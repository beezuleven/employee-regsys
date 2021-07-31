import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import MoonLoader from "react-spinners/ClipLoader";

function EmployeeTable() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    axios
      .get("http://173.249.45.237:8081/hrs/employee")
      .then((resp) => {
        console.log(resp.data.list);
        setDatas(resp.data.list);
        console.log("data", datas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="text_center">
      {loading ? (
        <MoonLoader size={60} color={"black"} loading={loading} />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>

          {datas.map((data) => (
            <tbody>
              {}
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>
                  {" "}
                  <svg
                    style={{ height: "15px", width: "15px" }}
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>{" "}
                  {"  "}
                  <svg
                    style={{ height: "15px", width: "15px" }}
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                  {"  "}
                  <svg
                    style={{ height: "15px", width: "15px" }}
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
    </div>
  );
}

export default EmployeeTable;

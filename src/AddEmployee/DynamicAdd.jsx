import React, { useState } from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
function DynamicAdd() {
  const [inputList, setInputList] = useState([
    { boardName: "", institution: "", passedYear: "", percentage: "" },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { boardName: "", institution: "", passedYear: "", percentage: "" },
    ]);
  };

  return (
    <Container>
      <div className="App">
        <h3>Educational Details</h3>
        <Button onClick={handleAddClick}>Add</Button>

        <Table striped bordered>
          <thead>
            <tr>
              <th>Board</th>
              <th>Institution</th>
              <th>Passed Year</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
          </thead>

          {inputList.map((x, i) => {
            return (
              <tbody>
                <tr>
                  <td>
                    <input
                      name="boardName"
                      value={x.boardName}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className="ml10"
                      name="institution"
                      value={x.institution}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className="ml10"
                      name="passedYear"
                      value={x.passedYear}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className="ml10"
                      name="percentage"
                      value={x.percentage}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <svg
                      style={{ height: "15px", width: "15px" }}
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleRemoveClick}
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
            );
          })}
          <button onClick={() => console.log(inputList)}>Submit</button>
          {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
        </Table>
      </div>
    </Container>
  );
}

export default DynamicAdd;

import React, { useState } from "react";

function SortableTable() {
  const employees = [
    { name: "hareeshreddy", department: "HR", salary: 50000 },
    { name: "Suresh", department: "IT", salary: 60000 },
    { name: "Nagaraju sir", department: "Finance", salary: 55000 },
    { name: "Yaswanth", department: "IT", salary: 70000 },
  ];

  const [data, setData] = useState(employees);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Details</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("department")}>Department</th>
            <th onClick={() => handleSort("salary")}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRow : oddRow}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  width: "60%",
  borderCollapse: "collapse",
  border: "1px solid #ccc",
  cursor: "pointer",
};

const evenRow = {
  backgroundColor: "#f9f9f9",
  border: "1px solid #ccc",
  padding: "8px",
};

const oddRow = {
  backgroundColor: "#e6f0ff",
  border: "1px solid #ccc",
  padding: "8px",
};

export default SortableTable;

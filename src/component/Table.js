import React, { useState, useEffect } from 'react';

const Table = ({ users, toggle, del, idGet }) => {
  const [sortedUsers, setSortedUsers] = useState([...users]);
  const [sortDirection, setSortDirection] = useState({
    name: 'asc',
    position: 'asc',
    office: 'asc',
    experience: 'asc',
    startDate: 'asc',
    salary: 'asc',
  });

  // Use useEffect to update sortedUsers whenever users change
  useEffect(() => {
    setSortedUsers([...users]);
  }, [users]);

  const handleSort = (property) => {
    const direction = sortDirection[property] === 'asc' ? 'desc' : 'asc';

    const sorted = [...sortedUsers].sort((a, b) => {
      if (direction === 'asc') {
        return a[property].localeCompare(b[property]);
      } else {
        return b[property].localeCompare(a[property]);
      }
    });

    setSortedUsers(sorted);
    setSortDirection({ ...sortDirection, [property]: direction });
  };

  return (
    <div className='d-flex justify-content-center'>
      <table border={2}>
        <tr>
          <th>
            Name{' '}
            <span onClick={() => handleSort('name')}>
              {sortDirection.name === 'asc' ? '↑' : '↓'}
            </span>
          </th>
          <th>
            Position{' '}
            <span onClick={() => handleSort('position')}>
              {sortDirection.position === 'asc' ? '↑' : '↓'}
            </span>
          </th>
          <th>
            Office{' '}
            <span onClick={() => handleSort('office')}>
              {sortDirection.office === 'asc' ? '↑' : '↓'}
            </span>
          </th>
          <th>
            Experience{' '}
            <span onClick={() => handleSort('experience')}>
              {sortDirection.experience === 'asc' ? '↑' : '↓'}
            </span>
          </th>
          <th>
            Start Date{' '}
            <span onClick={() => handleSort('start_date')}>
              {sortDirection.startDate === 'asc' ? '↑' : '↓'}
            </span>
          </th>
          <th>
            Salary{' '}
            <span onClick={() => handleSort('salary')}>
              {sortDirection.salary === 'asc' ? '↑' : '↓'}
            </span>
          </th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {sortedUsers.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.position}</td>
              <td>{val.office}</td>
              <td>{val.experience}</td>
              <td>{val.start_date}</td>
              <td>{val.salary}</td>
              <td>
                <button className='btn btn-success' onClick={() => { idGet(val.id); toggle.handleToggle(val.id); }} disabled={toggle.toggle}>
                  Update
                </button>
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => { del(val.id); }}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;

import React, { useState, useEffect } from 'react';

function TimesheetList() {
  const [timesheets, setTimesheets] = useState([]);

  useEffect(() => {
    fetchTimesheets();
  }, []);

  const fetchTimesheets = async () => {
    try {
      const response = await fetch('/api/timesheets');
      if (response.ok) {
        const data = await response.json();
        setTimesheets(data);
      } else {
        console.error('Failed to fetch timesheets');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Timesheet Entries</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((timesheet) => (
            <tr key={timesheet._id}>
              <td>{timesheet.user}</td>
              <td>{new Date(timesheet.date).toLocaleDateString()}</td>
              <td>{timesheet.hours}</td>
              <td>{timesheet.category}</td>
              <td>{timesheet.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimesheetList;
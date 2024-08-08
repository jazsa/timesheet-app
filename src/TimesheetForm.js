import React, { useState } from 'react';

function TimesheetForm({ onTimesheetAdded }) {
  const [formData, setFormData] = useState({
    user: '',
    date: '',
    hours: '',
    category: 'normal',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/timesheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Timesheet entry added successfully!');
        setFormData({
          user: '',
          date: '',
          hours: '',
          category: 'normal',
          description: ''
        });
        onTimesheetAdded(); // Call this function to refresh the list
      } else {
        alert('Failed to add timesheet entry');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the timesheet entry');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Timesheet Entry</h2>
      <div>
        <label htmlFor="user">User:</label>
        <input
          type="text"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          id="hours"
          name="hours"
          value={formData.hours}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="normal">Normal</option>
          <option value="off-hours">Off-Hours</option>
          <option value="project">Project</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default TimesheetForm;
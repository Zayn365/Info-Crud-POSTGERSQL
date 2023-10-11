import React, { useContext } from 'react';
import { ContextValue } from '../Context';

const Form = () => {
  const x = useContext(ContextValue);
  const users = x.users;

  return (
    <div>
      <h1>Enter User</h1>
      <form onSubmit={users.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={users.userData.name}
            onChange={users.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={users.userData.position}
            onChange={users.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="office">Office</label>
          <input
            type="text"
            id="office"
            name="office"
            value={users.userData.office}
            onChange={users.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={users.userData.experience}
            onChange={users.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={users.userData.startDate}
            onChange={users.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={users.userData.salary}
            onChange={users.handleInputChange}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

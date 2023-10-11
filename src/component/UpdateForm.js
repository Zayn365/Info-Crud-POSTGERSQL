import React, { useContext } from 'react';
import { ContextValue } from '../Context';

const UpdateForm = ({toggle}) => {
  const x = useContext(ContextValue);
  const users = x.users;
console.log(users.updatedHandleSubmit)
  function handleSub (e) {
    toggle.handleToggle();
    users.handleUpdateSubmit(e, x.users.id);
}
  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSub}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={users.updatedUserData.name}
            onChange={users.handleUpdateInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={users.updatedUserData.position}
            onChange={users.handleUpdateInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="office">Office</label>
          <input
            type="text"
            id="office"
            name="office"
            value={users.updatedUserData.office}
            onChange={users.handleUpdateInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={users.updatedUserData.experience}
            onChange={users.handleUpdateInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            value={users.updatedUserData.startDate}
            onChange={users.handleUpdateInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={users.updatedUserData.salary}
            onChange={users.handleUpdateInputChange}
            required
          />
        </div>
        <br />
        <button type="submit"  className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;

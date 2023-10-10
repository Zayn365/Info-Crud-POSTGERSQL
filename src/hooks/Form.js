import { useState, useEffect } from "react";
import axios from "../utils/Axios"; 

const useUserData = () => {
  const [userData, setUserData] = useState({
    id: 1,
    name: "",
    position: "",
    office: "",
    experience: "",
    startDate: "",
    salary: "",
  });

  const [updatedUserData, setUpdatedUserData] = useState({
    id: 1,
    name: "",
    position: "",
    office: "",
    experience: "",
    startDate: "",
    salary: "",
  });

  const [id , setId] = useState();

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("/user"); 
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user", userData); 
      if (response.status === 201) {
        setUserList([...userList, response.data.record]);
        setUserData({
          id: 1,
          name: "",
          position: "",
          office: "",
          experience: "",
          startDate: "",
          salary: "",
        });
      } else {
        console.error("Error creating user:", response.status);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleId = (id) => {
     setId(id);
  }

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };
  const handleGetUser = (e) => {
    e.preventDefault();
  }
  const handleUpdateSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/user/${id}`, updatedUserData); 
      if (response.status === 200) {
        const updatedUser = response.data.record;
        const updatedList = userList.map((user) =>
          user.id === id ? updatedUser : user
        );
        setUserList(updatedList);
        setUpdatedUserData({
          id: 1,
          name: "",
          position: "",
          office: "",
          experience: "",
          startDate: "",
          salary: "",
        });
      } else {
        console.error("Error updating user:", response.status);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`/user/${userId}`); 
      if (response.status === 200) {
        const updatedList = userList.filter((user) => user.id !== userId);
        setUserList(updatedList);
      } else {
        console.error("Error deleting user:", response.status);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    
  };

  return [
    userData,
    updatedUserData,
    userList,
    handleGetUser,
    handleInputChange,
    handleSubmit,
    handleUpdateInputChange,
    handleUpdateSubmit,
    handleDelete,
    handleId,
    id,
  ];
};

export default useUserData;

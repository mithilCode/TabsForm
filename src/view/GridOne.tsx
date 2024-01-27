import React, { useEffect, useMemo, useState } from "react";
import Tabs from "./Tabs";
import { useDispatch, useSelector } from "react-redux";
import { addData, addUser, deleteUser } from "../redux/pageOne.slice";
import { RootState } from "../redux";

const GridOne = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state: RootState) => state.pageone.users);
  type MyFormValues = {
    firstName: string;
    email: string;
    mobileNumber: number;
    date: string;
    gender: string;
  };
  const initialValues: MyFormValues = {
    firstName: "",
    email: "",
    mobileNumber: Number(),
    date: "",
    gender: "",
  };
  const [users, setUsers] = useState<MyFormValues[]>(() => []);
  const handleAdd = () => {
    setUsers((prevUsers) => [...prevUsers, { ...initialValues }]);
    dispatch(addUser({ ...initialValues }));
  };
  const handleChange = (e: any, item: any, keyName: string, index: number) => {
    const updatedUser = { ...users[index], [keyName]: e.target.value };
    setUsers((prevUsers) =>
      prevUsers.map((user, i) => (i === index ? updatedUser : user))
    );
    dispatch(addData({ index, user: updatedUser }));
  };
  const handleDelete = (index: number) => {
    const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];
    setUsers(updatedUsers);
    dispatch(deleteUser(index));
  };

  useEffect(() => {
    if (dataList?.length > 0) {
      setUsers(dataList);
      console.log("Has Data1");
    } else {
      console.log("No Data");
    }
  }, [dataList]);
  return (
    <>
      <Tabs />
      <button onClick={handleAdd} className="add_btn">
        Add
      </button>
      {users?.map((item, index) => {
        return (
          <div className="input_set" key={index}>
            <input
              type="text"
              placeholder="First Name"
              value={item?.firstName}
              onChange={(e) => handleChange(e, item, "firstName", index)}
            />
            <input
              type="email"
              placeholder="Last Name"
              value={item?.email}
              onChange={(e) => handleChange(e, item, "email", index)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={item?.mobileNumber}
              onChange={(e) => handleChange(e, item, "mobileNumber", index)}
            />
            <input
              type="date"
              value={item?.date}
              onChange={(e) => handleChange(e, item, "date", index)}
            />
            <select
              id="gender"
              name="gender"
              value={item?.gender}
              onChange={(e) => handleChange(e, item, "gender", index)}
            >
              <option value="" defaultValue="" hidden>
                Select Here
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button className="delete_btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default GridOne;

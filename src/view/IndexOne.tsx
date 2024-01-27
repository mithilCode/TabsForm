import React, { useCallback, useEffect, useState } from "react";
import Tabs from "./Tabs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";
import { addUser } from "../redux/reducer";
interface MyFormValues {
  firstName: string;
  email: string;
  mobileNumber: number;
  gender: string;
}

const IndexOne: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const issueList = useSelector((state: RootState) => state.user.userData);
  useEffect(() => {
    setData(issueList);
  }, []);
  const initialValues: MyFormValues = {
    firstName: "",
    email: "",
    mobileNumber: Number(),
    gender: "",
  };
  const [data, setData] = useState(initialValues);
  const [users, setUsers] = useState<any[]>(() => []);
  const handelSubmit = (e: any) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, { ...data }]);
  };
  const handleChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  useEffect(() => {
    dispatch(addUser({ ...data }));
  }, [data]);
  console.log("users", users);
  return (
    <>
      <Tabs />
      <section className="content_section">
        <form className="form" onSubmit={handelSubmit}>
          <div className="form_control">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={data?.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form_control">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={data?.email}
              onChange={handleChange}
            />
          </div>
          <div className="form_control">
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={data?.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form_control">
            <select
              id="gender"
              name="gender"
              value={data?.gender}
              onChange={handleChange}
            >
              <option value="" selected hidden>
                Select Here
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
      </section>
    </>
  );
};

export default IndexOne;

import React from "react";
import AddNew from "../components/AddNew";
import "./css/AddForms.css";
import NameField from "../components/inputfields/NameField";
import EmailField from "../components/inputfields/EmailField";
import PhoneField from "../components/inputfields/PhoneField";
import DropdownField from "../components/inputfields/DropdownField";

const AddEmployee = () => {
  return (
    <>
      <AddNew />
      <section className="py-3">
        <div className="form-parent">
          <form className="addform">
            <div className="row">
              <NameField />
              <EmailField />
              <PhoneField />
              <DropdownField title={"Timezone"} />
              <DropdownField title={"Manager"} />
              <DropdownField title={"Position"} />
            </div>
            <button className="mybtn">Save</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddEmployee;

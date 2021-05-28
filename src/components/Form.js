import React from "react";
import { subjects } from "../constants/subjects";
import SuccessPopup from "../containers/popup/SuccessPopup";
export default function Form(props) {
  const [active, setActive] = React.useState(null);
  const [subject, setSubject] = React.useState(null);
  const [note, setNote] = React.useState("");
  const [dateError, setDateError] = React.useState("");
  const [formError, setFormError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const submit = () => {
    if (note.length >= 15 && subject !== null && dateError === "" && active) {
      setSuccess(true);
      setFormError("");
    } else {
      setSuccess(false);
      setFormError("Please Fill all the inputs");
    }
  };
  const handleChangeDate = (e) => {
    let date = e.target.value.toString();

    if (
      date === "2021-04-20" ||
      date === "2021-09-15" ||
      date === "2021-12-01"
    ) {
      setDateError("");
    } else {
      setDateError(
        "Your selected course and subject is not offered beginning from your selected date"
      );
    }
  };

  const onSelectChange = (event) => {
    let subject = event.target.value;
    setSubject(subject);
  };
  const noteChange = (e) => {
    console.log(e.target.value);
    setNote(e.target.value);
  };
  return (
    <div className="flex fdc aic jcc">
      {success && <SuccessPopup close={() => setSuccess(false)} />}
      <form className="flex fdc aic jcc" onSubmit={submit}>
        <div className="wb-100 flex fdc aic jcc">
          <h5>Course</h5>
          <div className="wb-100 flex fdr aic jcc">
            <label>
              <input
                type="radio"
                checked={active === 0}
                onClick={() => setActive(0)}
              />
              Technical Report Writing
            </label>
            <label>
              <input
                type="radio"
                checked={active === 1}
                onClick={() => setActive(1)}
              />
              English Literature{" "}
            </label>
            <label>
              <input
                type="radio"
                checked={active === 2}
                onClick={() => setActive(2)}
              />
              Computer Sciences
            </label>
          </div>
        </div>
        {active !== null && (
          <div className="wb-100 flex fdc aic jcc">
            <h5>Subjects</h5>
            <div className="wb-100 flex fdr aic jcc">
              <select onChange={onSelectChange}>
                {subjects[active].subjects.map((e, i) => {
                  return (
                    <option value={i} key={i}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        )}
        <h5>Date</h5>
        <input type="date" onChange={handleChangeDate} />
        {dateError !== "" && <p>{dateError}</p>}
        <h5>Notes</h5>

        <textarea
          onChange={noteChange}
          placeholder="Note here"
          maxLength={500}
          minLength={20}
        />
      </form>
      {formError !== "" && <p>{formError}</p>}

      <button onClick={submit}>Submit</button>
    </div>
  );
}

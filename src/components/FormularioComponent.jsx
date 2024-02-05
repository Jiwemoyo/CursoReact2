import { useRef } from "react";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
export const FormularioComponent = () => {
  const focusRef = useRef();
  console.log(focusRef)

  const initialForm = { userName: "", email: "", password: "" };
  const { formState, userName, email, password, onInputChange } =
    useForm(initialForm);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus()
  }, [])
  
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          User Name
        </label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your user name "
          value={userName}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={onInputChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

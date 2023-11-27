import { Formik, Field, Form } from "formik";
import { useAppDispatch } from "../slices";
import { createPost, updatePost } from "../slices/postsSlice";
import React from "react";
import { useNavigate } from "react-router-dom";

interface FormContainerProps {
  id?: string | undefined;
}

interface MyFormValues {
  title: string;
  body: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: MyFormValues = { title: "", body: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        id
          ? dispatch(updatePost({ ...values, id }))
          : dispatch(createPost(values));
        actions.setSubmitting(false);
        navigate("/posts");
      }}
    >
      <Form className="flex-col">
        <label className="mb-1" htmlFor="title">
          Title
        </label>
        <Field
          className="form-control mb-1"
          id="title"
          name="title"
          placeholder="Title"
        />
        <label className="mb-1" htmlFor="body">
          Body
        </label>
        <Field
          as="textarea"
          rows="7"
          cols="10"
          className="form-control mb-1"
          id="body"
          name="body"
          placeholder="Body"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormContainer;

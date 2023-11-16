import { useAppDispatch, useAppSelector } from "../slices";
import { useParams } from "react-router-dom";
import { selectors, updatePost } from "../slices/postsSlice";
import Main from "../layouts/Main";
import { Formik, Form, Field } from "formik";

const Post = () => {
  const { id } = useParams();

  const post = useAppSelector((state) => selectors.selectById(state, id));

  interface MyFormValues {
    title: string;
    body: string;
    id: string;
  }

  const dispatch = useAppDispatch();
  const initialValues: MyFormValues = { title: "", body: "", id: "" };

  return (
    <Main>
      <div className="post-card">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <div>
        <h2>Edit post</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            values.id = id;
            const data = JSON.stringify(values);
            dispatch(updatePost(data));
            actions.setSubmitting(false);
          }}
        >
          <Form className="form flex-col">
            <label className="mb-1" htmlFor="title">
              Title
            </label>
            <Field
              className="mb-1"
              id="title"
              name="title"
              placeholder="Title"
            />
            <label className="mb-1" htmlFor="body">
              Body
            </label>
            <Field className="mb-1" id="body" name="body" placeholder="Body" />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </Main>
  );
};

export default Post;

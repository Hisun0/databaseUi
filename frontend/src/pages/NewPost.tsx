import FormContainer from "../components/FormContainer";
import Main from "../layouts/Main";
import PageHeader from "../layouts/PageHeader";

const NewPost = () => (
  <Main>
    <PageHeader>
      <h1>Create post</h1>
    </PageHeader>
    <div className="card">
      <FormContainer />
    </div>
  </Main>
);

export default NewPost;

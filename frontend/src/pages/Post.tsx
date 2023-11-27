import { useAppSelector } from "../slices";
import { useParams } from "react-router-dom";
import Main from "../layouts/Main";
import FormContainer from "../components/FormContainer";
import { selectPostById } from "../slices/selectors";
import NotFound from "./NotFound";
import PageHeader from "../layouts/PageHeader";

const Post = () => {
  const { id } = useParams();

  const post = useAppSelector((state) => {
    if (!id) return;
    return selectPostById(state, id);
  });

  return (
    <>
      {post && id ? (
        <Main>
          <PageHeader>
            <h1>Edit post</h1>
          </PageHeader>
          <div className="card mb-1">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          <div className="card">
            <FormContainer id={id} />
          </div>
        </Main>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Post;

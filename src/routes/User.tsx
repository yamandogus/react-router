import { useLoaderData, useParams } from "react-router-dom";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

interface LoaderParams {
    userId: string;
  }

export async function loader({params}: {params : LoaderParams}){
    const {userId} = params;console.log('userId',userId);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);console.log('response',response);
    const data = (await response.json()) as Post;console.log('data',data);

    const postNotFound = !data.id;

  if (postNotFound) {
    throw new Response("", {
      status: 404,
      statusText: "Blog Post Not Found",
    });
  }
    return { post: data};
}
 type LoaderData = Awaited<ReturnType<typeof loader>>;

export default  function User() {console.log('boş');

    const { post } = useLoaderData() as LoaderData;console.log('post,post',post);
    const { userId} = useParams() as unknown as LoaderParams;console.log('userId',userId);
  return (
   <>
      <h1>Blog Post</h1>
      <p>BlogID: {userId}</p>
      <pre>{JSON.stringify(post)}</pre>
   </>
  )
}


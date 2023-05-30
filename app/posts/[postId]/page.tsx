import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {

  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id
  }))
}

export function generateMetadata( { params }: { params: { postId: string}}){
  
  const posts = getSortedPostsData();
  const { postId } = params

  const post = posts.find(post => post.id === postId)

  return {
    title: post.title,
  }
}

export default async function PostPage( { params }: { params: { postId: string}}){
  
  const posts = getSortedPostsData();
  const { postId } = params

  if (!posts.find(post => post.id === postId)){
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const formattedDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl dark:prose-invert  mx-auto">

      <h2 className="text-7xl mt-10 text-center">{title}</h2>

      <p className="text-center">Created Date: {formattedDate}</p>

      <article className="mt-20">
        <section dangerouslySetInnerHTML={{ __html:contentHtml }}/>
      
      </article>

    </main>
  )
}

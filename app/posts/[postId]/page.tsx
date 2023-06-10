import Link from "next/link"
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

  if (post) {
    
    return {
      title: post.title,
    }
  }
}

export default async function PostPage( { params }: { params: { postId: string}}){
  
  // Out post id for this page.
  const { postId } = params

  // Get all our post meta-data.
  const posts = getSortedPostsData();

  // Return a not found if we cannot find a post with the required id.
  if (!posts.find(post => post.id === postId)){
    return notFound()
  }

  // Get post content for the required post id.
  const { number, title, date, contentHtml } = await getPostData(postId);

  // Get the previous and next post meta-data based on the numbering.
  var previousPost = posts.find(post => post.number === number - 1 );
  
  var nextPost = posts.find(post => post.number === number + 1 );

  const formattedDate = getFormattedDate(date);

  return (
    <main className="p-10 prose prose-2xl dark:prose-invert mx-auto">

      <h2 className="text-7xl mt-10 text-center">{title}</h2>

      <p className="text-center">Created Date: {formattedDate}</p>

      <article className="mt-20">
        <section dangerouslySetInnerHTML={{ __html:contentHtml }}/>
      </article>

      <div className="flex flex-col md:flex-row gap-20 items-center justify-center">

      {
          previousPost && 
          <div className="flex flex-col ">
            <p className="text-center">Previous</p>
            <button className="bg-primaryContainer                        
                               text-xl font-bold rounded-2xl 
                               w-60 
                               transform hover:scale-125 transition-all duration-300 ease-in-out">
                  <Link href={`/posts/${previousPost.id}`} className="no-underline">
                      <p className="p-2 font-bold text-onPrimaryContainer">{previousPost.title}</p>
                  </Link>
            </button>
          </div>

        }

        {
          nextPost && 
          <div className="flex flex-col ">
            <p className="text-center">Next</p>
            <button className="bg-primaryContainer
                                text-xl font-bold rounded-2xl
                                w-60 
                                transform hover:scale-125 transition-all duration-300 ease-in-out">
                  <Link href={`/posts/${nextPost.id}`} className="no-underline">
                      <p className="p-2 font-bold text-onPrimaryContainer">{nextPost.title}</p>
                  </Link>
            </button>
          </div>

        }
      </div>
    </main>
  )
}

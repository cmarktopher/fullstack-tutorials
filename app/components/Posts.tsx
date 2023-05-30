import { getSortedPostsData } from "@/lib/posts"
import PostLinkCardItem from "./PostLinkCardItem";

export const Posts = () => {

    const posts = getSortedPostsData();

    return (
        <section className="mt-6 mx-auto ">

            <h2 className="text-6xl text-center font-bold dark:text-white/90">Express.js</h2>
            
            <ul className="mt-10 flex flex-col gap-10 sm:grid grid-cols-3 grid-rows-3 text-center">
                {posts.map(post => (
                    <PostLinkCardItem key={post.id} post={post}/>
                ))}
            </ul>

        </section>
    )
}

import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
  post: Post
}

export default function ListItem({ post }: Props) {

  const {id, title, number, date } = post
  const formattedDate = getFormattedDate(date);
  
  return (  
      <li className="text-2xl dark:text-white/90">

          <Link 
            className="hover:text-black/70 dark:hover:text-white"
            href={`/posts/${id}`}
          >
            <div className="flex flex-col dark:bg-onDarkSurfaceContainer p-5 rounded-3xl min-h-full hover:shadow-3xl transform hover:scale-110 transition-all duration-300">

              <p>{number}</p>

              <p className="p-5 text-2xl">{title}</p>

            </div>

          </Link>
    
      </li>
  )
}
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * Get all sorted data from a markdown file's meta-data.
 * @returns Sorted markdown meta-data data
 */
export function getSortedPostsData(){

    // Get the file names in the post directory
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostData = fileNames.map((fileName) => {

        // Remove .md from file name to get the actual name of the file and treat it an as id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown files as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Get meta-data via gray-matter
        const matterResult = matter(fileContents);
        
        const post: Post = {
            id,
            title: matterResult.data.title,
            number: matterResult.data.number,
            date: matterResult.data.date
        };

        return post;
    });

    // Sort the posts by the number
    return allPostData.sort((a, b) => a.number > b.number ? 1 : -1);
}

export async function getPostData(id: string) {

    // Get the file names in the post directory
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the post's content
    const matterResult = matter(fileContents);

    // Pass the data from matter into remark
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
        
    const contentHtml = processedContent.toString();

    const postWithHtml: Post & { contentHtml: string} = {
        id,
        title: matterResult.data.title,
        number: matterResult.data.number,
        date: matterResult.data.date,
        contentHtml
    }

    return postWithHtml;
}
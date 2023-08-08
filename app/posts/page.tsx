
import PostsData from "../data"
import Link from "next/link"

export default function Posts() {
	return (
		<ul>
			{
				PostsData.map(post => (
					<li key={post.id}>
						<Link href={`/post/${post.id}`}>{post.title}</Link>
					</li>
				))
			}
		</ul>
	)
}
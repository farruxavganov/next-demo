export default function Layout(props: {children: React.ReactNode, post: React.ReactNode, users: React.ReactNode}){
	console.log(props)
	return (
		<div className="posts">
			{props.children}
			{props.post}
			{props.users}
		</div>
	)
}
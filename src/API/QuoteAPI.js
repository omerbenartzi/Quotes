export async function getQuote() {
	return fetch("http://ec2-54-86-131-120.compute-1.amazonaws.com:5000/api/quote")
	.then(res => {
		console.log(res)
		return res.json()
	} )
	.then(res => {
		const q = {id: res.id, content: res.content, anime: res.anime, character: res.character};
		return q;
	})
}
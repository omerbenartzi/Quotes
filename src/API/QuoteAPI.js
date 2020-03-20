import data from './data.json';

export async function getQuote() {
	return fetch("https://warm-mesa-82751.herokuapp.com/api/quotes").then(res =>  res.json()).then(res => {
		const q = {id: res.id, content: res.quo, anime: res.anime, character: res.character};
		console.log(q);
		return q;
	})
}
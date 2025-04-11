
onmessage = async (e) => {
	try {
		const res = await fetch(e.data);
        const data = await res.json()
        postMessage(data);

	} catch (error) {
		console.log(error);
	}
};

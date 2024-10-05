export async function onSubmit(formData: FormData) {
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");
	const res = await fetch("/api/v1/messages", {
		method: "POST",
		body: JSON.stringify({ name, email, message }),
	});
	const final = await res.json();
	console.log(final);
}

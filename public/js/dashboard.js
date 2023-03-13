//add new post
async function newPostHandler(event) {
    event.preventDefault();
    const postTitle = document.querySelector('#postTitle').value;
    const postInput = document.querySelector('#postInput').value;
    const userId = event.target.dataset.id;

    const response = await fetch(`/api/posts/${userId}`, {
        method: 'POST',
        body: JSON.stringify({
            postTitle,
            postInput,
            userId
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to add post');
    }
}

document.querySelector('#submitForm').addEventListener('submit', newPostHandler);
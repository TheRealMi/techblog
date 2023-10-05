const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect comment from form
    const comment = document.querySelector('#comment').value;

    if (comment) {
        // Send POST request to API endpoint
        const response = await fetch('/api/comments/',{
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
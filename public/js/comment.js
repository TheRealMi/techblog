const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect comment from form
    const comment = document.querySelector('#comment').value;
    // Get corresponding blog id from form
    const blog_id = event.target.getAttribute('data-id');
    if (comment) {
        // Send POST request to API endpoint
        const response = await fetch('/api/comments/',{
            method: 'POST',
            body: JSON.stringify({ comment, blog_id }),
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
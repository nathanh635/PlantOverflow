

  const newCommentHandler = async (event) => {
   
      const id = window.location.pathname.slice(6);
    event.preventDefault();
  
    const text = document.querySelector('#comment').value.trim();
    if (text) {
  
      const response = await fetch(`/post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ text, id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }};

    const upvoteHandler = async (event) => {
      event.preventDefault();
      if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const green_thumb_counter = event.target.getAttribute('data-upvotes');

        const response = await fetch(`/post/${id}`, {
          method: 'GET',
          body: JSON.stringify({ text, id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        let u = 0;
        for (let i = 0; i< userarray.length; i++) {
          if (userarray[i] = _________) {
            u++

          }
        }
        if (u>0) {
          green_thumb_counter --;
        } else {
          green_thumb_counter ++;
        }
          const upvotes = await fetch(`/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ green_thumb_counter }),
            headers: {
              'Content-Type': 'application/json',
            },
        })
   
    };
  
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to upvote');
      }
    }};

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

  document
  .querySelector('thumbup')
  .addEventListener('submit', upvoteHandler);
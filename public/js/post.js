

  const newCommentHandler = async (event) => {
    event.preventDefault();
    const id = window.location.pathname.slice(6);

  
    const response = document.querySelector('.form-input').value.trim();

    if (response) {
  
      const res = await fetch(`/post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ response }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }};

    //------------------------------------------

    const upvoteHandler = async (event) => {
      event.preventDefault();
      //event.stopPropagation;
      if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        let green_thumb_counter = event.target.getAttribute('data-upvotes');
        let commenter_id = event.target.getAttribute('data-commenter');
        let post_id = window.location.pathname.slice(6);


        async function getdata() {

        const response = await fetch(`/api/posts/upvote/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
    
        });
        let result = response;
        console.log(result.status);


        if (result.status === 418) {
          return;
        } else {
          green_thumb_counter ++;
          const upvotes = await fetch(`/api/posts/upvote/${id}`, {
            method: 'POST',
            body: JSON.stringify({ post_id }),
            headers: {
              'Content-Type': 'application/json',
            },
        })

        const upvoted_comment = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ green_thumb_counter, commenter_id }),
          headers: {
            'Content-Type': 'application/json',
          },
      })
      console.log("AAAARGH");
      
      }

}
getdata();
 
 
      // if (data) {
      //   document.location.replace(`/post/${id}`);
      // } else {
      //   alert('Failed to upvote');
      // }
    }};

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

  document
  .querySelectorAll('#thumbup').forEach(item => {
    item.addEventListener('click', upvoteHandler)
  })  ;

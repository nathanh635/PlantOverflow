

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

    //------------------------------------------

    const upvoteHandler = async (event) => {
      event.preventDefault();
      if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const green_thumb_counter = event.target.getAttribute('data-upvotes');

        const response = await fetch(`/upvote/${id}`, {
          method: 'GET',
          body: JSON.stringify({ id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response=1) {
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
    };

    //---------------------

    function handleSubmit (event) {

      // Stop the form from reloading the page
      event.preventDefault();
    
      // If there's no file, do nothing
      if (!file.value.length) return;
    
      // Create a new FileReader() object
      let reader = new FileReader();
    
      // Setup the callback event to run when the file is read
      reader.onload = logFile;
    
      // Read the file
      reader.readAsDataURL(file.files[0]);

      let app = document.querySelector('#app');
    
      /**
 * Log the uploaded file to the console
 The file loaded event
 */

function logFile (event) {
	let str = event.target.result;
	let img = document.createElement('img');
	img.src = str;
	app.append(img);
	console.log(str);
}
    }

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

  document
  .querySelector('thumbup')
  .addEventListener('submit', upvoteHandler);

  document
  .querySelector('#upload')
  .addEventListener('click', handleSubmit);
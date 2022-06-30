const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-description').value.trim();
  const species = document.querySelector('#post-species').value.trim();
  const image_path = document.querySelector('#image').value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description, species, image_path }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
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
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

  
  document
  .querySelector('#upload')
  .addEventListener('click', handleSubmit);

import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // fetch is a default JS function for sending HTTP requests.
    fetch('https://react-getting-started-48dec-default-rtdb.firebacseio.com/meetups.json', {
      // default is 'GET'
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      
    }).catch(err => {
      console.error(err)
      // Using push would navigate the user and also allow them to use th back button
      // to return to current page. This is not what we want in this case, so we use
      // replace. If user presses back now, they will be returned to page before submitted form.
      // history.push()

      history.replace('/')
    });
  }
  return (<section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>)
}

export default NewMeetupPage;

import { useEffect, useState  } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = {
  m1: {
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetup Street 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  m2: {
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetup Street 5, 12345 Meetup City',
    description:
      'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
};

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-getting-started-48dec-default-rtdb.firebacseio.com/meetups.json')
      .then(() => {})
      .catch(() => {
        const data = DUMMY_DATA;
        // This logic should be in 'then', but not using valid api so lives in 'catch'.
        const meetups = [];

        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key]
          });
        }
        setIsLoading(false)
        setLoadedMeetups(meetups)
      });
      // second arg is dependencies for rerunning func. Empty array means only execute on init.
  }, [])

  if(isLoading) {
    return <section><p>Loading...</p></section>
  }

  return (<section>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups}/>
  </section>)
}

export default AllMeetupsPage;
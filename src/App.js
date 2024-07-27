import SuprSendInbox from '@suprsend/react-inbox'
import App from './App.css'
import 'react-toastify/dist/ReactToastify.css'


function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

const theme = {
  bell: { color: 'white' },
  badge: { backgroundColor: 'red' },
  notification: {
    container: { 
      readBackgroundColor: 'black',
      hoverBackgroundColor: '#dad3d300'
     },
     headerText: { color: 'white' }
  }
};
export default function MyApp() {
  return (
    <div className='header'>

      <div className='hi'>
        <SuprSendInbox
          theme={theme}
          themeType="dark"
          workspaceKey={process.env.REACT_APP_WORKSPACE_KEY}
          subscriberId={process.env.REACT_APP_SUBSCRIBER_ID}
          distinctId={process.env.REACT_APP_DISTINCT_ID}
        />
      </div>
      <h1>Welcome to my app</h1>
      <MyButton/>
    </div>
  );
}


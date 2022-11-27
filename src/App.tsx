import { useState } from "react";
import {Tweet} from "./components/Tweet";
import { AppRoutes } from "./Routes";
import Button  from "react-bootstrap/Button";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [tweets,setTweets] = useState<string[]>([
      'Tweet 1',
      'Tweet 2',
      'Tweet 3',
      'Tweet 4' 
    ]);
  function newTweet(){
    setTweets([...tweets,'Tweet 5']);
  }
  return (
    <>
      <Tweet text="sarakura"/>
      {tweets.map(tweet => {
        return(
          <Tweet text={tweet}/>
          )
        })
        
      }
      <Button variant="outline-dark" onClick={newTweet}>Click</Button>
      <AppRoutes/>
    </>
  )
}

export default App;

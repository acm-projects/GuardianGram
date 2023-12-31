
// importing in neccesary ionic componenets in orrder to build tabs.jsx
// the file creates the visuals and routing for the nav bar
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, navigate, calendar, people, person, person, settings, chatbubbleEllipsesOutline, camera} from 'ionicons/icons';

// importing in function calls from tab pages 
import Home from './Button';
import Map from './Map';
import Settings from './Settings';
import Calendar from './Calendar';
import Feed from "./Feed";
import Camera from "./camera";
import Comments from "./Comments";;
import Profile from "./Profile";

const Tabs = () => {
  return (

    // setting up routing for each tab when user clicks 
    // setting tab bar to bottom of the page
    // setting style of icons to white and icons to ionic ones

    // tab1: home
    // tab2: map
    // tab3: friends feed
    // tab4: calendar/user memories
    // tab5: user settings

    <IonTabs>
        
        <IonRouterOutlet>
            <Route path="/tabs/home" render={() => <Home />} exact={true} />
            <Route path="/tabs/map" render={() => <Map/>} exact={true} />
            <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
            <Route path="/tabs/camera" render={() => <Camera />} exact={true} />
            <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
            <Route path="/tabs/feed" render={() => <Feed />} exact={true} />
            <Route path="/tabs/comments" render={() => <Comments />} exact={true} />
            <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
            <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
        </IonRouterOutlet>


        <IonTabBar slot="bottom" className='border-t bg-black'>

            <IonTabButton tab="tab1" href="/tabs/home" className = 'bg-black' style = {{border: '1px solid rgba(0, 0, 0, 50)'}}>
                <IonIcon style={{ color: 'white' }} icon={home} />
            </IonTabButton>

            <IonTabButton tab = "tab2" href="/tabs/map" className = 'bg-black' style = {{border: '1px solid rgba(0, 0, 0, 50)'}}>
                <IonIcon style={{ color: 'white' }} icon={navigate} />
            </IonTabButton>

            <IonTabButton tab="tab3" href="/tabs/feed" className = 'bg-black' style = {{border: '1px solid rgba(0, 0, 0, 50)'}}>
                <IonIcon style={{ color: 'white' }} icon={people} />
            </IonTabButton>

            <IonTabButton tab="tab4" href="/tabs/camera" className = 'bg-black' style = {{border: '1px solid rgba(0, 0, 0, 50)'}}> 
                <IonIcon style={{ color: 'white' }} icon={camera} />
            </IonTabButton>

            <IonTabButton tab="tab5" href="/tabs/profile" className = 'bg-black' style = {{border: '1px solid rgba(0, 0, 0, 50)'}}>
                <IonIcon style={{ color: 'white' }} icon={person} />
            </IonTabButton>

            {/* <IonTabButton tab="tab6" href="/tabs/settings" className = 'bg-black' style = {{border: '1px solid rgba(0, 0, 0, 50)'}}>
                <IonIcon style={{ color: 'white' }} icon={settings} />
            </IonTabButton> */}

        </IonTabBar>


    </IonTabs>



  );
};

// exporting the page in var tabs
export default Tabs;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import {  } from '@ionic/react';
import './AboutMe.css';


const AboutMe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AboutMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonItem>
      <IonList>
      <div className="list-item">Company Name: HomeFixit</div>
            <div className="list-item">Contact Number 1800-HomeFixit</div>
            <div className="list-item">Location: Chicago, IL</div>

      </IonList>
      </IonItem>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">AboutMe</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="AboutMe page" />
      </IonContent>
    </IonPage>
    
  );
};



export default AboutMe;

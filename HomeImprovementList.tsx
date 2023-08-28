import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { addCircleOutline, navigateCircleOutline } from 'ionicons/icons';
import './HomeImprovementList.css';


const HomeImprovementList: React.FC = () => {
  const [homeImprovementItems, setHomeImprovementItems] = useState([
    { name: 'Stain the dining room table' },
    { name: 'Fix leaky bathroom faucet' },
    { name: 'Change lightbulbs in dining room' },
    { name: 'Build a retaining wall for garden' },
    { name: 'Harvest the garden today' },
  ]);

  const listContainerStyle = {
    backgroundColor: 'lightblue', // Set your desired background color here
    padding: '10px', // Add some padding for spacing
  };
  // Add a home improvement item
  <div style={listContainerStyle}>
  <ul>
    {homeImprovementItems.map((item, index) => (
      <li key={index}>{item.name}</li>
    ))}
  </ul>
</div>
  const addItem = () => {
    const newItem = { name: 'New Home Improvement Task' };
    setHomeImprovementItems([...homeImprovementItems, newItem]);
  };

  // Remove a home improvement item
  const removeItem = (indexToRemove: number) => {
    const updatedItems = homeImprovementItems.filter((_, index) => index !== indexToRemove);
    setHomeImprovementItems(updatedItems);
  };

  // Update a home improvement item
  const updateItem = (indexToUpdate: number, newName: string) => {
    const updatedItems = [...homeImprovementItems];
    updatedItems[indexToUpdate].name = newName;
    setHomeImprovementItems(updatedItems);
  };

  // Geolocation function (you can customize this as needed)
  const getCurrentLocation = () => {
    // Implement geolocation functionality here
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Improvement List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home Improvement List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {homeImprovementItems.map((item, index) => (
            <IonItemSliding key={index}>
              <IonItem>
                <IonLabel>{item.name}</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={() => removeItem(index)}>
                  Remove
                </IonItemOption>
                <IonItemOption onClick={() => {
                  const newName = prompt('Enter the new name for the task:');
                  if (newName !== null && newName !== '') {
                    updateItem(index, newName);
                  }
                }}>
                  Update
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonFab slot="fixed" horizontal="center" vertical="center">
          <IonFabButton onClick={addItem}>
            <IonIcon icon={addCircleOutline} />
          </IonFabButton>
        </IonFab>

        {/* Geolocation Button (customize the function as needed) */}
        <IonFab slot="fixed" horizontal="end" vertical="center">
          <IonFabButton onClick={getCurrentLocation}>
            <IonIcon icon={navigateCircleOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
    
  );
};

export default HomeImprovementList;

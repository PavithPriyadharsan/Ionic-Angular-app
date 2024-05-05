import { Component, OnInit } from '@angular/core';
import { IonTabBar, IonIcon, IonTabs, IonTabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, heartOutline, chatboxEllipsesOutline } from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon]
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({ homeOutline, personOutline, heartOutline, chatboxEllipsesOutline });
  }

  ngOnInit() {
  }

}

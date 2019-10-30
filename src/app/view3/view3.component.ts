import { Component, OnInit } from '@angular/core';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

@Component({
  selector: 'app-view3',
  template: `
   <paper-card heading="FlexBox" alt="Emmental" id="cssOutput">
      <div class="card-content">
        <div class="cssElement">
          <h5 style="text-align:center;">Waiting for flexbox</h5>
        </div>
      </div>
      <div class="card-actions" style="margin: 0px auto;display: inherit;">  
        <paper-icon-button ngDefaultControl icon="watch-later">reset</paper-icon-button>
      </div>
    </paper-card> 
  `,

  styles: [`
	:host{
          display: flex;
          flex-wrap: wrap;
          min-height: 100vh;
	        background-color: rgba(158, 158, 158, 0.2);;
          padding: 15px;
	}

    paper-card{
    height:300px;
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    display:table;  
    width:100%;

  }

  `]
})
export class View3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

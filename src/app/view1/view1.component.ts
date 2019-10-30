import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-button/paper-button.js';
@Component({
  selector: 'app-view1',
  styles: [`
  :host{
          display: flex;
          flex-wrap: wrap;
          min-height: 100vh;
          background-color: rgba(158, 158, 158, 0.2);;
          padding: 15px;
          align-content: flex-start;
  }

  paper-card{
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    display:table;  
    width:100%;
  }

      --paper-card-header-text{
      color:red;
      background-color: rgba(128, 128, 128, 0.6);
    }

  .card-content{
    display: flex;
    height: auto;
    min-height: 50px;
    align-items: center;  
    justify-content: center;
  }

  .targetElement{
    display: flex;
    height: 100px;
    width: 100px;
    background-color: rgba(128, 128, 128, 0.6);  
    border-radius: 5px
  }


   #cssOutput{
      margin-top: 14px;   
   }

    #BoxShadowPreview .card-actions{
      display:flex;
      flex-wrap: wrap;
    }

    #BoxShadowPreview .resetButton{
      width:100% !important;
    display: flex;
    justify-content: center;
        margin: 10px;      
    }

    #BoxShadowPreview .card-actions > *{
      width:50%;
    }

    #BoxShadowPreview .card-actions paper-slider{
      width:100%
    }

    .sectionTitle{
      text-align:center;
      display: flex;
      align-self: center;
    }

    .section{
        display: flex;
        justify-content: center;
    }

    .section paper-input{
        text-align: center;
        width: 17%;
        height: -24px;
        display: flex;
        align-self: center;
        top: -10px;
        position: relative;
        padding-left: 5px;
    }

    #BoxShadowPreview .card-content{
      height:200px !important; 
    }

    .resetButton paper-button{
      color: #fff;
      background-color: #dc7695;
    }

  `],  

  template: `
   <paper-card heading="Box-shadow" alt="Emmental" id="BoxShadowPreview">
      <div class="card-content">
        <div class="targetElement"></div>
      </div>
      <div class="card-actions">
        <div class="shadowAxis">
            <div class="section">
                <div class="sectionTitle">X-axis</div>
                <paper-input step="1"  type="number" ngDefaultControl (change)="changedX($event)" [value]="valueX"></paper-input>
            </div>
            <paper-slider id="valueX"
                          min="-225" max="255" pin ngDefaultControl 
                          [value]="valueX"
                          (immediate-value-change)="changedX($event)" (change)="changedX($event)">
                          </paper-slider>
            <div class="section">
                <div class="sectionTitle">Y-axis</div>
                <paper-input step="1"  type="number" ngDefaultControl (change)="changedY($event)" [value]="valueY"></paper-input>          
            </div>            
            <paper-slider id="valueY"
                          min="-225" max="255" pin ngDefaultControl 
                          [value]="valueY" 
                          (immediate-value-change)="changedY($event)" (change)="changedY($event)">
                          </paper-slider>        
        </div>
        <div class="shadowProperty">
            <div class="section">
                <div class="sectionTitle">Spred</div>
                <paper-input step="1" pattern="[1-5]" autoValidate="true" error-message="wrong"  type="number" ngDefaultControl (change)="changedSpred($event)" [value]="valueSpred"></paper-input>            
            </div>             
            <paper-slider id="valueSpred" 
                          min="-225" max="255" pin ngDefaultControl 
                          [value]="valueSpred"
                          (immediate-value-change)="changedSpred($event)" (change)="changedSpred($event)">
                          </paper-slider>        
            <div class="section">
                <div class="sectionTitle">Blur</div>
                <paper-input step="1"  type="number" ngDefaultControl (change)="changedBlur($event)" [value]="valueBlur"></paper-input>            
            </div>         
            <paper-slider id="valueBlur" 
                          min="-225" max="255" pin ngDefaultControl 
                          [value]="valueBlur"
                          (immediate-value-change)="changedBlur($event)" (change)="changedBlur($event)">
                          </paper-slider>          
        </div>
        <div class="resetButton">
            <paper-button raised class="indigo" ngDefaultControl (click)="resetValues()">reset</paper-button>

        </div>
      </div>
    </paper-card>

   <paper-card heading="CSS Output" alt="Emmental" id="cssOutput">
      <div class="card-content">
        <div class="cssElement">
          <span><b>box-shadow</b>:</span> <span> {{ valueX }}px</span> <span> {{ valueY }}px</span> <span> {{ valueBlur }}px</span> <span> {{ valueSpred }}px;</span>
        </div>
      </div>
      <div class="card-actions">            
      </div>
    </paper-card>    

  `
})

export class View1Component implements OnInit {
  public valueX = 0;
  public valueY = 2;
  public valueBlur = 10;
  public valueSpred = 10;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() { 
      this.el.nativeElement.querySelector(".targetElement").style.boxShadow = this.valueX + "px " + this.valueY + "px " + this.valueBlur + "px " + this.valueSpred + "px gray";
  }

  changedX(event){
    this.valueX = event.target.value;
    this.el.nativeElement.querySelector(".targetElement").style.boxShadow = this.valueX + "px " + this.valueY + "px " + this.valueBlur + "px " + this.valueSpred + "px gray";
    if(event.target.localName == "paper-slider"){
      this.valueX = event.target.immediateValue;
    }
  }

  changedY(event){
    this.valueY = event.target.value;
    this.el.nativeElement.querySelector(".targetElement").style.boxShadow = this.valueX + "px " + this.valueY + "px " + this.valueBlur + "px " + this.valueSpred + "px gray";
    if(event.target.localName == "paper-slider"){
      this.valueY = event.target.immediateValue;
    }    
  }

  changedBlur(event){
    this.valueBlur = event.target.value;
    this.el.nativeElement.querySelector(".targetElement").style.boxShadow = this.valueX + "px " + this.valueY + "px " + this.valueBlur + "px " + this.valueSpred + "px gray";
    if(event.target.localName == "paper-slider"){
      this.valueBlur = event.target.immediateValue;
    }    
  }

  changedSpred(event){
    this.valueSpred = event.target.value;
    this.el.nativeElement.querySelector(".targetElement").style.boxShadow = this.valueX + "px " + this.valueY + "px " + this.valueBlur + "px " + this.valueSpred + "px gray";
    if(event.target.localName == "paper-slider"){
      this.valueSpred = event.target.immediateValue;
    } 
  }

  resetValues(){
    this.valueX = 0;
    this.valueX = 2;
    this.valueBlur = 10;
    this.valueSpred = 10;
    this.el.nativeElement.querySelector(".targetElement").style.boxShadow = this.valueX + "px " + this.valueY + "px " + this.valueBlur + "px " + this.valueSpred + "px gray";
  }    

} 
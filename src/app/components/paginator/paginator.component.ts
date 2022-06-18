import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @ViewChild('prevBtn') prevBtn: ElementRef;
  @ViewChild('nextBtn') nextBtn: ElementRef;
  public currentPage: number = 1;
  public objectMapSurvey: any = [
    {
      tabName: 'Datos Personales',
      tabId: 'personal-data',
      isParent: true
    },
    {
      tabName: 'Inicio',
      tabId: 'perso-init',
      isParent: false
    },
    {
      tabName: 'TEST MINIMENTAL',
      tabId: 'minimental-test',
      isParent: false
    },
    {
      tabName: 'I. ASPECTOS DEMOGRÁFICOS',
      tabId: 'demographic-aspects',
      isParent: true
    },
    {
      tabName: 'Inicio',
      tabId: 'demographic-init-tab',
      isParent: false
    },
    {
      tabName: 'Condiciones Crónicas:',
      tabId: 'demographic-cronic-conditions-tab',
      isParent: false
    },
    {
      tabName: '19. HÀBITOS',
      tabId: 'habits-tab',
      isParent: false
    },
    {
      tabName: 'II. ACTIVIDAD FISICA',
      tabId: 'physical-activity',
      isParent: false
    },
    {
      tabName: 'III. ESPACIO DE VIDA',
      tabId: 'living-space',
      isParent: true
    },
    {
      tabName: 'Inicio',
      tabId: 'living-space-init-tab',
      isParent: false
    },
    {
      tabName: '22. ENTORNO CONSTRUIDO',
      tabId: 'enviroment-build-tab',
      isParent: false
    },
    {
      tabName: 'IV. MEDIDAS BASADAS EN LA EJECUCIÓN FÍSICA',
      tabId: 'physical-performance',
      isParent: false
    },
    {
      tabName: 'V. DISPOSITIVOS ELECTRÓNICOS',
      tabId: 'electronic-devices',
      isParent: false
    },
    {
      tabName: 'Consentimiento',
      tabId: 'agree',
      isParent: false
    }
  ];
  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      if(this.objectMapSurvey[this.currentPage].isParent){
        //this.renderer.selectRootElement(this.prevBtn.nativeElement).click();
      }
    }
  }
  nextPage() {
    if (this.currentPage < this.objectMapSurvey.length-1) {
      this.currentPage++;
      if(this.objectMapSurvey[this.currentPage].isParent){
        //this.renderer.selectRootElement(this.nextBtn.nativeElement).click();
      }
    }
  }
}

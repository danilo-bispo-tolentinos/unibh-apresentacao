import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheetStates } from 'ionic-custom-bottom-sheet';
import { FipeApiService } from 'src/services/fipeapi.service';
import { MyCarsService } from 'src/services/myCars.service';
import { PaymentService } from 'src/services/payment.service';
import { SchedullingService } from 'src/services/scheduling.service';
import { ServicesCleanService } from 'src/services/services-clean.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {

  formSchedulling: FormGroup;
  public BottomSheetState: SheetStates = SheetStates.Closed;
  public BottomSheetStateScheduling: SheetStates = SheetStates.Closed;
  public arrayVehicles;
  public arrayVehiclesName;
  public typeVehicle;
  constructor(
    private fipeService: FipeApiService,
    private formBuilder: FormBuilder,
    private myCarsService: MyCarsService,
    public servicesCleanService: ServicesCleanService,
    private schedullingService: SchedullingService,
    private paymentService: PaymentService,
  ) {
    this.formSchedulling = this.formBuilder.group({
      id: [null],
      schedulingDate: ['', [Validators.required]],
      idUser: [1, [Validators.required]],
      idVehicle: ['', [Validators.required]],
      idServicesClean: ['', [Validators.required]],
      typePayment: ['', [Validators.required]],
      status: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.loaderMyCars();
    this.loaderServicesClean();
    this.loadScheduling();
    this.loadAllPayment();
  }

  ngOnInit() { }

  listSchedulling;
  loadScheduling() {
    this.schedullingService.loadAllSchedulling(2).subscribe(r => {
      this.listSchedulling = r;
    }, err => {
      console.log(err);
    });
  }

  loaderBrandsCars() {
    this.fipeService.getBrandsCars().subscribe(
      result => {
        this.arrayVehicles = result;
      }, error => {

      }
    );
  }

  loaderBrandsMoto() {
    this.fipeService.getBrandsMotorcyclesFipe().subscribe(
      result => {
        this.arrayVehicles = result;
      }, error => {

      }
    );
  }

  listMyVehicles = [];
  loaderMyCars() {
    this.myCarsService.getAll(2).subscribe(r => {
      this.listMyVehicles = r;
    }, error => {
      this.listMyVehicles = null;
    });
  }

  listServicesClean = [];
  loaderServicesClean() {
    this.servicesCleanService.loadAllServices().subscribe(r => {
      this.listServicesClean = r;
      console.log(r);
    }, error => {
      this.listServicesClean = null;
    });
  }

  listPaymentAll = [];
  loadAllPayment() {
    this.paymentService.loadAll().subscribe(r => {
      this.listPaymentAll = r;
      console.log(r);
    }, error => {
      this.listPaymentAll = null;
    });
  }

  radioChange(event) {
    this.typeVehicle = event.value;
    if (event.value === 1) {
      this.loaderBrandsCars();
      this.arrayVehiclesName = null;
    } else if (event.value === 2) {
      this.loaderBrandsMoto();
      this.arrayVehiclesName = null;
    } else {
      this.arrayVehicles = null;
      this.arrayVehiclesName = null;
    }
  }

  selectedBrand(idBrand) {
    if (this.typeVehicle === 1) {
      this.fipeService.getNameCars(idBrand).subscribe(result => {
        this.arrayVehiclesName = result;
      }, error => {

      });
    } else if (this.typeVehicle === 2) {
      this.fipeService.getNameMotos(idBrand).subscribe(result => {
        this.arrayVehiclesName = result;
      }, error => {

      });
    } else {
      this.arrayVehiclesName = null;
    }
  }
  public OpenSheet() {
    this.BottomSheetState = SheetStates.Opened;
  }
  public OpenSheetScheduling() {
    this.BottomSheetStateScheduling = SheetStates.Opened;
  }

  public StateChanged(event) {

  }

  example = [
    '/assets/images/carousel/1.png'
  ]

  agendaentos = ['1', '1', '1', '1', '1', '1', '1',]

  createSchedulling() {
    let data = {
      schedulingDate: this.formSchedulling.controls.schedulingDate.value,
      idUser: 2,
      idVehicle: this.formSchedulling.controls.idVehicle.value,
      idServicesClean: this.formSchedulling.controls.idServicesClean.value,
      status: 2,
      typePayment: this.formSchedulling.controls.typePayment.value,
      idEmployee: null,
      description: this.formSchedulling.controls.description.value,
    };

    this.schedullingService.create(data).subscribe(r => {
      Swal.fire('Salvo com sucesso', '', 'success');
      this.loaderMyCars();
      this.BottomSheetStateScheduling = SheetStates.Closed;
      this.loadScheduling();
    }, error => {

    });
  }
}

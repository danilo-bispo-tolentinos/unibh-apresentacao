import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheetStates } from 'ionic-custom-bottom-sheet';
import { FipeApiService } from 'src/services/fipeapi.service';
import { MyCarsService } from 'src/services/myCars.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {

  formMyCarCreate: FormGroup;
  public BottomSheetState: SheetStates = SheetStates.Closed;
  public BottomSheetStateScheduling: SheetStates = SheetStates.Closed;
  public arrayVehicles;
  public arrayVehiclesName;
  public typeVehicle;
  constructor(
    private fipeService: FipeApiService,
    private formBuilder: FormBuilder,
    private myCarsService: MyCarsService
  ) {
    this.formMyCarCreate = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required]],
      typeVehicle: ['', [Validators.required]],
      nameBrand: ['', [Validators.required]],
      nameVehicle: ['', [Validators.required]],
      placaVehicle: ['', [Validators.required]],
      color: ['', [Validators.required]],
      isActive: [1, [Validators.required]],
      idUser: [2, [Validators.required]],
    });
    this.loaderMyCars();
  }

  ngOnInit() { }

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


  createVehicle() {
    let data = {
      name: this.formMyCarCreate.controls.name.value,
      typeVehicle: this.formMyCarCreate.controls.typeVehicle.value,
      brand: this.formMyCarCreate.controls.nameBrand.value,
      model: this.formMyCarCreate.controls.nameVehicle.value,
      placa: this.formMyCarCreate.controls.placaVehicle.value,
      color: this.formMyCarCreate.controls.color.value,
      isActive: this.formMyCarCreate.controls.isActive.value,
      idUser: this.formMyCarCreate.controls.idUser.value,
    };

    this.myCarsService.create(data).subscribe(r => {
      Swal.fire('Salvo com sucesso', '', 'success');
      this.loaderMyCars();
      this.BottomSheetState = SheetStates.Closed;
    }, error => {

    });
  }
}

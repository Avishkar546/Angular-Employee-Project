import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { error } from 'node:console';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoader:boolean = true;

  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res: APIResponseModel) => {
      this.designationList = res.data;
      this.isLoader = false;
    }, error => {
      alert("Network error");
    });
  }
}

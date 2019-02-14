import { Injectable } from '@angular/core';
import { VendorEntity } from './vendor-entity';

@Injectable({
  providedIn: 'root'
})
export class VendorEntityService {
  VendorEntities: VendorEntity[];
  constructor() { 
    let VendorEntityList = [
      {
        Id: "f146fa53-931c-4722-834b-02e9bca5912c",
        Name: "Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
        Address: "193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
        TaxCode: "0312484998",
        Owner: null,
        Phone: null,
        Email: "Milimetcon@mail",
        Website: null,
        BankAccount: null,
        Bank: null,
        BankBranch: null,
        IsLock: false,
        Approved: true
      },
      {
        Id: "eb12bf9e-ed79-4065-9401-22dd484db377",
        Name: "Công ty CP Bán lẻ Kỹ thuật Số FPT",
        Address: "Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
        TaxCode: "0311609355",
        Owner: "",
        Phone: "",
        Email: " frt.contact@fpt.com.vn",
        Website: "",
        BankAccount: "",
        Bank: "",
        BankBranch: "",
        IsLock: false,
        Approved: true
      },
      {
        Id: "1e98caa8-7d14-45b1-86bc-0a7515920a42",
        Name: "Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
        Address: "Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
        TaxCode: "0302566338",
        Owner: "Thiên Định",
        Phone: null,
        Email: "thiendinh@mail",
        Website: null,
        BankAccount: "0193847354",
        Bank: null,
        BankBranch: null,
        IsLock: false,
        Approved: true
      }
    ];
    
    this.VendorEntities = [
      new VendorEntity(VendorEntityList[0]),
      new VendorEntity(VendorEntityList[1]),
      new VendorEntity(VendorEntityList[2])
    ]
    console.log(this.VendorEntities[0]);
  }
}

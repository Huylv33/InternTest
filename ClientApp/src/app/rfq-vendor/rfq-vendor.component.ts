import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../User/user-entity';
import { UserEntityService } from '../User/user-entity.service';
import { OrganizationEntity } from '../Organization/organization-entity';
import { OrganizationUnitEntity } from '../OrganizationUnit/organization-unit-entity';
import { FileEntity } from '../FileUpload/file-entity';
import { RFQDetailEntity } from '../RFQDetail/rfqdetail-entity';
import { CategoryEntityService } from '../Category/category-entity.service';
import { VendorEntityService } from '../RFQVendor/vendor-entity.service';
import { RFQEntity } from '../RFQ/rfqentity';
import { RFQEntityService } from '../RFQ/rfqentity.service';
import { RFQMailCCEntity } from '../RFQMailCC/rfqmail-ccentity';
import { OrganizationEntityService } from '../Organization/organization-entity.service';
import { ToastrService } from 'ngx-toastr';
import { VendorEntity } from '../RFQVendor/vendor-entity';

@Component({
  selector: 'app-rfq-vendor',
  templateUrl: './rfq-vendor.component.html',
  styleUrls: ['./rfq-vendor.component.css']
})
export class RfqVendorComponent implements OnInit {
  NameNYC: string;
  RFQ: RFQEntity;
  Id: string = "e570d9b9-38ab-4571-939f-8ab21a56cde7";
  UserId: string;
  Number: number = 3346;
  Description: string = "Tạo báo giá ngày 12/3";
  ReceivedAddress: string = "Tòa nhà FPT, số 17 Duy Tân, phường Dịch Vọng Hậu";
  CreatedDate: string = "2018-03-12T14:21:27.583";
  HandlerId: string;
  SubRootCategoryId: string = "9c59fce0-7627-472c-bd37-f4689646fb84";
  OrganizationId: string;
  OrganizationUnitId: string;
  OrganizationEntity: OrganizationEntity;
  OrganizationUnitEntity: OrganizationUnitEntity;
  RFQDetailEntities: Array<RFQDetailEntity> = [];
  RFQMailCCEntities: Array<RFQMailCCEntity> = [];
  UserEntity: UserEntity;
  HandlerEntity: UserEntity;
  Note: any = null;
  Level: number = 3;
  Status: string = "RUNNING";
  Comment: any = null;
  Field: any = null;
  FileEntity: FileEntity = new FileEntity();
  QuotationByVendorEntities: any = null;
  PerchaseRequestEntities: any = null;
  VendorEntities: VendorEntity[] = [];
  //for ng-select 
  OrganizationList: Array<any>;
  OrganizationUnitList: Array<any>;
  CategoryList: Array<any>;
  VendorList: Array<any>;
  RFQMailCCList: Array<any>;
  isOkChangeBG: boolean = false;

  constructor(private UserEntityService: UserEntityService,
    private CategoryEntityService: CategoryEntityService,
    private VendorEntityService: VendorEntityService,
    private RFQEntityService: RFQEntityService,
    private OrganizationEntityService: OrganizationEntityService,
    private toastr: ToastrService) {
    this.FileEntity.Name = "huy";
    this.RFQ = this.RFQEntityService.RFQEntity;
    this.CategoryList = this.CategoryEntityService.CategoryEntities;
    this.VendorList = this.VendorEntityService.VendorEntities;
    this.NameNYC = this.RFQ.UserEntity.Display;
    this.HandlerEntity = this.RFQ.HandlerEntity;
    this.RFQDetailEntities = this.RFQ.RFQDetailEntities;
    this.OrganizationEntity = this.RFQ.OrganizationEntity;
    this.OrganizationUnitEntity = this.RFQ.OrganizationUnitEntity;
    this.OrganizationList = this.OrganizationEntityService.OrganizationEntities;
    this.OrganizationUnitList = [this.OrganizationUnitEntity];
    this.RFQMailCCList = this.RFQ.RFQMailCCEntities;
    this.RFQMailCCEntities = this.RFQ.RFQMailCCEntities;
  }
  onBlur(value: any) {
    console.log(value);
    if (value != null) {
      this.isOkChangeBG = true;
    }
  }
  onFocus() {
    document.getElementById("rfqnum").style.backgroundColor = "white";
  }
  addNewRow() {
    console.log(typeof this.RFQ.RFQDetailEntities);
    if (!this.RFQ.RFQDetailEntities.length && !this.VendorEntities.length) {
      this.toastr.warning("Bạn chưa chọn Nhà cung cấp");
    }
    else 
    this.RFQ.RFQDetailEntities.push(new RFQDetailEntity());
  }
  deleteRow(index: number) {
    this.RFQ.RFQDetailEntities.splice(index, 1);
    // this.toastr.success("Delete Successfully", "");
  }
  
  
  autoGrowTextarea(e: HTMLInputElement) {
    let scrollHeight = e.scrollHeight;
    e.style.height = scrollHeight.toString() + "px";
  }
  validateForm() {
    let message = '';
    if (!this.RFQ.Number) {
      message = "Số báo giá";
      this.toastr.warning(`Bạn chưa nhập ${message}`, '');
    }
    else if (!this.RFQ.Description) {
      message = "Mô tả báo giá";
      this.toastr.warning(`Bạn chưa nhập ${message}`, '');
    }
    else if (!this.RFQ.ReceivedAddress) {
      message = "Nơi nhận hàng";
      this.toastr.warning(`Bạn chưa nhập ${message}`, '');
    }
    else if (!this.RFQ.OrganizationEntity) {
      message = "Công ty";
      this.toastr.warning(`Bạn chưa chọn ${message}`, '');
    }
    else if (!this.RFQ.OrganizationUnitEntity) {
      message = "Phòng ban";
      this.toastr.warning(`Bạn chưa chọn ${message}`, '');
    }
    else if (!this.RFQ.HandlerEntity) {
      message = "Người xử lý";
      this.toastr.warning(`Bạn chưa nhập ${message}`, '');
    }
    else if (this.RFQ.RFQDetailEntities.length == 0) {
        message = "Sản phẩm";
        this.toastr.warning(`Bạn chưa chọn ${message}`, '');
    }
    else if (this.RFQ.RFQDetailEntities.length > 0) {
      let i = 0;
      for (let RFQDetailEntity of this.RFQ.RFQDetailEntities) {
        i++;
        if (!RFQDetailEntity.CategoryEntity) {
          message = "Nhóm sản phẩm";
          this.toastr.warning(`Bạn chưa chọn ${message} ở sản phẩm thứ ${i}`, '');
          break;
        }
        console.log(RFQDetailEntity.Description);
        if (!RFQDetailEntity.Description) {
          message = "Mô tả sản phẩm";
          this.toastr.warning(`Bạn chưa nhập ${message} ở sản phẩm thứ ${i}`, '');
          break;
        }
        if (!RFQDetailEntity.Quantity) {
          message = "Số lượng";
          this.toastr.warning(`Bạn chưa chọn ${message} ở sản phẩm thứ ${i}`, '');
          break;
        }
        if (!RFQDetailEntity.Unit) {
          message = "Đơn vị";
          this.toastr.warning(`Bạn chưa nhập ${message} ở sản phẩm thứ ${i}`, '');
          break;
        }
        if (!RFQDetailEntity.VendorEntities) {
          message = "Nhà cung cập";
          this.toastr.warning(`Bạn chưa chọn  ${message} ở sản phẩm thứ ${i}`, '');
          break;
        }
      }
      // this.RFQ.RFQDetailEntities.forEach(RFQDetailEntity => {
      //   i++;
      //   if (!RFQDetailEntity.CategoryEntity) {
      //     message = "Nhóm sản phẩm";
      //     this.toastr.warning(`Bạn chưa chọn ${message} ở sản phẩm thứ ${i}`, '');
      //     return false;
      //   }
      //   console.log(RFQDetailEntity.Description);
      //   if (!RFQDetailEntity.Description) {
      //     message = "Mô tả sản phẩm";
      //     this.toastr.warning(`Bạn chưa nhập ${message} ở sản phẩm thứ ${i}`, '');
      //     return false;
      //   }
      //   if (!RFQDetailEntity.Quantity) {
      //     message = "Số lượng";
      //     this.toastr.warning(`Bạn chưa chọn ${message} ở sản phẩm thứ ${i}`, '');
      //     return false;
      //   }
      //   if (!RFQDetailEntity.Unit) {
      //     message = "Đơn vị";
      //     this.toastr.warning(`Bạn chưa nhập ${message} ở sản phẩm thứ ${i}`, '');
      //     return false;
      //   }
      //   if (!RFQDetailEntity.VendorEntities) {
      //     message = "Nhà cung cập";
      //     this.toastr.warning(`Bạn chưa chọn  ${message} ở sản phẩm thứ ${i}`, '');
      //     return false;
      //   }
      // });
    }
    else if (this.RFQ.RFQMailCCEntities.length == 0) {
      message = "Mail CC";
      this.toastr.warning(`Bạn chưa chọn ${message}`, '');
    }
  }
  ngOnInit() {

  }
}

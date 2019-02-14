import { Injectable } from '@angular/core';
import { RFQEntity } from './rfqentity';

@Injectable({
  providedIn: 'root'
})
export class RFQEntityService {
  RFQEntity: RFQEntity;
  constructor() {
    let rfq = `{  
   "Id":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
   "Number":3346,
   "Description":"Tạo báo giá ngày 12/3",
   "ReceivedAddress":"Tòa nhà FPT, số 17 phố Duy Tân, phường Dịch Vọng Hậu",
   "OrganizationUnitId":"2903d4fe-76af-4ba5-aa1f-08b0e5f5bb7a",
   "OrganizationId":"3987e29e-14f9-4712-a6cb-b7f8a02dea2d",
   "UserId":"a803da3e-c318-4077-aa21-1d1178ef7543",
   "HandlerId":"f2e1f179-88ed-4bf6-9e6c-a5eea5ad80f3",
   "SubRootCategoryId":"9c59fce0-7627-472c-bd37-f4689646fb84",
   "CreatedDate":"2018-03-12T14:21:27.583",
   "OrganizationEntity":{  
      "Id":"3987e29e-14f9-4712-a6cb-b7f8a02dea2d",
      "Code":"FHO-HN",
      "Name":"FHO Hà Nội",
      "ParentId":"2d1bcd6d-921d-4e9b-afaa-98af2f7ccc34",
      "TaxCode":"0101248141",
      "Version":0,
      "IsDeleted":false,
      "OrganizationUnitEntities":null,
      "ADGroupEntities":null
   },
   "OrganizationUnitEntity":{  
      "Id":"2903d4fe-76af-4ba5-aa1f-08b0e5f5bb7a",
      "OrganizationId":"3987e29e-14f9-4712-a6cb-b7f8a02dea2d",
      "Code":"FIM",
      "Name":"Ban Công nghệ thông tin",
      "OrganizationEntity":null,
      "Version":0,
      "IsDeleted":false
   },
   "Note":null,
   "Level":3,
   "Status":"RUNNING",
   "Comment":null,
   "FileId":null,
   "UserEntity":{  
      "Id":"a803da3e-c318-4077-aa21-1d1178ef7543",
      "Display":"fim.test1",
      "Name":"fim.test1@fpt.com.vn",
      "ADGroupEntities":null,
      "RoleEntities":null,
      "Token":null,
      "Version":131656663051226656,
      "IsDeleted":false
   },
   "HandlerEntity":{  
      "Id":"f2e1f179-88ed-4bf6-9e6c-a5eea5ad80f3",
      "Display":"Anh Khong Thi Lan  (FIM HN)",
      "Name":"anhktl@fpt.com.vn",
      "ADGroupEntities":null,
      "RoleEntities":null,
      "Token":null,
      "Version":131654874717847550,
      "IsDeleted":false
   },
   "FileEntity":null,
   "QuotationByVendorEntities":{  

   },
   "PurchaseRequestEntities":null,
   "RFQDetailEntities":[  
      {  
         "Id":"1df65e6c-67ec-4a7e-9e3b-2c0c0d519580",
         "RFQId":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
         "CategoryId":"5a990522-56b4-4b1f-82a6-568685cd6f73",
         "SubRootCategoryId":null,
         "Description":"Cựu cục trưởng C50 Nguyễn Thanh Hoá bị cho rằng khi phát hiện đường dây đánh bạc qua mạng có quy mô hàng nghìn tỷ đã không kịp thời ngăn chặn.",
         "Quantity":10,
         "Unit":"cái",
         "Note":null,
         "NoteForVendor":"2018-04-06T17:00:00.000Z",
         "IsApproved":false,
         "Order":0,
         "RFQEntity":null,
         "CategoryEntity":{  
            "Id":"5a990522-56b4-4b1f-82a6-568685cd6f73",
            "Name":"Đồ diện tử dùng trong văn phòng khác (key, mouse, dây cáp mạng…)",
            "Description":null,
            "ExpertId":null,
            "ExpertEntity":null,
            "DateTime":null,
            "ParentCategoryId":"9c59fce0-7627-472c-bd37-f4689646fb84",
            "Level":0,
            "ParentCategoryEntities":null,
            "MasterContractEntities":null,
            "CategoryOrganizationEntity":null
         },
         "QuotationEntities":[  
            {  
               "Id":"e873584e-b229-4f8f-9390-366a3ac95c8e",
               "QuotationHeaderId":"ac22338a-3627-4c0d-8c18-27167fcfaa55",
               "RFQDetailId":"1df65e6c-67ec-4a7e-9e3b-2c0c0d519580",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
                  "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
                  "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
                  "TaxCode":"0312484998",
                  "Owner":null,
                  "Phone":null,
                  "Email":"Milimetcon@mail",
                  "Website":null,
                  "BankAccount":null,
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"0d36551a-5b43-4906-b060-a2904067524d",
               "QuotationHeaderId":"a083cb0d-dfbc-44cb-937a-d3b9a66f7536",
               "RFQDetailId":"1df65e6c-67ec-4a7e-9e3b-2c0c0d519580",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
                  "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
                  "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
                  "TaxCode":"0311609355",
                  "Owner":"",
                  "Phone":"",
                  "Email":" frt.contact@fpt.com.vn",
                  "Website":"",
                  "BankAccount":"",
                  "Bank":"",
                  "BankBranch":"",
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"7d76073a-6925-4deb-a8aa-ca7552f837bd",
               "QuotationHeaderId":"5297b12a-2e14-419c-8492-3b667b97e4fc",
               "RFQDetailId":"1df65e6c-67ec-4a7e-9e3b-2c0c0d519580",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
                  "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
                  "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
                  "TaxCode":"0302566338",
                  "Owner":"Thiên Định",
                  "Phone":null,
                  "Email":"thiendinh@mail",
                  "Website":null,
                  "BankAccount":"0193847354",
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            }
         ],
         "VendorEntities":[  
            {  
               "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
               "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
               "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
               "TaxCode":"0312484998",
               "Owner":null,
               "Phone":null,
               "Email":"Milimetcon@mail",
               "Website":null,
               "BankAccount":null,
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
               "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
               "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
               "TaxCode":"0311609355",
               "Owner":"",
               "Phone":"",
               "Email":" frt.contact@fpt.com.vn",
               "Website":"",
               "BankAccount":"",
               "Bank":"",
               "BankBranch":"",
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
               "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
               "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
               "TaxCode":"0302566338",
               "Owner":"Thiên Định",
               "Phone":null,
               "Email":"thiendinh@mail",
               "Website":null,
               "BankAccount":"0193847354",
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            }
         ]
      },
      {  
         "Id":"c0c732a4-8b3d-437f-839e-2cfdd375283a",
         "RFQId":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
         "CategoryId":"e5e02d0a-c825-46d1-92e4-4ae4abe5c596",
         "SubRootCategoryId":null,
         "Description":"Cách thứ hai là sử dụng tiền của ngân hàng nạp vào tài khoản ATM thông qua cổng thanh toán trực tuyến để mua tiền ảo và thẻ game.",
         "Quantity":15,
         "Unit":"cái",
         "Note":null,
         "NoteForVendor":"2018-04-06T17:00:00.000Z",
         "IsApproved":false,
         "Order":0,
         "RFQEntity":null,
         "CategoryEntity":{  
            "Id":"e5e02d0a-c825-46d1-92e4-4ae4abe5c596",
            "Name":"Máy scan",
            "Description":null,
            "ExpertId":null,
            "ExpertEntity":null,
            "DateTime":null,
            "ParentCategoryId":"9c59fce0-7627-472c-bd37-f4689646fb84",
            "Level":0,
            "ParentCategoryEntities":null,
            "MasterContractEntities":null,
            "CategoryOrganizationEntity":null
         },
         "QuotationEntities":[  
            {  
               "Id":"1f4ca7d6-4887-4b7f-9126-231499f8ca74",
               "QuotationHeaderId":"a083cb0d-dfbc-44cb-937a-d3b9a66f7536",
               "RFQDetailId":"c0c732a4-8b3d-437f-839e-2cfdd375283a",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
                  "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
                  "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
                  "TaxCode":"0311609355",
                  "Owner":"",
                  "Phone":"",
                  "Email":" frt.contact@fpt.com.vn",
                  "Website":"",
                  "BankAccount":"",
                  "Bank":"",
                  "BankBranch":"",
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"dc49eef9-5592-4dbf-ab07-b04ac2fc0ec1",
               "QuotationHeaderId":"ac22338a-3627-4c0d-8c18-27167fcfaa55",
               "RFQDetailId":"c0c732a4-8b3d-437f-839e-2cfdd375283a",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
                  "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
                  "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
                  "TaxCode":"0312484998",
                  "Owner":null,
                  "Phone":null,
                  "Email":"Milimetcon@mail",
                  "Website":null,
                  "BankAccount":null,
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"8fd17509-4bf9-4818-b9d2-c34e918b4ef3",
               "QuotationHeaderId":"5297b12a-2e14-419c-8492-3b667b97e4fc",
               "RFQDetailId":"c0c732a4-8b3d-437f-839e-2cfdd375283a",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
                  "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
                  "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
                  "TaxCode":"0302566338",
                  "Owner":"Thiên Định",
                  "Phone":null,
                  "Email":"thiendinh@mail",
                  "Website":null,
                  "BankAccount":"0193847354",
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            }
         ],
         "VendorEntities":[  
            {  
               "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
               "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
               "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
               "TaxCode":"0311609355",
               "Owner":"",
               "Phone":"",
               "Email":" frt.contact@fpt.com.vn",
               "Website":"",
               "BankAccount":"",
               "Bank":"",
               "BankBranch":"",
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
               "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
               "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
               "TaxCode":"0312484998",
               "Owner":null,
               "Phone":null,
               "Email":"Milimetcon@mail",
               "Website":null,
               "BankAccount":null,
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
               "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
               "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
               "TaxCode":"0302566338",
               "Owner":"Thiên Định",
               "Phone":null,
               "Email":"thiendinh@mail",
               "Website":null,
               "BankAccount":"0193847354",
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            }
         ]
      },
      {  
         "Id":"6d274e4b-75f2-4c12-9797-898317224ad2",
         "RFQId":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
         "CategoryId":"f7a27eae-3474-44f3-a677-6700b4c71f8f",
         "SubRootCategoryId":null,
         "Description":"Ông Hoá làm Cục trưởng C50 từ năm 2009, sau nhiều năm làm lãnh đạo ở Cục Cảnh sát điều tra tội phạm về kinh tế. Cuối năm 2017, ông bị đình chỉ chức vụ, tước danh hiệu Công an nhân dân vào ngày 11/3.",
         "Quantity":9,
         "Unit":"cái",
         "Note":null,
         "NoteForVendor":"2018-04-06T17:00:00.000Z",
         "IsApproved":false,
         "Order":0,
         "RFQEntity":null,
         "CategoryEntity":{  
            "Id":"f7a27eae-3474-44f3-a677-6700b4c71f8f",
            "Name":"Thiết bị âm thanh",
            "Description":null,
            "ExpertId":null,
            "ExpertEntity":null,
            "DateTime":null,
            "ParentCategoryId":"9c59fce0-7627-472c-bd37-f4689646fb84",
            "Level":0,
            "ParentCategoryEntities":null,
            "MasterContractEntities":null,
            "CategoryOrganizationEntity":null
         },
         "QuotationEntities":[  
            {  
               "Id":"e021764b-c322-487c-ad7e-4138d9b09ec7",
               "QuotationHeaderId":"a083cb0d-dfbc-44cb-937a-d3b9a66f7536",
               "RFQDetailId":"6d274e4b-75f2-4c12-9797-898317224ad2",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
                  "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
                  "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
                  "TaxCode":"0311609355",
                  "Owner":"",
                  "Phone":"",
                  "Email":" frt.contact@fpt.com.vn",
                  "Website":"",
                  "BankAccount":"",
                  "Bank":"",
                  "BankBranch":"",
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"7594c2a7-10bd-4d56-8374-b5d4162ce891",
               "QuotationHeaderId":"ac22338a-3627-4c0d-8c18-27167fcfaa55",
               "RFQDetailId":"6d274e4b-75f2-4c12-9797-898317224ad2",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
                  "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
                  "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
                  "TaxCode":"0312484998",
                  "Owner":null,
                  "Phone":null,
                  "Email":"Milimetcon@mail",
                  "Website":null,
                  "BankAccount":null,
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"58560e55-dfa4-47ce-8d96-be61df9c2542",
               "QuotationHeaderId":"5297b12a-2e14-419c-8492-3b667b97e4fc",
               "RFQDetailId":"6d274e4b-75f2-4c12-9797-898317224ad2",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
                  "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
                  "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
                  "TaxCode":"0302566338",
                  "Owner":"Thiên Định",
                  "Phone":null,
                  "Email":"thiendinh@mail",
                  "Website":null,
                  "BankAccount":"0193847354",
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            }
         ],
         "VendorEntities":[  
            {  
               "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
               "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
               "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
               "TaxCode":"0311609355",
               "Owner":"",
               "Phone":"",
               "Email":" frt.contact@fpt.com.vn",
               "Website":"",
               "BankAccount":"",
               "Bank":"",
               "BankBranch":"",
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
               "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
               "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
               "TaxCode":"0312484998",
               "Owner":null,
               "Phone":null,
               "Email":"Milimetcon@mail",
               "Website":null,
               "BankAccount":null,
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
               "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
               "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
               "TaxCode":"0302566338",
               "Owner":"Thiên Định",
               "Phone":null,
               "Email":"thiendinh@mail",
               "Website":null,
               "BankAccount":"0193847354",
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            }
         ]
      },
      {  
         "Id":"bfda40c9-04ec-4c4b-9d08-c30b77cee725",
         "RFQId":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
         "CategoryId":"57443432-4004-47c1-9ec6-aab5bcc3757f",
         "SubRootCategoryId":null,
         "Description":"Nhà chức trách nhận định công ty do Nam và Dương điều hành kinh doanh, nhập khẩu thiết bị về công nghệ, tuy nhiên sau một thời gian chuyển sang tổ chức đánh bạc qua mạng.",
         "Quantity":12,
         "Unit":"cái",
         "Note":null,
         "NoteForVendor":"2018-04-06T17:00:00.000Z",
         "IsApproved":false,
         "Order":0,
         "RFQEntity":null,
         "CategoryEntity":{  
            "Id":"57443432-4004-47c1-9ec6-aab5bcc3757f",
            "Name":"Máy photocopy",
            "Description":null,
            "ExpertId":null,
            "ExpertEntity":null,
            "DateTime":null,
            "ParentCategoryId":"9c59fce0-7627-472c-bd37-f4689646fb84",
            "Level":0,
            "ParentCategoryEntities":null,
            "MasterContractEntities":null,
            "CategoryOrganizationEntity":null
         },
         "QuotationEntities":[  
            {  
               "Id":"e030d971-8690-4dd1-b4a8-0aecf7332a00",
               "QuotationHeaderId":"5297b12a-2e14-419c-8492-3b667b97e4fc",
               "RFQDetailId":"bfda40c9-04ec-4c4b-9d08-c30b77cee725",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
                  "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
                  "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
                  "TaxCode":"0302566338",
                  "Owner":"Thiên Định",
                  "Phone":null,
                  "Email":"thiendinh@mail",
                  "Website":null,
                  "BankAccount":"0193847354",
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"3642cd8a-0069-43c0-893f-57731269c641",
               "QuotationHeaderId":"a083cb0d-dfbc-44cb-937a-d3b9a66f7536",
               "RFQDetailId":"bfda40c9-04ec-4c4b-9d08-c30b77cee725",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
                  "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
                  "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
                  "TaxCode":"0311609355",
                  "Owner":"",
                  "Phone":"",
                  "Email":" frt.contact@fpt.com.vn",
                  "Website":"",
                  "BankAccount":"",
                  "Bank":"",
                  "BankBranch":"",
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            },
            {  
               "Id":"2a3acbd4-5588-4553-853b-65d6e4751d2d",
               "QuotationHeaderId":"ac22338a-3627-4c0d-8c18-27167fcfaa55",
               "RFQDetailId":"bfda40c9-04ec-4c4b-9d08-c30b77cee725",
               "UnitPrice":null,
               "Price":null,
               "TaxType":"NONE",
               "TaxAmount":null,
               "Total":null,
               "Note":null,
               "NoteForVendor":"2018-04-06T17:00:00.000Z",
               "VendorEntity":{  
                  "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
                  "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
                  "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
                  "TaxCode":"0312484998",
                  "Owner":null,
                  "Phone":null,
                  "Email":"Milimetcon@mail",
                  "Website":null,
                  "BankAccount":null,
                  "Bank":null,
                  "BankBranch":null,
                  "IsLock":false,
                  "Approved":true
               },
               "RFQDetailEntity":null
            }
         ],
         "VendorEntities":[  
            {  
               "Id":"1e98caa8-7d14-45b1-86bc-0a7515920a42",
               "Name":"Công ty TNHH Thương Mại Dịch Vụ Và Xây Dựng Thiên Định",
               "Address":"Số 32 đường Khuất Duy Tiến, Thanh Xuân, Hà Nội",
               "TaxCode":"0302566338",
               "Owner":"Thiên Định",
               "Phone":null,
               "Email":"thiendinh@mail",
               "Website":null,
               "BankAccount":"0193847354",
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"eb12bf9e-ed79-4065-9401-22dd484db377",
               "Name":"Công ty CP Bán lẻ Kỹ thuật Số FPT",
               "Address":"Tòa nhà FPT Cầu Giấy, đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nộ",
               "TaxCode":"0311609355",
               "Owner":"",
               "Phone":"",
               "Email":" frt.contact@fpt.com.vn",
               "Website":"",
               "BankAccount":"",
               "Bank":"",
               "BankBranch":"",
               "IsLock":false,
               "Approved":true
            },
            {  
               "Id":"f146fa53-931c-4722-834b-02e9bca5912c",
               "Name":"Công Ty TNHH Thiết Kế Xây Dựng Milimetcon",
               "Address":"193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
               "TaxCode":"0312484998",
               "Owner":null,
               "Phone":null,
               "Email":"Milimetcon@mail",
               "Website":null,
               "BankAccount":null,
               "Bank":null,
               "BankBranch":null,
               "IsLock":false,
               "Approved":true
            }
         ]
      }
   ],
   "RFQWorkflowEntities":[  
      {  
         "Id":"bb2a7b7e-c766-4691-9853-3479ab51cad2",
         "RFQId":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
         "UserId":"f2e1f179-88ed-4bf6-9e6c-a5eea5ad80f3",
         "Time":"2018-03-12T14:23:46.14",
         "Reason":null,
         "Level":2,
         "Status":"APPROVED",
         "RFQEntity":null,
         "UserEntity":null
      },
      {  
         "Id":"a93abe0b-a5ed-4edb-9c8e-530409d7334d",
         "RFQId":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
         "UserId":null,
         "Time":null,
         "Reason":null,
         "Level":3,
         "Status":"NONE",
         "RFQEntity":null,
         "UserEntity":null
      },
      {  
         "Id":"d93d0501-adc7-4f18-91c9-bef1a19c22ee",
         "RFQId":"e570d9b9-38ab-4571-939f-8ab21a56cde7",
         "UserId":"a803da3e-c318-4077-aa21-1d1178ef7543",
         "Time":"2018-03-12T14:21:43.84",
         "Reason":null,
         "Level":1,
         "Status":"APPROVED",
         "RFQEntity":null,
         "UserEntity":null
      }
   ],
   "RFQMailCCEntities":[  
      {  
         "Id":"7a966707-bc7a-4d7f-80a2-000dc090613a",
         "Display":"dungnt150@fpt.com.vn",
         "Name":"dungnt150@fpt.com.vn",
         "ADGroupEntities":null,
         "RoleEntities":null,
         "Token":null,
         "Version":131628812641437652,
         "IsDeleted":false
      },
      {  
         "Id":"2389ed68-5d89-465d-81a8-001e878e5403",
         "Display":"huongnt153@fpt.com.vn",
         "Name":"huongnt153@fpt.com.vn",
         "ADGroupEntities":null,
         "RoleEntities":null,
         "Token":null,
         "Version":131628812644617831,
         "IsDeleted":false
      }
   ]
}
`;
    let rfqObject = JSON.parse(rfq);
    this.RFQEntity = new RFQEntity(rfqObject);
  }
}
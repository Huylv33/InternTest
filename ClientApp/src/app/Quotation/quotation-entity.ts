import { VendorEntity } from "../RFQVendor/vendor-entity";
import { RFQDetailEntity } from "../RFQDetail/rfqdetail-entity";

export class QuotationEntity {
  Id: string;
  QuotationHeaderId: string;
  RFQDetailId: string;
  UnitPrice: any;
  Price: any;
  TaxType: string;
  TaxAmount: any;
  Total: any;
  Note: any;
  NoteForVendor: string;
  VendorEntity: VendorEntity;
  RFQDetailEntity: RFQDetailEntity;
  constructor(QuotationEntity: any = null) {
    if (QuotationEntity != null) {
      this.Id = QuotationEntity.Id;
      this.QuotationHeaderId = QuotationEntity.QuotationHeaderId;
      this.RFQDetailId = QuotationEntity.RFQDetailId;
      this.NoteForVendor = QuotationEntity.NoteForVendor;
      this.UnitPrice = QuotationEntity.UnitPrice;
      this.TaxAmount = QuotationEntity.TaxAmount;
      this.TaxType = QuotationEntity.TaxType;
      this.Price = QuotationEntity.Price;
      this.Total = QuotationEntity.Total;
      this.Note = QuotationEntity.Note;
      this.VendorEntity = new VendorEntity(QuotationEntity.VendorEntity);
      this.RFQDetailEntity = QuotationEntity.RFQDetailEntity;
    }
  }
}

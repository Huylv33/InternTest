import { RFQEntity } from "../RFQ/rfqentity";
import { CategoryEntity } from "../Category/category-entity";
import { QuotationEntity } from "../Quotation/quotation-entity";
import { VendorEntity } from "../RFQVendor/vendor-entity";

export class RFQDetailEntity {
  Id: string;
  RFQId: string;
  CategoryId: string;
  SubRootCategoryId: any = null;
  Description: string;
  Quantity: number;
  Unit: string;
  Note: any = null;
  NoteForVendor: string;
  IsApproved: boolean;
  Order: number;
  RFQEntity: RFQEntity;
  CategoryEntity: CategoryEntity;
  QuotationEntities: QuotationEntity[];
  VendorEntities: VendorEntity[];
  constructor(RFQDetailEntity?: any) {
    if (RFQDetailEntity != null) {
      this.Id = RFQDetailEntity.Id;
      this.RFQId = RFQDetailEntity.RFQId;
      this.CategoryId = RFQDetailEntity.CategoryId;
      this.SubRootCategoryId = RFQDetailEntity.SubRootCategoryId;
      this.Description = RFQDetailEntity.Description;
      this.Quantity = RFQDetailEntity.Quantity;
      this.Unit = RFQDetailEntity.Unit;
      this.Note = RFQDetailEntity.Note;
      this.NoteForVendor = RFQDetailEntity.NoteForVendor;
      this.IsApproved = RFQDetailEntity.IsApproved;
      this.Order = RFQDetailEntity.Order;
      this.RFQEntity = RFQDetailEntity.RFQEntity;
      this.CategoryEntity = RFQDetailEntity.CategoryEntity;
      this.QuotationEntities = RFQDetailEntity.QuotationEntities;
      this.VendorEntities = RFQDetailEntity.VendorEntities;
    }
    else {
      this.Id = null;
      this.RFQId = null;
      this.CategoryId = null;
      this.SubRootCategoryId = null;
      this.Description = null;
      this.Quantity = null;
      this.Unit = null;
      this.Note = null;
      this.NoteForVendor = null;
      this.CategoryEntity = new CategoryEntity();
      this.RFQEntity = new RFQEntity();
      this.VendorEntities = [];
      this.QuotationEntities = [];
      this.IsApproved = null;
      this.Order = null;
    }
	}
}

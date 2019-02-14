import { RFQEntity } from "../RFQ/rfqentity";

export class PurchaseRequestDetailEntity {
  Id: string;
  PurchaseRequestId: string;
  RFQId: string;
  CategoryId: string;
  Unit: string;
  RequestQuantity: number;
  InstockQuantity: number;
  PurchaseQuantity: number;
  UnitPrice: number;
  Price: number;
  RemainQuantity: number;
  TaxType: string;
  TaxAmount: number;
  Total: number;
  Note: string;
  Order: number;
  RFQEntity: RFQEntity;
  constructor(PurchaseRequestDetailEntity: any = null) {
    if (PurchaseRequestDetailEntity == null) {
      this.Id = null;
      this.PurchaseRequestId = null;
      this.RFQId = null;
      this.CategoryId = null;
      this.Unit = null;
      this.RequestQuantity = null;
      this.InstockQuantity = null;
      this.PurchaseQuantity = null;
      this.UnitPrice = null;
      this.Price = null;
      this.RemainQuantity = null;
      this.TaxType = null;
      this.TaxAmount = null;
      this.Total = null;
      this.Note = null;
      this.Order = null;
      this.RFQEntity = new RFQEntity();
    }
    else {
      this.Id = PurchaseRequestDetailEntity.Id;
      this.PurchaseRequestId = PurchaseRequestDetailEntity.PurchaseRequestId;
      this.RFQId = PurchaseRequestDetailEntity.RFQId;
      this.CategoryId = PurchaseRequestDetailEntity.CategoryId;
      this.Unit = PurchaseRequestDetailEntity.Unit;
      this.RequestQuantity = PurchaseRequestDetailEntity.RequestQuantity;
      this.InstockQuantity = PurchaseRequestDetailEntity.InstockQuantity;
      this.PurchaseQuantity = PurchaseRequestDetailEntity.PurchaseQuantity;
      this.UnitPrice = PurchaseRequestDetailEntity.UnitPrice;
      this.Price = PurchaseRequestDetailEntity.Price;
      this.RemainQuantity = PurchaseRequestDetailEntity.RemainQuantity;
      this.TaxType = PurchaseRequestDetailEntity.TaxType;
      this.TaxAmount = PurchaseRequestDetailEntity.TaxAmount;
      this.Total = PurchaseRequestDetailEntity.Total;
      this.Note = PurchaseRequestDetailEntity.Note;
      this.Order = PurchaseRequestDetailEntity.Order;
      this.RFQEntity = PurchaseRequestDetailEntity.RFQEntity;
    }
  }
}

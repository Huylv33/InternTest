
export class VendorEntity {
  Id: string;
  Name: string;
  Address: string;
  TaxCode: string;
  Owner: any;
  Phone: any;
  Email: string;
  Website: any;
  BankAccount: any;
  Bank: any;
  BankBranch: any;
  IsLock: boolean
  Approved: boolean;
  constructor(VendorEntity?: any) {
    if (VendorEntity != null) {
      this.Id = VendorEntity.Id;
      this.Name = VendorEntity.Name;
      this.Address = VendorEntity.Address;
      this.TaxCode = VendorEntity.TaxCode;
      this.Phone = VendorEntity.Phone;
      this.Owner = VendorEntity.Owner;
      this.Email = VendorEntity.Email;
      this.Website = VendorEntity.Website;
      this.BankAccount = VendorEntity.BankAccount;
      this.Bank = VendorEntity.Bank;
      this.BankBranch = VendorEntity.BankBranch;
      this.IsLock = VendorEntity.IsLock;
      this.Approved = VendorEntity.Approved;
    }
  }
}

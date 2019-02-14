import { UserEntity } from '../User/user-entity';
import { RFQEntity } from '../RFQ/rfqentity';
export class RFQWorkflowEntity {
  Id: string;
  RFQId: string;
  UserId: string;
  Time: string;
  Reason: any;
  Level: number;
  Status: string;
  RFQEntity: RFQEntity;
  UserEntity: UserEntity;
  constructor(RFQWorkflow: any = null) {
    if (RFQWorkflow != null) {
      this.Id = RFQWorkflow.Id;
      this.RFQId = RFQWorkflow.RFQId;
      this.UserId = RFQWorkflow.UserId;
      this.Time = RFQWorkflow.Time;
      this.Reason = RFQWorkflow.Reason;
      this.Level = RFQWorkflow.Level;
      this.Status = RFQWorkflow.Status;
      this.RFQEntity = RFQWorkflow.RFQEntity;
      this.UserEntity = RFQWorkflow.UserEntity;
    }
    else {
      this.Id = null;
      this.RFQId = null;
      this.UserId = null;
      this.Time = null;
      this.Reason = null;
      this.Level = null;
      this.Status = null;
      this.RFQEntity = new RFQEntity();
      this.UserEntity = new UserEntity();
    }
  } 
}

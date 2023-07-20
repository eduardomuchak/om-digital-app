import { Stage } from "../../../POST/Stages/stages.interface";
import { Symptom } from "../../../POST/Symptoms/symptom.interface";

export interface MaintenanceOrderList {
  id: number;
  asset_code: string;
  counter: number;
  outsourced: number;
  external: number;
  found_fail: number;
  tire_movimentation: number;
  branch_select: number;
  branch: string;
  service_type: string;
  service_code: string;
  sequence: number | null;
  status: number;
  start_prev_date: string;
  start_prev_hr: string;
  end_prev_date: string;
  end_prev_hr: string;
  start_date: string | null;
  start_hr: string | null;
  end_date: string | null;
  end_hr: string | null;
  obs: string;
  protheus: number;
  os_protheus: string | null;
  datetime: string;
  resp_id: number;
  st: number;
  asset_year: number;
  asset_brand: string;
  asset_plate: string;
  asset_type: string;
  asset_maintenance_controller: string;
  asset_family_name: string;
  asset_operation_code: number;
  asset_family: string;
  service_charac: string;
  service_maintenance: string;
  service_description: string;
  symptoms: Symptom.SymptomList[];
  stages: Stage.StagesList[];
}

import type { StatusConsulta } from './../types/statusConsulta';
import type { Medico } from "./medico";
import type { Paciente } from "../types/paciente";

export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}
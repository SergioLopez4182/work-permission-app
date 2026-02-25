export type PermissionStatus =
  | "En revisión"
  | "Aprobado"
  | "Rechazado"
  | "Caducado"
  | "expired"

export type PermissionType =
  | "Ingreso de proveedores para entrega de mercancía"
  | "Instalación o modificación de mobiliario"
  | "Instalación o modificación de decoración"
  | "Mantenimiento preventivo y/o correctivo"
  | "Actividades de marketing"

export interface PermissionStatusOption {
  value: PermissionStatus
  label: string
}

export interface PermissionTypeOption {
  value: PermissionType
  label: string
}
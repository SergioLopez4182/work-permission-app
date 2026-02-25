import type { PermissionStatus, PermissionType } from "./permission.catalogs.types"

export interface Permission {
  id: string
  clientId: string
  projectId: string

  title: string
  description?: string

  type: PermissionType
  status: PermissionStatus

  startDate: Date
  endDate: Date

  createdAt: Date
  updatedAt: Date
}

export interface PermissionFilters {
  status?: PermissionStatus
  type?: PermissionType
  projectId?: string
  dateFrom?: Date
  dateTo?: Date
}
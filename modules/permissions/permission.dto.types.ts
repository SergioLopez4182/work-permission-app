export interface PermissionResponseDTO {
  id: string
  client_id: string
  project_id: string

  title: string
  description: string | null

  type: string
  status: string

  start_date: string
  end_date: string

  created_at: string
  updated_at: string
}

export interface CreatePermissionDTO {
  projectId: string
  title: string
  description?: string
  type: string
  startDate: string
  endDate: string
}
# Fase 1 - Definición

El proyecto work-permission-app es una demo técnica para mi portafolio personal. Representa una versión reducida y simplificada del alcance real del proyecto original.

## Problema

El proceso actual para la generación y administración de permisos de trabajo se lleva de forma manual, lo que genera los siguientes problemas:

* Solicitudes de permisos vía WhatsApp y correo electrónico.
* Administración de permisos en archivos de Excel.
* Falta de trazabilidad de los documentos asociados al permiso.
* Permisos ejecutados sin una aprobación formal.
* Ausencia de notificaciones consistentes sobre el estatus de los permisos.
* Falta de comunicación con el personal de seguridad en accesos.
* Proceso de auditoría complejo y poco estructurado.

## Usuario objetivo

El usuario objetivo es un cliente con múltiples centros comerciales. 

Cada centro comercial cuenta con diversos locales, y cada local está a cargo de un usuario responsable.

## Alcance del MVP (Minimum viable product)

El MVP para esta demo incluye:
* 1 cliente
* 1 centro comercial
* 10 locales
* 5 tipos de permisos
* 4 roles
    * Administrador
    * Gerente
    * Responsable (encargado del local)
    * Seguridad
* 1 usuario por cada rol

## Tipos de permisos
Los permisos de trabajo corresponden a actividades que pueden afectar la operación del local o de los locales cercanos. Entre los casos considerados se incluyen:

* Actividades de marketing, promociones, campañas publicitarias o eventos dentro del centro comercial.
* Ingreso de proveedores para entrega de mercancía.
* Instalación o modificación de mobiliario.
* Instalación o modificación de decoración.
* Mantenimiento preventivo y/o correctivo.

## Estatus de permisos
Los permisos cuentan con los siguientes estados:

### Etapa 1
* En revisión: Estado inicial del permiso.
* Aprobado: Marcado como aprobado por un gerente.
* Rechazado: Marcado como rechazado por un gerente.
* Caducado (calculado por lógica de negocio): Si la fecha de inicio ya pasó y el permiso no fue aprobado ni rechazado.

### Estados considerados para futuras iteraciones
* Nuevo: Permiso recién creado.
* En ejecución (calculado por lógica de negocio): El permiso se encuentra activo considerando la fecha de inicio y fecha de fin.
* Finalizado (calculado por lógica de negocio): Si fue aprobado y la fecha de fin ya pasó.

## Flujo base 
1. El Responsable crea un permiso de trabajo.
2. El Gerente revisa el permiso.
3. El permiso se aprueba o rechaza.
4. Según su rol, los usuarios podran visualizar los permisos.
5. Una vez pasada su fecha de ejecución, el permiso se archiva (ya no se lista activamente).

## Stack
Arquitectura multi-tenant basada en usuario autenticado.

Cada usuario pertenece a un cliente y todas las entidades del sistema están relacionadas mediante client_id.

* Frontend: Next.js
* Backend: API Routes en Next.js
* Base de datos: PostgreSQL (Neon)
* Auth: Cookies
* Notificaciones: No incluidas en el MVP

El MVP incluye un solo cliente, pero el modelo permite escalar a múltiples tenants.
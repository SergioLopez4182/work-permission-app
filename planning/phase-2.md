# Fase 2 - Diseño conceptual

A continuación se listan las entidades determinadas para el sistema.

## Cliente
Esta entidad funciona como la representación de la empresa o grupo encargado.

Un cliente es el inicio del arbol para cada estructura, este cliente estara relacionadas al resto de entidades en el sistema, manteniendo todas sus entidades aisladas de las de otros clientes.

## Proyecto / Centro comercial
Los proyectos funcionan como el agrupador de locales, o entidades del negocio de cada cliente. 

Un usuario podría estar relacionado a 1 o varios proyectos, sin embargo esto lo determina su rol, pero esto se hace a nivel frontend/backend.

## Local
Representa las entidades de negocio que estan dentro de los proyectos.

Un usuario podría estar relacionado a 1 o varios locales, sin embargo esto lo determina su rol, por el momento el unico rol que puede tener asignados locales es el rol de responsable. Pero esto se hace a nivel frontend/backend.

## Usuario
Representa al trabajador, gerente o administrador que accede al sitio para interactuar con los permisos.

* Pertenece a un cliente
* Puede tener solo un rol asignado
* Puede estar asignado a múltiples proyectos
* Puede estar asignado a múltiples o ningún local

## Rol
Representan la función(es) que ejerce el usuario en el sistema

## Permiso
Se considera la entidad central del sistema.

Un permiso representa una solicitud que brinda información sobre los trabajamos a realizar, personal involucrado, fechas y horarios de operacion, y documentos adicionales (estos viven en otra tabla).

## Documentos
Representan los documentos relacionados a un permiso. No hay un limite a nivel base de datos para la cantidad de documentos que puede tener un permiso, sin embargo en el frontend/backend se limita a 3

## Flujo de aprobación
Es una representación del flujo de aprobación de los permisos, que permite configurarlo al gusto. Adicionalmente tambien funciona como un filtro para mostrarle a los usuarios (segun su rol) los permisos que puede ver.

* Administrador: Puede ver todos los permisos
* Gerente: Puede ver todos los permisos de sus centros comerciales asignados
* Responsable (encargado del local): Puede ver todos los permisos que el creo
* Seguridad: Puede ver todos los permisos aprobados de sus centros comerciales asignados

En esta entidad se especifica

* Que etapa del proceso corresponde, empezando por el 0 (creación)
* Que rol interactua con el permiso en esta etapa
* Que accion se aplica en esta etapa: Crear, aproabr, rechazar, ver
* Que estatus se aplicara al permiso cuando el usuario interactue con el proceso
* Filtro - Que tipos de permisos puede ver este usuario
* Filtro - Que estatus de permiso peude ver este usuario

## Catálogos
### Tipo de permiso
    Especifica los tipos de permisos disponibles en el sistema.

### Estado de permiso
    Especifica los estados de permisos disponibles en el sistema.

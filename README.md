# api-simpsons

Aplicación SPA creada con React, TypeScript y Vite que consume una API de personajes de Los Simpson. Muestra un listado paginado de personajes usando un hook personalizado y componentes reutilizables.

## Características
- Listado de personajes con tarjetas responsive.
- Paginación para navegar entre páginas de resultados.
- Hook `useCharacters` para manejar la carga y el estado.
- Cliente API encapsulado en `simpsonsApi`.

## Tecnologías
- React
- TypeScript
- Vite
- CSS (archivos por componente)

## Instalación
1. Clona el repositorio.
2. Instala dependencias:

```bash
npm install
```

3. Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre el navegador en la dirección que muestre Vite (por defecto http://localhost:5173).

## Scripts disponibles
- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Sirve la build de producción localmente.

## Estructura principal
- `src/api/simpsonsApi.ts` — Cliente para consumir la API de personajes.
- `src/hooks/useCharacters.ts` — Hook para cargar y paginar personajes.
- `src/components/CharacterList/CharacterList.tsx` — Lista paginada de personajes.
- `src/components/CharacterCard.tsx` — Tarjeta que muestra un personaje.
- `src/pages/Home.tsx` — Página principal donde se renderiza la lista.

Puedes ver los archivos principales aquí: [src/api/simpsonsApi.ts](src/api/simpsonsApi.ts), [src/hooks/useCharacters.ts](src/hooks/useCharacters.ts), [src/components/CharacterList/CharacterList.tsx](src/components/CharacterList/CharacterList.tsx), [src/pages/Home.tsx](src/pages/Home.tsx)

## Uso
- Navega la lista de personajes y usa la paginación para ver más resultados.
- Los componentes están preparados para extenderse (filtros, búsqueda, detalles de personaje).

## Contribuciones
1. Haz un fork.
2. Crea una rama con tu cambio (`git checkout -b feature/mi-cambio`).
3. Abre un Pull Request describiendo el cambio.

## Licencia
Proyecto con licencia MIT.

---
Si quieres, puedo agregar badges, ejemplos de despliegue o instrucciones para Docker/CI.

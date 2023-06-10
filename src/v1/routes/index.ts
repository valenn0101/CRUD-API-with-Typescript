import { Router } from "express";
import { readdirSync } from "fs";

const PATH_TO_ROUTES = "src/v1/routes";
const router = Router();

const removeFileExtension = (fileName: string): string | undefined => {
  const file = fileName.split(".").shift();
  return file ?? "";
};

try {
  const routeFileNames = readdirSync(PATH_TO_ROUTES);

  for (const routeFileName of routeFileNames) {
    const routeName = removeFileExtension(routeFileName);

    if (routeName === "index") {
      continue;
    }

    // Import and use the router from the module
    const importRoute = async (): Promise<void> => {
      try {
        const moduleRouter = await import(`./${routeName}`);
        if (!moduleRouter?.router) {
          throw new Error(
            `El módulo ${routeName} no contiene un enrutador válido.`
          );
        }
        router.use(`/${routeName}`, moduleRouter.router);
        console.log(`Ruta /${routeName} cargada`);
      } catch (error) {
        console.error(`Error al importar el módulo ${routeName}:`, error);
      }
    };

    importRoute();
  }
} catch (error) {
  console.error("Error al leer los archivos de rutas: ", error);
}

export default router;

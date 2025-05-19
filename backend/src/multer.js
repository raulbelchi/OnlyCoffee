import multer from 'multer';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

//Función para subir las imágenes de los posts
export const subirPost = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR, "../imgs/postPictures"),
        //Aquí defino que las imagenes se guardarán con el nombre original - fecha actual (para que no se repitan)
        filename: (req, file, cb) => {
            const extension = extname(file.originalname)
            const fileName = file.originalname.split(extension)[0]

            cb(null, fileName + '-' + Date.now() + extension)
        }
    }),

    limits: {
        fieldSize: 10000000, //Esto equivale a 10Mb
    },
})

//Función para subir las fotos de perfil
export const subirPfp = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR, "../imgs/pfp"),
        //Aquí defino que las imagenes se guardarán con el nombre original - fecha actual (para que no se repitan)
        filename: (req, file, cb) => {
            const extension = extname(file.originalname)
            const fileName = file.originalname.split(extension)[0]

            cb(null, fileName + '-' + Date.now() + extension)
        }
    }),

    limits: {
        fieldSize: 10000000, //Esto equivale a 10Mb
    },
})


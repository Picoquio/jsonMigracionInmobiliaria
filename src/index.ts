import * as fs from 'fs';
import { InfoImgDesdeAviso, InfoImgDesdeImgJson, InfoFinalImagenes, PropiedadTokko } from './models';
import { Condicion, EstadoPropiedad, MostrarEnWeb, Situacion, TipoPropiedad } from "./enums";
import { getTipoPropiedad, getBarrio, getEmprendimiento, getDescripcion, getKuula, getImageIds } from './pipeline';
import { PropiedadWordPress } from "./interfaces";
import dataPropiedades from '../json/propiedades.json';
import dataImagenes from '../json/imagenes.json';

// const dataPropiedades = require('../json/propiedades.json');
// const dataImagenes = require('../json/imagenes.json');

const arrayPropiedadesInicial: any[] = [...dataPropiedades.post]
const arrayPropiedadesProcesado: PropiedadTokko[] = [];

const parseData = (): void => {
    arrayPropiedadesInicial.forEach((aviso, index) => {
        let objToPush: PropiedadTokko = {
            ID: index + 1,
            SUCURSAL_ASOCIADA: 'Sofia Goñi',
            ESTADO_PROPIEDAD: EstadoPropiedad.disponible,
            DIRECCION_PROPIEDAD: aviso.fave_property_address,
            TIPO_PROPIEDAD: getTipoPropiedad(aviso.Tipo),
            BARRIO: getBarrio(aviso.fave_property_address),
            AMBIENTES: aviso.fave_property_rooms,
            DORMITORIOS: aviso.fave_property_bedrooms,
            BANOS: aviso.fave_property_bathrooms,
            TOILETTES: null,
            COCHERAS: aviso.fave_property_garage,
            SITUACION: Situacion.vacia,
            MOSTRAR_EN_WEB: MostrarEnWeb.si,
            MOSTRAR_PRECIO_WEB: MostrarEnWeb.si,
            DESCRIPCION: getDescripcion(aviso.Content),
            TITULO: aviso.Title,
            NOMBRE_TASADOR: 'Sofía Goñi',
            NOMBRE_ETIQUETAS: null,
            NOMBRE_PROPIETARIO: null,
            NOMBRE_EMPRENDIMIENTO: getEmprendimiento(aviso.fave_property_address),
            NOMBRE_USUARIO_DE_MANTENIMIENTO: null,
            NOMBRE_USUARIO_PRODUCTOR: null,
            ALQUILER_ARS: null,
            ALQUILER_USD: null,
            VENTA_ARS: null,
            VENTA_USD: aviso.fave_property_price,
            ID_PROPIETARIO: null,
            TELEFONO_PROPIETARIO: null,
            MAIL_PROPIETARIO: null,
            CELULAR_PROPIETARIO: null,
            NOTA_PROPIETARIO: null,
            INFORMACION_INTERNA_PROPIEDAD: null,
            DIRECCION_FICTICIA_PROPIEDAD: null,
            ZONIFICACION: null,
            CONDICION: Condicion.muyBueno,
            PLANTAS: null,
            ANTIGUEDAD: aviso.fave_property_year,
            EXPENSAS: null,
            ORIENTACION: null,
            DISPOSICION: null,
            SUP_TERRENO: aviso.fave_property_land,
            SUP_CUBIERTA: aviso.fave_mts2cubiertos,
            SUP_DESCUBIERTA: null,
            SUP_SEMICUBIERTA: null,
            SUP_TOTAL_CONST: aviso.fave_property_size,
            LAT: aviso.houzez_geolocation_lat,
            LON: aviso.houzez_geolocation_long,
            ATRIBUTO_EXTRA: null,
            ETIQUETA: null,
            COMENTARIO_INTERNO_DE_PROPIEDAD: null,
            LINK_SOFIAGONI: aviso.Permalink,
            LINK_360: getKuula(aviso.fave_virtual_tour),
            LINK_VIDEO: aviso.fave_video_url,
            ID_AVISO_SOFIAGONI: aviso.id,
            ID_IMAGENES: getImageIds(aviso.fave_property_images)
        }
        arrayPropiedadesProcesado.push(objToPush);
    })

    saveProperyList();
    saveImageInfo();
}

const imgInfoFromAvisos = (): InfoImgDesdeAviso[] => {
    const arrayToReturn: InfoImgDesdeAviso[] = [];
    arrayPropiedadesProcesado.forEach((aviso) => {
        aviso.ID_IMAGENES.forEach((idImagen) => {
            arrayToReturn.push(
                {
                    ID_Imagen: idImagen,
                    ID_Aviso: aviso.ID
                }
            )
        })
    })
    return arrayToReturn;
}

const mapeoFinal = (): InfoFinalImagenes[] => {
    const infoImgDesdeAvisos = imgInfoFromAvisos();
    const infoImgDesdeJsonImagenes: InfoImgDesdeImgJson[] = [...dataImagenes];
    const arrayToReturn: InfoFinalImagenes[] = [];

    infoImgDesdeAvisos.forEach((desdeAviso) => {
        const match = infoImgDesdeJsonImagenes.find((desdeJsonImg) => desdeJsonImg.ID === desdeAviso.ID_Imagen);
        if (match) {
            arrayToReturn.push(
                {
                    Url: match.URLs,
                    ID_PROPIEDAD: desdeAviso.ID_Aviso,
                    ID_IMAGEN: desdeAviso.ID_Imagen
                }
            )
        }
    })
    return arrayToReturn;
}

const saveProperyList = () => {
    fs.writeFile('./productoFinal/listado-final-propiedades.json', JSON.stringify(arrayPropiedadesProcesado), (err: any) => {
        if (err) throw err;
        console.log('listado-final-propiedades.json written successfully.');
    });
}

const saveImageInfo = () => {
    fs.writeFile('./productoFinal/listado-final-imagenes.json', JSON.stringify(mapeoFinal()), (err: any) => {
        if (err) throw err;
        console.log('listado-final-imagenes.json written successfully.');
    });
}

parseData();

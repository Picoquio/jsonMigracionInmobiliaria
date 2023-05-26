import { Condicion, Disposicion, EstadoPropiedad, MostrarEnWeb, Orientacion, Situacion, TipoPropiedad } from "./enums"
import { Content } from "./interfaces"

export class PropiedadTokko {
    ID: number
    SUCURSAL_ASOCIADA: string
    NOMBRE_TASADOR: string
    NOMBRE_USUARIO_PRODUCTOR: string
    NOMBRE_USUARIO_DE_MANTENIMIENTO: string
    NOMBRE_EMPRENDIMIENTO: string
    ID_PROPIETARIO: string
    NOMBRE_PROPIETARIO: string
    TELEFONO_PROPIETARIO: string
    MAIL_PROPIETARIO: string
    CELULAR_PROPIETARIO: string
    NOTA_PROPIETARIO: string
    INFORMACION_INTERNA_PROPIEDAD: string
    ESTADO_PROPIEDAD: EstadoPropiedad
    DIRECCION_PROPIEDAD: string
    DIRECCION_FICTICIA_PROPIEDAD: string
    TIPO_PROPIEDAD: TipoPropiedad
    ALQUILER_ARS: number
    ALQUILER_USD: number
    VENTA_USD: number
    VENTA_ARS: number
    BARRIO: string
    AMBIENTES: number
    DORMITORIOS: number
    BANOS: number
    TOILETTES: number
    COCHERAS: number
    ZONIFICACION: string
    CONDICION: Condicion
    PLANTAS: number
    ANTIGUEDAD: number
    SITUACION: Situacion
    EXPENSAS: number
    ORIENTACION: Orientacion
    DISPOSICION: Disposicion
    SUP_TERRENO: number
    SUP_CUBIERTA: number
    SUP_DESCUBIERTA: number
    SUP_SEMICUBIERTA: number
    SUP_TOTAL_CONST: number
    MOSTRAR_EN_WEB: MostrarEnWeb
    MOSTRAR_PRECIO_WEB: MostrarEnWeb
    LAT: number
    LON: number
    DESCRIPCION: string;
    TITULO: string
    ATRIBUTO_EXTRA: any
    NOMBRE_ETIQUETAS: string
    ETIQUETA: string
    COMENTARIO_INTERNO_DE_PROPIEDAD: string
    LINK_SOFIAGONI: string;
    LINK_VIDEO: any;
    LINK_360: any;
    ID_AVISO_SOFIAGONI: number;
    ID_IMAGENES: number[];
}

export class InfoImgDesdeImgJson {
    ID: any;
    URLs: any;
    Title?: any;
    "Date Uploaded"?: any;
    "Media Type"?: any;
}


export class InfoImgDesdeAviso {
    ID_Imagen: number;
    ID_Aviso: number;
}

export class InfoFinalImagenes {
    ID_PROPIEDAD: number;
    ID_IMAGEN: number;
    Url: string;
}
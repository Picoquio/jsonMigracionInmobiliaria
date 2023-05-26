import { TipoPropiedad } from "./enums";

const getTipoPropiedad = (tipoPropiedad: string): TipoPropiedad => {
    if (tipoPropiedad.toLowerCase().includes('casa')) return TipoPropiedad.CASA;
    else if (tipoPropiedad.toLowerCase().includes('departamento')) return TipoPropiedad.DEPARTAMENTO;
    else if (tipoPropiedad.toLowerCase().includes('terreno')) return TipoPropiedad.TERRENO;
    else return null;
}

const getBarrio = (barrio: string): string => {
    if (barrio.toLowerCase().includes('esmeralda')) return 'Costa Esmeralda';
    else if (barrio.toLowerCase().includes('north')) return 'North Beach';
    else if (barrio.toLowerCase().includes('estancias')) return 'Estancias del Pilar';
    else if (barrio.toLowerCase().includes('barbara')) return 'Santa Bárbara';
    else if (barrio.toLowerCase().includes('alcanfores')) return 'Los Alcanfores';
    else if (barrio.toLowerCase().includes('herradura')) return 'La Herradura';
    else if (barrio.toLowerCase().includes('pilara') || barrio.toLowerCase().includes('pilará')) return 'Pilará';
    else return null;
}

const getEmprendimiento = (barrio: string): string => {
    if (barrio.toLowerCase().includes('esmeralda')) return 'Costa Esmeralda';
    else if (barrio.toLowerCase().includes('north')) return 'North Beach';
    else if (barrio.toLowerCase().includes('estancias')) return 'Estancias del Pilar';
    else if (barrio.toLowerCase().includes('pilara') || barrio.toLowerCase().includes('pilará')) return 'Pilará';
    else return null;
}

const getDescripcion = (descripcion: any): string => {
    if (descripcion.__cdata) return descripcion.__cdata;
    else return descripcion;
}

const getKuula = (object: any): string => {
    const regex = /src="([^"]+)"/;
    const match = regex.exec(object.__cdata);
    const url = match ? match[1] : '';
    return url;
}

const getImageIds = (numerosEnString: string): number[] => {
    return numerosEnString.split("|").map(Number);
}

export {
    getBarrio,
    getDescripcion,
    getEmprendimiento,
    getImageIds,
    getKuula,
    getTipoPropiedad
}

// exports.getTipoPropiedad = getTipoPropiedad;
// exports.getBarrio = getBarrio;
// exports.getEmprendimiento = getEmprendimiento;
// exports.getDescripcion = getDescripcion;
// exports.getKuula = getKuula;
// exports.getImageIds = getImageIds;
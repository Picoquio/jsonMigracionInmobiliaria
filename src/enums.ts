export enum EstadoPropiedad {
    tasacion = 'TASACION',
    disponible = 'DISPONIBLE',
    reservado = 'RESERVADO',
    noDisponible = 'NO DISPONIBLE'
}

export enum TipoPropiedad {
    TERRENO = 'TERRENO',
    DEPARTAMENTO = 'DEPARTAMENTO',
    CASA = 'CASA',
    QUINTA = 'QUINTA',
    OFICINA = 'OFICINA',
    AMARRA = 'AMARRA',
    LOCAL = 'LOCAL',
    EDIFICIO_COMERCIAL = 'EDIFICIO COMERCIAL',
    CAMPO = 'CAMPO',
    COCHERA = 'COCHERA',
    HOTEL = 'HOTEL',
    NAVE_INDUSTRIAL = 'NAVE INDUSTRIAL',
    PH = 'PH',
    DEPOSITO = 'DEPOSITO',
    FONDO_DE_COMERCIO = 'FONDO DE COMERCIO',
    BAULERA = 'BAULERA',
    BODEGA = 'BODEGA',
    FINCAS = 'FINCAS',
    CHACRA = 'CHACRA',
    CAMA_NAUTICA = 'CAMA NAUTICA',
    ISLA = 'ISLA',
    GALPON = 'GALPON',
}

export enum Condicion {
    regular = 'REGULAR',
    aRefaccionar = 'A REFACCIONAR',
    reciclado = 'RECICLADO',
    bueno = 'BUENO',
    muyBueno = 'MUY BUENO',
    excelente = 'EXCELENTE'
}

export enum Orientacion {
    NORTE = 'NORTE',
    OESTE = 'OESTE',
    ESTE = 'ESTE',
    SUDESTE = 'SUDESTE',
    NORESTE = 'NORESTE',
    SUDOESTE = 'SUDOESTE',
    SUR = 'SUR',
    NOROESTE = 'NOROESTE'
}

export enum Disposicion {
    CONTRAFRENTE = 'CONTRAFRENTE',
    FRENTE = 'FRENTE',
    INTERNO = 'INTERNO',
    LATERAL = 'LATERAL',
}

export enum Situacion {
    vacia = 'VACIA',
    ocupada = 'OCUPADA'
}

export enum MostrarEnWeb{
    si = 'SI',
    no = null
}
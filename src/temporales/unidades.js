export const unidades = [
    {
        id : 25789,
        informacion : {
            lat : '20.745675621278505',
            lng : '-103.34453047338549',
            direccion : 'casa',
            fecha : '00/00/0000'
        },
        reglas : [
            {
                tipo : 'recurrente',    //recurrente,exacta
                nombre : 'regla 1',
                hora : '8:30 AM',
                comando : 'abrir',      //abrir, cerrar
                fecha : '',
                dias : ['DOM','LUN','MAR','MIE','JUE','SAB'],
                activo : true
            }
        ]
    },{
        id : 25760,
        informacion : {
            lat : '20.6425581900204',
            lng : '-103.43760089237433',
            direccion : 'intralix',
            fecha : '00/00/0000'
        },
        reglas : [
            {
                tipo : 'recurrente',    //recurrente,exacta
                nombre : 'regla 1',
                hora : '8:30 AM',
                comando : 'abrir',      //abrir, cerrar
                fecha : '',
                dias : ['DOM','LUN','MAR','MIE','JUE','SAB'],
                activo : true
            }
        ]
    }
];


export const grupos = [
    {
        id: 1,
        nombre: 'Tacos',
        unidades : [ 25789, 25760 ]
    },{
        id: 2,
        nombre: 'Taco',
        unidades : [ 25789 ]
    }
];
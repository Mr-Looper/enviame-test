//Ejercicio 2
// JSON 
let values =  {
    1: {
        carrier: "CCH",
        service: "DEX",
    },
    17: {
        carrier: "CHP",
        service: "express",
    }
}
// JSON
let json = { 
    data: {
        BUIN: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
        },
        LAJA: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
        },
        LEBU: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
        },
        LOTA: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
        }
    }
}

function organizeCarrierService(values, json){
    const keysObjectJson = Object.keys(json.data);
    const auxCarrierService = ['over', 'under'];
    const objectResult = { };
    for (var i = 0; i < keysObjectJson.length; i++) {
        objectResult[keysObjectJson[i]] = { limit: json.data[keysObjectJson[i]].limit };
        for (var j = 0; j < auxCarrierService.length; j++) {
            const currentId = json.data[keysObjectJson[i]][`${auxCarrierService[j]}_carrier_service_id`];
            objectResult[keysObjectJson[i]][auxCarrierService[j]] = values[currentId];
        }
    }
}

organizeCarrierService(values, json);
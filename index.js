
// início da tentativa de mapear a elevação dos pontos

// verificar a integridade e qualidade dos dados
// separar em rotas feitas no dia

const fs = require('fs');

const path = './2023_AUGUST.json'

fs.readFile(`${path}`,'utf8', (err, data) => {
    if (err){
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }

    try {
        // carregar todo o json
        const json = JSON.parse(data);

        /*  VO COLOCAR OS PONTOS DE ACESSO A INFOS INÚTEIS AQUI \/ 
        
        json.timelineObjects[0].activitySegment.activities[0] 
        -> tipo de veículo utilizado na rota.(1 em diante são veiculos com menos prob.) 
        
        essa parte é meio inútil pra mim, ja sei que foram viagens de bicicleta,
        então não seria necessário acessar essa parte dos dados. 

                ---- ACABO A SEÇÃO DE INFOS INÚTEIS ---- 
        ---------------------------------------------------------
        */
        
        // json.timelineObjects[0].activitySegment.waypointPath -> pontos lat e lng, distancia e modo de viagem.
        // BEM ÚTIL
        const pontosRota = json.timelineObjects[0].activitySegment.waypointPath.waypoints;
        const distancia = json.timelineObjects[0].activitySegment.waypointPath.distanceMeters.toFixed(2);
        console.log(pontosRota, `\n Distancia percorrida: ${distancia} metros.`);

    } catch (error){
        console.error('Erro lendo JSON', error);
    }

});
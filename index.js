
// verificar a integridade e qualidade dos dados
// separar em rotas feitas no dia

const fs = require('fs');
const path = '../2023_AUGUST.json'

 /*  VO COLOCAR OS PONTOS DE ACESSO A INFOS INÚTEIS AQUI \/ 
        
        json.timelineObjects[0].activitySegment.activities[0] 
        -> tipo de veículo utilizado na rota.(1 em diante são veiculos com menos prob.) 
        
        essa parte é meio inútil pra mim, ja sei que foram viagens de bicicleta,
        então não seria necessário acessar essa parte dos dados. 

                ---- ACABO A SEÇÃO DE INFOS INÚTEIS ---- 
        ---------------------------------------------------------
        */

fs.readFile(`${path}`,'utf8', (err, data) => {
    if (err){
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }
    try {
        // carregar todo o json
        const json = JSON.parse(data);
        let seletorAct, seletorPlc;

        // começo no 0
        const indiceItem = 65;
        const totalPares = json.timelineObjects.length /2;

        // gambis pra arrumar o índice e pegar os pares corretos.
        if (indiceItem > 0 && indiceItem <= (totalPares - 1)){
            seletorAct = (indiceItem * 2);
            seletorPlc = seletorAct + 1; 
        } else if (indiceItem > (totalPares - 1)){
            seletorAct = undefined;
            seletorPlc = undefined;
            console.log(`Valor máximo do indice = ${totalPares - 1}.`);
        }  else {
            seletorAct = indiceItem;
            seletorPlc = indiceItem + 1;
            console.log('eh zero')
        }
        //console.log('indices:',seletorAct,seletorPlc,'\n');
        /* 
        json.timelineObjects[0].activitySegment.waypointPath 
        -> pontos lat e lng, distancia e modo de viagem. 
        */

        const pontosRota = json.timelineObjects[seletorAct].activitySegment.waypointPath.waypoints;
        const distancia = json.timelineObjects[seletorAct].activitySegment.waypointPath.distanceMeters.toFixed(2);
        const l = json.timelineObjects[seletorPlc].placeVisit.location;
        const timestamp = json.timelineObjects[seletorAct].activitySegment.duration.endTimestamp;
        
       
    } catch (error){
        console.error('Erro lendo JSON', error);
    }

});
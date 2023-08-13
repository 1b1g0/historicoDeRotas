
// início da tentativa de mapear a elevação dos pontos

// verificar a integridade e qualidade dos dados
// separar em rotas feitas no dia

const fs = require('fs');

const path = './2023_AUGUST.json'

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

        // actvSeg = par; placeVst = impar

        let seletorAct, seletorPlc;
        // começo no 0
        const indiceItem = 4;
        
        const totalPares = json.timelineObjects.length;
        // gambis pra arrumar o índice e pegar os pares corretos.
        if (indiceItem){
            seletorAct = indiceItem + 2;
            seletorPlc = indiceItem + 3; 
        }/* else if (indiceItem == (totalPares - 1)){

        } */ 
        else {
            seletorAct = indiceItem;
            seletorPlc = indiceItem + 1;
        }
        
        // json.timelineObjects[0].activitySegment.waypointPath -> pontos lat e lng, distancia e modo de viagem.
        // BEM ÚTIL

        //const pontosRota = json.timelineObjects[seletorRota].activitySegment.waypointPath.waypoints;
        //const distancia = json.timelineObjects[seletorRota].activitySegment.waypointPath.distanceMeters.toFixed(2);
        //console.log(pontosRota, `\n Distancia percorrida: ${distancia} metros.`);
        // const inicioFim = json.timelineObjects[seletorAct].activitySegment.duration;
        console.log(json.timelineObjects[seletorAct].activitySegment.simplifiedRawPath);

    } catch (error){
        console.error('Erro lendo JSON', error);
    }

});
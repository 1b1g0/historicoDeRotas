
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
        const indiceItem = 71;
        
        const totalPares = json.timelineObjects.length /2;

        // gambis pra arrumar o índice e pegar os pares corretos.
        if (indiceItem > 0 && indiceItem <= (totalPares - 1)){
            seletorAct = (indiceItem * 2);
            seletorPlc = seletorAct + 1; 
        } else if (indiceItem > (totalPares - 1)){
            seletorAct = undefined;
            seletorPlc = undefined;
            console.log(`Valor máximo do indice = ${totalPares - 1}.`);
        }  
        else {
            seletorAct = indiceItem;
            seletorPlc = indiceItem + 1;
            console.log('eh zero')
        }

        console.log('indices:',seletorAct,seletorPlc);

        // json.timelineObjects[0].activitySegment.waypointPath -> pontos lat e lng, distancia e modo de viagem.
        // BEM ÚTIL

        const pontosRota = json.timelineObjects[seletorAct].activitySegment.waypointPath.waypoints;
        const distancia = json.timelineObjects[seletorAct].activitySegment.waypointPath.distanceMeters.toFixed(2);
        const l = json.timelineObjects[seletorPlc].placeVisit.location
        
        // const inicioFim = json.timelineObjects[seletorAct].activitySegment.duration;

        // log HORRÍVEL pra comparar se a seleção está certa e pra explorar um poucos esses dados.
        console.log('Coordenadas da rota: ',
            pontosRota[pontosRota.length - 1],
            `\n Dist. Total: ${distancia}`,
            '\n',
            l.latitudeE7,
            l.longitudeE7,
            `\nDif entre ultimo waypoint e primeiro place:\n`,
            l.latitudeE7 - pontosRota[pontosRota.length - 1].latE7,' lat',
            l.longitudeE7 - pontosRota[pontosRota.length - 1].lngE7, 'lng\n',
            `Início da rota: ${json.timelineObjects[seletorAct].activitySegment.duration.startTimestamp.slice(11,19)}`,
            
            '\n----- fim -----');


    } catch (error){
        console.error('Erro lendo JSON', error);
    }

});
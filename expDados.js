
// verificar a integridade e qualidade dos dados
// separar em rotas feitas no dia
let gpxParser = require('gpxparser');
const fs = require('fs');
const path = '../2023_AUGUST.json'

fs.readFile(`${path}`,'utf8', (err, data) => {
    if (err){
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }
    try {
        // carregar todo o json
        const json = JSON.parse(data);
        let seletorAct, seletorPlc;
        const indiceItem = 63;
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
        const timestamp = json.timelineObjects[seletorAct].activitySegment.duration;
        const l = json.timelineObjects[seletorPlc].placeVisit.location;

        const lat = parseFloat(pontosRota[0].latE7 / 1000000);
        const lng = parseFloat(pontosRota[0].lngE7 / 1000000) 
        
        console.log(timestamp,`\nDistancia total: ${distancia}`,lat,lng);
       
    } catch (error){
        console.error('Erro lendo JSON', error);
    }

});
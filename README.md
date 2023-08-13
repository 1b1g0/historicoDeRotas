# Maps Helper!

### Ideia final seria poder utilizar as informações de deslocamento coletada pelo maps como dados de treino. Podendo utilizar qualquer app (Strava, mapmyride) para controlar o gasto calórico.

*talvez esses apps já tenham mapeamento de elevação? se não tiver seria massa encontrar uma forma de descobrir (ja temos as coordenadas das rotas)*

---

### Checklist:
- [x] 1 Dados necessários para criar o treino (GPX) de forma completa. 
- [ ] Filtrar principais dados de intersse do histórico. 
- [ ] (separar rotas por dia, formato alvo = gpx, tentar identificar e remover dados irrelevantes dentro da primeira 'filtragem'[pontos duplicados, excluir horários que não faço rotas mas por algum motivo existem ali])


---
1 - Modelo gpx 1.1 
*http://www.topografix.com/GPX/1/1*
```
Exemplo com apenas um par de pontos e dados de elvação.

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<gpx version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Nome do role</name>
    <desc>informacoes do role</desc>
    <time>2023-03-08T12:00:00Z</time>
    <author>1b1g0</author>
    <copyright>Copyright 2023, 1b1g0</copyright>
  </metadata>
  <trk>
    <name>Nome do role</name>
    <desc>informacoes do rol</desc>
    <trkseg>
      <trkpt lat="37.775000" lon="-122.418333">
        <ele>100</ele>
      </trkpt>
    </trkseg>
  </trk>
</gpx>

```


---
waypointPath -> pode funcionar para construir uma boa resolução da elevação real.

placeVisit -> location e duration: local que provavelmente eu estou/fui / duração (acredito que o **start** é a hora da partida [do local x] e **end** é a hora da chegada ?)  

---
**Glossário**
GPX (GPS Exchange Format) -> *coordenadas, elevação, velocidade... amplamente utilizado e opensource?*

TCX (Training Center XML) -> *desenvolvido pela Garmin, suporta varias brisa como batimento, cadência, temp...*

FIT (Flexible and Interoperable Data Transfer) -> *tbm pela Garmin, focado em eficiência(arquivos compactos), pra melhorar a performance de armazenamento, transferencia...*e
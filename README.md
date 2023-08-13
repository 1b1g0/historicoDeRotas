# Maps Helper!

### Ideia final seria qualquer pessoa poder utilizar as informações de deslocamento coletada pelo maps como dados de treino. Podendo utilizar qualquer app(Strava, mapmyride) para controlar o gasto calórico etc.

*talvez esses apps já tenham mapeamento de elevação? se não tiver seria massa encontrar uma forma de descobrir (ja temos as coordenadas das rotas)*

---

 tenho um JSON CHEIO de rotas que fiz durante o ano e quero utilizar esses dados do maps (baixei utilizando o G-takeout) como informações de treino (GPX) e *tentar* saber o gasto calórico, por dia talvez? 

---

asdas

---

### Checklist:
- [ ] Descobrir todos os dados necessários para criar o treino (GPX) de forma completa. 
- [ ] Filtrar principais dados de intersse do histórico. 
- [ ] Modelar os dados (criar template). (separar rotas por dia, formato alvo = gpx, tentar identificar e remover dados irrelevantes dentro da primeira 'filtragem'[pontos duplicados, excluir horários que não faço rotas mas por algum motivo existem ali])

- [ ] 

---

waypointPath -> pode funcionar para construir uma boa resolução da elevação real.

placeVisit -> location e duration: local que provavelmente eu estou/fui / duração (acredito que o **start** é a hora da partida [do local x] e **end** é a hora da chegada ?)  

---
**Glossário**
GPX (GPS Exchange Format) -> *coordenadas, elevação, velocidade... amplamente utilizado e opensource?*

TCX (Training Center XML) -> *desenvolvido pela Garmin, suporta varias brisa como batimento, cadência, temp...*

FIT (Flexible and Interoperable Data Transfer) -> *tbm pela Garmin, focado em eficiência(arquivos compactos), pra melhorar a performance de armazenamento, transferencia...*e
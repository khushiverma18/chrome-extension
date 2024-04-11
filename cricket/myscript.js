fetch("https://api.cricapi.com/v1/currentMatches?apikey=f72f247a-365c-445f-8051-1d40d6f8197f&offset=0")
.then((data)=>{ return data.json()})
.then((matchdata)=>{
    if(matchdata.status!="success")return;
   let {name,status,score}=matchdata.data[1];
    console.log(name,status,score)
    const mc=matchdata.data;
    const jokeelement=document.getElementById("sc")
    let print=`#Name:${name}<br>#status:${status}<br>#score:[{<br>"r":${score[0].r},<br>"w":${score[0].w},<br>"o":${score[0].o},<br>inning:${score[0].inning}<br>}
<br>{<br>"r":${score[1].r}<br>"w":${score[1].w},<br>"o":${score[1].o},<br>inning:${score[1].inning}<br>}]`;
    jokeelement.innerHTML=print;
})

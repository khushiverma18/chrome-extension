fetch("https://icanhazdadjoke.com/slack")
.then((data)=>{ return data.json()})
.then((jokedata)=>{
    joketext=jokedata.attachments[0].text;
    console.log(joketext)
    const jokeelement=document.getElementById("new")
    jokeelement.innerHTML=joketext;
})
const character_left=new Image();
const character_right=new Image();
const background=new Image();
const text_box=new Image();
const name_box=new Image();
background.onload=()=>{
    let ctx=$("#bg")[0].getContext('2d');
    ctx.drawImage(background,274,209,512,256,0,0,$("#bg")[0].width,$("#bg")[0].height);
}
text_box.onload=()=>{
    let ctx=$("#text-box")[0].getContext('2d');
    let style=$("#text-box-style").val();
    ctx.drawImage(background,3,3+style*(2+56),381-3,56-3,0,$("#text-box")[0].height*(0.75),900,$("#text-box")[0].height/4);
}
name_box.onload=()=>{
    let canvas=document.getElementById("name-box");
    let ctx=canvas.getContext('2d');  
    ctx.drawImage(name_box,202,177,110,20,0,0,224,48);
}
character_left.onload=function(){
    let ctx=$("#charA")[0].getContext('2d');
    ctx.clearRect(0, 0, $("#charA")[0].width, $("#charA")[0].height);
    ctx.drawImage(this,3+counter*(3+255),3,255,255,0,0,512,512);
};
character_right.onload=function(){
    let ctx=$("#charB")[0].getContext('2d');
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx.drawImage(this,3+counter*(3+255),3,255,255,0,0,512,512);
    counter++;
    if (counter>6){
        counter=0;
    }
};
$("#text-box-style").on('change',()=>{
    text_box.src="https://www.spriters-resource.com/resources/sheets/84/87491.png?updated=1621903806"
});
$("#text-input").on('change',()=>{
    $("#text-box-text").text($("#text-input").val());
})

//FLIP
let canvas2=document.getElementById("charB");
let context2=canvas2.getContext('2d');
context2.translate(canvas2.width, 0);
context2.scale(-1, 1);


var counter=0;
window.onload = function() {
    character_left.src="https://www.spriters-resource.com/resources/sheets/64/67338.png?updated=1460964763";
    character_right.src="https://www.spriters-resource.com/resources/sheets/64/67364.png?updated=1460964766"
    background.src="https://www.spriters-resource.com/resources/sheets/84/87491.png?updated=1621903806"
    text_box.src="https://www.spriters-resource.com/resources/sheets/84/87491.png?updated=1621903806"
    name_box.src="https://www.spriters-resource.com/resources/sheets/84/87491.png?updated=1621903806"
}
$("#btn").click(()=>{ 
    character_right.src="https://www.spriters-resource.com/resources/sheets/64/67364.png?updated=1460964766"
    character_left.src="https://www.spriters-resource.com/resources/sheets/64/67338.png?updated=1460964763";
})
fetch("./config.json")
  .then((res) => res.json())
  .then((data) => {
        console.log(data);
  });
let form=document.createElement('form');
form.setAttribute('class','form');
form.setAttribute('action','/actionpage.html');

let head=document.createElement('h2');
head.textContent='Dom Manipulation in Forms';
head.setAttribute('class','head');
form.appendChild(head);

let div1=document.createElement('div');
let firstLabel=document.createElement('label');
firstLabel.textContent='First name';
div1.appendChild(firstLabel);
let firstName=document.createElement('input');
firstName.setAttribute('type','text');
firstName.setAttribute('class','firstname');
div1.appendChild(firstName);
form.appendChild(div1);
let br1=document.createElement('br');
form.appendChild(br1);


let div2=document.createElement('div');
let lastName=document.createElement('input');
lastName.setAttribute('type','text');
lastName.setAttribute('class','lastname');
let lastLabel=document.createElement('label');
lastLabel.textContent='Last name';
div2.appendChild(lastLabel);
div2.appendChild(lastName);
form.appendChild(div2);
let br2=document.createElement('br');
form.appendChild(br2);

let div3=document.createElement('div');
let address=document.createElement('input');
address.setAttribute('type','text');
address.setAttribute('class','address');
let addLabel=document.createElement('label');
addLabel.textContent='Address';
div3.appendChild(addLabel);
div3.appendChild(address);
form.appendChild(div3);
let br3=document.createElement('br');
form.appendChild(br3);

let div4=document.createElement('div');
let pincode=document.createElement('input');
pincode.setAttribute('type','text');
pincode.setAttribute('class','pincode');
let pinLabel=document.createElement('label');
pinLabel.textContent='Pincode';
div4.appendChild(pinLabel);
div4.appendChild(pincode);
form.appendChild(div4);
let br4=document.createElement('br');
form.appendChild(br4);

let div5=document.createElement('div');
div5.textContent='Gender   ';
form.appendChild(div5);
let br5=document.createElement('br');
form.appendChild(br5);

let div6=document.createElement('div');
let male=document.createElement('input');
male.setAttribute('type','radio');
male.setAttribute('name','gender');
male.setAttribute('class','radio');
male.setAttribute('id','male');
div6.appendChild(male);
let maleLabel=document.createElement('label');
maleLabel.textContent='Male';
maleLabel.setAttribute('for','male');
div6.appendChild(maleLabel);
form.appendChild(div6);

let div7=document.createElement('div');
let female=document.createElement('input');
female.setAttribute('type','radio');
female.setAttribute('name','gender');
female.setAttribute('class','radio');
female.setAttribute('id','female');
div7.appendChild(female);
let femaleLabel=document.createElement('label');
femaleLabel.textContent='Female';
femaleLabel.setAttribute('for','female');
div7.appendChild(femaleLabel);
form.appendChild(div7);
let br6=document.createElement('br');
form.appendChild(br6);

let div8=document.createElement('div');
let choiceLabel=document.createElement('label');
choiceLabel.textContent='Choice of food';
div8.appendChild(choiceLabel);
form.appendChild(div8);
let br7=document.createElement('br');
form.appendChild(br7);

let div9=document.createElement('div');
let veg=document.createElement('input');
veg.setAttribute('type','checkbox');
veg.setAttribute('id','veg');
veg.setAttribute('class','food');
veg.setAttribute('name','food');
let vegLabel=document.createElement('label');
vegLabel.textContent='Veg meals';
vegLabel.setAttribute('for','veg');
div9.appendChild(veg);
div9.appendChild(vegLabel);
form.appendChild(div9);

let div10=document.createElement('div');
let nonveg=document.createElement('input');
nonveg.setAttribute('type','checkbox');
nonveg.setAttribute('id','non-veg');
nonveg.setAttribute('class','food');
nonveg.setAttribute('name','food');
let nonvegLabel=document.createElement('label');
nonvegLabel.textContent='Non-veg meals';
nonvegLabel.setAttribute('for','non-veg');
div10.appendChild(nonveg);
div10.appendChild(nonvegLabel);
form.appendChild(div10);

let div11=document.createElement('div');
let tiffen=document.createElement('input');
tiffen.setAttribute('type','checkbox');
tiffen.setAttribute('id','Tiffen-items');
tiffen.setAttribute('class','food');
tiffen.setAttribute('name','food');
let tiffenLabel=document.createElement('label');
tiffenLabel.textContent='Tiffen-items';
tiffenLabel.setAttribute('for','Tiffen-items');
div11.appendChild(tiffen);
div11.appendChild(tiffenLabel);
form.appendChild(div11);

let div12=document.createElement('div');
let fried=document.createElement('input');
fried.setAttribute('type','checkbox');
fried.setAttribute('id','Fried-rice');
fried.setAttribute('class','food');
fried.setAttribute('name','food');
let friedLabel=document.createElement('label');
friedLabel.textContent='Fried-rice';
friedLabel.setAttribute('for','Fried-rice');
div12.appendChild(fried);
div12.appendChild(friedLabel);
form.appendChild(div12);

let div13=document.createElement('div');
let tea=document.createElement('input');
tea.setAttribute('type','checkbox');
tea.setAttribute('id','Tea-snacks');
tea.setAttribute('class','food');
tea.setAttribute('name','food');
let teaLabel=document.createElement('label');
teaLabel.textContent='Tea-snacks';
teaLabel.setAttribute('for','Tea-snacks');
div13.appendChild(tea);
div13.appendChild(teaLabel);
form.appendChild(div13);
let br8=document.createElement('br');
form.appendChild(br8);


let div14=document.createElement('div');
let state=document.createElement('input');
state.setAttribute('type','text');
state.setAttribute('class','state');
let stateLabel=document.createElement('label');
stateLabel.textContent='State';
div14.appendChild(stateLabel);
div14.appendChild(state);
form.appendChild(div14);
let br9=document.createElement('br');
form.appendChild(br9);

let div15=document.createElement('div');
let country=document.createElement('input');
country.setAttribute('type','text');
country.setAttribute('class','country');
let countryLabel=document.createElement('label');
countryLabel.textContent='Country';
div15.appendChild(countryLabel);
div15.appendChild(country);
form.appendChild(div15);
let br10=document.createElement('br');
form.appendChild(br10);

let submit=document.createElement('button');
submit.textContent='submit';
submit.setAttribute('class','submit');
form.appendChild(submit);



document.body.appendChild(form);
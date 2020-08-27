gsap.from('#nav #list a , .lock',{opacity:0,duration:1,x:100,stagger:.3});
gsap.from('#logo',{opacity:0,duration:1,x:50})
gsap.from('#right',{opacity:0,x:100,delay:1,duration:1});
gsap.from('#detailsHeading,#line',{opacity:0,duration:1.5,width:'0%',delay:1.8});
gsap.from('#detailsPara',{opacity:0,duraration:1,x:-100,delay:1.8});
gsap.from('#explore',{opacity:0,duraration:1,x:-100,delay:2});
gsap.from('#credits img',{stagger:.3, opacity:0,y:50,delay:1.5,duration:.2});
gsap.to('#rightImg',{duration:1,delay:1.6,scale:1});
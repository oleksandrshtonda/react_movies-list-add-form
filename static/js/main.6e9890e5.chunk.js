(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(7),c=a.n(i),n=(a(14),a(6)),s=a(2),l=a(1),o=a(8),r=(a(15),a(16),a(17),a(0)),m=function(e){var t=e.movie,a=e.theme;return Object(r.jsxs)("div",{className:"card card--".concat(a),"data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies,a=e.theme;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(m,{movie:e,theme:a},e.imdbId)}))})},j=(a(19),a(9)),b=a.n(j);a(20);var h=function(e){var t=e.theme,a=e.name,i=e.value,c=e.label,n=void 0===c?a:c,o=e.placeholder,m=void 0===o?"Enter ".concat(n):o,d=e.required,j=void 0!==d&&d,h=e.onChange,u=void 0===h?function(){}:h,g=Object(l.useState)((function(){return"".concat(a,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(g,1)[0],p=Object(l.useState)(!1),v=Object(s.a)(p,2),f=v[0],x=v[1],M=f&&j&&!i;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label label--".concat(t),htmlFor:O,children:n}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(a),className:b()("input",{"is-danger":M},"input--".concat(t)),placeholder:m,value:i,onChange:function(e){return u(e.target.value)},onBlur:function(){return x(!0)}})}),M&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},u=function(e){var t=e.theme,a=e.onAdd,i=Object(l.useState)(0),c=Object(s.a)(i,2),n=c[0],o=c[1],m=Object(l.useState)(""),d=Object(s.a)(m,2),j=d[0],b=d[1],u=Object(l.useState)(""),g=Object(s.a)(u,2),O=g[0],p=g[1],v=Object(l.useState)(""),f=Object(s.a)(v,2),x=f[0],M=f[1],N=Object(l.useState)(""),w=Object(s.a)(N,2),T=w[0],y=w[1],U=Object(l.useState)(""),I=Object(s.a)(U,2),B=I[0],k=I[1],S=function(){b(""),p(""),M(""),y(""),k("")};return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){var t=function(e,t,a,i,c){return{title:e,description:t,imgUrl:a,imdbUrl:i,imdbId:c}}(j,O,x,T,B);!function(e,t,a,i,c,n){a.preventDefault(),c(i+1),t(e),n()}(t,a,e,n,o,S)},children:[Object(r.jsx)("h2",{className:"title title--".concat(t),children:"Add a movie"}),Object(r.jsx)(h,{theme:t,name:"title",label:"Title",value:j,onChange:b,required:!0}),Object(r.jsx)(h,{theme:t,name:"description",label:"Description",value:O,onChange:p}),Object(r.jsx)(h,{theme:t,name:"imgUrl",label:"Image URL",value:x,onChange:M,required:!0}),Object(r.jsx)(h,{theme:t,name:"imdbUrl",label:"Imdb URL",value:T,onChange:y,required:!0}),Object(r.jsx)(h,{theme:t,name:"imdbId",label:"Imdb ID",value:B,onChange:k,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!(j&&x&&T&&B),children:"Add"})})})]},n)},g=(a(21),function(e){var t=e.changeTheme,a=e.theme;return Object(r.jsxs)("header",{className:"header header--".concat(a),children:[Object(r.jsx)("span",{className:"logo logo--".concat(a),children:"MoviesHub"}),Object(r.jsx)("button",{className:"change-theme-btn change-theme-btn--".concat(a),type:"button",onClick:t,children:"THEME"})]})}),O=function(){var e=Object(l.useState)(Object(n.a)(o)),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(l.useState)("light"),m=Object(s.a)(c,2),j=m[0],b=m[1];return Object(r.jsxs)("div",{className:"page page--".concat(j),children:[Object(r.jsx)(g,{changeTheme:function(){b("light"===j?"dark":"light")},theme:j}),Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:a,theme:j})}),Object(r.jsx)("div",{className:"sidebar sidebar--".concat(j),children:Object(r.jsx)(u,{theme:j,onAdd:function(e){return function(e){i([].concat(Object(n.a)(a),[e]))}(e)}})})]})};c.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.6e9890e5.chunk.js.map
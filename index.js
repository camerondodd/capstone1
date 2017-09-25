//STAY IN

const ideas=["<a href='https://www.youtube.com/watch?v=ZkW8gMkf1-k'><img src='https://i.ytimg.com/vi/ZkW8gMkf1-k/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCrT5IfRnYSs9Hw1SzVCU6hradcug' alt='Home picnic picture'></a></br>Have an indoor picnic",
	"<a href='https://www.youtube.com/watch?v=yyhDigtkjVw'><img src='https://i.ytimg.com/vi/yyhDigtkjVw/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyfktvnW-TiWLtvSO5kuwBQR0_dQ' alt='beer tasting'></a></br>Beer tasting",
	"<a href='https://www.youtube.com/watch?v=DrrnZb_ikLQ'><img src='https://i.ytimg.com/vi/DrrnZb_ikLQ/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAsck64eO5ijsk9V_gv4xQvFo2FGw' alt='whiskey tasting basics'></a></br>Scotch tasting",
	"<a href='https://www.youtube.com/watch?v=8SWo2hOcCeA'><img src='https://i.ytimg.com/vi/8SWo2hOcCeA/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDqEmC7Rd-t3gCdKuiqHF4osblOCg' alt='Do you need a video to explain eating ice cream?'></a></br>Ice cream night!",
	"<a href='https://www.youtube.com/watch?v=9QUpTeTVPJo'><img src='https://i.ytimg.com/vi/9QUpTeTVPJo/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCl_vAn0r_iyZNeJFbCTQpVZ5rEWg' alt='how to make sushi'></a></br>Make Sushi together", 
	"<a href='https://www.youtube.com/watch?v=O9HGpensIR8'><img src='https://i.ytimg.com/vi/O9HGpensIR8/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDjOrT6FBFUrkeJcdK6IHil12yulQ' alt='strawberry fraisier dessert'></a></br>Learn to bake a new dessert together", 
	"<a href='https://www.youtube.com/user/singkingkaraoke'><img src='https://yt3.ggpht.com/-RQAPMaxL1gE/AAAAAAAAAAI/AAAAAAAAAAA/zawPgoguLwI/s176-c-k-no-mo-rj-c0xffffff/photo.jpg' alt='sing king'></a></br>YouTube karaoke. Look up karaoke versions of your favorite songs on YouTube", 
	"<a href='https://www.youtube.com/watch?v=iZ5ptrWBPjM'><img src='https://i.ytimg.com/vi/iZ5ptrWBPjM/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDzu20gN1jC2KMQ16tHInLG7E2f6A' alt='painting date'></a></br>Paint together",
	"<a href='https://www.youtube.com/watch?v=O2hMR4i73aQ'><img src='https://i.ytimg.com/vi/O2hMR4i73aQ/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCNI988GUQLuqk9Gq5xh8jaYI_Ldw' alt='face painting?'></a></br>Paint eachother", 
	"<a href='https://www.youtube.com/watch?v=J1aHM5-HfgY'><img src='https://i.ytimg.com/vi/J1aHM5-HfgY/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBKFn5j0_t8CdKITiyJq0gqUtn0DA' alt='wine tasting 101'></a></br>Wine tasting", 
	"<a href='https://www.youtube.com/watch?v=XUbG8jboh4M'><img src='https://i.ytimg.com/vi/XUbG8jboh4M/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCufNM1wbohHgjonUSjOqfMEeyY9A' alt='stargazing basics'></a></br>Stargazing", 
	"<a href='https://www.youtube.com/watch?v=UPvqzUE1dFk'><img src='https://i.ytimg.com/vi/UPvqzUE1dFk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBMfugWB9IjE-dYSfxbv-nsjoCACg' alt='the perfect smore'></a></br>Roast marshmallows",
	"<a href='https://www.youtube.com/watch?v=J0GwYCxRsHI'><img src='https://i.ytimg.com/vi/J0GwYCxRsHI/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrvA7TcFvTUcDKTgtrb2nHrMyH2w' alt='the best couch co-op games'></a></br>Play videogames together", 
	"<a href='https://www.youtube.com/watch?v=Bu6RlmvuDA4'><img src='https://i.ytimg.com/vi/Bu6RlmvuDA4/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCK0nUBl0cTyt4MivUErrezpcvONA' alt='stress relieving foot massage'></a></br>Foot rubs", 
	"<a href='https://www.youtube.com/watch?v=W0rDJUC-sog'><img src='https://i.ytimg.com/vi/W0rDJUC-sog/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMhB3RUh6UPtomoQeSgmKzR1seoA' alt='flavoured popcorn'></a></br>Curl up on the couch with a bowl of popcorn and watch a movie", 
	"<a href='https://www.youtube.com/watch?v=kSVwD7S5VGk'><img src='https://i.ytimg.com/vi/kSVwD7S5VGk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA3f4a7Fv2bajUVuSL5SWLVPNCOJQ' alt='virtual candles'></a></br>Turn off all of the lights and enjoy candle light.  Makes board games more fun, I hear.",
	"<a href='https://www.youtube.com/watch?v=kXngOFKZ5dQ'><img src='https://i.ytimg.com/vi/kXngOFKZ5dQ/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtCfrbdPpFv0h4WLUDgVEK6069jw' alt='Indian chicken curry'></a></br>Travel the world in your living room!  Cook something from a different culture, and play some of their music", 
	"<a href='https://www.youtube.com/watch?v=xgnLllh90mQ'><img src='https://i.ytimg.com/vi/xgnLllh90mQ/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDc0trcJbxc3Y2Pr35kkzB047KU6Q' alt='10 mystery puzzles'></a></br>Everyone loves puzzles", 
	"<a href='https://www.youtube.com/watch?v=HCAPjIVOdJw'><img src='https://i.ytimg.com/vi/HCAPjIVOdJw/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLANPRhVoJFqztQUNaQ0BTqy-qhGMA' alt='make your own pepperoni pizza'></a></br>Make a pizza together", 
	"<a href='https://www.youtube.com/watch?v=bTOkCOKIVeY'><img src='https://i.ytimg.com/vi/bTOkCOKIVeY/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBuot2gbTRJb5tWJ8wtW6iL6dD-gQ' alt='blind taco taste test'></a></br>Blind taste testing... if you trust your partner", 
	"<a href='https://www.youtube.com/watch?v=-xK4wkRC_e8'><img src='https://i.ytimg.com/vi/-xK4wkRC_e8/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDdyxORceon_oGZDSHFVhDfli40EQ' alt='make the perfect playlist'></a></br>Work together to make a playlist for your time together... or for your life together as told in an action anime", 
	"<a href='https://www.youtube.com/watch?v=-yZfp7GfcnI'><img src='https://i.ytimg.com/vi/-yZfp7GfcnI/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCkmme0HW-yTkgcLxqfeJKl_KCdUg' alt='10 new hobbies'></a></br>Learn a new hobby!", 
	"<a href='https://www.youtube.com/watch?v=h54aQ8zMGEM'><img src='https://i.ytimg.com/vi/h54aQ8zMGEM/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAk7nJFeX6BPOmqwOMjKhtrmr57xg' alt='top 10 card games'></a></br>Play cards", 
	"<a href='https://www.youtube.com/watch?v=Ck5i8CVEkJI'><img src='https://i.ytimg.com/vi/Ck5i8CVEkJI/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLByd-yZdDsS8xEJtyqFJiOTIRRK3g' alt='how to play darts'></a></br>Play darts", 
	"<a href='https://www.youtube.com/watch?v=1uAlyqBPZw0'><img src='https://i.ytimg.com/vi/1uAlyqBPZw0/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAmTsi8TMIKshQ28OQ4JoSWJvZZlA' alt='tips for planning a vacation'></a></br>Plan your next trip together",
	"<a href='https://www.youtube.com/watch?v=ZzXSRoeZMh8'><img src='https://i.ytimg.com/vi/ZzXSRoeZMh8/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCuiqiAHompCgZwRMjZmL8Njg4fmg' alt='my favorite romance books'></a></br>Read to eachother", 
	"<a href='https://www.youtube.com/watch?v=Jc1esMeDb5k'><img src='https://i.ytimg.com/vi/Jc1esMeDb5k/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_EXOJAQdsoul4br-pBDBxX54qOw' alt='how to slow dance'></a></br>YouTube dance lessons! You know you want to salsa", 
	"<a href='https://www.youtube.com/watch?v=B5h2QGpvbhc'><img src='https://i.ytimg.com/vi/B5h2QGpvbhc/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCqoZs_Rn5Og_691zfbtzxgpgbUtg' alt='top 11 boardgames of 2016'></a></br>Boardgame! I call the tophat.", 
	"<a href='https://www.youtube.com/watch?v=vbWGWmSbPKY'><img src='https://i.ytimg.com/vi/vbWGWmSbPKY/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA54XYbGS2Rgje0uiUB0p5hBAjNfA' alt='top 5 ways to make a top 10 list'></a></br>Make top 10 lists together", 
	"<a href='https://www.youtube.com/watch?v=9C1leq--_wM'><img src='https://i.ytimg.com/vi/9C1leq--_wM/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDcmDgYrObnSS0QpKiJYEjtEmruhw' alt='people try walking their cats'></a></br>Take a walk together",
	"<a href='https://www.youtube.com/watch?v=z2EXARrBLFw'><img src='https://i.ytimg.com/vi/z2EXARrBLFw/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBW0kLT7HkcwTCgv7i7veu_SdimPw' alt='building a pillow fort'></a></br>Build a fort!",
	"<a href='https://www.youtube.com/watch?v=KgK0E7N12ds'><img src='https://i.ytimg.com/vi/KgK0E7N12ds/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDr6x9F1aKnG7As62hCNKDBkiivAw' alt='romantic bubble bath'></a></br>Take a bath together",
	"<a href='https://www.youtube.com/watch?v=oGQ8XvzLsNs'><img src='https://i.ytimg.com/vi/oGQ8XvzLsNs/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAMHnjJe20YECgATfdeUqdst_Ppjw' alt='how to journal'></a></br>Start a journal together", 
	"<a href='https://www.youtube.com/watch?v=W0HEqI3pJIM'><img src='https://i.ytimg.com/vi/W0HEqI3pJIM/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA7V5nMxOZILZB917pHNyHqU7usaA' alt='how to write a great short story'></a></br>Write a story together",
	"<a href='https://www.youtube.com/watch?v=WTKFIwRqMwk'><img src='https://i.ytimg.com/vi/WTKFIwRqMwk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPDvITKIxEF7wqrhV_Grk8g0Sp6g' alt='10 great questions to ask on a date'></a></br>Take turns asking eachother questions, you never know what you might learn",
	"<a href='https://www.youtube.com/watch?v=ErCHug35BMI'><img src='https://i.ytimg.com/vi/ErCHug35BMI/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBCK9BV5V_9M1lFe3GdxUGLrkeisg' alt='diy glamping'></a></br>Set up a tent in your living room. Everyone loves camping when you don't need to go outside!",
	"<a href='http://either.io/'><img src='https://i.ytimg.com/vi/-4sCARhhUEI/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDow_Bh7zQIxJOAQ9iyaDqxOsWQiw' alt='either'></a></br>Play 'Would you rather'", 
	"<a href='https://www.youtube.com/watch?v=_m0MOzjmdcE'><img src='https://i.ytimg.com/vi/_m0MOzjmdcE/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAs-MXlrhrh-uYyyeo19GltfPZ83Q' alt='fondue party ideas'></a></br>Fondue? More like Fun-do!",
	"<a href='http://www.guinnessworldrecords.com/'><img src='https://yt3.ggpht.com/-9dQeoQVgVv4/AAAAAAAAAAI/AAAAAAAAAAA/0j3pAXlGaU8/s176-c-k-no-mo-rj-c0xffffff/photo.jpg' alt='guinness world records'></a></br>Hit the Guinness Book of World Records! Anything you can  break together?",
	"<a href='https://www.youtube.com/watch?v=WzBjEm5yG60'><img src='https://i.ytimg.com/vi/WzBjEm5yG60/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBE0-pFtC15pRd2QUTkIH9BAtMXmQ' alt='7 tips to a perfect movie marathon'></a></br>Movie marathon",
	"<a href='https://www.youtube.com/watch?v=6cVNM53oOhI'><img src='https://i.ytimg.com/vi/6cVNM53oOhI/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDYoRBCbOBzy3QlpYuxv9qAx_F08w' alt='the painful twister challenge'></a></br>Play Twister!"];

const edamamSearchURL='https://api.edamam.com/search';

function stayInButton(){
	$('.outOrInBox').on('click','.stayInButton', function(){
		console.log('stayInButton pressed');
		$('.outOrInPage').prop('hidden',true);
		$('.inPage').prop('hidden',false);
	});
}

function ideaSubmit(){
   $('.ideaContainer').on('click','.ideaButton', function(){
    console.log("ideaButton pressed");
    $('.ideaResults').prop('hidden',false);
    $('.ideaResults').html("");
		let randomIdea=ideas[Math.floor(Math.random()*ideas.length)];
		$('.ideaResults').html(randomIdea);
  });
}

function recipeSubmit(){
  $('.recipeRequestContainer').submit(event => {
    event.preventDefault();
    const queryTarget=$(event.currentTarget).find('.recipeInput');
    const recipeInput=queryTarget.val();
    queryTarget.val('');
    console.log('recipeSubmit ran with search term '+recipeInput);
    getRecipes(recipeInput,displayRecipeResults);
    $('.recipeResults').prop('hidden',false);
  });
}

function getRecipes(searchTerm,callback){
    settings={
      method:'GET',
      dataType: 'json',
      url:edamamSearchURL,
      data:{
        from:0,
        to:10,
        app_id:'0ddfcbda',
        app_key:'ff994fb730845d74622198d22cb55dfd',
        q:`${searchTerm}`
      },
      success:callback
    };
  $.ajax(settings);
  console.log('getRecipes ran');
} 

function displayRecipeResults(data){
  const results=data.hits.map((item)=> renderRecipes(item));
  $('.recipeResults').html(results);
  console.log (results);
  console.log('displayRecipeResults ran');
  // const ingredientString=`${item.recipe.ingredientLines}`;
  // const ingredients=ingredientString.split(',');
  // for (i=0; i<ingredients.length; i++){
    // $('.resultHolder ul').append(`<li>${item.recipe.ingredientLines[i]}</li>`);
  // }
}

function renderRecipes(item){
  console.log('renderRecipes ran');
  return`<div class="resultHolder">
      <a href="${item.recipe.url}">
       <img class="foodPic" src="${item.recipe.image}">
      </a>
      </br>
      <p>${item.recipe.label}</p>
    </div>`;
}

// GO OUT

const cityURL="https://developers.zomato.com/api/v2.1/locations";

const foodURL="https://developers.zomato.com/api/v2.1/search";

const eventURL="https://api.eventful.com/jsonp/events/search";

function goOutButton(){
	$('.outOrInBox').on('click','.goOutButton', function(){
		console.log('goOutButton pressed');
		$('.outOrInPage').prop('hidden',true);
		$('.outPage').prop('hidden',false);
	});
}

function citySubmit(){
  $('.cityRequestContainer').unbind("submit").bind("submit",event => {
    event.preventDefault();
    const queryTarget=$(event.currentTarget).find('.cityInput');
    const cityInput=queryTarget.val();
    queryTarget.val('');
    console.log('citySubmit ran with search term '+cityInput);
    getCity(cityInput,entityFind);
    eventCity=cityInput;
   $('.foodRequestContainer').prop('hidden',false);
   $('.eventRequestContainer').prop('hidden',false);
   $('.cityResults').prop('hidden',false);
   $('.cityResults').html('');
   $('.cityResults').html(`I hear good things about ${cityInput}!`);
  });
}

function getCity(searchTerm,callback){
    settings={
      method:'GET',
      url:cityURL,
      headers:{
        "user-key":"dfade01cfcbfa8fa156c5d8a39248d21"
      },
      data:{
        query:searchTerm
      },
      success:callback
    };
  $.ajax(settings);
  console.log('getCity ran');
} 

function entityFind(data){
  console.log("entityFind ran");
  const results=data.location_suggestions.map((item)=> renderEntity(item));
}

function renderEntity(item){
  console.log('renderEntity ran');
  entity=`${item.entity_id}`;
  console.log(entity);
}

function foodSubmit(){
  $('.foodRequestContainer').submit(event => {
    event.preventDefault();
    const queryTarget=$(event.currentTarget).find('.foodInput');
    const foodInput=queryTarget.val();
    queryTarget.val('');
    console.log('foodSubmit ran with search term '+foodInput);
    getFood(foodInput,displayFoodResults);
  });
}

function getFood(searchTerm,callback){
    console.log(entity);
    settings={
      method:'GET',
      dataType: 'json',
      url:foodURL,
      headers:{
        "user-key":"dfade01cfcbfa8fa156c5d8a39248d21"
      },
      data:{
        count:10,
        entity_id:entity,
        q:searchTerm
      },
      success:callback
    };
  $.ajax(settings);
  console.log('getFood ran');
}

function displayFoodResults(data){
  console.log('displayFoodResults is running '+data);
  const results=data.restaurants.map((item)=> renderFood(item));
  $('.foodResults').prop('hidden',false);
  $('.foodResults').html(results);
  console.log('displayFoodResults ran');
}

function renderFood(item){
  console.log('renderFood ran');
  return`
      <div class="resultHolder">
      <a href="${item.restaurant.url}">
       ${item.restaurant.name}
      </a>
      </br>
      <p>User Rating: ${item.restaurant.user_rating.rating_text}</p>
      <p>Price Range: ${item.restaurant.price_range}/5</p>
      <p>${item.restaurant.location.address}</p>
      </div>
    `;
}

function eventSubmit(){
  $('.eventRequestContainer').submit(event => {
    event.preventDefault();
    const queryTarget=$(event.currentTarget).find('.eventInput');
    const eventInput=queryTarget.val();
    queryTarget.val('');
    console.log('eventSubmit ran with search term '+eventInput);
    getEvent(eventInput,displayEventResults);
  });
}

function getEvent(searchTerm,callback){
    settings={
      method:'GET',
      dataType:'jsonp',
      url:eventURL,
      data:{
        app_key:"tsTVsnpR6pkcLkn6",
        location:eventCity,
        date:"Today",
        keywords:searchTerm
      },
      success:callback
    };
  $.ajax(settings);
  console.log(eventURL);
  console.log(eventCity);
  console.log('getEvent ran');
}

function displayEventResults(data){
  console.log('displayEventResults is running '+data);
  const results=data.events.event.map((item)=> renderEvent(item));
  $('.eventResults').prop('hidden',false);
  $('.eventResults').html(results);
  // let eventList=[${data.events.event}];
  //  if (eventList.length>1){
  //  	$('.eventResults').html(results);
  // 	 	console.log('displayEventResults ran');
  //  }
  //  else{
  //  	$('.eventResults').html("<div class="resultHolder"><p>Sorry, No Results were Found</p></div>");
  //  }
}

function renderEvent(item){
  console.log('renderEvent ran');
  console.log(item);
  return`<div class="resultHolder">
        <a href="${item.url}">
          ${item.title}
        </a>
        </br>
        <p>Starts: ${item.start_time}</p>
        <p>Venue: <a href="${item.venue_url}">${item.venue_name}</a></p>
        <p>Address: ${item.venue_address}</p>
        <p>${item.city_name}, ${item.region_abbr}  ${item.postal_code}</p>
      </div>
    `;
}


// OTHER

function homeButton(){
  $('.returnHome').on('click','.homeButton', function(){
    console.log("homeButton pressed");
    $('.outOrInPage').prop('hidden',false);
		$('.outPage').prop('hidden',true);
		$('.inPage').prop('hidden',true);
		$('.recipeResults').prop('hidden',true);
		$('.ideaResults').prop('hidden',true);
		$('.foodResults').prop('hidden',true);
		$('.eventResults').prop('hidden',true);
		$('.cityResults').prop('hidden',true);
		$('.foodRequestContainer').prop('hidden',true);
		$('.eventRequestContainer').prop('hidden',true);
  });
}

function functionRunner(){
	goOutButton();
	stayInButton();
	homeButton();
	recipeSubmit();
	citySubmit();
	foodSubmit();
	eventSubmit();
	ideaSubmit();
}

$(functionRunner);
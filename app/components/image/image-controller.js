function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
var service = new ImageService;

this.getImage = function(url){
	service.getImage()
	.then(draw)
}
this.getImage()

function draw(image){
	image = JSON.parse(image)
	var imageElem = document.getElementById("body").style.backgroundImage = `url('${image.url}')`
  }
}



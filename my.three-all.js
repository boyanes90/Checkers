(function ( mythree , $, undefined) {

mythree.init = function(hook) {

	var WIDTH = 400,
	  HEIGHT = 350;
	var renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize(WIDTH, HEIGHT);
	hook.append(renderer.domElement);
	//Camera variables
	var VIEW_ANGLE = 65, //65 FOV is most 'natural' FOV
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,		//these elements are needed for cameras to
	  FAR = 10000;		//partition space correctly
	var camera =
	  new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
	camera.position.z = 300;
	
	// Create a controls Object
	var controls = new THREE.TrackballControls( camera );
	controls.target.set( 0, 0, 0 )
	
	var scene = new THREE.Scene();
	scene.add(camera);
	
	var materials = [
	  new THREE.MeshBasicMaterial(
		{
		  map: THREE.ImageUtils.loadTexture('checker_board.jpg')
		}),
		
		new THREE.MeshBasicMaterial(
		{
		  map: THREE.ImageUtils.loadTexture('checker_large.jpg')
		}),
		
		new THREE.MeshBasicMaterial(
		{
		  map: THREE.ImageUtils.loadTexture('white.jpg')
		}),
		
		new THREE.MeshBasicMaterial(
		{
		  map: THREE.ImageUtils.loadTexture('black.jpg')
		}),
		
		new THREE.MeshBasicMaterial(
		{
		  map: THREE.ImageUtils.loadTexture('checker_largeII.jpg')
		})
		
	];		
		
	var cube1 = new THREE.Mesh(
	  new THREE.CubeGeometry(
		250,	15, 250),
	  materials [0]);
	  
	  var cube2 = new THREE.Mesh(
	  new THREE.CubeGeometry(
		200,	0, 200),
	  materials [1]);
	  
	cube2.translateY(8);
	
	var mesh = [];
	
	var posiciones = [
	new THREE.Vector3(-87.5, 10, -87.5),
	new THREE.Vector3(-87.5, 10, -37.5),
	new THREE.Vector3(-87.5, 10, 12.5),
	new THREE.Vector3(-87.5, 10, 62.5),
	new THREE.Vector3(-37.5, 10, -87.5),
	new THREE.Vector3(-37.5, 10, -37.5),
	new THREE.Vector3(-37.5, 10, 12.5),
	new THREE.Vector3(-37.5, 10, 62.5),
	new THREE.Vector3(12.5, 10, -87.5),
	new THREE.Vector3(12.5, 10, -37.5),
	new THREE.Vector3(12.5, 10, 12.5),
	new THREE.Vector3(12.5, 10, 62.5),
	new THREE.Vector3(62.5, 10, -87.5),
	new THREE.Vector3(62.5, 10, -37.5),
	new THREE.Vector3(62.5, 10, 12.5),
	new THREE.Vector3(62.5, 10, 62.5),
	new THREE.Vector3(-62.5, 10, -62.5),
	new THREE.Vector3(-62.5, 10, -12.5),
	new THREE.Vector3(-62.5, 10, 37.5),
	new THREE.Vector3(-62.5, 10, 87.5),
	new THREE.Vector3(-12.5, 10, -62.5),
	new THREE.Vector3(-12.5, 10, -12.5),
	new THREE.Vector3(-12.5, 10, 37.5),
	new THREE.Vector3(-12.5, 10, 87.5),
	new THREE.Vector3(37.5, 10, -62.5),
	new THREE.Vector3(37.5, 10, -12.5),
	new THREE.Vector3(37.5, 10, 37.5),
	new THREE.Vector3(37.5, 10, 87.5),
	new THREE.Vector3(87.5, 10, -62.5),
	new THREE.Vector3(87.5, 10, -12.5),
	new THREE.Vector3(87.5, 10, 37.5),
	new THREE.Vector3(87.5, 10, 87.5),
	
	new THREE.Vector3(87.5, 10, -87.5),
	new THREE.Vector3(87.5, 10, -37.5),
	new THREE.Vector3(87.5, 10, 12.5),
	new THREE.Vector3(87.5, 10, 62.5),
	new THREE.Vector3(37.5, 10, -87.5),
	new THREE.Vector3(37.5, 10, -37.5),
	new THREE.Vector3(37.5, 10, 12.5),
	new THREE.Vector3(37.5, 10, 62.5),
	new THREE.Vector3(-12.5, 10, -87.5),
	new THREE.Vector3(-12.5, 10, -37.5),
	new THREE.Vector3(-12.5, 10, 12.5),
	new THREE.Vector3(-12.5, 10, 62.5),
	new THREE.Vector3(-62.5, 10, -87.5),
	new THREE.Vector3(-62.5, 10, -37.5),
	new THREE.Vector3(-62.5, 10, 12.5),
	new THREE.Vector3(-62.5, 10, 62.5),
	new THREE.Vector3(62.5, 10, -62.5),
	new THREE.Vector3(62.5, 10, -12.5),
	new THREE.Vector3(62.5, 10, 37.5),
	new THREE.Vector3(62.5, 10, 87.5),
	new THREE.Vector3(12.5, 10, -62.5),
	new THREE.Vector3(12.5, 10, -12.5),
	new THREE.Vector3(12.5, 10, 37.5),
	new THREE.Vector3(12.5, 10, 87.5),
	new THREE.Vector3(-37.5, 10, -62.5),
	new THREE.Vector3(-37.5, 10, -12.5),
	new THREE.Vector3(-37.5, 10, 37.5),
	new THREE.Vector3(-37.5, 10, 87.5),
	new THREE.Vector3(-87.5, 10, -62.5),
	new THREE.Vector3(-87.5, 10, -12.5),
	new THREE.Vector3(-87.5, 10, 37.5),
	new THREE.Vector3(-87.5, 10, 87.5)
	
	];
		
	loader = new THREE.JSONLoader();
    loader.load( "data/piece.json", function( geometry ) {
	
	mesh = [
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		new THREE.Mesh( geometry, materials[2]),
		
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
	    new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3]),
		new THREE.Mesh( geometry, materials[3])
		];


		//modify mesh position, scale, rotation here
		
		for (var i=0; i<24; i++) {		
		mesh[i].scale.set( 20, 20, 20 );
		}
		
        mesh[0].position = new THREE.Vector3(-37.5, 10, 12.5);
        mesh[1].position = new THREE.Vector3(-87.5, 10, 12.5);
        mesh[2].position = new THREE.Vector3(-37.5, 10, 62.5);
        mesh[3].position = new THREE.Vector3(-87.5, 10, 62.5);
        mesh[4].position = new THREE.Vector3(-37.5, 10, -37.5);
        mesh[5].position = new THREE.Vector3(-87.5, 10, -37.5);
        mesh[6].position = new THREE.Vector3(-37.5, 10, -87.5);
        mesh[7].position = new THREE.Vector3(-87.5, 10, -87.5);
        mesh[8].position = new THREE.Vector3(-62.5, 10, -62.5);
        mesh[9].position = new THREE.Vector3(-62.5, 10, -12.5);
        mesh[10].position = new THREE.Vector3(-62.5, 10, 37.5);
        mesh[11].position = new THREE.Vector3(-62.5, 10, 87.5);
		
        mesh[12].position = new THREE.Vector3(62.5, 10, 12.5); 
        mesh[13].position = new THREE.Vector3(62.5, 10, 62.5);	
        mesh[14].position = new THREE.Vector3(62.5, 10, -37.5);
        mesh[15].position = new THREE.Vector3(87.5, 10, -12.5);
        mesh[16].position = new THREE.Vector3(37.5, 10, -12.5);
        mesh[17].position = new THREE.Vector3(37.5, 10, -62.5);
        mesh[18].position = new THREE.Vector3(87.5, 10, -62.5);
        mesh[19].position = new THREE.Vector3(62.5, 10, -87.5);
        mesh[20].position = new THREE.Vector3(87.5, 10, 37.5);
        mesh[21].position = new THREE.Vector3(37.5, 10, 37.5);	
        mesh[22].position = new THREE.Vector3(87.5, 10, 87.5);
        mesh[23].position = new THREE.Vector3(37.5, 10, 87.5);
		
	
		//add it to the scene	
		for (var i=0; i<24; i++) {
		scene.add(mesh[i]);
		}
    } );
	
	scene.add(cube1);
	scene.add(cube2);
	
	var pointLight =
	  new THREE.PointLight(0xFFFFFF);
	pointLight.position = new THREE.Vector3(-10, 30, 100);

	scene.add(pointLight);
	
	$( "<button type=\"button\" id=\"colorButton\">Change Board</button>" ).insertAfter('#hook');
	$( "<button type=\"button\" id=\"randomButton\">Randomize</button>" ).insertAfter('#colorButton');;
	
		
	$('#colorButton').on("click", function() {
	
		$("#colorButton").hide();
		$( "<button type=\"button\" id=\"uncolorButton\">Change Board</button>" ).insertAfter('#hook');
		
		scene.remove(cube2);
		
		var cube3 = new THREE.Mesh(
		new THREE.CubeGeometry(
		200,	0, 200),
		materials[4]);
	  
		cube3.translateY(8);	
		scene.add(cube3);
		
		$('#uncolorButton').on("click", function() {
			$("#uncolorButton").hide();
			$("#colorButton").show();
			scene.remove(cube3);
			scene.add(cube2);			
		});
	
    });
	
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	Array.prototype.shuffle = function() {
		var s = [];
		while (this.length) s.push(this.splice(Math.random() * this.length, 1)[0]);
		while (s.length) this.push(s.pop());
		return this;
	}
	
	var whitePositions = [];
	var blackPositions = [];
	var tween;
	
	$('#randomButton').on("click", function() {	

		whitePositions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
		whitePositions.shuffle();
		blackPositions = [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];
		blackPositions.shuffle();
		
		var position;
		var target;
		
		for (var i = 0; i<12 ; i++) {	
			var k = whitePositions[i];
			
			position = mesh[i].position;
			target = posiciones[k];

			tween = new TWEEN.Tween(position).to(target, 1500);

			tween.delay(200);
			tween.easing(TWEEN.Easing.Elastic.InOut);
			tween.start();
		}	
		
		for (var j = 12; j<24 ; j++) {	
			var l = blackPositions[j];
			
			position = mesh[j].position;
			target = posiciones[l];

			tween = new TWEEN.Tween(position).to(target, 1500);

			tween.delay(200);
			tween.easing(TWEEN.Easing.Elastic.InOut);
			tween.start();
		}
		
	});	
	
	function renderLoop() {
		renderer.render(scene, camera);

		controls.update();
		TWEEN.update();
		window.requestAnimationFrame(renderLoop);
	}
	
	
	window.requestAnimationFrame(renderLoop);
}

})(window.mythree = window.mythree || {} , jQuery)

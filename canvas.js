/*
Человечек Стив
1. Нарисовать куб готово
2. человечек готово
	текстура готово
	движение
3. мир
	планеты
		сфера готово
		освещение
	земля
*/


window.onload = function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	var ambient = new THREE.AmbientLight( 0x101030 );
	scene.add( ambient );

	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
	directionalLight.position.set( 0, 0, 1 );
	scene.add( directionalLight );


	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	

	/*var planet = {}
	var manager = new THREE.LoadingManager();
	manager.onProgress = function ( item, loaded, total ) {

		console.log( item, loaded, total );

	};

	var texture = new THREE.Texture();
	var loader = new THREE.ImageLoader( manager );
	loader.load( 'Stive.png', function ( image ) {

		texture.image = image;
		texture.needsUpdate = true;

	} );

	var loader = new THREE.OBJLoader( manager );

	loader.load(
	// resource URL
	'Steve.obj',
	// Function when resource is loaded
	function ( object ) {
		planet = object
		object.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.material.map = texture;

			}

		} );
			scene.add( object );
		}
	);
*/
var size = 20
var geometry = new THREE.SphereGeometry( size, 32, 32 )
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
material.map    = THREE.ImageUtils.loadTexture('http://texturelib.com/Textures/ground/stone%20ground/ground_stone_ground_0029_02_preview.jpg')
var planet = new THREE.Mesh( geometry, material );


scene.add( planet );

	camera.position.z = 75;
	function render() {
		//requestAnimationFrame( render );
		planet.rotation.y += 0.01;
		renderer.render( scene, camera );
	}
	render();
}
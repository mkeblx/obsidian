var ColorModule = function () {

	FRAME.Module.call( this );

	this.parameters.input = {

		color: 0xffffff,
		opacity : 1

	};

	var camera, scene, material;

	this.init = function ( parameters ) {

		camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
		this.camera = camera;

		material = new THREE.MeshBasicMaterial( {
			color: parameters.color,
			opacity: parameters.opacity,
			transparent: true
		} );

		scene = new THREE.Scene();
		this.scene = scene;

		var object = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), material );
		scene.add( object );

	};

	this.update = function ( t ) {

		render( scene, camera );
	};

};
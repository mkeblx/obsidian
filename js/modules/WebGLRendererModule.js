var WebGLRendererModule = function () {

	FRAME.Module.call( this );

	this.parameters.input = {

		width: 800,
		height: 600,
		dom: null

	};

	var width, height;

	var resize = function () {

		renderer.setSize(
			width * ( window.innerWidth / width ),
			height * ( window.innerWidth / width )
		);

		renderer.domElement.style.position = 'absolute';
		renderer.domElement.style.left = '0px';
		renderer.domElement.style.top = ( ( window.innerHeight - ( renderer.domElement.height / renderer.devicePixelRatio ) ) / 2 ) + 'px';

	};

	this.init = function ( parameters ) {

		width = parameters.width;
		height = parameters.height;

		//renderer = new THREE.WebGLRenderer( { antialias: true, alpha: false } ); // TODO: Remove this nasty global
		renderer = new THREE.WebGLRenderer({
			devicePixelRatio: 1,
			alpha: false,
			clearColor: 0x000000,
			antialias: true
		});

		var DK1 = [1280, 800];
		var DK2 = [1920, 1080];

		var HMD = DK1;

		effect = new THREE.OculusRiftEffect(renderer, {
			worldFactor: 1,
			renderScale: 1.7 } );
		effect.setSize(HMD[0],HMD[1]);

		if ( parameters.dom !== null ) {

			parameters.dom.appendChild( renderer.domElement );
			parameters.dom = null; // TODO: Another hack

		}

		//window.addEventListener( 'resize', resize );

		resize();

	};

};

var WebGLRendererModule = function () {

	FRAME.Module.call( this );

	this.parameters.input = {

		width: 1920,
		height: 1080,
		dom: null

	};

	var width, height;

	var resize = function () {

		/*renderer.setSize(
			width * ( window.innerWidth / width ),
			height * ( window.innerWidth / width )
		);*/

	};

	this.init = function ( parameters ) {

		width = parameters.width;
		height = parameters.height;

		//renderer = new THREE.WebGLRenderer( { antialias: true, alpha: false } ); // TODO: Remove this nasty global
		renderer = new THREE.WebGLRenderer({
			alpha: false,
			clearColor: 0x000000,
			antialias: true
		});

		renderer.setSize(window.innerWidth, window.innerHeight);


		effect = new THREE.VREffect(renderer);
		this.effect = effect;

		if ( parameters.dom !== null ) {

			parameters.dom.appendChild( renderer.domElement );
			//renderer.domElement.style.width = '100%';
			//renderer.domElement.style.height = '100%';
			parameters.dom = null; // TODO: Another hack

		}

		//window.addEventListener( 'resize', resize );

		resize();

	};

};

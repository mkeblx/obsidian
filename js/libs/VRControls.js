/**
 * @author dmarcos / https://github.com/dmarcos
 */

THREE.VRControls = function ( done ) {


	this._init = function () {
		var self = this;
		if ( !navigator.getVRDevices ) {
			if ( done ) {
				done("Your browser is not VR Ready");
			}
			return;
		}

		navigator.getVRDevices().then( gotVRDevices );

		function gotVRDevices( devices ) {
			var vrInput;
			var error;
			for ( var i = 0; i < devices.length; ++i ) {
				if ( devices[i] instanceof PositionSensorVRDevice ) {
					vrInput = devices[i]
					self._vrInput = vrInput;
					break; // We keep the first we encounter
				}
			}
			if ( done ) {
				if ( !vrInput ) {
				 error = 'HMD not available';
				}
				done( error );
			}
		}
	};

	this._init();

	this.update = function( obj ) {
		var quat;
		var vrState = this.getVRState();
		if ( !vrState ) {
			console.log('no vr state');
			return;
		}
		// Applies head rotation from sensors data.
		if ( obj ) {
			console.log('updating quat');
			// camera.position.fromArray( vrState.hmd.position );
			obj.quaternion.fromArray( vrState.hmd.rotation );
		} else {
			console.log('no obj');
		}
	};

	this.getVRState = function() {
		var vrInput = this._vrInput;
		var orientation, position;
		var inputState, vrState;
		if ( !vrInput ) {
			return null;
		}
		inputState = vrInput.getState();
		orientation	= inputState.orientation;
		position = inputState.position;
		vrState = {
			hmd : {
				rotation : [
					orientation.x,
					orientation.y,
					orientation.z,
					orientation.w
				],
				position: [
					position.x,
					position.y,
					position.z
				]
			}
		};
		return vrState;
	};

};
YUI.add('y3d-geometry-plane', function (Y, NAME) {

Y.Plane = Y.Base.create('plane', Y.Geometry, [], {
}, {
	ATTRS: {
		indices: {
			value: [
				0, 1, 2,
				0, 2, 3
			]
		},

		normals: {
			value: [
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1
			]
		},

		textureCoordinates: {
			value: [
				0, 0,
				1, 0,
				1, 1,
				0, 1
			]
		},

		vertices: {
			value: [
				-1, -1,  0,
				1,  -1,  0,
				1,   1,  0,
				-1,  1,  0
			]
		}
	}
});

}, '0.1', {"requires": ["y3d-geometry-base"]});

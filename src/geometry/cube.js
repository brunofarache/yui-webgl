YUI.add('webgl-cube', function(Y) {
	Y.Cube = Y.Base.create('cube', Y.Geometry, [], {
	}, {
		ATTRS: {
			indices: {
				value: [
					0, 1, 2,      0, 2, 3,    // Front face
					4, 5, 6,      4, 6, 7,    // Back face
					8, 9, 10,     8, 10, 11,  // Top face
					12, 13, 14,   12, 14, 15, // Bottom face
					16, 17, 18,   16, 18, 19, // Right face
					20, 21, 22,   20, 22, 23  // Left face
				]
			},

			normals: {
				value: [
					// Front face
					0,  0,  1,
					0,  0,  1,
					0,  0,  1,
					0,  0,  1,

					// Back face
					0,  0, -1,
					0,  0, -1,
					0,  0, -1,
					0,  0, -1,

					// Top face
					0,  1,  0,
					0,  1,  0,
					0,  1,  0,
					0,  1,  0,

					// Bottom face
					0, -1,  0,
					0, -1,  0,
					0, -1,  0,
					0, -1,  0,

					// Right face
					1,  0,  0,
					1,  0,  0,
					1,  0,  0,
					1,  0,  0,

					// Left face
					-1,  0,  0,
					-1,  0,  0,
					-1,  0,  0,
					-1,  0,  0
				]
			},

			textureCoordinates: {
				value: [
					// Front face
					0, 0,
					1, 0,
					1, 1,
					0, 1,

					// Back face
					1, 0,
					1, 1,
					0, 1,
					0, 0,

					// Top face
					0, 1,
					0, 0,
					1, 0,
					1, 1,

					// Bottom face
					1, 1,
					0, 1,
					0, 0,
					1, 0,

					// Right face
					1, 0,
					1, 1,
					0, 1,
					0, 0,

					// Left face
					0, 0,
					1, 0,
					1, 1,
					0, 1
				]
			},

			vertices: {
				value: [
					// Front face
					-1, -1,  1,
					 1, -1,  1,
					 1,  1,  1,
					-1,  1,  1,

					// Back face
					-1, -1, -1,
					-1,  1, -1,
					 1,  1, -1,
					 1, -1, -1,

					// Top face
					-1,  1, -1,
					-1,  1,  1,
					 1,  1,  1,
					 1,  1, -1,

					// Bottom face
					-1, -1, -1,
					 1, -1, -1,
					 1, -1,  1,
					-1, -1,  1,

					// Right face
					 1, -1, -1,
					 1,  1, -1,
					 1,  1,  1,
					 1, -1,  1,

					// Left face
					-1, -1, -1,
					-1, -1,  1,
					-1,  1,  1,
					-1,  1, -1
				]
			}
		}
	});
}, '1.0', {requires: ['webgl-geometry']});
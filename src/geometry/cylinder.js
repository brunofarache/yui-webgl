YUI.add('webgl-cylinder', function(Y) {
	var Lang = Y.Lang;

	Y.Cylinder = Y.Base.create('cylinder', Y.Geometry, [], {
		initializer: function() {
			var instance = this,
				height = instance.get('height'),
				heightBands = instance.get('heightBands'),
				indices = instance.get('indices'),
				normals = instance.get('normals'),
				textureCoordinates = instance.get('textureCoordinates'),
				radius = instance.get('radius'),
				vertices = instance.get('vertices'),
				widthBands = instance.get('widthBands');
			
			var circle = [];

			for (var i = 0; i <= widthBands; i++) {
				var theta = i * 2 * Math.PI / widthBands,
					x = Math.cos(theta),
					z = Math.sin(theta);

				circle.push(x, z);
			}

			for (var i = 0; i <= heightBands; i++) {
				var y = (height / 2) + (height / heightBands) * i;

				for (var j = 0; j < circle.length; j = j + 2) {
					var x = circle[j],
						z = circle[j + 1];

					vertices.push(radius * x);
					vertices.push(y);
					vertices.push(radius * z);

					normals.push(x);
					normals.push(0);
					normals.push(z);

					var u = 1 - (j / widthBands),
						v = 1 - (i / heightBands);

					textureCoordinates.push(u);
					textureCoordinates.push(v);
				}
			}

			for (var i = 0; i < heightBands; i++) {
				for (var j = 0; j < widthBands; j++) {
					var first = (i * (widthBands + 1)) + j,
						second = first + widthBands + 1;

					indices.push(first);
					indices.push(second);
					indices.push(first + 1);

					indices.push(second);
					indices.push(second + 1);
					indices.push(first + 1);
				}
			}
		}
	}, {
		ATTRS: {
			height: {
				value: 4,
				validator: Lang.isNumber
			},

			heightBands: {
				value: 32,
				validator: Lang.isNumber
			},

			radius: {
				value: 1,
				validator: Lang.isNumber
			},

			widthBands: {
				value: 32,
				validator: Lang.isNumber
			}
		}
	});
}, '1.0', {requires: ['webgl-geometry']});
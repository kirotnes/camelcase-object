import test from 'ava';
import fn from './';

const data = {
  "id": 79,
  "children": [
    {
      "id": 187,
      "geo_targets": [
        {
          "geo_json": {
            "features": [
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    153.0557235,
                    -27.5752834
                  ]
                },
                "properties": {
                  "radius": 97
                }
              }
            ],
            "type": "FeatureCollection"
          },
          "exclude": false
        }
      ],
			"string_arr": ["String1", "String2"],
			"array_of_arrays": [
				["one", "two", "three", null]
			]
    }
  ]
}

test('nested-array of strings', t => {
	const result = fn(data)
	const originalArray = data.children[0].string_arr
	const resultArray = result.children[0].stringArr
	t.deepEqual(originalArray, resultArray);
});

test('nested-array of array of strings', t => {
	const result = fn(data)
	const originalArray = data.children[0].array_of_arrays
	const resultArray = result.children[0].arrayOfArrays
	t.deepEqual(originalArray, resultArray);
});

test('nested-array of numbers', t => {
	const result = fn(data)
	const originalArray = data.children[0].geo_targets[0].geo_json.features[0].geometry.coordinates
	const resultArray = result.children[0].geoTargets[0].geoJson.features[0].geometry.coordinates
	t.deepEqual(originalArray, resultArray);
});

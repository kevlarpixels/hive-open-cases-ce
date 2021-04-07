
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "CEopenCases_1": {
            "type": "geojson",
            "data": json_CEopenCases_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_CEopenCases_1_0",
            "type": "circle",
            "source": "CEopenCases_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Violation(s)'], 'Building Code Violations'], ['/', 10.714285714285714, 2], ['==', ['get', 'Violation(s)'], 'Building Maintenance'], ['/', 10.714285714285714, 2], ['==', ['get', 'Violation(s)'], 'Garage Conversion'], ['/', 10.714285714285714, 2], ['==', ['get', 'Violation(s)'], 'Illegal Units'], ['/', 10.714285714285714, 2], ['==', ['get', 'Violation(s)'], 'Inoperable Vehicles'], ['/', 10.714285714285714, 2], ['==', ['get', 'Violation(s)'], 'Property Maintenance'], ['/', 10.714285714285714, 2], ['/', 10.714285714285714, 2]], 'circle-color': ['case', ['==', ['get', 'Violation(s)'], 'Building Code Violations'], '#ea2380', ['==', ['get', 'Violation(s)'], 'Building Maintenance'], '#8698df', ['==', ['get', 'Violation(s)'], 'Garage Conversion'], '#4defe7', ['==', ['get', 'Violation(s)'], 'Illegal Units'], '#bde43d', ['==', ['get', 'Violation(s)'], 'Inoperable Vehicles'], '#47d956', ['==', ['get', 'Violation(s)'], 'Property Maintenance'], '#d1926a', '#9c29d6'], 'circle-opacity': ['case', ['==', ['get', 'Violation(s)'], 'Building Code Violations'], 1.0, ['==', ['get', 'Violation(s)'], 'Building Maintenance'], 1.0, ['==', ['get', 'Violation(s)'], 'Garage Conversion'], 1.0, ['==', ['get', 'Violation(s)'], 'Illegal Units'], 1.0, ['==', ['get', 'Violation(s)'], 'Inoperable Vehicles'], 1.0, ['==', ['get', 'Violation(s)'], 'Property Maintenance'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'Violation(s)'], 'Building Code Violations'], 1, ['==', ['get', 'Violation(s)'], 'Building Maintenance'], 1, ['==', ['get', 'Violation(s)'], 'Garage Conversion'], 1, ['==', ['get', 'Violation(s)'], 'Illegal Units'], 1, ['==', ['get', 'Violation(s)'], 'Inoperable Vehicles'], 1, ['==', ['get', 'Violation(s)'], 'Property Maintenance'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'Violation(s)'], 'Building Code Violations'], '#232323', ['==', ['get', 'Violation(s)'], 'Building Maintenance'], '#232323', ['==', ['get', 'Violation(s)'], 'Garage Conversion'], '#232323', ['==', ['get', 'Violation(s)'], 'Illegal Units'], '#232323', ['==', ['get', 'Violation(s)'], 'Inoperable Vehicles'], '#232323', ['==', ['get', 'Violation(s)'], 'Property Maintenance'], '#232323', '#232323']}
        }
],
}
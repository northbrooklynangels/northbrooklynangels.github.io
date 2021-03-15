import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyAZMLzHgOMLubSVx_IcPZy4ioquS0Xm_J8",
    version: "weekly"
});

let map: google.maps.Map;
let geocode: (request: google.maps.GeocoderRequest) => Promise<google.maps.GeocoderResult[]>;
const markers: google.maps.Marker[] = [];
const infoWindows: google.maps.InfoWindow[] = [];

loader.load().then(async () => {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 13,
        center: new google.maps.LatLng(40.7224852, -73.9459952)
    });
    
    geocode = (request: google.maps.GeocoderRequest): Promise<google.maps.GeocoderResult[]> => {
        return new Promise((resolve, reject) => {
            const geocoder = new google.maps.Geocoder();
    
            geocoder.geocode(request, (results, status) => {
                if (status === "OK") {
                    resolve(results);
                } else {
                    reject(status);
                }
            })
        })
    };

    // Dispatch that the map option is ready to go, so the marker scripts can send their information as needed

    let mapReadyEvent = new CustomEvent("mapReady");

    document.dispatchEvent(mapReadyEvent);
});

document.addEventListener("markerAdd", async (e: CustomEvent<{
    lat: number, 
    long: number, 
    address: string,
    title: string,
    description: string
}>) => {
    // Check to see whether we need to do a geocode 
    let location: google.maps.LatLng;
    if (e.detail.address) {
        location = (await geocode({address: e.detail.address}))[0].geometry.location;
        console.log(e.detail.title, location.lat(), location.lng());
    } else if (e.detail.lat && e.detail.long) {
        location = new google.maps.LatLng({lat: e.detail.lat, lng: e.detail.long});
    } else {
        throw new Error("No location information supplied!");
    }

    const marker = new google.maps.Marker({
        position: location,
        map,
        title: e.detail.title !== "" ? e.detail.title : undefined
    });

    let infoWindow: google.maps.InfoWindow;
    if (e.detail.description !== "") {
        infoWindow = new google.maps.InfoWindow({
            content: `<h4>${e.detail.title}</h4><p>${e.detail.description}<p>`
        });
    } else {
        infoWindow = new google.maps.InfoWindow({
            content: `<h4>${e.detail.title}</h4><p>${e.detail.lat} ${e.detail.long}</p>`
        });
    }
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    markers.push();
    infoWindows.push();
});
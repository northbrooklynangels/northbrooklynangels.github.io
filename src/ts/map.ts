import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyAZMLzHgOMLubSVx_IcPZy4ioquS0Xm_J8",
    version: "weekly"
});

// Markers are declared in the page as <template class="map-marker"> elements (see the map-marker shortcode)
async function resolveLocation(template: HTMLTemplateElement): Promise<google.maps.LatLng> {
    const { lat, long, address } = template.dataset;

    if (lat && long) {
        return new google.maps.LatLng(Number(lat), Number(long));
    }
    if (address) {
        const { results } = await new google.maps.Geocoder().geocode({ address });
        return results[0].geometry.location;
    }
    throw new Error(`No location information supplied for marker "${template.dataset.title}"`);
}

function buildInfoContent(template: HTMLTemplateElement, position: google.maps.LatLng): HTMLElement {
    const content = document.createElement("div");

    const heading = document.createElement("h4");
    heading.textContent = template.dataset.title ?? "";
    content.append(heading);

    if (template.content.textContent?.trim()) {
        content.append(template.content.cloneNode(true));
    } else {
        const coords = document.createElement("p");
        coords.textContent = `${position.lat()} ${position.lng()}`;
        content.append(coords);
    }

    return content;
}

async function init(): Promise<void> {
    await loader.load();

    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 13,
        center: new google.maps.LatLng(40.7224852, -73.9459952)
    });

    // One shared window, so opening a marker closes the previous one
    const infoWindow = new google.maps.InfoWindow();

    const templates = document.querySelectorAll<HTMLTemplateElement>("template.map-marker");
    for (const template of templates) {
        const position = await resolveLocation(template);

        const marker = new google.maps.Marker({
            position,
            map,
            title: template.dataset.title || undefined
        });

        marker.addListener("click", () => {
            infoWindow.setContent(buildInfoContent(template, position));
            infoWindow.open(map, marker);
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

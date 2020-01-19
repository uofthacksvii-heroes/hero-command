export const aeds = [
	{
		status: "aed",
		name: "Streets to Homes",
		address: "129 Peter St, Toronto, Ontario  M5V2H3",
		coordinates: { lat: 43.6487485, lng: -79.3932369 }
	},
	{
		status: "aed",
		name: "Metro Hall",
		address: "55 John St, Toronto, Ontario  M5V3C6",
		coordinates: { lat: 43.6461039, lng: -79.3886814 }
	},
	{
		status: "aed",
		name: "Fort York",
		address: "100 Garrison Rd, Toronto, Ontario  M5V3K9",
		coordinates: { lat: 43.6386767, lng: -79.4042028 }
	},
	{
		status: "aed",
		name: "Harbourfront CC",
		address: "627 Queens Quay, Toronto, Ontario  M5V3G3",
		coordinates: { lat: 43.6358274, lng: -79.3970794 }
	},

	{
		status: "aed",
		name: "Stanley ODP",
		address: "845 King St, Toronto, Ontario  M5V1G7",
		coordinates: { lat: 43.6423565, lng: -79.4092832 }
	}
];

export const responders = [
	{
		status: "responder",
		name: "Andrea Thniah",
		coordinates: { lat: 43.6485153, lng: -79.3938774 }
	},
	{
		status: "responder",
		name: "Tim Chan",
		coordinates: { lat: 43.6456224, lng: -79.390698 }
	},
	{
		status: "responder",
		name: "Exode Tzu",
		coordinates: { lat: 43.6489928, lng: -79.3947052 }
	}
];

export const cases = [
	{
		id: 0,
		percentage: 45,
		timestamp: new Date(),
		diagnosis: "Cardiac Arrest",
		coordinates: { lat: 43.6458709, lng: -79.3898179 },
		address: "8 Mercer St, Toronto, ON M5V 0C4",
		responders: [responders[1].coordinates],
		aed: [aeds[1]]
	},
	{
		id: 1,
		percentage: 56,
		timestamp: new Date(),
		diagnosis: "Suspected Cardiac Arrest",
		address: "375 Queen St W, Toronto, ON M5V 2A5",
		coordinates: { lat: 43.6491328, lng: -79.3938077 },
		responders: [responders[0].coordinates, responders[2].coordinates],
		aed: [aeds[0]]
	}
];

export const config = {
	zoom: 17,
	center: { lat: 43.6477217, lng: -79.3923536 },
	circleOptions: {
		radius: 120,
		fillColor: "#AFD0D6",
		strokeOpacity: 0.0
	},
	incidences: [cases[0].coordinates, cases[1].coordinates]
};

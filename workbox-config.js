module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,txt,pdf,py,xlsx,csv,mp4,js,xml,png,lnk,css,json,htm,hml,thmx,PNG}'
	],
	swDest: 'sw-workbox.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
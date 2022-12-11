function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function openWindow() {
	var btnHistory = null;

	do {
		await delay(2000);

		btnHistory = document.querySelector("#root > div.s1o3yrjt.page-max-width-wrap > div.game-data > div.left-data > div.latest > div > div.tabs-scroll > div > button:nth-child(2)")
	} while (!btnHistory);

	btnHistory.click();
	
	var newWindow = await window.open('https://bcgraph.netlify.app','','fullscreen=yes');
	if (!newWindow) {
		window.location.reload();
	} else {
		var prevHash = '';
		setInterval(() => {
			var latestHash = document.querySelector("#root > div.s1o3yrjt.page-max-width-wrap > div.game-data > div.left-data > div.latest > div > div.tabs-view > div > div.h4j5hip > table > tbody > tr:nth-child(1) > td:nth-child(3) > div > input[type=text]").value;
				if (latestHash != prevHash) {
						prevHash = latestHash;
						newWindow.postMessage({ hash: latestHash }, '*');
				}
		}, 2000);
	}
}

setTimeout(() => {
	openWindow();
}, 2000);

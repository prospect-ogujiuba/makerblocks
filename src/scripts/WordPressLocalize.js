class WordPressLocalize {
	constructor() {
		this.init();
	}

	init() {
		console.log("Localized");
		this.logData();
	}

	logData() {
		// Using arrow function to retain the correct `this` context
		document.addEventListener("DOMContentLoaded", () => {
			if (typeof siteData !== "undefined") {
				console.log(siteData);

				// Example usage:
				console.log("Site Name:", siteData.siteName);
				console.log("Site Description:", siteData.siteDescription);
				console.log("Site URL:", siteData.siteUrl);
				console.log("Admin Email:", siteData.adminEmail);
				console.log("Active Theme Name:", siteData.themeName);
				console.log("Theme Version:", siteData.themeVersion);
				console.log("Theme URL:", siteData.themeUrl);
				console.log("Theme Author:", siteData.themeAuthor);
				console.log("Current User ID:", siteData.currentUserId);
				console.log("Current User Name:", siteData.currentUserName);
				console.log("Current User Email:", siteData.currentUserEmail);
				console.log("Current User Roles:", siteData.currentUserRoles);
				console.log("Home URL:", siteData.homeUrl);
				console.log("Site URL:", siteData.siteUrl);
				console.log("Admin URL:", siteData.adminUrl);
				console.log("AJAX URL:", siteData.ajaxUrl);
				console.log("REST API URL:", siteData.restUrl);
				console.log("Nonce:", siteData.nonce);

				if (siteData.postId) {
					console.log("Post ID:", siteData.postId);
					console.log("Post Title:", siteData.postTitle);
					console.log("Post URL:", siteData.postUrl);
				}
			} else {
				console.error("siteData is not defined.");
			}
		});
	}
}

export default WordPressLocalize;
